(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{2009:function(e,n,d){"use strict";d.r(n),n.default="Changelog\n=========\n\nUnreleased\n----------\n\n4.14.0 - (October 3, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n4.13.0 - (September 26, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n4.12.0 - (September 19, 2019)\n------------------\n### Changed\n* Removed `details` tag from doc-site.\n* Doc site example module import syntax modified to use package.json name resolution\n\n4.11.0 - (September 6, 2019)\n------------------\n### Changed\n* Cleaned up imports in examples and test files\n\n4.10.0 - (August 21, 2019)\n------------------\n### Changed\n* Replaced Object.assign syntax with Object spread syntax\n\n4.9.0 - (August 14, 2019)\n------------------\n### Changed\n* updated package.json test scripts\n\n4.8.0 - (July 30, 2019)\n------------------\n### Removed\n* Removed DEPENDENCIES.md file\n\n4.7.0 - (July 16, 2019)\n------------------\n### Added\n* Added documentation on required peerDependencies\n\n4.6.0 - (July 10, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n4.5.0 - (July 2, 2019)\n------------------\n### Changed\n* Renamed test and example SCSS files to end with `.module.scss` extension\n\n4.4.0 - (June 19, 2019)\n------------------\n### Changed\n* Removed all inline styles from Dev-site components and implemented the same styles using external css.\n* Update wdio specs to use Terra.describeViewports\n\n4.3.0 - (June 12, 2019)\n------------------\n### Added\n* Added ARIA landmark roles\n\n### Changed\n* Update tests for terra-toolkit v5 and terra-dev-site v5 changes\n\n### Removed\n* Removed node_modules from .npmignore\n\n4.2.0 - (May 21, 2019)\n------------------\n### Added\n* Added hard-coded breakpoint values to LayoutUtils.js\n\n### Removed\n* Removed dependency on terra-responsive-element\n\n4.1.0 - (May 15, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n4.0.0 - (May 13, 2019)\n------------------\n### Breaking Changes\n* Update react-router-dom peerDependency to latest stable major release\n* Updated tabbable dependency to ^4.0.0\n\n# Changed\n* Update skip to content link handling to only temporary set tabindex to prevent keyboard page scroll bug\n\n3.4.0 - (April 24, 2019)\n------------------\n### Changed\n* Moved packages we use solely in doc examples and tests to devDependencies\n\n3.3.0 - (April 2, 2019)\n------------------\n### Fixed\n* Updated snapshots to account for Overlay's `rootProp` default value from `[data-terra-base]` to `#root`\n\n3.2.0 - (March 26, 2019)\n------------------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n3.1.0 - (February 5, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n3.0.0 - (January 25, 2019)\n------------------\n### Breaking Change\n* Updated variable names to match new naming standard\n* Added new variables for css theming\n* Removed variables for css theming\n* Updated terra-core dependencies\n\n### Changed\n* Remove use of componentWillReceiveProps\n\n2.23.0 - (January 5, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n2.22.0 - (January 2, 2019)\n------------------\n### Added\n* Shim for <main> tag IE compatibility added to _LayoutSlidePanel\n\n2.21.0 - (December 5, 2018)\n------------------\n### Changed\n* Minor dependency update\n\n2.20.0 - (December 3, 2018)\n------------------\n### Changed\n* Minor dependency bump\n\n2.19.0 - (November 15, 2018)\n------------------\n### Changed\n* Added focus management to shift between layout panel and toggle button when it is opened and closed\n* Regenerated jest snapshots\n\n### Changed\n* Updated snapshots due to dependency updates\n\n2.18.0 - (October 16, 2018)\n------------------\n### Changed\n* Added id of terra-main to the main node\n\n2.17.0 - (October 8, 2018)\n------------------\n### Changed\n* Updated links in docs on supported features\n\n2.16.0 - (September 25, 2018)\n------------------\n### Changed\n* Removed terra-base duplicate from dependencies (kept instance in peerDependencies)\n\n2.15.0 - (September 11, 2018)\n------------------\n### Changed\n* Made content area a main node\n\n2.14.0 - (September 5, 2018)\n------------------\n### Changed\n* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n\n2.13.0 - (August 30, 2018)\n------------------\n### Changed\n* Formatting changes per eslint v5 update\n\n2.12.0 - (August 13, 2018)\n------------------\n### Changed\n* Formatting changes per eslint v4 update\n\n### Fixed\n* Lint errors regarding file path resolution\n\n2.11.0 - (July 26, 2018)\n------------------\n### Changed\n* Updated to use terra-responsive-element v3\n\n2.10.0 - (July 25, 2018)\n------------------\n### Changed\n* Add .module extension to SCSS file(s)\n\n2.9.0 - (July 3, 2018)\n------------------\n### Added\n* Change logs to documentation on terra-dev-site\n\n2.8.0 - (June 29, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.7.0 - (June 12, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.6.0 - (May 30, 2018)\n------------------\n### Changed\n* Moved examples to src\n\n2.5.0 - (May 22, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.4.0 - (April 30, 2018)\n------------------\n### Changed\n* Minor dependency updates\n* Do not release snapshots to npm\n\n2.3.0 - (April 13, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.2.0 - (March 23, 2018)\n------------------\n### Changed\n* Returned promises from toggleMenu/togglePin\n* Updated menu overlay styles.\n\n2.1.0 - (March 6, 2018)\n------------------\n### Changed\n* Remove the hover functionality from the layout panel at the medium breakpoint.\n\n### Added\n* Added npmrc file with package-lock set to false.\n\n2.0.0 - (February 21, 2018)\n------------------\n### Changed\n* Updated to use React 16\n\n1.2.0 - (February 15, 2018)\n------------------\n### Fixed\n* Nightwatch tests raw route now sets the size of the layout.\n* Content is no longer visible when the slide panel is hidden.\n\n1.1.0 - (January 23, 2018)\n------------------\n### Added\n* Debounce to resize of layout\n* Use display none on the hover section when hidden.\n\n### Changed\n* Updating tests to point to new terra-framework-site location.\n\n1.0.0 - (November 17, 2017)\n------------------\nInitial stable release\n"},2301:function(e,n,d){"use strict";var a=d(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(d(0)),o=a(d(961)),r=a(d(2009)),s=function(){return t.default.createElement(o.default,{packageName:"terra-layout",srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/terra-layout",readme:r.default})};n.default=s},962:function(e,n){}}]);
//# sourceMappingURL=336-3a9e6d2e5bfc0834635f.js.map