(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1079:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t(0)),s=i(t(55));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o=function(e){var n=l({},e);return a.default.createElement(s.default,n,a.default.createElement("path",{d:"M43 6h-4V2.2C39 1 38 0 36.8 0h-1.7C33.9.1 33 1 33 2.2V6H15V2.2C15 1 14 0 12.8 0h-1.7C9.9.1 9 1 9 2.2V6H5c-1.1 0-2 .9-2 2v38c0 1.1.9 2 2 2h24c1.3-.1 2.5-.6 3.4-1.4l11.2-11.1c.8-.9 1.3-2.1 1.4-3.4V8c0-1.1-.9-2-2-2zM6 21h36v10H30c-1.1 0-2 .9-2 2v12H6V21zm25 22.8V34h9.8L31 43.8z"}))};o.displayName="IconCalendar",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var r=o;n.default=r},1289:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t(0)),s=i(t(55));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o=function(e){var n=l({},e);return a.default.createElement(s.default,n,a.default.createElement("path",{d:"M46.1 12H37V4c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v8H1.9c-1 0-1.9.8-1.9 1.9v29.3c0 1 .8 1.9 1.9 1.9h44.3c1 0 1.9-.8 1.9-1.9V13.9c-.1-1.1-.9-1.9-2-1.9zM14 7h20v5H14V7zm21 20.6V31h-9v9h-4v-9h-9v-4h9v-9h4v9h9v.6z"}))};o.displayName="IconBriefcase",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var r=o;n.default=r},1290:function(e,n,t){e.exports={"content-wrapper":"TabExample-module__content-wrapper___2jXHt","tab-content-template":"TabExample-module__tab-content-template___1SAAJ","custom-display":"TabExample-module__custom-display___Hm2Xf","content-container":"TabExample-module__content-container___3IeI7"}},1373:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=a(t(0)),i=a(t(4)),l=a(t(2)),o=a(t(1290)),r=i.default.bind(o.default),c={isLabelHidden:l.default.bool,label:l.default.string,children:l.default.node},u=function(e){var n=e.isLabelHidden,t=e.label,a=e.children;return s.default.createElement("div",{className:r("tab-content-template")},n?s.default.createElement("h3",null,t):null,a||s.default.createElement("div",null,"Content for",s.default.createElement("i",null,t)))};u.propTypes=c;var d=u;n.default=d},1374:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t(0)),s=i(t(55));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o=function(e){var n=l({},e);return a.default.createElement(s.default,n,a.default.createElement("path",{d:"M24 34l14 14V0H10v48z"}))};o.displayName="IconBookmark",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var r=o;n.default=r},2145:function(e,n,t){"use strict";t.r(n),n.default='# Terra Tabs\n\nTabs are containers used to organize content. They allow for quick switching between groups of contextually related content. Content is divided into different containers and each container is viewable one at a time. The user can switch between containers by selecting the corresponding tab control.\n\nTabs are meant to organize content as to provide quick access to a group of contextually related content that does not need to be compared or accessed simultaneously. Tabs are not intended for navigation.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-tabs`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n### Note\nThe tabs component will apply the prop `isLabelHidden` to all components passed as content for Tabs.Pane. This will indicate if any of the tabs are icon only or have been truncated. When this prop is true a header should be rendered in the content area to for accessibility purposes.\n\n### Example Tab Content Component\n\n```jsx\n\nimport React from \'react\';\nimport classNames from \'classnames/bind\';\nimport PropTypes from \'prop-types\';\nimport styles from \'../../../Tabs.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  isLabelHidden: PropTypes.bool,\n  label: PropTypes.string,\n  children: PropTypes.node,\n};\n\n\nconst TabContent = ({ isLabelHidden, label, children }) => (\n  <div className={cx(\'content-wrapper\')}>\n    {isLabelHidden ? <h3>{label}</h3> : null}\n    {children}\n  </div>\n);\n\nTabContent.propTypes = propTypes;\nexport default TabContent;\n\n```\n\n### Controlled vs. Uncontrolled Tabs\n\nTerra-tabs allows you to use either a controlled or uncontrolled mode in order to have the amount control over the state that you need.\n\n### Uncontrolled Tabs\n\nUncontrolled tabs is the default mode of terra-tabs. In this mode the tabs will handle all state internally and the initial active tab can optionally be set using `defaultActiveKey` on the `<Tabs />` component.\n\n```jsx\n\nimport React from \'react\';\nimport PropTypes from \'prop-types\';\nimport IconBriefcase from \'terra-icon/lib/icon/IconBriefcase\';\nimport Tabs from \'terra-tabs\';\nimport TabContent from \'./TabContent\';\n\nconst TabsComponent = (props) => {\n  const labelTab = (\n    <Tabs.Pane label="Tab with label" key="LabelTab">\n      <TabContent label="Tab with label">\n        Content for the tab with label.\n      </TabContent>\n    </Tabs.Pane>\n  );\n\n  const iconTab = (\n    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key="IconTab">\n      <TabContent label="Tab with icon">\n        Content for tab with icon.\n      </TabContent>\n    </Tabs.Pane>\n  );\n\n  const customTab = (\n    <Tabs.Pane\n      customDisplay={(\n        <div className="customTabDisplay">\n          Custom display\n        </div>\n      )}\n      label="Custom display"\n      key="CustomTab"\n    >\n      <TabContent label="Custom display">\n        Content for custom tab.\n      </TabContent>\n    </Tabs.Pane>\n  );\n\n  const iconOnlyTab = (\n    <Tabs.Pane\n      icon={<IconBriefcase />}\n      label="Icon Only"\n      key="IconOnlyTab"\n    >\n      <TabContent label="Icon Only">\n        Content for icon only tab.\n      </TabContent>\n    </Tabs.Pane>\n  );\n\n  const disabledTab = (\n    <Tabs.Pane label="Disabled Tab" icon={<IconSearch />} isDisabled key="DisabledTab" />\n  );\n\n  return (\n    <Tabs variant={Tabs.Opts.Variants.MODULAR_CENTERED} defaultActiveKey="LabelTab" tabFill fill>\n      {labelTab}\n      {iconTab}\n      {customTab}\n      {disabledTab}\n      {iconOnlyTab}\n    </Tabs>\n  );\n};\n\nexport default TabsComponent;\n\n```\n\n### Controlled Tabs\n\nIn controlled mode terra-tabs does not handle any of the selection state internally, it is left up to the consumer. This mode is enabled by setting the `activeKey` prop on the `<Tabs />` component. A handler is needed for `onChange` to be notified of user selection and update the state. If both `activeKey` and `defaultActiveKey` are set, then `defaultActiveKey` will have no effect.\n\n```jsx\n\nimport React from \'react\';\nimport PropTypes from \'prop-types\';\nimport IconBriefcase from \'terra-icon/lib/icon/IconBriefcase\';\nimport Tabs from \'terra-tabs\';\n\nconst propTypes = {\n  activeKey: PropTypes.string,\n  children: PropTypes.node,\n}\n\nclass CustomTabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { activeKey: Tabs.Utils.initialSelectedTabKey(this.props.children, this.props.activeKey) };\n    this.handleOnChange = this.handleOnChange.bind(this);\n  }\n\n  handleOnChange(event, selectedKey) {\n    if (Tabs.Utils.shouldHandleSelection(this.state.activeKey, selectedKey)) {\n      this.setState({ activeKey: selectedKey });\n\n      // Custom Selection Logic Here\n    }\n  }\n\n  return (\n    <Tabs\n      activeKey={this.state.activeKey}\n      onChange={this.handleOnChange}\n    >\n      {children}\n    </Tabs>\n  );\n};\n\nexport default CustomTabs;\n\n```\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n'},2146:function(e){e.exports=JSON.parse('{"name":"terra-tabs","main":"lib/Tabs.js","version":"6.14.0","description":"Tabs are containers used to organize content. They allow for quick switching between groups of contextually related content. Content is divided into different containers and each container is viewable one at a time. The user can switch between containers by selecting the corresponding tab control. Tabs are meant for organizing content that doesn’t need to be compared or accessed simultaneously or if the user needs quick access through a group of contextually related content. Tabs are not intended for navigation.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","terra-tabs","Tabs","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^2.0.1","prop-types":"^15.5.8","resize-observer-polyfill":"^1.4.1","terra-content-container":"^3.0.0","terra-icon":"^3.1.0","terra-menu":"^6.14.0","terra-responsive-element":"^5.0.0"},"devDependencies":{"terra-doc-template":"^2.2.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},2147:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport ContentContainer from 'terra-content-container';\nimport ResponsiveElement from 'terra-responsive-element';\nimport TabPane from './TabPane';\nimport CollapsibleTabs from './_CollapsibleTabs';\nimport CollapsedTabs from './_CollapsedTabs';\nimport TabUtils from './TabUtils';\nimport styles from './Tabs.module.scss';\n\nconst cx = classNames.bind(styles);\n\n/**\nNOTE: This is being commented out until discussions have been resolved around if modular tabs should be removed.\nconst variants = {\n  MODULAR_CENTERED: 'modular-centered',\n  MODULAR_LEFT_ALIGNED: 'modular-left-aligned',\n  STRUCTURAL: 'structural',\n};\n*/\n\nconst propTypes = {\n\n  /**\n   * Tabs style. One of: Tabs.Opts.Variants.MODULAR_CENTERED, Tabs.Opts.Variants.MODULAR_LEFT_ALIGNED, or Tabs.Opts.Variants.STRUCTURAL.\n   * NOTE: This is being commented out until discussions have been resolved around if we want modular tabs.\n  variant: PropTypes.oneOf([variants.MODULAR_CENTERED, variants.MODULAR_LEFT_ALIGNED, variants.STRUCTURAL]),\n  */\n\n  /**\n   * Indicates if tabs should fill the width available in the tab bar.\n   */\n  tabFill: PropTypes.bool,\n\n  /**\n   * Indicates if the pane content should fill to the height of the parent container.\n   */\n  fill: PropTypes.bool,\n\n  /**\n   * Callback function when selection has changed.\n   * Parameters: 1. Event 2. Selected pane's key\n   */\n  onChange: PropTypes.func,\n\n  /**\n   * Tabs.Pane components to be displayed.\n   */\n  children: PropTypes.node.isRequired,\n\n  /**\n   * Key of the pane that should be active. Use this prop along with onChange to create controlled tabs.\n   */\n  activeKey: PropTypes.string,\n\n  /**\n   * Key of the pane that should be open initially.\n   */\n  defaultActiveKey: PropTypes.string,\n};\n\nconst defaultProps = {\n  tabFill: false,\n  fill: false,\n};\n\nclass Tabs extends React.Component {\n  constructor(props) {\n    super(props);\n    this.getInitialState = this.getInitialState.bind(this);\n    this.getActiveTabIndex = this.getActiveTabIndex.bind(this);\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.handleTruncationChange = this.handleTruncationChange.bind(this);\n    this.wrapPaneOnClick = this.wrapPaneOnClick.bind(this);\n    this.state = {\n      activeKey: this.getInitialState(),\n      isLabelTruncated: false,\n    };\n  }\n\n  getInitialState() {\n    if (this.props.activeKey) {\n      return null;\n    }\n    return TabUtils.initialSelectedTabKey(this.props.children, this.props.defaultActiveKey);\n  }\n\n  getActiveTabIndex() {\n    let activeIndex = -1;\n    React.Children.forEach(this.props.children, (child, index) => {\n      if (child.key === this.state.activeKey || child.key === this.props.activeKey) {\n        activeIndex = index;\n      }\n    });\n\n    return activeIndex;\n  }\n\n\n  handleOnChange(event, selectedPane) {\n    if (!selectedPane.props.isDisabled) {\n      if (this.props.onChange) {\n        this.props.onChange(event, selectedPane.key);\n      }\n      if (!this.props.activeKey && TabUtils.shouldHandleSelection(this.state.activeKey, selectedPane.key)) {\n        this.setState({ activeKey: selectedPane.key });\n      }\n    }\n  }\n\n  handleTruncationChange(isLabelTruncated) {\n    if (this.state.isLabelTruncated !== isLabelTruncated) {\n      this.setState({ isLabelTruncated });\n    }\n  }\n\n  wrapPaneOnClick(pane) {\n    return (event) => {\n      this.handleOnChange(event, pane);\n\n      if (pane.props.onClick) {\n        pane.props.onClick(event);\n      }\n    };\n  }\n\n  render() {\n    const {\n      tabFill,\n      fill,\n      onChange,\n      children,\n      activeKey,\n      defaultActiveKey,\n      ...customProps\n    } = this.props;\n\n    // NOTE: Hardcoding variant to structural until discussions have resolved around if we want modular tabs.\n    const variant = 'structural';\n    const tabsClassNames = cx([\n      'tabs-container',\n      { 'tab-fill': tabFill },\n      variant,\n      customProps.className,\n    ]);\n\n    let content = null;\n    let isIconOnly = false;\n    const clonedPanes = [];\n    React.Children.forEach(children, (child) => {\n      let isActive = false;\n      if (child.key === this.state.activeKey || child.key === activeKey) {\n        isActive = true;\n        content = child.props.children;\n      }\n\n      if (child.props.isIconOnly) {\n        isIconOnly = true;\n      }\n\n      clonedPanes.push(React.cloneElement(child, {\n        className: cx([{ 'is-active': isActive }, child.props.className]),\n        'aria-selected': isActive,\n        onClick: this.wrapPaneOnClick(child),\n      }));\n    });\n\n    content = React.Children.map(content, contentItem => (\n      React.cloneElement(contentItem, { isLabelHidden: isIconOnly || this.state.isLabelTruncated })\n    ));\n\n    const collapsibleTabs = (\n      <CollapsibleTabs\n        activeKey={activeKey || this.state.activeKey}\n        activeIndex={this.getActiveTabIndex()}\n        onChange={this.handleOnChange}\n        onTruncationChange={this.handleTruncationChange}\n        variant={variant}\n      >\n        {clonedPanes}\n      </CollapsibleTabs>\n    );\n\n    const collapsedTabs = (\n      <CollapsedTabs activeKey={activeKey || this.state.activeKey} onTruncationChange={this.handleTruncationChange}>\n        {clonedPanes}\n      </CollapsedTabs>\n    );\n\n    return (\n      <ContentContainer\n        {...customProps}\n        className={tabsClassNames}\n        fill={fill}\n        header={(\n          <ResponsiveElement\n            tiny={collapsedTabs}\n            small={collapsibleTabs}\n          />\n        )}\n      >\n        <div\n          role=\"tabpanel\"\n          className={cx(['pane-content', { 'fill-parent': fill }])}\n        >\n          {content}\n        </div>\n      </ContentContainer>\n    );\n  }\n}\n\nTabs.propTypes = propTypes;\nTabs.defaultProps = defaultProps;\nTabs.Pane = TabPane;\nTabs.Utils = TabUtils;\n/**\nNote: This is being commented out until discussions have been resolved around if we want modular tabs.\nTabs.Opts = {\n  Variants: variants,\n};\n*/\nexport default Tabs;\n"},2148:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './Tabs.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Icon to be displayed on the tab.\n   */\n  icon: PropTypes.element,\n\n  /**\n   * Text to be displayed on the tab.\n   */\n  label: PropTypes.string.isRequired,\n\n  /**\n   * A custom display for the tab. Component will fallback to label text when collapsed into the menu.\n   */\n  customDisplay: PropTypes.node,\n\n  /**\n   * Content to be displayed when the tab is selected.\n   */\n  children: PropTypes.node,\n\n  /**\n   * Indicates if the pane should be disabled.\n   */\n  isDisabled: PropTypes.bool,\n\n  /**\n   * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.\n   */\n  isIconOnly: PropTypes.bool,\n};\n\nconst defaultProps = {\n  isDisabled: false,\n  isIconOnly: false,\n};\n\nconst TabPane = ({\n  icon,\n  label,\n  customDisplay,\n  children,\n  isDisabled,\n  isIconOnly,\n  ...customProps\n}) => {\n  const attributes = { ...customProps };\n  const paneClassNames = cx([\n    'tab',\n    { 'is-disabled': isDisabled },\n    { 'is-icon-only': isIconOnly },\n    { 'is-text-only': !icon },\n    attributes.className,\n  ]);\n\n  if (isIconOnly) {\n    attributes['aria-label'] = label;\n  }\n\n  return (\n    <div {...attributes} role=\"tab\" className={paneClassNames}>\n      {customDisplay}\n      {customDisplay ? null : icon}\n      {customDisplay || isIconOnly ? null : <span className={cx('label')}>{label}</span>}\n    </div>\n  );\n};\n\nTabPane.propTypes = propTypes;\nTabPane.defaultProps = defaultProps;\n\nexport default TabPane;\n"},2149:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=a(t(0)),i=a(t(4)),l=a(t(2)),o=a(t(1289)),r=a(t(216)),c=a(t(1081)),u=a(t(1373)),d=a(t(1290)),m=i.default.bind(d.default),p={tabFill:l.default.bool},b=function(e){var n=s.default.createElement(c.default.Pane,{label:"Tab with label",key:"LabelTab"},s.default.createElement(u.default,{label:"Tab with label"})),t=s.default.createElement(c.default.Pane,{label:"Tab with icon",icon:s.default.createElement(o.default,null),key:"IconTab"},s.default.createElement(u.default,{label:"Tab with icon"})),a=s.default.createElement(c.default.Pane,{customDisplay:s.default.createElement("div",{className:m("custom-display")},"Custom display"),label:"Custom display",key:"CustomTab"},s.default.createElement(u.default,{label:"Custom display"})),i=s.default.createElement(c.default.Pane,{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",key:"longLabel"},s.default.createElement(u.default,{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})),l=s.default.createElement(c.default.Pane,{label:"Last Tab",key:"lastTab"},s.default.createElement(u.default,{label:"Last Tab"})),d=s.default.createElement(c.default.Pane,{label:"Disabled Tab",icon:s.default.createElement(r.default,null),isDisabled:!0,key:"DisabledTab"});return s.default.createElement("div",{className:m("content-wrapper")},s.default.createElement(c.default,{defaultActiveKey:"LabelTab",tabFill:e.tabFill},n,t,a,d,i,l))};b.propTypes=p;var f=b;n.default=f},2153:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport classNames from \'classnames/bind\';\nimport PropTypes from \'prop-types\';\nimport IconBriefcase from \'terra-icon/lib/icon/IconBriefcase\';\nimport IconSearch from \'terra-icon/lib/icon/IconSearch\';\nimport Tabs from \'terra-tabs\';\nimport TabContentTemplate from \'terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate\';\nimport styles from \'./common/TabExample.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  tabFill: PropTypes.bool,\n};\n\nconst TabsTemplate = (props) => {\n  const labelTab = (\n    <Tabs.Pane label="Tab with label" key="LabelTab">\n      <TabContentTemplate label="Tab with label" />\n    </Tabs.Pane>\n  );\n\n  const iconTab = (\n    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key="IconTab">\n      <TabContentTemplate label="Tab with icon" />\n    </Tabs.Pane>\n  );\n\n  const customTab = (\n    <Tabs.Pane\n      customDisplay={(\n        <div className={cx(\'custom-display\')}>\n          Custom display\n        </div>\n      )}\n      label="Custom display"\n      key="CustomTab"\n    >\n      <TabContentTemplate label="Custom display" />\n    </Tabs.Pane>\n  );\n\n  const longLabel = (\n    <Tabs.Pane\n      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."\n      key="longLabel"\n    >\n      <TabContentTemplate label="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />\n    </Tabs.Pane>\n  );\n\n  const lastTab = (\n    <Tabs.Pane label="Last Tab" key="lastTab">\n      <TabContentTemplate label="Last Tab" />\n    </Tabs.Pane>\n  );\n\n  const disabledTab = (\n    <Tabs.Pane label="Disabled Tab" icon={<IconSearch />} isDisabled key="DisabledTab" />\n  );\n\n  return (\n    <div className={cx(\'content-wrapper\')}>\n      <Tabs defaultActiveKey="LabelTab" tabFill={props.tabFill}>\n        {labelTab}\n        {iconTab}\n        {customTab}\n        {disabledTab}\n        {longLabel}\n        {lastTab}\n      </Tabs>\n    </div>\n  );\n};\n\nTabsTemplate.propTypes = propTypes;\nexport default TabsTemplate;\n'},2154:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=a(t(0)),i=a(t(4)),l=a(t(1081)),o=a(t(1373)),r=a(t(1290)),c=i.default.bind(r.default),u=function(){var e=s.default.createElement(l.default.Pane,{label:"Large content",key:"LargeContent"},s.default.createElement(o.default,{label:"Large Content"},s.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed elementum mauris. Nunc maximus erat eget mauris posuere, a efficitur ex consequat. Ut mollis justo vitae rutrum tempus. Cras eget nisl a metus convallis fringilla nec non lorem. Fusce viverra velit porta tellus interdum semper eu nec mauris. Suspendisse fringilla viverra dui, et scelerisque nulla aliquet vitae. Duis sodales id ex nec viverra. Cras vel arcu mattis, ullamcorper elit in, molestie neque. Pellentesque tellus nunc, bibendum at nisl ac, fermentum sodales urna. Maecenas ac interdum mi. Suspendisse at condimentum enim. Suspendisse porta ipsum sed lacus congue porttitor. Aenean varius dapibus faucibus. Sed ut est ante. Praesent pharetra luctus dolor, non porta tortor lobortis a."),s.default.createElement("p",null,"Vestibulum pellentesque nunc viverra, maximus ipsum sit amet, suscipit purus. Cras consequat mi et elit auctor rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt pharetra faucibus. Sed at sem commodo, eleifend ipsum non, vehicula eros. Aliquam ac odio sit amet ipsum ultricies convallis vel eu sapien. Suspendisse condimentum fringilla nibh non ornare. Nulla quis porttitor eros, a facilisis lacus. Integer nec suscipit felis, vel sodales massa. Aliquam id dolor ullamcorper purus volutpat efficitur. Vestibulum in est finibus, convallis nisi et, vulputate nunc. Sed metus mi, faucibus vel accumsan et, varius nec ipsum. Ut gravida consectetur sem, vel accumsan orci gravida a."),s.default.createElement("p",null,"Nam tincidunt nisl at nunc dictum, ac volutpat erat dignissim. Suspendisse ut augue nec enim malesuada lobortis. Etiam ut magna lacinia, eleifend orci quis, egestas sem. Morbi nulla mi, dignissim eget sem finibus, tempus sodales augue. Nullam dignissim augue ac diam semper euismod. Mauris ultricies condimentum nunc eu congue. Maecenas vehicula a dui in viverra. Vivamus id scelerisque felis. Morbi commodo feugiat feugiat. Aenean ac dapibus orci, quis pulvinar ante. Fusce faucibus porta est, malesuada pharetra libero scelerisque vel. Duis tempus turpis sit amet est lacinia condimentum. Fusce sollicitudin tincidunt ultrices."),s.default.createElement("p",null,"Mauris sit amet aliquet augue, imperdiet fringilla ligula. Ut sapien metus, auctor sit amet mauris quis, ullamcorper convallis risus. Sed congue nisi diam, eget consectetur massa feugiat a. Curabitur placerat posuere ipsum rutrum convallis. In iaculis aliquet velit ac scelerisque. Vestibulum eu interdum lectus. In rutrum vel lacus ac varius. Proin ac suscipit metus. Proin non tortor vel augue laoreet placerat vulputate in nisi. Etiam sagittis dapibus lobortis. Phasellus eros dui, lacinia et metus id, consectetur pretium turpis. Donec venenatis augue vitae leo condimentum, sit amet lacinia sem pretium. Aliquam sed dolor viverra, rhoncus arcu sit amet, porta velit. Aenean congue vel odio et tristique."),s.default.createElement("p",null,"Phasellus quis purus elementum, tincidunt erat eget, placerat arcu. Aenean in odio in nisi fringilla malesuada. Nunc et consectetur dolor, sed vestibulum tortor. Proin feugiat auctor eros et gravida. Nullam bibendum sagittis augue, convallis faucibus mi sagittis at. Nulla sit amet dolor luctus magna convallis lobortis eget in ligula. Nullam aliquet lacus interdum accumsan efficitur. In sed suscipit justo. Integer malesuada non sem vitae bibendum. Nullam felis augue, lacinia ut neque in, vulputate scelerisque eros."))),n=s.default.createElement(l.default.Pane,{label:"Short Content",key:"ShortContent"},s.default.createElement(o.default,{label:"Short Content"}));return s.default.createElement("div",{className:c("content-container")},s.default.createElement(l.default,{fill:!0},e,n))};n.default=u},2155:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport classNames from 'classnames/bind';\nimport Tabs from 'terra-tabs';\nimport TabContent from 'terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate';\nimport styles from './common/TabExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst TabsWithFilledContent = () => {\n  const tab1 = (\n    <Tabs.Pane\n      label=\"Large content\"\n      key=\"LargeContent\"\n    >\n      <TabContent label=\"Large Content\">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed elementum mauris. Nunc maximus erat eget mauris posuere, a efficitur ex consequat. Ut mollis justo vitae rutrum tempus. Cras eget nisl a metus convallis fringilla nec non lorem. Fusce viverra velit porta tellus interdum semper eu nec mauris. Suspendisse fringilla viverra dui, et scelerisque nulla aliquet vitae. Duis sodales id ex nec viverra. Cras vel arcu mattis, ullamcorper elit in, molestie neque. Pellentesque tellus nunc, bibendum at nisl ac, fermentum sodales urna. Maecenas ac interdum mi. Suspendisse at condimentum enim. Suspendisse porta ipsum sed lacus congue porttitor. Aenean varius dapibus faucibus. Sed ut est ante. Praesent pharetra luctus dolor, non porta tortor lobortis a.\n        </p>\n        <p>\n          Vestibulum pellentesque nunc viverra, maximus ipsum sit amet, suscipit purus. Cras consequat mi et elit auctor rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt pharetra faucibus. Sed at sem commodo, eleifend ipsum non, vehicula eros. Aliquam ac odio sit amet ipsum ultricies convallis vel eu sapien. Suspendisse condimentum fringilla nibh non ornare. Nulla quis porttitor eros, a facilisis lacus. Integer nec suscipit felis, vel sodales massa. Aliquam id dolor ullamcorper purus volutpat efficitur. Vestibulum in est finibus, convallis nisi et, vulputate nunc. Sed metus mi, faucibus vel accumsan et, varius nec ipsum. Ut gravida consectetur sem, vel accumsan orci gravida a.\n        </p>\n        <p>\n          Nam tincidunt nisl at nunc dictum, ac volutpat erat dignissim. Suspendisse ut augue nec enim malesuada lobortis. Etiam ut magna lacinia, eleifend orci quis, egestas sem. Morbi nulla mi, dignissim eget sem finibus, tempus sodales augue. Nullam dignissim augue ac diam semper euismod. Mauris ultricies condimentum nunc eu congue. Maecenas vehicula a dui in viverra. Vivamus id scelerisque felis. Morbi commodo feugiat feugiat. Aenean ac dapibus orci, quis pulvinar ante. Fusce faucibus porta est, malesuada pharetra libero scelerisque vel. Duis tempus turpis sit amet est lacinia condimentum. Fusce sollicitudin tincidunt ultrices.\n        </p>\n        <p>\n          Mauris sit amet aliquet augue, imperdiet fringilla ligula. Ut sapien metus, auctor sit amet mauris quis, ullamcorper convallis risus. Sed congue nisi diam, eget consectetur massa feugiat a. Curabitur placerat posuere ipsum rutrum convallis. In iaculis aliquet velit ac scelerisque. Vestibulum eu interdum lectus. In rutrum vel lacus ac varius. Proin ac suscipit metus. Proin non tortor vel augue laoreet placerat vulputate in nisi. Etiam sagittis dapibus lobortis. Phasellus eros dui, lacinia et metus id, consectetur pretium turpis. Donec venenatis augue vitae leo condimentum, sit amet lacinia sem pretium. Aliquam sed dolor viverra, rhoncus arcu sit amet, porta velit. Aenean congue vel odio et tristique.\n        </p>\n        <p>\n          Phasellus quis purus elementum, tincidunt erat eget, placerat arcu. Aenean in odio in nisi fringilla malesuada. Nunc et consectetur dolor, sed vestibulum tortor. Proin feugiat auctor eros et gravida. Nullam bibendum sagittis augue, convallis faucibus mi sagittis at. Nulla sit amet dolor luctus magna convallis lobortis eget in ligula. Nullam aliquet lacus interdum accumsan efficitur. In sed suscipit justo. Integer malesuada non sem vitae bibendum. Nullam felis augue, lacinia ut neque in, vulputate scelerisque eros.\n        </p>\n      </TabContent>\n    </Tabs.Pane>\n  );\n\n  const tab2 = (\n    <Tabs.Pane\n      label=\"Short Content\"\n      key=\"ShortContent\"\n    >\n      <TabContent label=\"Short Content\" />\n    </Tabs.Pane>\n  );\n\n  return (\n    <div className={cx('content-container')}>\n      <Tabs fill>\n        {tab1}\n        {tab2}\n      </Tabs>\n    </div>\n  );\n};\n\nexport default TabsWithFilledContent;\n"},2156:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=a(t(0)),i=a(t(4)),l=a(t(1289)),o=a(t(216)),r=a(t(1374)),c=a(t(1079)),u=a(t(1081)),d=a(t(1373)),m=a(t(1290)),p=i.default.bind(m.default),b=function(){var e=s.default.createElement(u.default.Pane,{label:"Search",icon:s.default.createElement(o.default,null),isIconOnly:!0,key:"Search"},s.default.createElement(d.default,{label:"Search"})),n=s.default.createElement(u.default.Pane,{label:"Briefcase",icon:s.default.createElement(l.default,null),isIconOnly:!0,key:"Briefcase"},s.default.createElement(d.default,{label:"Briefcase"})),t=s.default.createElement(u.default.Pane,{label:"Bookmark",icon:s.default.createElement(r.default,null),isIconOnly:!0,key:"Bookmark"},s.default.createElement(d.default,{label:"Bookmark"})),a=s.default.createElement(u.default.Pane,{label:"Calendar",icon:s.default.createElement(c.default,null),isIconOnly:!0,key:"Calendar"},s.default.createElement(d.default,{label:"Calendar"}));return s.default.createElement("div",{className:p("content-wrapper")},s.default.createElement(u.default,null,e,n,t,a))};n.default=b},2157:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport classNames from \'classnames/bind\';\nimport IconBriefcase from \'terra-icon/lib/icon/IconBriefcase\';\nimport IconSearch from \'terra-icon/lib/icon/IconSearch\';\nimport IconBookmark from \'terra-icon/lib/icon/IconBookmark\';\nimport IconCalendar from \'terra-icon/lib/icon/IconCalendar\';\nimport Tabs from \'terra-tabs\';\nimport TabContent from \'terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate\';\nimport styles from \'./common/TabExample.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst IconOnlyTabs = () => {\n  const searchTab = (\n    <Tabs.Pane label="Search" icon={<IconSearch />} isIconOnly key="Search">\n      <TabContent label="Search" />\n    </Tabs.Pane>\n  );\n\n  const briefcaseTab = (\n    <Tabs.Pane label="Briefcase" icon={<IconBriefcase />} isIconOnly key="Briefcase">\n      <TabContent label="Briefcase" />\n    </Tabs.Pane>\n  );\n\n  const bookmarkTab = (\n    <Tabs.Pane label="Bookmark" icon={<IconBookmark />} isIconOnly key="Bookmark">\n      <TabContent label="Bookmark" />\n    </Tabs.Pane>\n  );\n\n  const calendarTab = (\n    <Tabs.Pane label="Calendar" icon={<IconCalendar />} isIconOnly key="Calendar">\n      <TabContent label="Calendar" />\n    </Tabs.Pane>\n  );\n\n  return (\n    <div className={cx(\'content-wrapper\')}>\n      <Tabs>\n        {searchTab}\n        {briefcaseTab}\n        {bookmarkTab}\n        {calendarTab}\n      </Tabs>\n    </div>\n  );\n};\n\nexport default IconOnlyTabs;\n'},2332:function(e,n,t){"use strict";var a=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=a(t(0)),i=a(t(961)),l=a(t(2145)),o=t(2146),r=a(t(2147)),c=a(t(2148)),u=a(t(2149)),d=a(t(2153)),m=a(t(2154)),p=a(t(2155)),b=a(t(2156)),f=a(t(2157)),h=function(){return s.default.createElement(i.default,{packageName:o.name,readme:l.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(o.name),examples:[{title:"Compact",example:s.default.createElement(u.default,null),source:d.default},{title:"Expanded",example:s.default.createElement(u.default,{tabFill:!0}),source:d.default},{title:"Icon Only",example:s.default.createElement(b.default,null),source:f.default},{title:"Fill Parent Container",example:s.default.createElement(m.default,{fill:!0}),source:p.default}],propsTables:[{componentName:"Tabs",componentSrc:r.default},{componentName:"Tabs.Pane",componentSrc:c.default}]})};n.default=h},962:function(e,n){}}]);
//# sourceMappingURL=88-015697fcf1ecac7997c4.js.map