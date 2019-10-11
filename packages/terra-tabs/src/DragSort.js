export const isArrayEqual = (lhsArray, rhsArray) => {
    let lhsIndex = lhsArray.length;
    const rhsIndex = rhsArray.length;
    if (lhsIndex !== rhsIndex) {
        return false;
    }
    // eslint-disable-next-line no-plusplus
    for (lhsIndex; lhsIndex--;) {
        if (lhsArray[lhsIndex] !== rhsArray[lhsIndex]) {
            return false;
        }
    }
    return true;
};
/**
 * Takes the list of items and builds an array of item ids.
 * @param {Array<*>} items - The array of items.
 * @param {Function} idGen - The id generator function.
 * @returns {Array<*>} The array of generated ids.
 */
const buildItemOrder = (items, idGen) =>
    items.map((item) => idGen(item));

/**
 * Determines if the event is considered over the next item. If horizontal,
 * checks if the clientX is past the midpoint. Otherwise (vertical), checks if
 * the clientY is past the midpoint.
 * @param {string} orientation - The orientation of the drag sort. Can either
 * be "horizontal" or "vertical".
 * @param {Event} event - The dragover event.
 * @param {Object} overRect - The bounding client rect for the element that was
 * dragged over.
 * @returns {boolean} True if the dragover event is considered past the midpoint
 * of the dragged over item, otherwise false.
 */
const isOverNext = (orientation, event, overRect) =>
    orientation === "horizontal" ?
        (event.clientX >= (overRect.left + (overRect.width / 2))) :
        (event.clientY >= (overRect.top + (overRect.height / 2)));

/**
 * Calculates the drag "to" index.
 * @param {string} orientation - The orientation the items are draggable. This
 * expects either "horizontal" or "vertical".
 * @param {Event} event - The dragover event.
 * @param {Object} overRect - The bounding client rect for the element that
 * was dragged over.
 * @param {number} from - The index being dragged from.
 * @param {number} to - The index being dragged to.
 * @returns {number} An adjusted drag "to" index.
 */
const getDragTo = (orientation, event, overRect, from, to) => {
    if (isOverNext(orientation, event, overRect)) {
        to++;
    }
    if (from < to) {
        to--;
    }
    return to;
};

const isDefined = (prop) => typeof prop !== undefined;

/**
 * The Sortable behavior class. This class wraps functionality that is common
 * when implementing draggable sorting behavior in a list of items. The
 * requirements when using this class are as follows.
 * 1). The sortable items are in a single-level list (no nesting).
 * 2). The items are oriented either vertically or horizontally and are uniform.
 * 3). The items are contained in an array.
 * 4). The items have some means of identification.
 * @class Sortable
 */
export default class DragSort {
    /**
     * Constructor. Takes a list of items and an orientation.
     * @param {Array<*>} items - An array of items which are to be sorted.
     * @param {String} orientation - Either "vertical" or "horizontal".
     */
    constructor(items, orientation) {
        this._orientation = orientation;
        this._items = items;
        this._dragged = undefined;
        this._dragging = undefined;
        this._uniqueIdGenerator = (item) => item.id ? item.id : "";

        // Ordering state
        this._lastOrder = [];
        this._orderChanged = false;
    }

    /**
     * Sets a function that is responsible for generating a unique id for
     * items that are provided to the DragSort behavior.
     * @param {Function} generatorFunction - A function that generates a unique
     * id for items.
     * @returns {DragSort} Current instance.
     */
    setUniqueIdGenerator(generatorFunction) {
        this._uniqueIdGenerator = generatorFunction;
        return this;
    }

    /**
     * Retrieves the order of the items.
     * @returns {Array<*>} The order of items, using the ids.
     */
    getOrder() {
        return this._lastOrder;
    }

    /**
     * Returns a boolean indicating if the order changed between the call to
     * dragStart and dragEnd.
     * @returns {Boolean} True if the order changed between the call to dragStart
     * and dragEnd.
     */
    didChange() {
        return this._orderChanged;
    }

    /**
     * Returns a boolean indicating if the calling instance of DragSort is
     * currently dragging. This can help prevent false-positives in disjoint
     * sortable lists.
     * @returns {Boolean} True if an item from the calling instance has started
     * dragging or is currently being dragged.
     */
    isDragging() {
        return isDefined(this._dragged) || isDefined(this._dragging);
    }

    /**
     * Sets the list of items that are to be sortable.
     * @param {Array<*>} items - The list of items that are to be sortable.
     * @returns {DragSort} Current instance.
     */
    setItems(items) {
        this._items = items;
        return this;
    }

    /**
     * Takes the index of the item in the list of sortable elements as well
     * as the dragstart event that was triggered. It keeps track of the index
     * of the item that triggered the drag and keeps track of the order of the
     * items.
     * @param {Number} index - The index of the item in the list of sortable
     * elements.
     * @param {Event} event - The dragstart event.
     * @returns {undefined} Returns nothing.
     */
    dragStart(index, event) {
        event.stopPropagation();
        this._dragged = index;
        this._lastOrder = buildItemOrder(this._items, this._uniqueIdGenerator);
        this._orderChanged = false;
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text", "");
    }

    /**
     * Takes the index of the item in the list of sortable elements as well
     * as the dragover event that was triggered. The "from" index is determined.
     * Then the "to" index is calculated. If the "from" and "to" indices are the
     * same, nothing happens. Otherwise, the item at the "from" index is moved
     * to the "to" index.
     * @param {Number} index - The index of the item in the list of sortable
     * elements.
     * @param {Event} event - The dragover event.
     * @returns {boolean} True if the items were sorted, otherwise false.
     */
    dragOver(index, event) {
        event.preventDefault();
        // Prevent the possibility of invalid indices.
        if (index < 0) {
            return false;
        }
        const over = event.currentTarget;
        const dragging = this._dragging;
        const from = isFinite(dragging) ? dragging : this._dragged;
        let to = index;
        if (from === to) {
            return false;
        }
        to = getDragTo(this._orientation, event, over.getBoundingClientRect(), from, to);
        // Again, abort if the update is unnecessary
        if (from === to) {
            return false;
        }
        this._items.splice(to, 0, this._items.splice(from, 1)[0]);
        this._dragging = to;
        return true;
    }

    /**
     * Handles the dragend event. If the order of the items changed between the
     * call to this function and the last call to dragStart, the orderChanged
     * flag is set to true.
     * @returns {undefined} Returns nothing.
     */
    dragEnd() {
        
        // Reset the dragging state
        this._dragged = undefined;
        this._dragging = undefined;

        // The order of the items has changed
        const newOrder = buildItemOrder(this._items, this._uniqueIdGenerator);
        if (!isArrayEqual(this._lastOrder, newOrder)) {
            this._orderChanged = true;
            this._lastOrder = newOrder;
        }
    }
}
