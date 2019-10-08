(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1129:function(e){e.exports=JSON.parse('{"name":"terra-application-navigation","main":"lib/ApplicationNavigation.js","version":"1.7.0","description":"The Terra Application Navigation is a responsive, themeable layout for building applications. ApplicationNavigation is comprised of selectable navigation and utility elements with selection callbacks.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","Framework","terra-application-navigation","ApplicationNavigation","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","devDependencies":{"terra-application":"^1.10.0"},"peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.4.0","terra-application":"^1.0.0"},"dependencies":{"classnames":"^2.2.5","focus-trap-react":"^6.0.0","keycode-js":"^2.0.1","lodash.debounce":"^4.0.8","prop-types":"^15.5.8","react-onclickoutside":"^6.7.1","resize-observer-polyfill":"^1.4.1","terra-action-footer":"^2.0.0","terra-action-header":"^2.0.0","terra-avatar":"^2.0.0","terra-button":"^3.3.0","terra-content-container":"^3.0.0","terra-doc-template":"^2.2.0","terra-icon":"^3.11.0","terra-image":"^3.0.0","terra-overlay":"^3.0.0","terra-popup":"^6.14.0","terra-visually-hidden-text":"^2.0.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1778:function(e,t,n){"use strict";n.r(t),t.default="# Terra Application Navigation\n\nThe Terra Application Navigation is a responsive, themeable layout for building applications.\n\nThe Terra Application Navigation provides:\n- A themeable, responsive application header, capable of rendering application-specific branding, tabular navigation, and user-centric utility controls\n- Responsive menu and content areas\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-application-navigation`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.4.0 |\n| terra-application | ^1.0.0 |\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n"},1779:function(e,t,n){"use strict";n.r(t),t.default="## Prerequisites\n\n- The ApplicationNavigation requires the presence of a `Application` component (provided by `terra-application`) in its parent hierarchy. This provides essential utilities around i18n, context, and breakpoints.\n\n```jsx\nimport React from 'react';\nimport Application from 'terra-application';\nimport ApplicationNavigation from 'terra-application-navigation';\n\nconst MyApp = () => (\n  <Application locale=\"en-US\">\n    <ApplicationNavigation\n      titleConfig={titleConfig}\n      utilityItems={utilityItems}\n      navigationItems={navigationItems}\n      extensionItems={extensionItems}\n      activeNavigationItemKey={activeKey}\n    >\n      {myContent}\n    </ApplicationNavigation>\n  </Application>\n);\n```\n## Props\n\n### `extensionItems`\n#### Is Required: `false`\n\nThe `extensionItems` prop allows consumers to render icons with an assocaited selection callback within the ApplicationNavigation's extensions region. The expectations for `extensionItems` is that they are to provide click actions and disclosures for the application level context. The `extensionItems` will rollup in various counts depending on the current breakpoint. If `extensionItems` are passed as props the associated `onSelectExtensionItem` function callback should be passed as well.\n\nThe value provided for `extensionItems` should be an array of objects with the following API:\n\n|Key Name|Type|Is Required|Description|\n|---|---|---|---|\n|`key`|String|**required**|A key rendered to be used as a unique react key as well as returned with the onSelectExtensionItem.|\n|`icon`|Element|**required**|A React element representing the themable icon for the extension.|\n|`text`|String|**required**|The text to either be set as an aria-label or display text.|\n|`metaData`|Object|optional|An object containing whatever additional identifying information to be returned with the onSelectExtensionItem.|\n\n```jsx\nconst extensionItems = [{\n  key: 'extension_1',\n  icon: <Icon1 >,\n  text: 'Extension 1',\n  metaData: { myValue: value1 }\n}, {\n  key: 'extension_2',\n  icon: <Icon2 >,\n  text: 'Extension 2',\n  metaData: { myValue: value2 }\n}];\n```\n\n### `onSelectExtensionItem`\n#### Is Required: `false`\n\nThe `onSelectExtensionItem` prop allows consumers to retrieve the information related to the extension that was clicked. The function callback will return the information in the format of `onSelectExtensionItem(key, metaData)`.\n\n### `navigationItems`\n#### Is Required: `false`\n\nThe `navigationItems` prop allows consumers to render high-level, primary navigation controls directly within the ApplicationNavigation. The expectation of `navigationItems` is that items will not be added/removed, as this would be detrimental to the user experience. Once selected, a navigational item is no longer actionable and cannot be reselected. Navigation items at the application level should have equivalent context levels. Navigation from one tab to another should not be influenced by content, as each navigational item should be a sandboxed concept.\n\nThe ApplicationNavigation will render this content in different ways based on the active responsive breakpoint. If `navigationItems` are passed as props the associated `onSelectNavigationItem` function callback should be passed as well.\n\nThe value provided for `navigationItems` should be an array of objects with the following API:\n\n|Key Name|Type|Is Required|Description|\n|---|---|---|---|\n|`key`|String|**required**|A key rendered to be used as a unique react key as well as returned with the onSelectNavigationItem.|\n|`text`|String|**required**|The text to either be set as an aria-label or display text.|\n|`metaData`|Object|optional|An object containing whatever additional identifying information to be returned with the onSelectNavigationItem.|\n\n```jsx\nconst navigationItems = [{\n  key: 'page_1',\n  text: 'Page 1',\n  metaData: { myValue: value1 }\n}, {\n  key: 'page_2',\n  text: 'Page 2',\n  metaData: { myValue: value2 }\n}];\n```\n\n### `onSelectNavigationItem`\n#### Is Required: `false`\n\nThe `onSelectNavigationItem` prop allows consumers to retrieve the information related to the navigation item that was clicked. The function callback will return the information in the format of `onSelectNavigationItem(key, metaData)`.\n\n### `activeNavigationItemKey`\n#### Is Required: `false`\n\nThe `activeNavigationItemKey` prop allows consumers to set the currently selected navigation item. Accordingly, the `activeNavigationItemKey` value must have an associated entry within the `navigationItems` specification.\n\n### `utilityItems`\n#### Is Required: `false`\n\nThe `utilityItems` prop allows consuming applications to present an application-level custom utility items directly from the ApplicationNavigation. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint. If `utilityItems` are passed as props the associated `onSelectUtilityItem` function callback should be passed as well.\n\nThe value provided for `utilityItems` should be an array of objects with the following API:\n\n|Key Name|Type|Is Required|Description|\n|---|---|---|---|\n|`key`|String|**required**|A key rendered to be used as a unique react key as well as returned with the onSelectUtilityItem.|\n|`icon`|Element|**required**|A React element representing the themable icon for the utility item.|\n|`text`|String|**required**|The text to either be set as an aria-label or display text.|\n|`metaData`|Object|optional|An object containing whatever additional identifying information to be returned with the onSelectUtilityItem.|\n\n```jsx\nconst utilityItems = [{\n  key: 'utility_1',\n  icon: <Icon1 >,\n  text: 'Utility 1',\n  metaData: { myValue: value1 }\n}, {\n  key: 'utility_2',\n  icon: <Icon2 >,\n  text: 'Utility 2',\n  metaData: { myValue: value2 }\n}];\n```\n\n### `onSelectUtilityItem`\n#### Is Required: `false`\n\nThe `onSelectUtilityItem` prop allows consumers to retrieve the information related to the navigation item that was clicked. The function callback will return the information in the format of `onSelectUtilityItem(key, metaData)`.\n\n### `onSelectSettings`\n#### Is Required: `false`\n\nThe `onSelectSettings` prop allows consumers have first class support for a settings utility item. If the `onSelectSettings` prop is not set a settings utility item will not be displayed.\n\n### `onSelectHelp`\n#### Is Required: `false`\n\nThe `onSelectHelp` prop allows consumers have first class support for a help utility item. If the `onSelectHelp` prop is not set a settings utility item will not be displayed.\n\n### `onSelectLogout`\n#### Is Required: `false`\n\nThe `onSelectLogout` prop allows consumers have first class support for a logout utility button. If the `onSelectLogout` prop is not set a settings utility item will not be displayed.\n\n### `titleConfig`\n#### Is Required: `false`\n\nThe `titleConfig` prop allows consuming applications to add their own branding to the ApplicationNavigation. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint.\n\n|Key Name|Type|Is Required|Description|\n|---|---|---|---|\n|`title`|String|**required**|Title to be displayed or set as the aria-label if a title element is passed.\n|`headline`|String|optional|Super text to be display above the main title text.|\n|`subline`|String|optional|Sub text to be display below the main title text.\n|`element`|Element|optional|Element to use in place of title text. Typically a logo for branding.\n|`hideTitleWithinDrawerMenu`|Boolean|optional|Whether or not the title should be hidden when at the compact breakpoint.|\n\n```jsx\nconst myTitleConfig = {\n  title: 'My Application',\n  subline: 'My Subline',\n  hideTitleWithinDrawerMenu: false,\n}\n```\n\n### `userConfig`\n#### Is Required: `false`\n\nThe `userConfig` prop allows consumers to set a user associated to the current application context. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint.\n\n|Key Name|Type|Is Required|Description|\n|---|---|---|---|\n|`name`|String|**required**|User name to be displayed for the user button and within utilities.\n|`detail`|String|optional|Additional user details string.|\n|`initials`|String|optional|User initials to be displayed within the avatar if no image is present.\n|`imageSrc`|String|optional|Src to provide to the avatar component.|\n\n```jsx\nconst myUserConfig = {\n  name: 'Name, User',\n  detail: 'Is a User',\n  initials: 'UN',\n  imageSrc: 'imageSrc',\n}\n```\n\n### `hero`\n#### Is Required: `false`\n\nThe `hero` prop allows consumers to add a hero element within the utility popup and/or navigation drawer. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint.\n\n### `notifications`\n#### Is Required: `false`\n\nThe `notifications` prop allows consumers to display notification counts associated to navigationItems and extensionsItems. The props is made up of key/value pairs; the key is the associated entry within the `navigationItems` or `extensionItems` specification, and a numerical value. Depending on locations within the navigational structure and breakpoint the number of digits displayed may be limited.\n\n```jsx\nconst myNotifications = {\n  key1: 3,\n  extension2: 10,\n}\n```\n\n## Responsive Design\n\nThe ApplicationNavigation has two rendering modes: `standard` and `compact`.\n  - The `standard` rendering occurs at `large`, `huge`, and `enormous` breakpoints.\n  - The `compact` rendering occurs at `tiny`, `small`, `medium` breakpoints.\n\n|Prop|`standard` Rendering|`compact` Rendering|\n|---|---|---|\n|`userConfig`|Content is rendered within ApplicationNavigation's header.|Content is rendered within ApplicationNavigation's navigation drawer.|\n|`titleConfig`|Content is rendered within ApplicationNavigation's header.|Same as `standard`.|\n|`hero`|Content is rendered within ApplicationNavigation's utility popup (as provided by `terra-popup`).|Content is rendered within ApplicationNavigation's navigation drawer.|\n|`utilityItems`|Content is rendered within ApplicationNavigation's utility popup (as provided by `terra-popup`).|Content is rendered within ApplicationNavigation's navigation drawer.|\n|`navigationItems`|Content is rendered within the ApplicationNavigation's header as tabs.|Content is rendered within ApplicationNavigation's navigation drawer.|\n|`extensionItems`|Content is rendered within ApplicationNavigation's header.|Same as `standard`.|\n"},2253:function(e,t,n){"use strict";var i=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(961)),r=n(1129),s=i(n(1778)),l=i(n(1779)),p=function(){return a.default.createElement(o.default,{packageName:r.name,readme:"".concat(s.default,"\n").concat(l.default),srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(r.name)})};t.default=p},962:function(e,t){}}]);
//# sourceMappingURL=202-143c839cf0870789a535.js.map