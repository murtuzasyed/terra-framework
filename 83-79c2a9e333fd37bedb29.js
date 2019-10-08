(window.webpackJsonp=window.webpackJsonp||[]).push([[83,142,143,144,145],{1040:function(e,t,n){"use strict";var d=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(18)),o=d(n(32)),a=d(n(22)),s=d(n(23)),i=d(n(24)),l=d(n(25)),c=d(n(26)),m=d(n(0)),u=d(n(2));n(1066),n(1067);var p={children:u.default.node.isRequired},h=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,o.default)(e,["children"]);return m.default.createElement("div",(0,r.default)({"data-embedded-content-consumer-provider-test-template":!0},n),t)}}]),t}(m.default.Component);h.propTypes=p;var f=h;t.default=f},1041:function(e,t,n){e.exports={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___MHjKq"}},1066:function(e,t,n){},1067:function(e,t,n){},1353:function(e){e.exports=JSON.parse('{"name":"terra-embedded-content-consumer","main":"lib/EmbeddedContentConsumer.js","version":"3.16.0","description":"The Embedded Content Consumer is the application component which is embedding web content within it.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","terra-embedded-content-consumer","EmbeddedContentConsumer","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","xfc":"^1.2.1"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8"},"devDependencies":{"terra-doc-template":"^2.2.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1468:function(e,t,n){"use strict";var d=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),o=d(n(4)),a=d(n(1040)),s=d(n(1041)),i=o.default.bind(s.default),l=function(){return r.default.createElement(a.default,null,r.default.createElement("div",{className:i("content-wrapper")},r.default.createElement("h1",null,"Basic Content"),r.default.createElement("p",null,"This example demonstrates that the embedded content consumer will display the providers web content within an iframe.")))};t.default=l},1469:function(e,t,n){"use strict";var d=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(22)),o=d(n(23)),a=d(n(24)),s=d(n(25)),i=d(n(29)),l=d(n(26)),c=d(n(0)),m=n(215),u=d(n(4)),p=d(n(1040)),h=d(n(1041)),f=u.default.bind(h.default),b=function(e){function t(e){var n;return(0,r.default)(this,t),(n=(0,a.default)(this,(0,s.default)(t).call(this,e))).onClick=n.onClick.bind((0,i.default)(n)),n}return(0,l.default)(t,e),(0,o.default)(t,[{key:"onClick",value:function(){m.Provider.trigger("EventA")}},{key:"render",value:function(){return c.default.createElement("div",{className:f("content-wrapper")},c.default.createElement("h1",null,"Listening to Custom Event"),c.default.createElement("p",null,"A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. "),c.default.createElement("p",null,"This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker."),c.default.createElement("ol",null,c.default.createElement("li",null,c.default.createElement("p",null,"Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.")),c.default.createElement("li",null,c.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content"))),c.default.createElement("button",{id:"EventA",onClick:this.onClick,type:"button"},"Set Border Color!"))}}]),t}(c.default.Component),v=function(){return c.default.createElement(p.default,null,c.default.createElement(b,null))};t.default=v},1470:function(e,t,n){"use strict";var d=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(22)),o=d(n(23)),a=d(n(24)),s=d(n(25)),i=d(n(29)),l=d(n(26)),c=d(n(0)),m=n(215),u=d(n(4)),p=d(n(1040)),h=d(n(1041)),f=u.default.bind(h.default),b=function(e){function t(e){var n;return(0,r.default)(this,t),(n=(0,a.default)(this,(0,s.default)(t).call(this,e))).addEventListener=n.addEventListener.bind((0,i.default)(n)),n.onClickA=n.onClickA.bind((0,i.default)(n)),n.onClickB=n.onClickB.bind((0,i.default)(n)),n.addEventListener("Event-Reply"),n}return(0,l.default)(t,e),(0,o.default)(t,[{key:"onClickA",value:function(){m.Provider.trigger("EventA")}},{key:"onClickB",value:function(){m.Provider.trigger("EventB")}},{key:"addEventListener",value:function(e){m.Provider.on(e,(function(e){document.getElementById("embedded-content-consumer-reply").innerHTML="embedded-content-consumer reply: ".concat(JSON.stringify(e))}))}},{key:"render",value:function(){return c.default.createElement("div",{className:f("content-wrapper")},c.default.createElement("h1",null,"Communication Between the Consumer and Embedded Content"),c.default.createElement("p",null,"Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider."),c.default.createElement("p",null,"This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content."),c.default.createElement("ol",{id:"embedded-content-custom-events-communication-explination"},c.default.createElement("li",null,c.default.createElement("p",null,"Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.")),c.default.createElement("li",null,c.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.")),c.default.createElement("li",null,c.default.createElement("p",null,"Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.")),c.default.createElement("li",null,c.default.createElement("p",null,"The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider."))),c.default.createElement("p",null,"Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. "),c.default.createElement("button",{id:"EventA",onClick:this.onClickA,type:"button"},"Trigger Event A!"),c.default.createElement("button",{id:"EventB",onClick:this.onClickB,type:"button"},"Trigger Event B!"),c.default.createElement("div",{id:"embedded-content-consumer-reply"},"No message has been sent."))}}]),t}(c.default.Component),v=function(){return c.default.createElement(p.default,null,c.default.createElement(b,null))};t.default=v},1471:function(e,t,n){"use strict";var d=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),o=d(n(4)),a=d(n(1040)),s=d(n(1041)),i=o.default.bind(s.default),l=function(){return r.default.createElement(a.default,null,r.default.createElement("div",{className:i("content-wrapper")},r.default.createElement("h1",null,"Embedded Application Lifecycle"),r.default.createElement("p",null,"The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame."),r.default.createElement("p",null,"In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):"),r.default.createElement("ul",{id:"DataStatus-LifeCycleStatuses"})))};t.default=l},1925:function(e,t,n){"use strict";n.r(t),t.default="# Testing Embedded Content\n\nThe Embedded Content Provider Test Template is a test template component which should be used to verify that the provided content does indeed resize and behave as expected when embedded in an terra-embedded-content-consumer XFC Consumer iframe. \n\nBy default, when the embedded-content-consumer provides the iframe with the url of the embedded content, it will resize the iframe's height to be the height of the content supplied in the url. This resize logic, however, does not recognize height 100% and will continoulsy re-trigger resize events until the iframe collapes with a height of zero if the root style sets height to 100%. \n\nThis test template provides the styles needed to correctly set the iframed container's height to the actual height of the provided content when the XFC's default height resizing logic is triggered.\n"},1926:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport './ProviderIframe.module.scss';\nimport './ProviderTestTemplate.module.scss';\n\nconst propTypes = {\n  /**\n   * The content which will be embedded in an iframe by the XFC consumer.\n   */\n  children: PropTypes.node.isRequired,\n};\n\nclass EmbeddedContentProviderTestTemplate extends React.Component {\n  componentDidMount() {\n    document.body.classList.toggle('embedded-content-provider-test-template-body');\n  }\n\n  componentWillUnmount() {\n    document.body.classList.toggle('embedded-content-provider-test-template-body');\n  }\n\n  render() {\n    const {\n      children,\n      ...customProps\n    } = this.props;\n\n    return (\n      <div data-embedded-content-consumer-provider-test-template {...customProps}>\n        {children}\n      </div>\n    );\n  }\n}\n\nEmbeddedContentProviderTestTemplate.propTypes = propTypes;\n\nexport default EmbeddedContentProviderTestTemplate;\n"},1927:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from '../../../../EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Provider = () => (\n  <ProviderTestTemplate>\n    <div className={cx('content-wrapper')}>\n      <h1>Basic Content</h1>\n      <p>This example demonstrates that the embedded content consumer will display the providers web content within an iframe.</p>\n    </div>\n  </ProviderTestTemplate>\n);\n\nexport default Provider;\n"},1928:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { Provider } from 'xfc';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from '../../../../EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass EmbeddedContent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onClick = this.onClick.bind(this);\n  }\n\n  // eslint-disable-next-line\n  onClick() {\n    Provider.trigger('EventA');\n  }\n\n  render() {\n    return (\n      <div className={cx('content-wrapper')}>\n        <h1>Listening to Custom Event</h1>\n        <p>A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. </p>\n        <p>This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker.</p>\n        <ol>\n          <li><p>Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content</p></li>\n        </ol>\n        <button id=\"EventA\" onClick={this.onClick} type=\"button\">Set Border Color!</button>\n      </div>\n    );\n  }\n}\n\nconst CustomEventProvider = () => (\n  <ProviderTestTemplate>\n    <EmbeddedContent />\n  </ProviderTestTemplate>\n);\n\nexport default CustomEventProvider;\n"},1929:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { Provider } from 'xfc';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from '../../../../EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass EmbeddedContent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.addEventListener = this.addEventListener.bind(this);\n    this.onClickA = this.onClickA.bind(this);\n    this.onClickB = this.onClickB.bind(this);\n\n    this.addEventListener('Event-Reply');\n  }\n\n  // eslint-disable-next-line\n  onClickA() {\n    Provider.trigger('EventA');\n  }\n\n  // eslint-disable-next-line\n  onClickB() {\n    Provider.trigger('EventB');\n  }\n\n  // eslint-disable-next-line\n  addEventListener(eventName) {\n    Provider.on(eventName, (event) => {\n      document.getElementById('embedded-content-consumer-reply').innerHTML = `embedded-content-consumer reply: ${JSON.stringify(event)}`;\n    });\n  }\n\n  render() {\n    return (\n      <div className={cx('content-wrapper')}>\n        <h1>Communication Between the Consumer and Embedded Content</h1>\n        <p>Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider.</p>\n        <p>This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content.</p>\n        <ol id=\"embedded-content-custom-events-communication-explination\">\n          <li><p>Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.</p></li>\n          <li><p>Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider.</p></li>\n        </ol>\n        <p>Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. </p>\n        <button id=\"EventA\" onClick={this.onClickA} type=\"button\">Trigger Event A!</button>\n        <button id=\"EventB\" onClick={this.onClickB} type=\"button\">Trigger Event B!</button>\n        <div id=\"embedded-content-consumer-reply\">No message has been sent.</div>\n      </div>\n    );\n  }\n}\n\nconst CustomEventsProvider = () => (\n  <ProviderTestTemplate>\n    <EmbeddedContent />\n  </ProviderTestTemplate>\n);\n\nexport default CustomEventsProvider;\n"},1930:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from '../../../../EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DataStatusProvider2 = () => (\n  <ProviderTestTemplate>\n    <div className={cx('content-wrapper')}>\n      <h1>Embedded Application Lifecycle</h1>\n      <p>The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame.</p>\n      <p>In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):</p>\n      <ul id=\"DataStatus-LifeCycleStatuses\" />\n    </div>\n  </ProviderTestTemplate>\n);\n\nexport default DataStatusProvider2;\n"},2283:function(e,t,n){"use strict";var d=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),o=d(n(961)),a=d(n(1925)),s=n(1353),i=d(n(1926)),l=d(n(1468)),c=d(n(1927)),m=d(n(1469)),u=d(n(1928)),p=d(n(1470)),h=d(n(1929)),f=d(n(1471)),b=d(n(1930)),v=function(){return r.default.createElement(o.default,{packageName:s.name,readme:a.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(s.name),examples:[{title:" Provider for the Basic Consumer Example",example:r.default.createElement(l.default,null),source:c.default},{title:"Provider Content for the Lifecycle Statuses Consumer Example",example:r.default.createElement(f.default,null),source:b.default},{title:"Provider Content for the Custom Event Consumer Example",example:r.default.createElement(m.default,null),source:u.default},{title:"Provider Content for the Seamless Communication Consumer Example",example:r.default.createElement(p.default,null),source:h.default}],propsTables:[{componentName:"Embedded Content Provider Test Template",componentSrc:i.default}]})};t.default=v},962:function(e,t){}}]);
//# sourceMappingURL=83-79c2a9e333fd37bedb29.js.map