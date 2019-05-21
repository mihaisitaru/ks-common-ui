import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import {KsStateBehavior} from './behaviors/state-behavior';
import './ks-shared-styles';

/**
 * `ks-main-content`
 * ks main content
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsMainContent extends KsStateBehavior(PolymerElement) {
    static get template() {
        return html`
        <style include="ks-shared-styles">
            /* shadow DOM styles go here */
            :host {
                display: block;
                flex-grow: 1;
                flex-shrink: 0;
                word-break: break-word;
            }
        </style>

        <!-- shadow DOM for your element -->
        <slot></slot>

        `;
    }
    constructor() {
        super();
    }
    static get properties() {
        return {};
    }

    ready() {
        super.ready();
        var favicons = [{rel: "shortcut icon", href: "https://static.scania.com/resources/logotype/scania/favicon/favicon.ico"},
                      { rel: "apple-touch-icon", href: "https://static.scania.com/resources/logotype/scania/favicon/apple-icon-57x57.png", sizes: "57x57"},
                      { rel: "apple-touch-icon", href: "https://static.scania.com/resources/logotype/scania/favicon/apple-icon-60x60.png", sizes: "60x60"},
                      { rel: "apple-touch-icon", href: "https://static.scania.com/resources/logotype/scania/favicon/apple-icon-60x60.png", sizes: "60x60"},
                      { rel: "apple-touch-icon", href: "https://static.scania.com/resources/logotype/scania/favicon/apple-icon-76x76.png", sizes:"76x76"},
                      { rel: "apple-touch-icon", href: "https://static.scania.com/resources/logotype/scania/favicon/apple-icon-114x114.png", sizes: "114x114"},
                      { rel: "apple-touch-icon", href: "https://static.scania.com/resources/logotype/scania/favicon/apple-icon-120x120.png", sizes: "120x120"},
                      { rel: "apple-touch-icon", href: "https://static.scania.com/resources/logotype/scania/favicon/apple-icon-144x144.png", sizes: "144x144"},
                      { rel: "apple-touch-icon", href: "https://static.scania.com/resources/logotype/scania/favicon/apple-icon-152x152.png", sizes: "152x152"},
                      { rel: "apple-touch-icon", href: "https://static.scania.com/resources/logotype/scania/favicon/apple-icon-180x180.png", sizes: "180x180"},
                      { rel: "icon", href: "https://static.scania.com/resources/logotype/scania/favicon/android-icon-192x192.png", sizes: "192x192"},
                      { rel: "icon", href: "https://static.scania.com/resources/logotype/scania/favicon/favicon-32x32.png", sizes: "32x32"},
                      { rel: "icon", href: "https://static.scania.com/resources/logotype/scania/favicon/favicon-96x96.png", sizes: "96x96"},
                      { rel: "icon", href: "https://static.scania.com/resources/logotype/scania/favicon/favicon-16x16.png", sizes: "16x16"},
                      { rel: "manifest", href: "https://static.scania.com/resources/logotype/scania/favicon/manifest.json"}
                  ],
            metaData = [{name: "msapplication-TileColor", content: "#000"},
                {name: "msapplication-TileImage", content: "https://static.scania.com/resources/logotype/scania/favicon/ms-icon-144x144.png"}
            ],
            styleContent = 'body{display:flex;flex-direction:column;}[hidden]{display: none!important;}body[ks-primary-submenu-open] .navbar.navbar-default .container-fluid{background-color:#f7f7f7;}' +
                    'body[ks-primary-submenu-open] .collapse.navbar-collapse{margin-bottom:36px;background-color:#fff;}body[ks-main-header-hidden] .sticky-toolbar{top:58px;}' +
                    'body[ks-primary-submenu-open][ks-fullscreen-mode] .collapse.navbar-collapse{margin-bottom:0;}' +
                    'body[ks-sticky-mode] .sticky-toolbar{z-index:1011;top:55px;position:fixed;}body[ks-fullscreen-mode] .sticky-toolbar{top:5px;}' +
                    'body[ks-top-banner]:not([ks-main-header-hidden]):not([ks-sticky-mode]):not([ks-fullscreen-mode]) .sticky-toolbar{top:168px;}' +
                    'body[ks-top-banner][ks-main-header-hidden]:not([ks-sticky-mode]):not([ks-fullscreen-mode]) .sticky-toolbar{top:97px;}'+
                    'body > app-root, body > div {display: flex; flex-direction: column; margin: 0; height: 100vh;}' +
                    '@media (max-width: 991px) {body[ks-main-header-hidden] .navbar.navbar-default, ' +
                    'body[ks-main-header-hidden] .navbar.navbar-default .container-fluid{background-color:transparent;}' +
                    'body[ks-main-header-hidden] .navbar.navbar-default .navbar-header{border-bottom:none;}' +
                    'body[ks-main-header-hidden] .navbar.navbar-default .navbar-header button.navbar-toggle{border-right:none;left:19px}' +
                    'body[ks-main-header-hidden] .navbar.navbar-default .navbar-header button.navbar-toggle:focus{background-color:#f5f5f5;}' +
                    'body[ks-main-header-hidden] .navbar.navbar-default .navbar-header button.navbar-toggle:hover{background-color:#f5f5f5;}' +
                    'body[ks-main-header-hidden] .navbar.navbar-default .navbar-header button.navbar-toggle.collapsed{background-color:transparent;}}',
        style = document.createElement('style');
        style.textContent = styleContent;
        document.head.appendChild(style);
        favicons.forEach(function(favicon){
            var link = document.createElement('link');
            link.rel = favicon.rel;
            link.href = favicon.href;
            link.sizes = favicon.sizes;
            document.head.appendChild(link);
        });
        metaData.forEach(function(content){
            var meta = document.createElement('meta');
            meta.name = content.name;
            meta.content = content.content;
            document.head.appendChild(meta);
        });
        //this.unresolved();
    }
}

customElements.define('ks-main-content', KsMainContent);
