(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{2051:function(n,e,d){"use strict";d.r(e),e.default="Changelog\n=========\n\nUnreleased\n----------\n\n5.14.0 - (October 3, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n5.13.0 - (September 26, 2019)\n------------------\n### Changed\n* Minor dependency updates\n\n5.12.0 - (September 19, 2019)\n------------------\n### Changed\n* Removed `details` tag from doc-site.\n* Doc site example module import syntax modified to use package.json name resolution\n\n5.11.0 - (September 6, 2019)\n------------------\n### Changed\n* Cleaned up imports in examples and test files\n\n5.10.0 - (August 21, 2019)\n------------------\n### Changed\n* Replaced Object.assign syntax with Object spread syntax\n\n5.9.0 - (August 14, 2019)\n------------------\n### Changed\n* updated package.json test scripts\n\n5.8.0 - (July 30, 2019)\n------------------\n### Removed\n* Removed DEPENDENCIES.md file\n\n5.7.0 - (July 16, 2019)\n------------------\n### Added\n* Added documentation on required peerDependencies\n\n5.6.0 - (July 10, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.5.0 - (July 2, 2019)\n------------------\n### Changed\n* Removed all inline styles from Dev-site components and implemented the same styles using external css.\n* Renamed test and example SCSS files to end with `.module.scss` extension\n\n5.4.0 - (June 19, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n5.3.0 - (June 12, 2019)\n------------------\n### Removed\n* Removed node_modules from .npmignore\n\n### Changed\n* Update tests for terra-toolkit v5 and terra-dev-site v5 changes\n* Update wdio spec to use Terra.describeViewports\n\n5.2.0 - (May 21, 2019)\n------------------\n### Added\n* Added hard-coded breakpoint values to NavigationLayout.jsx\n\n### Removed\n* Removed dependency on terra-responsive-element\n\n5.1.0 - (May 15, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n5.0.0 - (May 13, 2019)\n------------------\n### Breaking Changes\n* Update react-router-dom peerDependency to latest stable major release\n\n4.5.0 - (April 24, 2019)\n------------------\n### Changed\n* Moved packages we use solely in doc examples and tests to devDependencies\n\n4.4.0 - (April 2, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n4.3.0 - (March 26, 2019)\n------------------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n4.2.0 - (February 13, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n4.1.0 - (February 5, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n4.0.0 - (January 25, 2019)\n------------------\n### Breaking Change\n* Updated terra-core dependencies\n\n### Changed\n* Remove the use of componentWillReceiveProps\n\n3.3.0 - (January 5, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n3.2.0 - (January 2, 2019)\n------------------\n### Changed\n* Updated readme so headings have logical nesting.\n\n3.1.0 - (December 5, 2018)\n------------------\n### Changed\n* Minor dependency update\n\n3.0.0 - (December 3, 2018)\n------------------\n### Breaking Change\n* Removed instances of the NavigationLayout and related components injecting an `app` prop into child components.\n\n### Removed\n* Removed dependency on terra-app-delegate package.\n\n2.22.0 - (November 15, 2018)\n------------------\n### Changed\n* Minor dependency update\n\n2.21.0 - (October 16, 2018)\n------------------\n### Changed\n* Minor dependency update\n\n2.20.0 - (October 8, 2018)\n------------------\n### Changed\n* Updated links in docs on supported features\n\n2.19.0 - (September 25, 2018)\n------------------\n### Changed\n* Minor dependency bump\n\n2.18.0 - (September 11, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.17.0 - (September 5, 2018)\n------------------\n### Changed\n* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n\n2.16.0 - (August 30, 2018)\n------------------\n### Changed\n* Formatting changes per eslint v5 update\n\n2.15.0 - (August 13, 2018)\n------------------\n### Changed\n* Formatting changes per eslint v4 update\n\n### Fixed\n* Lint errors regarding file path resolution\n\n2.14.0 - (July 26, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.13.0 - (July 25, 2018)\n------------------\n### Changed\n* Add .module extension to SCSS file(s)\n\n2.12.0 - (July 10, 2018)\n------------------\n### Changed\n* Remove dependency on terra-menu, update dependency on reponsive-element.\n\n2.11.0 - (July 3, 2018)\n------------------\n### Added\n* Change logs to documentation on terra-dev-site\n\n2.10.0 - (June 29, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.9.0 - (June 12, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.8.0 - (June 5, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.7.0 - (May 30, 2018)\n------------------\n### Changed\n* Moved examples to src\n\n2.6.0 - (May 22, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.5.0 - (April 30, 2018)\n------------------\n### Changed\n* Minor dependency updates\n* Do not release snapshots to npm\n\n2.4.0 - (April 13, 2018)\n-----------------\n### Changed\n* Dependencies are now pointing to react 16 version.\n\n2.3.0 - (April 10, 2018)\n-----------------\n### Changed\n* Minor dependency updates\n\n2.2.0 - (March 23, 2018)\n------------------\n### Changed\n* Updated webdriver snapshots due to terra-layout updates.\n\n2.1.0 - (March 6, 2018)\n------------------\n### Added\n* Added 'show' function to RoutingStackDelegate.\n* Added 'rejectRoutingStackNavigation' key to component configuration.\n* Added npmrc file with package-lock set to false.\n\n2.0.0 - (February 21, 2018)\n------------------\n### Changed\n* Updated to use React 16\n\n1.2.0 - (February 15, 2018)\n------------------\n### Changed\n* Updating tests to point to new terra-framework-site location.\n\n1.1.0 - (January 23, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n1.0.0 - (December 5, 2017)\n------------------\n* Initial release of terra-navigation-layout\n"},2309:function(n,e,d){"use strict";var a=d(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(d(0)),o=a(d(961)),r=a(d(2051)),p=function(){return t.default.createElement(o.default,{packageName:"terra-navigation-layout",srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-layout",readme:r.default})};e.default=p},962:function(n,e){}}]);
//# sourceMappingURL=344-7945b4418feb2583f1c3.js.map