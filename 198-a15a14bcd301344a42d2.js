(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1087:function(e){e.exports=JSON.parse('{"name":"terra-application-layout","main":"lib/ApplicationLayout.js","version":"5.15.0","description":"The Terra Application Layout is a responsive, themeable layout for building applications.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","Framework","terra-application-layout","ApplicationLayout","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0","terra-disclosure-manager":"^4.9.0"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","react-router-dom":"^5.0.0","terra-application-header-layout":"^3.19.0","terra-application-links":"^6.14.0","terra-application-menu-layout":"^3.15.0","terra-application-name":"^3.20.0","terra-application-utility":"^2.24.0","terra-breakpoints":"^2.0.0","terra-icon":"^3.1.0","terra-modal-manager":"^6.14.0","terra-navigation-layout":"^5.14.0","terra-navigation-side-menu":"^2.21.0","terra-popup":"^6.14.0"},"devDependencies":{"terra-action-header":"^2.0.0","terra-avatar":"^2.0.0","terra-button":"^3.3.0","terra-content-container":"^3.0.0","terra-doc-template":"^2.2.0","terra-image":"^3.0.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1713:function(e,n,t){"use strict";t.r(n),n.default="# Terra Application Layout\n\nThe Terra Application Layout is a responsive, themeable layout for building applications.\n\nThe Terra Application Layout provides:\n- A themeable, responsive application header, capable of rendering application-specific branding (provided by `terra-application-name`), tabular navigation (provided by `terra-application-links`), and user-centric utility controls (provided by `terra-utility`)\n- Responsive menu and content areas (provided by `terra-layout`)\n- `react-router`-based navigation and configuration (provided by `terra-navigation-layout`)\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-application-layout`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n| terra-disclosure-manager | ^4.9.0 |\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n"},1714:function(e,n,t){"use strict";t.r(n),n.default="## Prerequisites\n\n- Like all Terra components, the ApplicationLayout requires the presence of a `Base` component (provided by `terra-base`) in its parent hierarchy.\n- Additionally, the ApplicationLayout requires the presence of any `Router` component (provided by `react-router-dom`) in its parent hierarchy.\n\n```jsx\nimport React from 'react';\nimport { HashRouter } from 'react-router-dom'; // BrowserRouter (with additional server configuration) or MemoryRouter could also be used\nimport Base from 'terra-base';\nimport ApplicationLayout from 'terra-application-layout';\n\nconst MyApp = () => (\n  <HashRouter>\n    <Base locale=\"en-US\">\n      <ApplicationLayout\n        nameConfig={nameConfig}\n        utilityConfig={utilityConfig}\n        routingConfig={routingConfig}\n        navigationItems={navigationItems}\n        extensions={<ApplicationExtensions />}\n        indexPath={indexPath}\n      />\n    </Base>\n  </HashRouter>\n);\n```\n\n## Props\n\n### `extensions`\n#### Is Required: `false`\n\nThe `extensions` prop allows consumers to render an element within the ApplicationLayout's extensions region. The `extensions` content will be rendered in various ways depending on the current breakpoint. The `extensions` element will receive `app` and `layoutConfig` props from the ApplicationLayout, allowing it to interact with and respond to changes within the ApplicationLayout.\n\n```jsx\nimport ApplicationLayout, { Utils } from 'terra-application-layout';\n\nconst MyExtensions = ({ app, layoutConfig }) => {\n  if (Utils.helpers.isSizeCompact(layoutConfig.size)) {\n    return (\n      <div>Extensions for ApplicationLayout menu!</div>\n    );\n  } else {\n    return (\n      <div>Extensions for ApplicationLayout header!</div>\n    );\n  }\n};\n```\n\n### `indexPath`\n#### Is Required: `true`\n\nThe `indexPath` prop allows consumers to set the default path of the ApplicationLayout. The ApplicationLayout will redirect to this path should users of the consuming application attempt to route to a component not detailed in the `routingConfig` prop. Accordingly, the `indexPath` value must have an associated entry within the `routingConfig` specification.\n\n### `nameConfig`\n#### Is Required: `false`\n\nThe `nameConfig` prop allows consuming applications to add their own branding to the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint.\n\n|Key Name|Type|Is Required|Description|\n|---|---|---|---|\n|`accessory`|Element|optional|A React element that will be presented beside the title. This is typically some sort of icon or visual branding.\n|`title`|String|optional|The title of the application. This text will be styled by the ApplicationLayout.|\n\n```jsx\nconst myNameConfig = {\n  accessory: <MyApplicationLogo />,\n  title: 'My Application',\n}\n```\n\n### `navigationItems`\n#### Is Required: `false`\n\nThe `navigationItems` prop allows consumers to render high-level, primary navigation controls directly within the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint. If `navigationItems` are omitted, no primary navigation controls will be rendered.\n\nEach navigation item provided must be associated to a path that is present within the `routingConfig` specification. The navigation item, as rendered by the ApplicationLayout, will route to that path upon selection.\n\nThe value provided for `navigationItems` should be an array of objects with the following API:\n\n|Key Name|Type|Is Required|Description|\n|---|---|---|---|\n|`text`|String|**required**|A string rendered within the navigation item control.|\n|`path`|Element|**required**|A string path to route to upon navigation item selection. This path should be present within the `routingConfig` as well.|\n\n```jsx\nconst navigationItems = [{\n  path: '/page_1',\n  text: 'Page 1',\n}, {\n  path: '/page_2',\n  text: 'Page 2',\n}];\n```\n\n### `routingConfig`\n#### Is Required: `true`\n\nThe `routingConfig` prop allows consuming applications to render components within the ApplicationLayout's `content` and `menu` regions based upon the router location.\n\nThe ApplicationLayout directly implements the `NavigationLayout` from `terra-navigation-layout`. However, while the `NavigationLayout` allows for the customization of the `header` region of the layout, the `ApplicationLayout` does not. Any `header` entries provided with the `routingConfig` prop will be ignored. Please review the `NavigationLayout` documentation for more information regarding its usage.\n\n> Note: Usage of the path `'/'` is restricted for `menu` components. The ApplicationLayout will dynamically inject configuration for the `'/'` path when necessary to properly render navigationItems at `compact` breakpoints.\n\n```jsx\nconst routingConfig = {\n  /**\n   * Components defined under `content` will render within the ApplicationLayout's body.\n   */\n  content: {\n    /**\n     * Each entry must be keyed; typically, this key matches the path for the component.\n     */\n    '/page_1' : {\n      /**\n       * The `path` value will be validated against the router location with each location change. When the location\n       * matches this path, the component specified by the sibling `component` value will be rendered. If more than\n       * one component matches the current location, only the component with the closest match will be rendered.\n       */\n      path: '/page_1',\n      /**\n       * The `component` value specifies what component will be rendered. The value is an Object with support for the\n       * following keys: default, tiny, small, medium, large, and huge. These keys correspond to the responsive breakpoint\n       * of the ApplicationLayout. When the ApplicationLayout is small, the component under the small key will be rendered.\n       * When the application is large, the component under the large key will be rendered, and so on.\n       *\n       * The default key is different in that its component will render for all breakpoints unless that specific breakpoint is\n       * also defined. For example, if a component is defined for default and small, and the current responsive breakpoint is small,\n       * then the small component will be rendered. However, if the responsive breakpoint were to be huge, then the default component\n       * would be rendered (rather than no component at all).\n       */\n      component: {\n        default: {\n          /**\n           * The component specification for a given breakpoint must include a componentClass value. This is a React component\n           * function or class. It should not be an instantiated React element. For example, given a component named Page1Content,\n           * the componentClass value should be Page1Content, not `<Page1Content />`.\n           */\n          componentClass: Page1Content,\n          /**\n           * Props can also be defined for the component. These will be applied when the React element is created by the\n           * ApplicationLayout. If no props are desired, the `props` key can be omitted.\n           */\n          props: {\n            propFromConfig: 'Value from config',\n          }\n        },\n        small: {\n          /**\n           * The same component can be defined for multiple breakpoints. Here, the prop values just are changing for this specific\n           * size.\n           */\n          componentClass: Page1Content,\n          propFromConfig: 'My value is different only when small',\n        }\n        large: {\n          /**\n           * Or, a different component can be loaded altogether.\n           */\n          componentClass: LargePage1Content,\n        }\n      },\n    },\n    '/page_2' : {\n      path: '/page_2',\n      component: {\n        default: {\n          componentClass: Page2Content,\n        },\n      },\n    },\n  },\n  /**\n   * Components defined under `menu` will render within the ApplicationLayout's menu sidebar. All other aspects of the API\n   * match that of the content region described above.\n   *\n   * A content entry does not need to have an associated menu entry. In this example, because there is no menu defined for\n   * the path '/page_2', the ApplicationLayout will hide the menu sidebar when the '/page_2' content is rendered.\n   */\n  menu: {\n    'Page 1' : {\n      path: '/page_1',\n      component: {\n        default: {\n          componentClass: Page1Menu,\n        },\n      },\n    },\n  },\n};\n```\n\n### `utilityConfig`\n#### Is Required: `false`\n\nThe `utilityConfig` prop allows consuming applications to present an application-level menu directly from the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint.\n\nThe API for the `utilityConfig` matches that of the `ApplicationHeaderUtility` and `ApplicationMenuUtility` components from `terra-application-utility`. Please see their respective documentation for more information regarding their full capabilities.\n\n|Key Name|Type|Is Required|Description|\n|---|---|---|---|\n|`title`|String|optional|A string rendered within the utility menu's presentation target.|\n|`accessory`|Element|optional|A React element rendered next to the title.|\n|`menuItems`|Array|**required**|An array of objects specifying the utility menu options to present.|\n|`initialSelectedKey`|String|**required**|The string key of the initial menu item to present.|\n|`onChange`|Function|**required**|A function that will be called upon selection of a terminal utility item.|\n\n```jsx\nimport Avatar from 'terra-avatar';\nimport ApplicationLayout, { Utils } from 'terra-application-layout';\n\nconst myUtilityConfig = {\n  title: 'Doe, John',\n  accessory: <Avatar variant=\"user\" ariaLabel=\"Doe, John\" />,\n  menuItems: [{\n    key: 'menu',\n    title: 'Menu',\n    childKeys: ['item-1', 'item-2', 'item-3', 'item-4'],\n  }, {\n    key: 'item-1',\n    title: 'Item 1',\n  }, {\n    key: 'item-2',\n    title: 'Toggle Item - Checked',\n    isSelectable: true,\n    isSelected: true,\n  },  {\n    key: 'item-3',\n    title: 'Toggle Item - Not Checked',\n    isSelectable: true,\n    isSelected: false,\n  }, {\n    key: 'item-4',\n    contentLocation: Utils.utilityHelpers.locations.FOOTER,\n    title: 'Footer Item',\n  }],\n  initialSelectedKey: 'menu',\n  onChange: (event, itemData, disclose) => {\n    /**\n     * This function will be called when items are selected within the utility menu.\n     * The disclose parameter is provided for convenience, but any presentation method\n     * could be used to handle that menu content selection.\n     */\n  },\n};\n```\n\n## Responsive Design\n\nThe ApplicationLayout has two rendering modes: `standard` and `compact`.\n  - The `standard` rendering occurs at `medium`, `large`, and `huge` breakpoints.\n  - The `compact` rendering occurs at `tiny` and `small` breakpoints.\n\n|Prop|`standard` Rendering|`compact` Rendering|\n|---|---|---|\n|`nameConfig`|Content is rendered within ApplicationLayout's header.|Same as `standard`.|\n|`utilityConfig`|Content is rendered within the ApplicationLayout's header. The utility menu is presented using a popup (as provided by `terra-popup`).|Content is rendered within the ApplicationMenuWrapper that wraps all menu content at `compact` breakpoints. The utility menu is presented modally (using the ApplicationLayout's included ModalManager).|\n|`navigationItems`|Content is rendered within the ApplicationLayout's header as tabs (as provided by `terra-application-links`).|Content is rendered within a custom menu generated by the ApplicationLayout. This menu is injected into the `routingConfig` for the `'/'` path so that it will preceed any other defined routes. Other menu components are able to navigate to the default navigation menu by calling their `routingStackDelegate`'s `showParent` function.|\n\n## Menu/Content Component Configuration\n\nThe `routingConfig` prop specifies which components will be rendered in the ApplicationLayout's `content` and `menu` regions. These components receive a set of props from the ApplicationLayout that they must utilize; otherwise, these components can be completely defined by the consuming application.\n\n> Note: Because the `ApplicationLayout` utilizes client-side routing provided by `react-router-dom`, the usage of `<a href=>` links and page anchors is restricted. Usage of links and page anchors may negatively impact navigation within an application. `<Link />` components provided by `react-router-dom` or custom events can and should be used instead.\n\nThe components rendered in these regions are guaranteed to receive the following props from the ApplicationLayout:\n\n|Prop Name|Description|\n|---|---|\n|`layoutConfig`|The `layoutConfig` contains properties describing the ApplicationLayout's state and functions that allow for the manipulation of that state.|\n|`routingStackDelegate`|The `routingStackDelegate` contains APIs that allow for virtual navigation within a set of matched component paths.|\n\nEach component specified in the `routingConfig` needs to be able to accept these props and render appropriately. If a component does not appropriately handle them (i.e. it renders unknown props, like `terra-button` and many other generic Terra components), warnings and/or errors may be thrown.\n\n## `RoutingMenu` - A default menu implementation\n\nThe ApplicationLayout also provides the `RoutingMenu`, a menu component for applications desiring route-based navigation within their menu region. The `RoutingMenu` can be specified directly within the `routingConfig` or wrapped by another component for more custom implementations.\n\n|`RoutingMenu` Props|Type|Is Required|Description|\n|---|---|---|\n|`layoutConfig`|Object|**required**|The object containing layout-management APIs provided by the ApplicationLayout. If the `RoutingMenu` is used directly within the `routingConfig`, `layoutConfig` will be provided automatically.|\n|`menuItems`|Array|optional|The array of menu item objects describing the RoutingMenu's contents.|\n|`routingStackDelegate`|Object|**required**|The object containing RoutingStack APIs provided by the ApplicationLayout. If the `RoutingMenu` is used directly within the `routingConfig`, `routingStackDelegate` will be provided automatically.|\n|`title`|String|optional|The string title to render inside the RoutingMenu's header.|\n\n|`menuItems` Object Keys|Type|Is Required|Description|\n|---|---|---|---|\n|`text`|String|**required**|The text string that will be rendered for the menu item.|\n|`path`|String|**required**|The text path that will routed to upon item selection.|\n|`hasSubMenu`|Boolean|optional|Indicates whether or not the item has subsequent menus. If true, a chevron will be rendered on the item.|\n\n## Summary\n\n1. The ApplicationLayout requires a `Base` component (from `terra-base`) and any `Router` component (from `react-router-dom`) in its parent hierarchy.\n2. The `nameConfig` prop customizes the ApplicationLayout's branding.\n3. The `utilityConfig` prop generates an utilities menu and presentation controls within the layout. A default set of options can be generated by a helper.\n4. The `routingConfig` prop determines which components get rendered in the ApplicationLayout's `menu` and `content` regions based on the router location. Usage of the path `'/'` is restricted for `menu` components inside the `routingConfig`.\n5. The `navigationItems` prop generates primary navigation controls within the layout. The provided navigation items should have associated content in the `routingConfig`.\n6. The `indexPath` prop determines the default redirect location for the layout. The provided path should have associated content in the `routingConfig`.\n7. Menu and content components rendered within the ApplicationLayout receive an `app` prop with default support for modal disclosures.\n8. Menu and content components rendered within the ApplicationLayout also receive a `layoutConfig` prop for layout state manipulation.\n9. Menu and content components rendered within the ApplicationLayout also receive an `routingStackDelegate` prop. The `show` and `showParent` functions of the `routingStackDelegate` should be used for virtual navigation within configuration regions.\n10. The RoutingMenu component can be used directly for an off-the-shelf route-based navigation menu implementation.\n"},2240:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t(0)),a=i(t(961)),r=t(1087),s=i(t(1713)),p=i(t(1714)),l=function(){return o.default.createElement(a.default,{packageName:r.name,readme:"".concat(s.default,"\n").concat(p.default),srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(r.name)})};n.default=l},962:function(e,n){}}]);
//# sourceMappingURL=198-a15a14bcd301344a42d2.js.map