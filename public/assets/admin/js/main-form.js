;(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        '+5Qi': function(n, e, t) {
            'use strict'
            var a = t('8Rcn')
            t.n(a).a
        },
        '/Zxv': function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                '/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we\'ll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we\'re mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don\'t need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you\'d like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.block__content[data-v-bff2aa0a] {\n  display: none;\n  padding: 15px;\n  background: #fff;\n}\n.block--open > .block__content[data-v-bff2aa0a] {\n  display: block;\n}\n.block--open > .block__header[data-v-bff2aa0a] {\n  border-bottom: 1px solid #f2f2f2;\n}\n.block__header[data-v-bff2aa0a] {\n  height: 50px;\n  line-height: 50px;\n  background: #f4f9fd;\n  padding: 0 15px;\n  position: relative;\n  display: flex;\n  background-clip: padding-box;\n}\n.block__handle[data-v-bff2aa0a] {\n  position: absolute;\n  height: 10px;\n  width: 40px;\n  left: 50%;\n  top: 50%;\n  margin-left: -20px;\n  margin-top: -5px;\n  cursor: move;\n  background: repeating-linear-gradient(180deg, #bfbfbf 0, #bfbfbf 2px, transparent 2px, transparent 4px);\n}\n.block__handle[data-v-bff2aa0a]:before {\n  position: absolute;\n  display: block;\n  content: "";\n  background: repeating-linear-gradient(90deg, #f4f9fd 0, #f4f9fd 2px, transparent 2px, transparent 4px);\n  width: 100%;\n  height: 100%;\n}\n.block__counter[data-v-bff2aa0a] {\n  border: 1px solid #e5e5e5;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  text-align: center;\n  display: inline-block;\n  line-height: 25px;\n  margin-right: 10px;\n  background: #fff;\n  color: #8c8c8c;\n  -webkit-font-feature-settings: "kern";\n          font-feature-settings: "kern";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: default;\n  margin-top: 12px;\n}\n.dropdown .block__counter[data-v-bff2aa0a] {\n  cursor: pointer;\n}\n.dropdown .block__counter[data-v-bff2aa0a]:hover {\n  color: #262626;\n  border-color: #262626;\n}\n.dropdown--active .block__counter[data-v-bff2aa0a] {\n  color: #262626;\n  border-color: #262626;\n}\n.block__title[data-v-bff2aa0a] {\n  font-weight: 600;\n  height: 50px;\n  line-height: 50px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.block__toggle[data-v-bff2aa0a] {\n  flex-grow: 1;\n}\n.block__toggle .dropdown[data-v-bff2aa0a] {\n  display: inline-block;\n}\n.block__actions[data-v-bff2aa0a] {\n  text-align: right;\n  font-size: 0px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.block__actions > *[data-v-bff2aa0a] {\n  margin-left: 10px;\n  font-size: 15px;\n}\n.block__actions > button[data-v-bff2aa0a],\n.block__actions .dropdown[data-v-bff2aa0a],\n.block__actions .dropdown > button[data-v-bff2aa0a] {\n  display: inline-block;\n  vertical-align: top;\n  height: 26px;\n}\n.block__actions button[data-action][data-v-bff2aa0a] {\n  display: none;\n}\n.block__actions .dropdown--active button[data-action][data-v-bff2aa0a] {\n  display: inline-block;\n}\n.block__header[data-v-bff2aa0a]:hover {\n  background: #eaf4fa;\n}\n.block__header:hover .block__handle[data-v-bff2aa0a]:before {\n  background: repeating-linear-gradient(90deg, #eaf4fa 0, #eaf4fa 2px, transparent 2px, transparent 4px);\n}\n.block__header:hover button[data-action][data-v-bff2aa0a] {\n  display: inline-block;\n}\n.block__header:hover button[data-action][data-v-bff2aa0a],\n.block--focus .block__header button[data-action][data-v-bff2aa0a] {\n  display: inline-block;\n}\n\n/* Media field in block */\n.block__content > .media[data-v-bff2aa0a],\n.block__content > .slideshow[data-v-bff2aa0a],\n.block__content > .browserField[data-v-bff2aa0a] {\n  margin: -15px;\n  border: 0 none;\n}\n.block--small .block__header[data-v-bff2aa0a] {\n  background: #fbfbfb;\n}\n.block--small .block__header .block__handle[data-v-bff2aa0a] {\n  background: repeating-linear-gradient(180deg, #bfbfbf 0, #bfbfbf 2px, transparent 2px, transparent 4px);\n}\n.block--small .block__header .block__handle[data-v-bff2aa0a]:before {\n  background: repeating-linear-gradient(90deg, #fbfbfb 0, #fbfbfb 2px, transparent 2px, transparent 4px);\n}\n.block--small .block__header[data-v-bff2aa0a]:hover {\n  background: #f2f2f2;\n}\n.block--small .block__header:hover .block__handle[data-v-bff2aa0a]:before {\n  background: repeating-linear-gradient(90deg, #f2f2f2 0, #f2f2f2 2px, transparent 2px, transparent 4px);\n}\n.block--small .block__counter[data-v-bff2aa0a] {\n  display: none;\n}',
                '',
            ])
        },
        '/ztK': function(n, e, t) {
            var a = t('EjQq')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        '0V9B': function(n, e, t) {
            var a = t('601r')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        1: function(n, e, t) {
            n.exports = t('9hjz')
        },
        '1sNv': function(n, e, t) {
            var a = t('T7fi')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        '3fFh': function(n, e, t) {
            var a = t('e6+0')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        '3wGY': function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.revaccordion__scroller[data-v-78732ab8] {\n  height: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n  max-height: 165px;\n  margin: -12px -20px;\n}\n.revaccordion__list[data-v-78732ab8] {\n  padding: 12px 20px;\n}\n.revaccordion__item[data-v-78732ab8] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: no-wrap;\n  color: #8c8c8c;\n  padding: 7.5px 20px;\n  cursor: pointer;\n  margin-left: -20px;\n  margin-right: -20px;\n}\n.revaccordion__item[data-v-78732ab8]:hover {\n  color: #262626;\n  background: #f2f2f2;\n}\n.revaccordion__author[data-v-78732ab8] {\n  flex-grow: 1;\n}\n.revaccordion__datetime[data-v-78732ab8] {\n  color: #3278B8;\n  white-space: nowrap;\n  overflow: hidden;\n}",
                '',
            ])
        },
        '4PRQ': function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.content[data-v-e6eb7872] {\n  margin-top: 20px;\n}\n.content__content[data-v-e6eb7872] {\n  margin-bottom: 20px;\n}\n.content__content + .dropdown[data-v-e6eb7872] {\n  display: inline-block;\n}\n.content__item[data-v-e6eb7872] {\n  border: 1px solid #e5e5e5;\n  border-top: 0 none;\n}\n.content__item.sortable-ghost[data-v-e6eb7872] {\n  opacity: 0.5;\n}\n.content__item[data-v-e6eb7872]:first-child {\n  border-top: 1px solid #e5e5e5;\n}\n.content__trigger[data-v-e6eb7872] {\n  display: flex;\n}\n.content__button[data-v-e6eb7872] {\n  display: block;\n  width: 100%;\n  text-align: center;\n  margin-top: -5px;\n}\n.content__note[data-v-e6eb7872] {\n  flex-grow: 1;\n  text-align: right;\n}",
                '',
            ])
        },
        '4WHQ': function(n, e, t) {
            'use strict'
            var a = t('dCKn')
            t.n(a).a
        },
        '54yU': function(n, e, t) {
            var a = t('oAF4')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        '5DHK': function(n, e, t) {
            'use strict'
            var a = t('D6LV')
            t.n(a).a
        },
        '601r': function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.pagenav[data-v-11054c42] {\n  border-radius: 2px;\n  border: 1px solid #e5e5e5;\n  background: #fff;\n  margin-bottom: 20px;\n}\n.pagenav__form[data-v-11054c42] {\n  padding: 0 20px 20px 20px;\n  margin-top: -15px;\n}\n.pagenav__nav[data-v-11054c42] {\n  display: flex;\n}\n.pagenav__form + .pagenav__nav .pagenav__btn[data-v-11054c42] {\n  border-top: 1px solid #f2f2f2;\n}\n.pagenav__btn[data-v-11054c42] {\n  border-right: 1px solid #f2f2f2;\n  padding: 0 20px;\n  flex: 1 0 0px;\n  overflow: hidden;\n  height: 48px;\n  line-height: 48px;\n  text-decoration: none;\n  color: #8c8c8c;\n  opacity: 0.5;\n}\n.pagenav__btn[data-v-11054c42]:last-child {\n  border-right: 0 none;\n}\na.pagenav__btn[data-v-11054c42] {\n  opacity: 1;\n}\na.pagenav__btn[data-v-11054c42]:focus, a.pagenav__btn[data-v-11054c42]:hover {\n  color: #262626;\n  background: #fbfbfb;\n}\n.pagenav__btn + .pagenav__btn[data-v-11054c42] {\n  text-align: right;\n}",
                '',
            ])
        },
        '6f3J': function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                '.browser .browser__sources .browser__sources-select .input {\n  margin-top: 0;\n}\n.browser .browser__sources .browser__sources-select .vselect__field .dropdown-toggle {\n  height: 35px;\n}',
                '',
            ])
        },
        '7Oz9': function(n, e, t) {
            'use strict'
            t.r(e)
            var a = t('TlOf'),
                i = {
                    name: 'A17Block',
                    props: {
                        index: { type: Number, default: 0 },
                        opened: { type: Boolean, default: !0 },
                        closed: { type: Boolean, default: !1 },
                        size: { type: String, default: '' },
                        block: {
                            type: Object,
                            default: function() {
                                return {}
                            },
                        },
                    },
                    data: function() {
                        return {
                            visible: !0,
                            hover: !1,
                            withMoveDropdown: !0,
                            withAddDropdown: !0,
                        }
                    },
                    filters: a.a,
                    computed: {
                        blockClasses: function() {
                            return [
                                this.visible ? 'block--open' : '',
                                this.hover ? 'block--focus' : '',
                                this.size ? 'block--'.concat(this.size) : '',
                            ]
                        },
                        moveDropdown: function() {
                            return 'moveBlock'.concat(this.index, 'Dropdown')
                        },
                        actionsDropdown: function() {
                            return 'action'.concat(this.block.id, 'Dropdown')
                        },
                        addDropdown: function() {
                            return 'add'.concat(this.block.id, 'Dropdown')
                        },
                    },
                    watch: {
                        opened: function() {
                            this.opened || (this.visible = !1)
                        },
                        closed: function() {
                            this.closed || (this.visible = !0)
                        },
                    },
                    methods: {
                        toggleExpand: function() {
                            ;(this.visible = !this.visible),
                                this.$emit('expand', this.visible)
                        },
                        componentName: function(n) {
                            return 'blocks[' + n + ']'
                        },
                    },
                    beforeMount: function() {
                        this.$slots['dropdown-numbers'] ||
                            (this.withMoveDropdown = !1),
                            this.$slots['dropdown-add'] ||
                                (this.withAddDropdown = !1)
                    },
                },
                o = (t('4WHQ'), t('P+7G'), t('KHd+')),
                s = Object(o.a)(
                    i,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'div',
                            { staticClass: 'block', class: n.blockClasses },
                            [
                                t(
                                    'div',
                                    {
                                        staticClass: 'block__header',
                                        on: {
                                            dblclick: function(e) {
                                                e.preventDefault(),
                                                    n.toggleExpand()
                                            },
                                        },
                                    },
                                    [
                                        t('span', {
                                            staticClass: 'block__handle',
                                        }),
                                        n._v(' '),
                                        t(
                                            'div',
                                            { staticClass: 'block__toggle' },
                                            [
                                                n.withMoveDropdown
                                                    ? t(
                                                          'a17-dropdown',
                                                          {
                                                              ref:
                                                                  n.moveDropdown,
                                                              staticClass:
                                                                  'f--small',
                                                              attrs: {
                                                                  position:
                                                                      'bottom-left',
                                                                  maxHeight: 270,
                                                              },
                                                          },
                                                          [
                                                              t(
                                                                  'span',
                                                                  {
                                                                      staticClass:
                                                                          'block__counter f--tiny',
                                                                      on: {
                                                                          click: function(
                                                                              e,
                                                                          ) {
                                                                              n.$refs[
                                                                                  n
                                                                                      .moveDropdown
                                                                              ].toggle()
                                                                          },
                                                                      },
                                                                  },
                                                                  [
                                                                      n._v(
                                                                          n._s(
                                                                              n.index +
                                                                                  1,
                                                                          ),
                                                                      ),
                                                                  ],
                                                              ),
                                                              n._v(' '),
                                                              t(
                                                                  'div',
                                                                  {
                                                                      attrs: {
                                                                          slot:
                                                                              'dropdown__content',
                                                                      },
                                                                      slot:
                                                                          'dropdown__content',
                                                                  },
                                                                  [
                                                                      n._t(
                                                                          'dropdown-numbers',
                                                                      ),
                                                                  ],
                                                                  2,
                                                              ),
                                                          ],
                                                      )
                                                    : t(
                                                          'span',
                                                          {
                                                              staticClass:
                                                                  'block__counter f--tiny',
                                                          },
                                                          [
                                                              n._v(
                                                                  n._s(
                                                                      n.index +
                                                                          1,
                                                                  ),
                                                              ),
                                                          ],
                                                      ),
                                                n._v(' '),
                                                t(
                                                    'span',
                                                    {
                                                        staticClass:
                                                            'block__title',
                                                    },
                                                    [n._v(n._s(n.block.title))],
                                                ),
                                            ],
                                            1,
                                        ),
                                        n._v(' '),
                                        t(
                                            'div',
                                            { staticClass: 'block__actions' },
                                            [
                                                n._t('block-actions'),
                                                n._v(' '),
                                                n.withAddDropdown
                                                    ? t(
                                                          'a17-dropdown',
                                                          {
                                                              ref:
                                                                  n.addDropdown,
                                                              attrs: {
                                                                  position:
                                                                      'bottom-right',
                                                              },
                                                              on: {
                                                                  open: function(
                                                                      e,
                                                                  ) {
                                                                      n.hover = !0
                                                                  },
                                                                  close: function(
                                                                      e,
                                                                  ) {
                                                                      n.hover = !1
                                                                  },
                                                              },
                                                          },
                                                          [
                                                              t(
                                                                  'a17-button',
                                                                  {
                                                                      attrs: {
                                                                          variant:
                                                                              'icon',
                                                                          'data-action':
                                                                              '',
                                                                      },
                                                                      on: {
                                                                          click: function(
                                                                              e,
                                                                          ) {
                                                                              n.$refs[
                                                                                  n
                                                                                      .addDropdown
                                                                              ].toggle()
                                                                          },
                                                                      },
                                                                  },
                                                                  [
                                                                      t(
                                                                          'span',
                                                                          {
                                                                              directives: [
                                                                                  {
                                                                                      name:
                                                                                          'svg',
                                                                                      rawName:
                                                                                          'v-svg',
                                                                                  },
                                                                              ],
                                                                              attrs: {
                                                                                  symbol:
                                                                                      'add',
                                                                              },
                                                                          },
                                                                      ),
                                                                  ],
                                                              ),
                                                              n._v(' '),
                                                              t(
                                                                  'div',
                                                                  {
                                                                      attrs: {
                                                                          slot:
                                                                              'dropdown__content',
                                                                      },
                                                                      slot:
                                                                          'dropdown__content',
                                                                  },
                                                                  [
                                                                      n._t(
                                                                          'dropdown-add',
                                                                      ),
                                                                  ],
                                                                  2,
                                                              ),
                                                          ],
                                                          1,
                                                      )
                                                    : n._e(),
                                                n._v(' '),
                                                t(
                                                    'a17-button',
                                                    {
                                                        attrs: {
                                                            variant: 'icon',
                                                            'data-action': '',
                                                            'aria-expanded': n.visible
                                                                ? 'true'
                                                                : 'false',
                                                        },
                                                        on: {
                                                            click: function(e) {
                                                                n.toggleExpand()
                                                            },
                                                        },
                                                    },
                                                    [
                                                        t('span', {
                                                            directives: [
                                                                {
                                                                    name: 'svg',
                                                                    rawName:
                                                                        'v-svg',
                                                                },
                                                            ],
                                                            attrs: {
                                                                symbol:
                                                                    'expand',
                                                            },
                                                        }),
                                                    ],
                                                ),
                                                n._v(' '),
                                                t(
                                                    'a17-dropdown',
                                                    {
                                                        ref: n.actionsDropdown,
                                                        attrs: {
                                                            position:
                                                                'bottom-right',
                                                        },
                                                        on: {
                                                            open: function(e) {
                                                                n.hover = !0
                                                            },
                                                            close: function(e) {
                                                                n.hover = !1
                                                            },
                                                        },
                                                    },
                                                    [
                                                        t(
                                                            'a17-button',
                                                            {
                                                                attrs: {
                                                                    variant:
                                                                        'icon',
                                                                },
                                                                on: {
                                                                    click: function(
                                                                        e,
                                                                    ) {
                                                                        n.$refs[
                                                                            n
                                                                                .actionsDropdown
                                                                        ].toggle()
                                                                    },
                                                                },
                                                            },
                                                            [
                                                                t('span', {
                                                                    directives: [
                                                                        {
                                                                            name:
                                                                                'svg',
                                                                            rawName:
                                                                                'v-svg',
                                                                        },
                                                                    ],
                                                                    attrs: {
                                                                        symbol:
                                                                            'more-dots',
                                                                    },
                                                                }),
                                                            ],
                                                        ),
                                                        n._v(' '),
                                                        t(
                                                            'div',
                                                            {
                                                                attrs: {
                                                                    slot:
                                                                        'dropdown__content',
                                                                },
                                                                slot:
                                                                    'dropdown__content',
                                                            },
                                                            [
                                                                n._t(
                                                                    'dropdown-action',
                                                                ),
                                                            ],
                                                            2,
                                                        ),
                                                    ],
                                                    1,
                                                ),
                                            ],
                                            2,
                                        ),
                                    ],
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    {
                                        staticClass: 'block__content',
                                        attrs: {
                                            'aria-hidden': !n.visible || null,
                                        },
                                    },
                                    [
                                        t('a17-inputframe', {
                                            attrs: {
                                                size: 'small',
                                                label: '',
                                                name: 'block.' + n.block.id,
                                            },
                                        }),
                                        n._v(' '),
                                        t(
                                            '' + n.block.type,
                                            n._b(
                                                {
                                                    key:
                                                        '`form_${block.type}_${block.id}`',
                                                    tag: 'component',
                                                    attrs: {
                                                        name: n.componentName(
                                                            n.block.id,
                                                        ),
                                                    },
                                                },
                                                'component',
                                                n.block.attributes,
                                                !1,
                                            ),
                                        ),
                                    ],
                                    1,
                                ),
                            ],
                        )
                    },
                    [],
                    !1,
                    null,
                    'bff2aa0a',
                    null,
                )
            s.options.__file = 'Block.vue'
            e.default = s.exports
        },
        '7ymS': function(n, e, t) {
            'use strict'
            var a = t('KZPO')
            t.n(a).a
        },
        '83fg': function(n, e, t) {
            var a = t('aW/G')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        '8Rcn': function(n, e, t) {
            var a = t('rXe6')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        '9PQ/': function(n, e, t) {
            var a = t('rKNi')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        '9hjz': function(n, e, t) {
            'use strict'
            t.r(e)
            var a = t('XuX8'),
                i = t.n(a),
                o = t('L2JU'),
                s = t('FTnM'),
                r = t('BCmc'),
                l = t('8a/O'),
                c = t('+Z41'),
                m = t('sXHA'),
                u = (t('h4r+'), t('Fvk7')),
                d = t('sEfC'),
                p = t.n(d),
                h = t('LIM/'),
                f = {
                    name: 'A17StickyNav',
                    props: {
                        items: {
                            type: Array,
                            default: function() {
                                return []
                            },
                        },
                    },
                    data: function() {
                        return {
                            lastScrollPos: 0,
                            topOffset: 70,
                            ticking: !1,
                            navItems: this.items,
                            clickedFieldset: -1,
                            fieldset: [],
                        }
                    },
                    methods: {
                        getFieldsetPosition: function() {
                            var n = this
                            ;(this.lastScrollPos = window.pageYOffset),
                                this.navItems.forEach(function(e, t) {
                                    var a = n.fieldset[t],
                                        o = a
                                            ? a.getBoundingClientRect().top +
                                              n.lastScrollPos
                                            : 0
                                    i.a.set(e, 'position', o)
                                })
                        },
                        setActiveItems: function() {
                            var n = this,
                                e = 0
                            this.navItems.forEach(function(t, a) {
                                var o =
                                    t.position - n.topOffset < n.lastScrollPos
                                i.a.set(t, 'active', !1), o && a > 0 && (e = a)
                            }),
                                this.clickedFieldset >= 0
                                    ? i.a.set(
                                          n.navItems[n.clickedFieldset],
                                          'active',
                                          !0,
                                      )
                                    : i.a.set(n.navItems[e], 'active', !0)
                        },
                        refresh: function() {
                            ;(this.clickedFieldset = -1),
                                this.getFieldsetPosition(),
                                this.setActiveItems(),
                                (this.ticking = !1)
                        },
                        _resize: p()(function() {
                            ;(this.lastScrollPos = window.pageYOffset),
                                this.refresh()
                        }, 200),
                        _scroll: function() {
                            var n = this
                            ;(this.lastScrollPos = window.pageYOffset),
                                n.ticking ||
                                    window.requestAnimationFrame(function() {
                                        n.refresh(), (n.ticking = !1)
                                    }),
                                (n.ticking = !0)
                        },
                        scrollToFieldset: function(n) {
                            var e = this,
                                t =
                                    this.navItems[n].position -
                                    this.topOffset +
                                    1
                            this.dispose(),
                                (this.clickedFieldset = n),
                                this.getFieldsetPosition(),
                                this.setActiveItems(),
                                Object(h.a)({
                                    offset: t,
                                    easing: 'easeOut',
                                    onComplete: function() {
                                        e.init()
                                    },
                                })
                        },
                        init: function() {
                            window.addEventListener('scroll', this._scroll),
                                window.addEventListener('resize', this._resize)
                        },
                        dispose: function() {
                            window.removeEventListener('scroll', this._scroll),
                                window.removeEventListener(
                                    'resize',
                                    this._resize,
                                )
                        },
                    },
                    mounted: function() {
                        var n = this
                        this.navItems.forEach(function(e, t) {
                            var a = document.querySelector('#' + e.fieldset)
                            a ? n.fieldset.push(a) : n.fieldset.push(null)
                        }),
                            this.refresh(),
                            this.init()
                    },
                    beforeDestroy: function() {
                        this.dispose()
                    },
                },
                b = (t('rQG1'), t('KHd+')),
                v = Object(b.a)(
                    f,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t('div', { staticClass: 'stickyNav' }, [
                            t('div', { staticClass: 'container' }, [
                                t(
                                    'div',
                                    { staticClass: 'stickyNav__nav' },
                                    [
                                        n.navItems.length > 1
                                            ? t(
                                                  'div',
                                                  {
                                                      staticClass:
                                                          'stickyNav__links',
                                                  },
                                                  n._l(n.navItems, function(
                                                      e,
                                                      a,
                                                  ) {
                                                      return t(
                                                          'a',
                                                          {
                                                              key: e.fieldset,
                                                              class: {
                                                                  's--on':
                                                                      e.active,
                                                              },
                                                              attrs: {
                                                                  href: '#',
                                                              },
                                                              on: {
                                                                  click: function(
                                                                      e,
                                                                  ) {
                                                                      e.preventDefault(),
                                                                          n.scrollToFieldset(
                                                                              a,
                                                                          )
                                                                  },
                                                              },
                                                          },
                                                          [n._v(n._s(e.label))],
                                                      )
                                                  }),
                                              )
                                            : n._e(),
                                        n._v(' '),
                                        n._t('title'),
                                    ],
                                    2,
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    { staticClass: 'stickyNav__actions' },
                                    [n._t('actions')],
                                    2,
                                ),
                            ]),
                        ])
                    },
                    [],
                    !1,
                    null,
                    'f583b87e',
                    null,
                )
            v.options.__file = 'StickyNav.vue'
            var g = v.exports,
                _ = t('TlOf'),
                w = t('bZQg'),
                x = t('Ozf8'),
                k = t('8D5J'),
                y = t('fZ+V')
            function $(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var S = {
                    name: 'A17TitleEditor',
                    mixins: [k.a, y.a],
                    components: {
                        'a17-modal-validation': w.a,
                        'a17-langmanager': x.a,
                    },
                    props: {
                        modalTitle: { type: String, default: 'Update item' },
                        warningMessage: {
                            type: String,
                            default: 'Missing title',
                        },
                        name: { default: 'title' },
                        editableTitle: { type: Boolean, default: !0 },
                        customTitle: { type: String, default: '' },
                    },
                    data: function() {
                        return { disabled: !1 }
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    $(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            titleEditorClasses: function() {
                                return {
                                    'titleEditor--error':
                                        this.error ||
                                        this.title === this.warningMessage,
                                }
                            },
                            mode: function() {
                                return this.title.length > 0
                                    ? 'update'
                                    : 'create'
                            },
                            fullUrl: function() {
                                return (
                                    this.baseUrl
                                        .replace(
                                            '{language}',
                                            this.currentLocale.value,
                                        )
                                        .replace(
                                            '{preview}/',
                                            this.published
                                                ? ''
                                                : 'admin-preview/',
                                        ) + this.permalink
                                )
                            },
                            visibleUrl: function() {
                                return (
                                    this.baseUrl
                                        .replace(
                                            '{language}',
                                            this.currentLocale.value,
                                        )
                                        .replace('{preview}/', '') +
                                    this.permalink
                                )
                            },
                            title: function() {
                                var n = this.fieldValueByName(this.name)
                                    ? this.fieldValueByName(this.name)
                                    : ''
                                return (
                                    ('string' == typeof n
                                        ? n
                                        : n[this.currentLocale.value]) ||
                                    this.warningMessage
                                )
                            },
                            permalink: function() {
                                return this.fieldValueByName('slug')[
                                    this.currentLocale.value
                                ]
                            },
                        },
                        Object(o.c)({
                            baseUrl: function(n) {
                                return n.form.baseUrl
                            },
                            currentLocale: function(n) {
                                return n.language.active
                            },
                            languages: function(n) {
                                return n.language.all
                            },
                            fields: function(n) {
                                return n.form.fields
                            },
                            published: function(n) {
                                return n.publication.published
                            },
                        }),
                        Object(o.b)(['fieldValueByName']),
                    ),
                    filters: _.a,
                    methods: {
                        update: function() {
                            this.$refs.editModal.hide()
                        },
                        lockModal: function(n) {
                            this.disabled = n
                        },
                    },
                },
                P = (t('vGHV'),
                Object(b.a)(
                    S,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'div',
                            {
                                staticClass: 'titleEditor',
                                class: n.titleEditorClasses,
                            },
                            [
                                t(
                                    'div',
                                    { staticClass: 'titleEditor__preview' },
                                    [
                                        t(
                                            'h2',
                                            {
                                                staticClass:
                                                    'titleEditor__title',
                                                class: {
                                                    'titleEditor__title-only': !n.permalink,
                                                },
                                            },
                                            [
                                                n.editableTitle
                                                    ? t(
                                                          'a',
                                                          {
                                                              attrs: {
                                                                  href: '#',
                                                              },
                                                              on: {
                                                                  click: function(
                                                                      e,
                                                                  ) {
                                                                      e.preventDefault(),
                                                                          n.$refs.editModal.open()
                                                                  },
                                                              },
                                                          },
                                                          [
                                                              t(
                                                                  'span',
                                                                  {
                                                                      staticClass:
                                                                          'f--underlined--o',
                                                                  },
                                                                  [
                                                                      n._v(
                                                                          n._s(
                                                                              n.title,
                                                                          ),
                                                                      ),
                                                                  ],
                                                              ),
                                                              n._v(' '),
                                                              t('span', {
                                                                  directives: [
                                                                      {
                                                                          name:
                                                                              'svg',
                                                                          rawName:
                                                                              'v-svg',
                                                                      },
                                                                  ],
                                                                  attrs: {
                                                                      symbol:
                                                                          'edit',
                                                                  },
                                                              }),
                                                          ],
                                                      )
                                                    : t('span', [
                                                          n._v(
                                                              n._s(
                                                                  n.customTitle
                                                                      ? n.customTitle
                                                                      : n.title,
                                                              ),
                                                          ),
                                                      ]),
                                            ],
                                        ),
                                        n._v(' '),
                                        n.permalink
                                            ? t(
                                                  'a',
                                                  {
                                                      staticClass:
                                                          'titleEditor__permalink f--small',
                                                      attrs: {
                                                          href: n.fullUrl,
                                                          target: '_blank',
                                                      },
                                                  },
                                                  [
                                                      t(
                                                          'span',
                                                          {
                                                              staticClass:
                                                                  'f--note f--external f--underlined--o',
                                                          },
                                                          [
                                                              n._v(
                                                                  n._s(
                                                                      n._f(
                                                                          'prettierUrl',
                                                                      )(
                                                                          n.visibleUrl,
                                                                      ),
                                                                  ),
                                                              ),
                                                          ],
                                                      ),
                                                  ],
                                              )
                                            : n._e(),
                                        n._v(' '),
                                        t(
                                            'a17-modal',
                                            {
                                                ref: 'editModal',
                                                staticClass: 'modal--form',
                                                attrs: {
                                                    title: n.modalTitle,
                                                    forceLock: n.disabled,
                                                },
                                            },
                                            [
                                                t('a17-langmanager'),
                                                n._v(' '),
                                                t(
                                                    'form',
                                                    {
                                                        ref: 'modalForm',
                                                        attrs: { action: '#' },
                                                        on: {
                                                            submit: function(
                                                                e,
                                                            ) {
                                                                return (
                                                                    e.preventDefault(),
                                                                    n.update(e)
                                                                )
                                                            },
                                                        },
                                                    },
                                                    [
                                                        n._t('modal-form'),
                                                        n._v(' '),
                                                        t(
                                                            'a17-modal-validation',
                                                            {
                                                                attrs: {
                                                                    mode:
                                                                        n.mode,
                                                                },
                                                                on: {
                                                                    disable:
                                                                        n.lockModal,
                                                                },
                                                            },
                                                        ),
                                                    ],
                                                    2,
                                                ),
                                            ],
                                            1,
                                        ),
                                    ],
                                    1,
                                ),
                                n._v(' '),
                                n._t('default'),
                            ],
                            2,
                        )
                    },
                    [],
                    !1,
                    null,
                    '91723f64',
                    null,
                ))
            P.options.__file = 'TitleEditor.vue'
            var O = P.exports,
                B = t('QWhv'),
                C = t('dfuq'),
                E = t('O2hm'),
                N = t('6gjD'),
                A = t('WleU'),
                D = {
                    name: 'A17Radioaccordion',
                    components: { 'a17-accordion': N.a },
                    mixins: [A.a],
                    props: {
                        value: { default: '' },
                        title: { default: '' },
                        name: { default: '' },
                        radios: {
                            default: function() {
                                return []
                            },
                        },
                    },
                    data: function() {
                        return { currentValue: this.value }
                    },
                    computed: {
                        currentLabel: function() {
                            var n = this.radios.filter(this.isSameValue)
                            return n.length ? n[0].label : ''
                        },
                    },
                    methods: {
                        isSameValue: function(n) {
                            return n.value === this.currentValue
                        },
                        changeValue: function(n) {
                            ;(this.currentValue = n), this.$emit('change', n)
                        },
                        notifyOpen: function(n) {
                            this.$emit('open', n, this.$options.name)
                        },
                    },
                },
                T = Object(b.a)(
                    D,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'a17-accordion',
                            {
                                attrs: { open: n.open },
                                on: { toggleVisibility: n.notifyOpen },
                            },
                            [
                                t(
                                    'span',
                                    {
                                        attrs: { slot: 'accordion__title' },
                                        slot: 'accordion__title',
                                    },
                                    [n._t('default')],
                                    2,
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    {
                                        attrs: { slot: 'accordion__value' },
                                        slot: 'accordion__value',
                                    },
                                    [n._v(n._s(n.currentLabel))],
                                ),
                                n._v(' '),
                                t('a17-radiogroup', {
                                    attrs: {
                                        name: n.name,
                                        radios: n.radios,
                                        initialValue: n.currentValue,
                                    },
                                    on: { change: n.changeValue },
                                }),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            T.options.__file = 'RadioAccordion.vue'
            var R = T.exports,
                I = {
                    name: 'A17Reviewaccordion',
                    components: { 'a17-accordion': N.a },
                    mixins: [A.a],
                    props: {
                        value: {
                            default: function() {
                                return []
                            },
                        },
                        title: { type: String, default: '' },
                        name: { type: String, default: '' },
                        options: {
                            default: function() {
                                return []
                            },
                        },
                    },
                    data: function() {
                        return {
                            currentOptions: this.options,
                            currentValue: this.value,
                        }
                    },
                    computed: {
                        currentLabel: function() {
                            var n = 'Pending approval',
                                e = this.currentValue[
                                    this.currentValue.length - 1
                                ]
                            return (
                                this.currentValue.length &&
                                    this.options.forEach(function(t) {
                                        t.value === e && (n = t.display)
                                    }),
                                n
                            )
                        },
                    },
                    methods: {
                        changeValue: function(n) {
                            ;(this.currentValue = n),
                                this.$store.commit(r.m.UPDATE_REVIEW_PROCESS, n)
                        },
                        notifyOpen: function(n) {
                            this.$emit('open', n, this.$options.name)
                        },
                    },
                },
                F = Object(b.a)(
                    I,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'a17-accordion',
                            {
                                attrs: { open: n.open },
                                on: { toggleVisibility: n.notifyOpen },
                            },
                            [
                                t(
                                    'span',
                                    {
                                        attrs: { slot: 'accordion__title' },
                                        slot: 'accordion__title',
                                    },
                                    [n._t('default')],
                                    2,
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    {
                                        attrs: { slot: 'accordion__value' },
                                        slot: 'accordion__value',
                                    },
                                    [n._v(n._s(n.currentLabel))],
                                ),
                                n._v(' '),
                                t('a17-checkboxgroup', {
                                    attrs: {
                                        name: n.name,
                                        options: n.currentOptions,
                                        selected: n.currentValue,
                                    },
                                    on: { change: n.changeValue },
                                }),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            F.options.__file = 'ReviewAccordion.vue'
            var j = F.exports,
                L = {
                    name: 'A17Checkboxaccordion',
                    components: { 'a17-accordion': N.a },
                    mixins: [A.a],
                    props: {
                        value: {
                            default: function() {
                                return []
                            },
                        },
                        title: { type: String, default: '' },
                        name: { type: String, default: '' },
                        options: {
                            default: function() {
                                return []
                            },
                        },
                    },
                    data: function() {
                        return { currentValue: this.value }
                    },
                    watch: {
                        value: function(n) {
                            this.currentValue = n
                        },
                    },
                    computed: {
                        currentLabel: function() {
                            return this.currentValue.length + ' Live'
                        },
                    },
                    methods: {
                        changeValue: function(n) {
                            ;(this.currentValue = n),
                                this.$store.commit(r.g.PUBLISH_LANG, n)
                        },
                        notifyOpen: function(n) {
                            this.$emit('open', n, this.$options.name)
                        },
                    },
                },
                U = Object(b.a)(
                    L,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'a17-accordion',
                            {
                                attrs: { open: n.open },
                                on: { toggleVisibility: n.notifyOpen },
                            },
                            [
                                t(
                                    'span',
                                    {
                                        attrs: { slot: 'accordion__title' },
                                        slot: 'accordion__title',
                                    },
                                    [n._t('default')],
                                    2,
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    {
                                        attrs: { slot: 'accordion__value' },
                                        slot: 'accordion__value',
                                    },
                                    [n._v(n._s(n.currentLabel))],
                                ),
                                n._v(' '),
                                t('a17-checkboxgroup', {
                                    attrs: {
                                        name: n.name,
                                        options: n.options,
                                        selected: n.currentValue,
                                        min: 1,
                                    },
                                    on: { change: n.changeValue },
                                }),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            U.options.__file = 'CheckboxAccordion.vue'
            var M = U.exports,
                V = {
                    name: 'A17Revisions',
                    components: { 'a17-accordion': N.a },
                    mixins: [A.a],
                    props: {
                        revisions: {
                            default: function() {
                                return []
                            },
                        },
                    },
                    filters: _.a,
                    methods: {
                        notifyOpen: function(n) {
                            this.$emit('open', n, this.$options.name)
                        },
                        openPreview: function(n) {
                            this.$root.$refs.preview &&
                                this.$root.$refs.preview.open(parseInt(n))
                        },
                    },
                },
                z = (t('OoG9'),
                Object(b.a)(
                    V,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'a17-accordion',
                            {
                                attrs: { open: n.open },
                                on: { toggleVisibility: n.notifyOpen },
                            },
                            [
                                t(
                                    'span',
                                    {
                                        attrs: { slot: 'accordion__title' },
                                        slot: 'accordion__title',
                                    },
                                    [
                                        n._t('default'),
                                        n._v(' '),
                                        t(
                                            'span',
                                            { staticClass: 'f--small f--note' },
                                            [
                                                n._v(
                                                    '(' +
                                                        n._s(
                                                            n.revisions.length,
                                                        ) +
                                                        ')',
                                                ),
                                            ],
                                        ),
                                    ],
                                    2,
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    {
                                        attrs: { slot: 'accordion__value' },
                                        slot: 'accordion__value',
                                    },
                                    [
                                        n._v('Last edited '),
                                        t('timeago', {
                                            attrs: {
                                                'auto-update': 1,
                                                since: new Date(
                                                    n.revisions[0].datetime,
                                                ),
                                            },
                                        }),
                                    ],
                                    1,
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    { staticClass: 'revaccordion__scroller' },
                                    [
                                        t(
                                            'ul',
                                            {
                                                staticClass:
                                                    'revaccordion__list',
                                            },
                                            n._l(n.revisions, function(e, a) {
                                                return t(
                                                    'li',
                                                    {
                                                        key: e.id,
                                                        staticClass:
                                                            'revaccordion__item',
                                                    },
                                                    [
                                                        t(
                                                            'a',
                                                            {
                                                                attrs: {
                                                                    href: '#',
                                                                },
                                                                on: {
                                                                    click: function(
                                                                        t,
                                                                    ) {
                                                                        t.preventDefault(),
                                                                            n.openPreview(
                                                                                e.id,
                                                                            )
                                                                    },
                                                                },
                                                            },
                                                            [
                                                                t(
                                                                    'span',
                                                                    {
                                                                        staticClass:
                                                                            'revaccordion__author',
                                                                    },
                                                                    [
                                                                        n._v(
                                                                            n._s(
                                                                                e.author,
                                                                            ),
                                                                        ),
                                                                    ],
                                                                ),
                                                                n._v(' '),
                                                                t(
                                                                    'span',
                                                                    {
                                                                        staticClass:
                                                                            'revaccordion__datetime',
                                                                    },
                                                                    [
                                                                        0 === a
                                                                            ? t(
                                                                                  'span',
                                                                                  {
                                                                                      staticClass:
                                                                                          'tag',
                                                                                  },
                                                                                  [
                                                                                      n._v(
                                                                                          'Current',
                                                                                      ),
                                                                                  ],
                                                                              )
                                                                            : n._e(),
                                                                        n._v(
                                                                            ' ' +
                                                                                n._s(
                                                                                    n._f(
                                                                                        'formatDate',
                                                                                    )(
                                                                                        e.datetime,
                                                                                    ),
                                                                                ),
                                                                        ),
                                                                    ],
                                                                ),
                                                            ],
                                                        ),
                                                    ],
                                                )
                                            }),
                                        ),
                                    ],
                                ),
                            ],
                        )
                    },
                    [],
                    !1,
                    null,
                    '26d548bc',
                    null,
                ))
            z.options.__file = 'RevisionAccordion.vue'
            var q = z.exports
            function K(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var W = {
                    name: 'A17Pubaccordion',
                    components: { 'a17-accordion': N.a },
                    mixins: [A.a],
                    props: {
                        defaultStartDate: {
                            type: String,
                            default: 'Immediate',
                        },
                        defaultEndDate: { type: String, default: '' },
                    },
                    filters: _.a,
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    K(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {},
                        Object(o.c)({
                            startDate: function(n) {
                                return n.publication.startDate
                            },
                            endDate: function(n) {
                                return n.publication.endDate
                            },
                        }),
                    ),
                    methods: {
                        updateStartDate: function(n) {
                            this.$store.commit(r.m.UPDATE_PUBLISH_START_DATE, n)
                        },
                        updateEndDate: function(n) {
                            this.$store.commit(r.m.UPDATE_PUBLISH_END_DATE, n)
                        },
                        notifyOpen: function(n) {
                            this.$emit('open', n, this.$options.name)
                        },
                        openCalendar: function() {
                            setTimeout(function() {
                                document
                                    .querySelectorAll(
                                        '.accordion.s--open, .accordion.s--open .accordion__dropdown',
                                    )
                                    .forEach(function(n) {
                                        n.style.overflow = 'visible'
                                    })
                            }, 10)
                        },
                        openStartCalendar: function() {
                            this.openCalendar()
                        },
                        openEndCalendar: function() {
                            this.openCalendar()
                        },
                        closeCalendar: function() {
                            document
                                .querySelectorAll(
                                    '.accordion.s--open, .accordion.s--open .accordion__dropdown',
                                )
                                .forEach(function(n) {
                                    n.style.overflow = ''
                                })
                        },
                    },
                },
                H = Object(b.a)(
                    W,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'a17-accordion',
                            {
                                attrs: { open: n.open },
                                on: { toggleVisibility: n.notifyOpen },
                            },
                            [
                                t(
                                    'span',
                                    {
                                        attrs: { slot: 'accordion__title' },
                                        slot: 'accordion__title',
                                    },
                                    [n._t('default')],
                                    2,
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    {
                                        attrs: { slot: 'accordion__value' },
                                        slot: 'accordion__value',
                                    },
                                    [
                                        n.startDate
                                            ? [
                                                  n._v(
                                                      '\n      ' +
                                                          n._s(
                                                              n._f(
                                                                  'formatCalendarDate',
                                                              )(n.startDate),
                                                          ) +
                                                          '\n    ',
                                                  ),
                                              ]
                                            : [
                                                  n._v(
                                                      '\n      ' +
                                                          n._s(
                                                              n.defaultStartDate,
                                                          ) +
                                                          '\n    ',
                                                  ),
                                              ],
                                    ],
                                    2,
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    { staticClass: 'accordion__fields' },
                                    [
                                        t('a17-datepicker', {
                                            attrs: {
                                                name: 'publish_date',
                                                'place-holder': 'Start Date',
                                                initialValue: n.startDate,
                                                maxDate: n.endDate,
                                                enableTime: !0,
                                                allowInput: !0,
                                                staticMode: !0,
                                                clear: !0,
                                            },
                                            on: {
                                                open: n.openStartCalendar,
                                                close: n.closeCalendar,
                                                input: n.updateStartDate,
                                            },
                                        }),
                                        n._v(' '),
                                        t('a17-datepicker', {
                                            attrs: {
                                                name: 'end_date',
                                                'place-holder': 'End Date',
                                                initialValue: n.endDate,
                                                minDate: n.startDate,
                                                enableTime: !0,
                                                allowInput: !0,
                                                staticMode: !0,
                                                clear: !0,
                                            },
                                            on: {
                                                open: n.openEndCalendar,
                                                close: n.closeCalendar,
                                                input: n.updateEndDate,
                                            },
                                        }),
                                    ],
                                    1,
                                ),
                            ],
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            H.options.__file = 'PubAccordion.vue'
            var G = H.exports,
                Y = function(n, e) {
                    var t = []
                    return (
                        (function n(a, i) {
                            a.forEach(function(a) {
                                var o = {}
                                if (
                                    ((o.value = a.id),
                                    a.edit && (o.edit = a.edit),
                                    (o.label =
                                        (function(n) {
                                            return Array(n + 1).join(e) + ' '
                                        })(i) + a.name),
                                    t.push(o),
                                    a.children && a.children.length)
                                ) {
                                    var s = i + 1
                                    n(a.children, s)
                                }
                            })
                        })(n, 0),
                        t
                    )
                }
            function Q(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var X = {
                    name: 'A17Parents',
                    components: { 'a17-accordion': N.a },
                    mixins: [A.a],
                    props: {
                        value: { default: 0 },
                        parents: {
                            default: function() {
                                return []
                            },
                        },
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    Q(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            currentLabel: function() {
                                var n = this.options.filter(this.isSameValue)
                                return n.length ? n[0].label : ''
                            },
                            options: function() {
                                var n = Y(this.parents, '&nbsp;&nbsp;&nbsp;')
                                return (
                                    n.unshift({
                                        value: 0,
                                        label: '(No parent)',
                                    }),
                                    n
                                )
                            },
                        },
                        Object(o.c)({
                            currentValue: function(n) {
                                return n.parents.active
                            },
                        }),
                    ),
                    methods: {
                        isSameValue: function(n) {
                            return n.value === this.currentValue
                        },
                        updateSelected: function(n) {
                            this.$store.commit(r.k.UPDATE_PARENT, n)
                        },
                        notifyOpen: function(n) {
                            this.$emit('open', n, this.$options.name)
                        },
                    },
                },
                Z = (t('9wRs'),
                Object(b.a)(
                    X,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'a17-accordion',
                            {
                                attrs: { open: n.open },
                                on: { toggleVisibility: n.notifyOpen },
                            },
                            [
                                t(
                                    'span',
                                    {
                                        attrs: { slot: 'accordion__title' },
                                        slot: 'accordion__title',
                                    },
                                    [n._t('default')],
                                    2,
                                ),
                                n._v(' '),
                                t('div', {
                                    attrs: { slot: 'accordion__value' },
                                    domProps: {
                                        innerHTML: n._s(n.currentLabel),
                                    },
                                    slot: 'accordion__value',
                                }),
                                n._v(' '),
                                t(
                                    'div',
                                    { staticClass: 'accordion__fields' },
                                    [
                                        t('a17-select', {
                                            attrs: {
                                                name: 'parent_id',
                                                options: n.options,
                                                selected: n.currentValue,
                                                size: 'small',
                                            },
                                            on: { change: n.updateSelected },
                                        }),
                                    ],
                                    1,
                                ),
                            ],
                        )
                    },
                    [],
                    !1,
                    null,
                    '78732ab8',
                    null,
                ))
            Z.options.__file = 'ParentsAccordion.vue'
            var J = Z.exports,
                nn = {
                    name: 'A17Multibutton',
                    props: {
                        type: { default: 'button' },
                        options: {
                            default: function() {
                                return []
                            },
                        },
                    },
                    data: function() {
                        return {}
                    },
                    computed: {
                        otherOptions: function() {
                            return this.options.length
                                ? this.options.slice(1)
                                : []
                        },
                    },
                    methods: {
                        buttonClicked: function(n) {
                            this.$emit('button-clicked', n)
                        },
                    },
                },
                en = (t('Pj0O'),
                Object(b.a)(
                    nn,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'div',
                            { staticClass: 'multibutton' },
                            [
                                t(
                                    'a17-dropdown',
                                    {
                                        ref: 'submitDown',
                                        attrs: {
                                            position: 'bottom-right',
                                            width: 'full',
                                            offset: 0,
                                        },
                                    },
                                    [
                                        t(
                                            'a17-button',
                                            {
                                                attrs: {
                                                    type: n.type,
                                                    name: n.options[0].name,
                                                    variant: 'validate',
                                                },
                                                on: {
                                                    click: function(e) {
                                                        n.buttonClicked(
                                                            n.options[0].name,
                                                        )
                                                    },
                                                },
                                            },
                                            [n._v(n._s(n.options[0].text))],
                                        ),
                                        n._v(' '),
                                        n.otherOptions.length
                                            ? t(
                                                  'button',
                                                  {
                                                      staticClass:
                                                          'multibutton__trigger',
                                                      attrs: { type: 'button' },
                                                      on: {
                                                          click: function(e) {
                                                              n.$refs.submitDown.toggle()
                                                          },
                                                      },
                                                  },
                                                  [
                                                      t('span', {
                                                          directives: [
                                                              {
                                                                  name: 'svg',
                                                                  rawName:
                                                                      'v-svg',
                                                              },
                                                          ],
                                                          attrs: {
                                                              symbol:
                                                                  'dropdown_module',
                                                          },
                                                      }),
                                                  ],
                                              )
                                            : n._e(),
                                        n._v(' '),
                                        n.otherOptions.length
                                            ? t(
                                                  'div',
                                                  {
                                                      attrs: {
                                                          slot:
                                                              'dropdown__content',
                                                      },
                                                      slot: 'dropdown__content',
                                                  },
                                                  [
                                                      t(
                                                          'ul',
                                                          n._l(
                                                              n.otherOptions,
                                                              function(e) {
                                                                  return t(
                                                                      'li',
                                                                      {
                                                                          key:
                                                                              e.name,
                                                                      },
                                                                      [
                                                                          t(
                                                                              'button',
                                                                              {
                                                                                  attrs: {
                                                                                      type:
                                                                                          n.type,
                                                                                      name:
                                                                                          e.name,
                                                                                  },
                                                                                  on: {
                                                                                      click: function(
                                                                                          t,
                                                                                      ) {
                                                                                          n.buttonClicked(
                                                                                              e.name,
                                                                                          )
                                                                                      },
                                                                                  },
                                                                              },
                                                                              [
                                                                                  n._v(
                                                                                      n._s(
                                                                                          e.text,
                                                                                      ),
                                                                                  ),
                                                                              ],
                                                                          ),
                                                                      ],
                                                                  )
                                                              },
                                                          ),
                                                      ),
                                                  ],
                                              )
                                            : n._e(),
                                    ],
                                    1,
                                ),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    '4328497a',
                    null,
                ))
            en.options.__file = 'MultiButton.vue'
            var tn = en.exports
            function an(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var on = {
                    name: 'A17Publisher',
                    components: {
                        'a17-switcher': E.a,
                        'a17-radioaccordion': R,
                        'a17-checkboxaccordion': M,
                        'a17-reviewaccordion': j,
                        'a17-revaccordion': q,
                        'a17-parentaccordion': J,
                        'a17-pubaccordion': G,
                        'a17-multibutton': tn,
                    },
                    props: { showLanguages: { type: Boolean, default: !0 } },
                    data: function() {
                        return {
                            singleOpen: !0,
                            openStates: {
                                A17Reviewaccordion: !1,
                                A17Radioaccordion: !1,
                                A17Checkboxaccordion: !1,
                                A17Revisions: !1,
                                A17Pubaccordion: !1,
                                A17Parents: !1,
                            },
                        }
                    },
                    filters: _.a,
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    an(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            reviewProcessCompleteValues: function() {
                                var n = []
                                return (
                                    this.reviewProcessComplete.length &&
                                        this.reviewProcessComplete.forEach(
                                            function(e) {
                                                n.push(e.value)
                                            },
                                        ),
                                    n
                                )
                            },
                            submitOptions: function() {
                                return this.$store.getters.getSubmitOptions
                            },
                            publishedLanguagesValues: function() {
                                var n = []
                                return (
                                    this.publishedLanguages.length &&
                                        this.publishedLanguages.forEach(
                                            function(e) {
                                                n.push(e.value)
                                            },
                                        ),
                                    n
                                )
                            },
                        },
                        Object(o.c)({
                            languages: function(n) {
                                return n.language.all
                            },
                            revisions: function(n) {
                                return n.revision.all
                            },
                            parentId: function(n) {
                                return n.parents.active
                            },
                            parents: function(n) {
                                return n.parents.all
                            },
                            published: function(n) {
                                return n.publication.published
                            },
                            publishSubmit: function(n) {
                                return n.publication.publishSubmit
                            },
                            textEnabled: function(n) {
                                return n.publication.publishedLabel
                            },
                            textDisabled: function(n) {
                                return n.publication.draftLabel
                            },
                            withPublicationToggle: function(n) {
                                return n.publication.withPublicationToggle
                            },
                            withPublicationTimeframe: function(n) {
                                return n.publication.withPublicationTimeframe
                            },
                            visibility: function(n) {
                                return n.publication.visibility
                            },
                            visibilityOptions: function(n) {
                                return n.publication.visibilityOptions
                            },
                            reviewProcess: function(n) {
                                return n.publication.reviewProcess
                            },
                        }),
                        Object(o.b)([
                            'publishedLanguages',
                            'reviewProcessComplete',
                        ]),
                    ),
                    methods: {
                        buttonClicked: function(n) {
                            this.$store.commit(r.m.UPDATE_SAVE_TYPE, n)
                        },
                        openCloseAccordion: function(n, e) {
                            if (this.singleOpen)
                                if (n)
                                    for (var t in this.openStates)
                                        this.openStates[t] = t === e
                                else this.openStates[e] = !1
                        },
                        openPreview: function() {
                            this.$root.$refs.preview &&
                                this.$root.$refs.preview.open(0)
                        },
                        updateVisibility: function(n) {
                            this.$store.commit(r.m.UPDATE_PUBLISH_VISIBILITY, n)
                        },
                        openMoveToTrashModal: function() {
                            this.$parent.$refs.moveToTrashModal.open()
                        },
                    },
                },
                sn = (t('7ymS'),
                Object(b.a)(
                    on,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'div',
                            { staticClass: 'publisher__wrapper' },
                            [
                                n.withPublicationToggle
                                    ? t('a17-switcher', {
                                          attrs: {
                                              title: 'Status',
                                              name: 'publish_state',
                                              textEnabled: n.textEnabled,
                                              textDisabled: n.textDisabled,
                                          },
                                      })
                                    : n._e(),
                                n._v(' '),
                                n.reviewProcess && n.reviewProcess.length
                                    ? t(
                                          'a17-reviewaccordion',
                                          {
                                              attrs: {
                                                  options: n.reviewProcess,
                                                  name: 'review_process',
                                                  value:
                                                      n.reviewProcessCompleteValues,
                                                  open:
                                                      n.openStates
                                                          .A17Reviewaccordion,
                                              },
                                              on: {
                                                  open: n.openCloseAccordion,
                                              },
                                          },
                                          [n._v('Review status')],
                                      )
                                    : n._e(),
                                n._v(' '),
                                n.visibility &&
                                n.visibilityOptions &&
                                n.visibilityOptions.length
                                    ? t(
                                          'a17-radioaccordion',
                                          {
                                              attrs: {
                                                  radios: n.visibilityOptions,
                                                  name: 'visibility',
                                                  value: n.visibility,
                                                  open:
                                                      n.openStates
                                                          .A17Radioaccordion,
                                              },
                                              on: {
                                                  open: n.openCloseAccordion,
                                                  change: n.updateVisibility,
                                              },
                                          },
                                          [n._v('Visibility')],
                                      )
                                    : n._e(),
                                n._v(' '),
                                n.languages &&
                                n.showLanguages &&
                                n.languages.length > 1
                                    ? t(
                                          'a17-checkboxaccordion',
                                          {
                                              attrs: {
                                                  options: n.languages,
                                                  name: 'active_languages',
                                                  value:
                                                      n.publishedLanguagesValues,
                                                  open:
                                                      n.openStates
                                                          .A17Checkboxaccordion,
                                              },
                                              on: {
                                                  open: n.openCloseAccordion,
                                              },
                                          },
                                          [n._v('Languages')],
                                      )
                                    : n._e(),
                                n._v(' '),
                                n.withPublicationTimeframe
                                    ? t(
                                          'a17-pubaccordion',
                                          {
                                              attrs: {
                                                  open:
                                                      n.openStates
                                                          .A17Pubaccordion,
                                              },
                                              on: {
                                                  open: n.openCloseAccordion,
                                              },
                                          },
                                          [n._v('Published on')],
                                      )
                                    : n._e(),
                                n._v(' '),
                                n.revisions.length
                                    ? t(
                                          'a17-revaccordion',
                                          {
                                              attrs: {
                                                  open:
                                                      n.openStates.A17Revisions,
                                                  revisions: n.revisions,
                                              },
                                              on: {
                                                  open: n.openCloseAccordion,
                                              },
                                          },
                                          [n._v('Revisions')],
                                      )
                                    : n._e(),
                                n._v(' '),
                                n.parents.length
                                    ? t(
                                          'a17-parentaccordion',
                                          {
                                              attrs: {
                                                  open: n.openStates.A17Parents,
                                                  parents: n.parents,
                                                  value: n.parentId,
                                              },
                                              on: {
                                                  open: n.openCloseAccordion,
                                              },
                                          },
                                          [n._v('Parent page')],
                                      )
                                    : n._e(),
                                n._v(' '),
                                n.revisions.length
                                    ? t(
                                          'div',
                                          { staticClass: 'publisher__item' },
                                          [
                                              t(
                                                  'a',
                                                  {
                                                      staticClass:
                                                          'publisher__link',
                                                      attrs: { href: '#' },
                                                      on: {
                                                          click: function(e) {
                                                              return (
                                                                  e.preventDefault(),
                                                                  n.openPreview(
                                                                      e,
                                                                  )
                                                              )
                                                          },
                                                      },
                                                  },
                                                  [
                                                      t('span', {
                                                          directives: [
                                                              {
                                                                  name: 'svg',
                                                                  rawName:
                                                                      'v-svg',
                                                              },
                                                          ],
                                                          attrs: {
                                                              symbol: 'preview',
                                                          },
                                                      }),
                                                      t(
                                                          'span',
                                                          {
                                                              staticClass:
                                                                  'f--link-underlined--o',
                                                          },
                                                          [
                                                              n._v(
                                                                  'Preview changes',
                                                              ),
                                                          ],
                                                      ),
                                                  ],
                                              ),
                                          ],
                                      )
                                    : n._e(),
                                n._v(' '),
                                t(
                                    'div',
                                    {
                                        staticClass:
                                            'publisher__item publisher__item--btns',
                                    },
                                    [
                                        t('a17-multibutton', {
                                            attrs: {
                                                options: n.submitOptions,
                                                type: 'submit',
                                            },
                                            on: {
                                                'button-clicked':
                                                    n.buttonClicked,
                                            },
                                        }),
                                    ],
                                    1,
                                ),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    '8bbae9a8',
                    null,
                ))
            sn.options.__file = 'Publisher.vue'
            var rn = sn.exports
            function ln(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var cn = {
                    name: 'A17PageNav',
                    props: {
                        previousLabel: {
                            type: String,
                            default: 'Previous page',
                        },
                        nextLabel: { type: String, default: 'Next page' },
                        previousUrl: { type: String, default: '' },
                        nextUrl: { type: String, default: '' },
                        placeholder: { type: String, default: '' },
                    },
                    data: function() {
                        return {}
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    ln(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            hasUrl: function() {
                                return this.previousUrl || this.nextUrl
                            },
                            options: function() {
                                return Y(this.parents, '–')
                            },
                        },
                        Object(o.c)({
                            parents: function(n) {
                                return n.parents.all
                            },
                        }),
                    ),
                    methods: {
                        gotoUrl: function(n) {
                            n.edit && (window.location.href = n.edit)
                        },
                    },
                    beforeMount: function() {},
                },
                mn = (t('pzTV'),
                Object(b.a)(
                    cn,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return n.parents.length || n.hasUrl
                            ? t('div', { staticClass: 'pagenav' }, [
                                  n.parents.length
                                      ? t(
                                            'div',
                                            { staticClass: 'pagenav__form' },
                                            [
                                                t('a17-vselect', {
                                                    attrs: {
                                                        name: 'parents_sources',
                                                        placeholder:
                                                            n.placeholder,
                                                        size: 'large',
                                                        searchable: !0,
                                                        options: n.options,
                                                    },
                                                    on: { change: n.gotoUrl },
                                                }),
                                            ],
                                            1,
                                        )
                                      : n._e(),
                                  n._v(' '),
                                  n.hasUrl
                                      ? t(
                                            'nav',
                                            { staticClass: 'pagenav__nav' },
                                            [
                                                n.previousUrl
                                                    ? t(
                                                          'a',
                                                          {
                                                              staticClass:
                                                                  'pagenav__btn',
                                                              attrs: {
                                                                  href:
                                                                      n.previousUrl,
                                                              },
                                                          },
                                                          [
                                                              n._v(
                                                                  '← ' +
                                                                      n._s(
                                                                          n.previousLabel,
                                                                      ),
                                                              ),
                                                          ],
                                                      )
                                                    : t(
                                                          'span',
                                                          {
                                                              staticClass:
                                                                  'pagenav__btn',
                                                          },
                                                          [
                                                              n._v(
                                                                  '← ' +
                                                                      n._s(
                                                                          n.previousLabel,
                                                                      ),
                                                              ),
                                                          ],
                                                      ),
                                                n._v(' '),
                                                n.nextUrl
                                                    ? t(
                                                          'a',
                                                          {
                                                              staticClass:
                                                                  'pagenav__btn',
                                                              attrs: {
                                                                  href:
                                                                      n.nextUrl,
                                                              },
                                                          },
                                                          [
                                                              n._v(
                                                                  n._s(
                                                                      n.nextLabel,
                                                                  ) + ' →',
                                                              ),
                                                          ],
                                                      )
                                                    : t(
                                                          'span',
                                                          {
                                                              staticClass:
                                                                  'pagenav__btn',
                                                          },
                                                          [
                                                              n._v(
                                                                  n._s(
                                                                      n.nextLabel,
                                                                  ) + ' →',
                                                              ),
                                                          ],
                                                      ),
                                            ],
                                        )
                                      : n._e(),
                              ])
                            : n._e()
                    },
                    [],
                    !1,
                    null,
                    '11054c42',
                    null,
                ))
            mn.options.__file = 'PageNav.vue'
            var un = mn.exports,
                dn = t('FRYs'),
                pn = t.n(dn),
                hn = t('VCAz'),
                fn = t('FZxm'),
                bn = t('7Oz9')
            function vn(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var gn = {
                    name: 'A17Content',
                    components: { 'a17-block': bn.default, draggable: pn.a },
                    mixins: [hn.a, fn.a],
                    props: { title: { type: String, default: '' } },
                    data: function() {
                        return {
                            opened: !0,
                            closed: !1,
                            handle: '.block__handle',
                        }
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    vn(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            blocks: {
                                get: function() {
                                    return this.savedBlocks
                                },
                                set: function(n) {
                                    this.$store.commit(r.d.REORDER_BLOCKS, n)
                                },
                            },
                        },
                        Object(o.c)({
                            editor: function(n) {
                                return n.content.editor
                            },
                            savedBlocks: function(n) {
                                return n.content.blocks
                            },
                            availableBlocks: function(n) {
                                return n.content.available
                            },
                        }),
                    ),
                    methods: {
                        setOpened: function(n) {
                            this.$refs.blockList.every(function(n) {
                                return !n.visible
                            }) && ((this.opened = !1), (this.closed = !0)),
                                n && (this.opened = !0)
                        },
                        addDropdownId: function(n) {
                            return 'addBlock'.concat(n, 'Dropdown')
                        },
                        toggleDropdown: function(n) {
                            var e = this.addDropdownId(n),
                                t = this.$refs[e][0]
                            t && t.toggle()
                        },
                        moveBlock: function(n, e) {
                            n !== e &&
                                this.$store.commit(r.d.MOVE_BLOCK, {
                                    oldIndex: n,
                                    newIndex: e,
                                })
                        },
                        addBlock: function(n, e) {
                            this.opened = !0
                            var t = {
                                title: n.title,
                                type: n.component,
                                icon: n.icon,
                                attributes: n.attributes,
                            }
                            this.$store.commit(r.d.ADD_BLOCK, {
                                block: t,
                                index: e,
                            })
                        },
                        duplicateBlock: function(n) {
                            ;(this.opened = !0),
                                this.$store.commit(r.d.DUPLICATE_BLOCK, n)
                        },
                        deleteBlock: function(n) {
                            var e = this
                            this.$root.$refs.warningContentEditor
                                ? this.$root.$refs.warningContentEditor.open(
                                      function() {
                                          e.$store.commit(r.d.DELETE_BLOCK, n)
                                      },
                                  )
                                : this.$store.commit(r.d.DELETE_BLOCK, n)
                        },
                        collapseAllBlocks: function() {
                            ;(this.opened = !1), (this.closed = !0)
                        },
                        expandAllBlocks: function() {
                            ;(this.opened = !0), (this.closed = !1)
                        },
                    },
                    mounted: function() {
                        var n = this
                        this.$nextTick(function() {
                            n.savedBlocks.length > 3 && n.collapseAllBlocks()
                        })
                    },
                },
                _n = (t('x8Ls'),
                Object(b.a)(
                    gn,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'div',
                            { staticClass: 'content' },
                            [
                                t(
                                    'draggable',
                                    {
                                        staticClass: 'content__container',
                                        attrs: { options: n.dragOptions },
                                        model: {
                                            value: n.blocks,
                                            callback: function(e) {
                                                n.blocks = e
                                            },
                                            expression: 'blocks',
                                        },
                                    },
                                    [
                                        t(
                                            'transition-group',
                                            {
                                                attrs: {
                                                    name: 'draggable_list',
                                                    tag: 'div',
                                                },
                                            },
                                            n._l(n.blocks, function(e, a) {
                                                return t(
                                                    'div',
                                                    {
                                                        key: e.id,
                                                        staticClass:
                                                            'content__item',
                                                    },
                                                    [
                                                        t(
                                                            'a17-block',
                                                            {
                                                                ref:
                                                                    'blockList',
                                                                refInFor: !0,
                                                                attrs: {
                                                                    block: e,
                                                                    index: a,
                                                                    opened:
                                                                        n.opened,
                                                                    closed:
                                                                        n.closed,
                                                                },
                                                                on: {
                                                                    expand:
                                                                        n.setOpened,
                                                                },
                                                            },
                                                            [
                                                                n._l(
                                                                    n.availableBlocks,
                                                                    function(
                                                                        e,
                                                                    ) {
                                                                        return n
                                                                            .availableBlocks
                                                                            .length
                                                                            ? t(
                                                                                  'button',
                                                                                  {
                                                                                      key:
                                                                                          e.component,
                                                                                      attrs: {
                                                                                          slot:
                                                                                              'dropdown-add',
                                                                                          type:
                                                                                              'button',
                                                                                      },
                                                                                      on: {
                                                                                          click: function(
                                                                                              t,
                                                                                          ) {
                                                                                              n.addBlock(
                                                                                                  e,
                                                                                                  a +
                                                                                                      1,
                                                                                              )
                                                                                          },
                                                                                      },
                                                                                      slot:
                                                                                          'dropdown-add',
                                                                                  },
                                                                                  [
                                                                                      t(
                                                                                          'span',
                                                                                          {
                                                                                              directives: [
                                                                                                  {
                                                                                                      name:
                                                                                                          'svg',
                                                                                                      rawName:
                                                                                                          'v-svg',
                                                                                                  },
                                                                                              ],
                                                                                              attrs: {
                                                                                                  symbol:
                                                                                                      e.icon,
                                                                                              },
                                                                                          },
                                                                                      ),
                                                                                      n._v(
                                                                                          ' ' +
                                                                                              n._s(
                                                                                                  e.title,
                                                                                              ),
                                                                                      ),
                                                                                  ],
                                                                              )
                                                                            : n._e()
                                                                    },
                                                                ),
                                                                n._v(' '),
                                                                t(
                                                                    'div',
                                                                    {
                                                                        attrs: {
                                                                            slot:
                                                                                'dropdown-action',
                                                                        },
                                                                        slot:
                                                                            'dropdown-action',
                                                                    },
                                                                    [
                                                                        n.opened
                                                                            ? t(
                                                                                  'button',
                                                                                  {
                                                                                      attrs: {
                                                                                          type:
                                                                                              'button',
                                                                                      },
                                                                                      on: {
                                                                                          click: function(
                                                                                              e,
                                                                                          ) {
                                                                                              n.collapseAllBlocks()
                                                                                          },
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                      n._v(
                                                                                          'Collapse all',
                                                                                      ),
                                                                                  ],
                                                                              )
                                                                            : t(
                                                                                  'button',
                                                                                  {
                                                                                      attrs: {
                                                                                          type:
                                                                                              'button',
                                                                                      },
                                                                                      on: {
                                                                                          click: function(
                                                                                              e,
                                                                                          ) {
                                                                                              n.expandAllBlocks()
                                                                                          },
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                      n._v(
                                                                                          'Expand all',
                                                                                      ),
                                                                                  ],
                                                                              ),
                                                                        n._v(
                                                                            ' ',
                                                                        ),
                                                                        n.editor
                                                                            ? t(
                                                                                  'button',
                                                                                  {
                                                                                      attrs: {
                                                                                          type:
                                                                                              'button',
                                                                                      },
                                                                                      on: {
                                                                                          click: function(
                                                                                              e,
                                                                                          ) {
                                                                                              n.openEditor(
                                                                                                  a,
                                                                                              )
                                                                                          },
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                      n._v(
                                                                                          'Open in editor',
                                                                                      ),
                                                                                  ],
                                                                              )
                                                                            : n._e(),
                                                                        n._v(
                                                                            ' ',
                                                                        ),
                                                                        t(
                                                                            'button',
                                                                            {
                                                                                attrs: {
                                                                                    type:
                                                                                        'button',
                                                                                },
                                                                                on: {
                                                                                    click: function(
                                                                                        e,
                                                                                    ) {
                                                                                        n.duplicateBlock(
                                                                                            a,
                                                                                        )
                                                                                    },
                                                                                },
                                                                            },
                                                                            [
                                                                                n._v(
                                                                                    'Create another',
                                                                                ),
                                                                            ],
                                                                        ),
                                                                        n._v(
                                                                            ' ',
                                                                        ),
                                                                        t(
                                                                            'button',
                                                                            {
                                                                                attrs: {
                                                                                    type:
                                                                                        'button',
                                                                                },
                                                                                on: {
                                                                                    click: function(
                                                                                        e,
                                                                                    ) {
                                                                                        n.deleteBlock(
                                                                                            a,
                                                                                        )
                                                                                    },
                                                                                },
                                                                            },
                                                                            [
                                                                                n._v(
                                                                                    'Delete',
                                                                                ),
                                                                            ],
                                                                        ),
                                                                    ],
                                                                ),
                                                                n._v(' '),
                                                                n._l(
                                                                    n.blocks
                                                                        .length,
                                                                    function(
                                                                        e,
                                                                    ) {
                                                                        return t(
                                                                            'button',
                                                                            {
                                                                                key: e,
                                                                                attrs: {
                                                                                    slot:
                                                                                        'dropdown-numbers',
                                                                                    type:
                                                                                        'button',
                                                                                },
                                                                                on: {
                                                                                    click: function(
                                                                                        t,
                                                                                    ) {
                                                                                        n.moveBlock(
                                                                                            a,
                                                                                            e -
                                                                                                1,
                                                                                        )
                                                                                    },
                                                                                },
                                                                                slot:
                                                                                    'dropdown-numbers',
                                                                            },
                                                                            [
                                                                                n._v(
                                                                                    n._s(
                                                                                        e,
                                                                                    ),
                                                                                ),
                                                                            ],
                                                                        )
                                                                    },
                                                                ),
                                                            ],
                                                            2,
                                                        ),
                                                    ],
                                                    1,
                                                )
                                            }),
                                        ),
                                    ],
                                    1,
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    { staticClass: 'content__actions' },
                                    [
                                        n.availableBlocks.length
                                            ? t(
                                                  'a17-dropdown',
                                                  {
                                                      ref: 'blocksDropdown',
                                                      attrs: {
                                                          position:
                                                              'top-center',
                                                          arrow: !0,
                                                          offset: 10,
                                                          maxHeight: 430,
                                                      },
                                                  },
                                                  [
                                                      t(
                                                          'a17-button',
                                                          {
                                                              attrs: {
                                                                  size: 'small',
                                                                  variant:
                                                                      'action',
                                                              },
                                                              on: {
                                                                  click: function(
                                                                      e,
                                                                  ) {
                                                                      n.$refs.blocksDropdown.toggle()
                                                                  },
                                                              },
                                                          },
                                                          [n._v(n._s(n.title))],
                                                      ),
                                                      n._v(' '),
                                                      t(
                                                          'div',
                                                          {
                                                              attrs: {
                                                                  slot:
                                                                      'dropdown__content',
                                                              },
                                                              slot:
                                                                  'dropdown__content',
                                                          },
                                                          n._l(
                                                              n.availableBlocks,
                                                              function(e) {
                                                                  return t(
                                                                      'button',
                                                                      {
                                                                          key:
                                                                              e.component,
                                                                          attrs: {
                                                                              type:
                                                                                  'button',
                                                                          },
                                                                          on: {
                                                                              click: function(
                                                                                  t,
                                                                              ) {
                                                                                  n.addBlock(
                                                                                      e,
                                                                                      -1,
                                                                                  )
                                                                              },
                                                                          },
                                                                      },
                                                                      [
                                                                          t(
                                                                              'span',
                                                                              {
                                                                                  directives: [
                                                                                      {
                                                                                          name:
                                                                                              'svg',
                                                                                          rawName:
                                                                                              'v-svg',
                                                                                      },
                                                                                  ],
                                                                                  staticClass:
                                                                                      'content__icon',
                                                                                  attrs: {
                                                                                      symbol:
                                                                                          e.icon,
                                                                                  },
                                                                              },
                                                                          ),
                                                                          n._v(
                                                                              n._s(
                                                                                  e.title,
                                                                              ),
                                                                          ),
                                                                      ],
                                                                  )
                                                              },
                                                          ),
                                                      ),
                                                  ],
                                                  1,
                                              )
                                            : n._e(),
                                        n._v(' '),
                                        t(
                                            'div',
                                            {
                                                staticClass:
                                                    'content__secondaryActions',
                                            },
                                            [
                                                n.editor
                                                    ? t(
                                                          'a',
                                                          {
                                                              staticClass:
                                                                  'f--link f--link-underlined--o',
                                                              attrs: {
                                                                  href: '#',
                                                              },
                                                              on: {
                                                                  click: function(
                                                                      e,
                                                                  ) {
                                                                      e.preventDefault(),
                                                                          n.openEditor(
                                                                              -1,
                                                                          )
                                                                  },
                                                              },
                                                          },
                                                          [
                                                              n._v(
                                                                  'Open in editor',
                                                              ),
                                                          ],
                                                      )
                                                    : n._e(),
                                            ],
                                        ),
                                    ],
                                    1,
                                ),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    '032be055',
                    null,
                ))
            _n.options.__file = 'Content.vue'
            var wn = _n.exports
            function xn(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var kn = {
                    name: 'A17Repeater',
                    components: { 'a17-block': bn.default, draggable: pn.a },
                    mixins: [hn.a],
                    props: {
                        type: { type: String, required: !0 },
                        name: { type: String, required: !0 },
                    },
                    data: function() {
                        return { opened: !0, handle: '.block__handle' }
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    xn(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            triggerVariant: function() {
                                return this.inContentEditor
                                    ? 'aslink'
                                    : 'action'
                            },
                            triggerSize: function() {
                                return this.inContentEditor ? 'small' : ''
                            },
                            triggerClass: function() {
                                return this.inContentEditor
                                    ? 'content__button'
                                    : ''
                            },
                            blockSize: function() {
                                return this.inContentEditor ? 'small' : ''
                            },
                            inContentEditor: function() {
                                return void 0 !== this.$parent.repeaterName
                            },
                            hasRemainingBlocks: function() {
                                return (
                                    !this.blockType.hasOwnProperty('max') ||
                                    this.blockType.max > this.blocks.length
                                )
                            },
                            blockType: function() {
                                return this.availableBlocks[this.type]
                                    ? this.availableBlocks[this.type]
                                    : {}
                            },
                            blocks: {
                                get: function() {
                                    return (
                                        (this.savedBlocks.hasOwnProperty(
                                            this.name,
                                        ) &&
                                            this.savedBlocks[this.name]) ||
                                        []
                                    )
                                },
                                set: function(n) {
                                    this.$store.commit(
                                        r.f.REORDER_FORM_BLOCKS,
                                        {
                                            type: this.type,
                                            name: this.name,
                                            blocks: n,
                                        },
                                    )
                                },
                            },
                        },
                        Object(o.c)({
                            savedBlocks: function(n) {
                                return n.repeaters.repeaters
                            },
                            availableBlocks: function(n) {
                                return n.repeaters.availableRepeaters
                            },
                        }),
                    ),
                    methods: {
                        setOpened: function(n) {
                            this.opened = n
                        },
                        addBlock: function() {
                            ;(this.opened = !0),
                                this.$store.commit(r.f.ADD_FORM_BLOCK, {
                                    type: this.type,
                                    name: this.name,
                                })
                        },
                        duplicateBlock: function(n) {
                            ;(this.opened = !0),
                                this.$store.commit(r.f.DUPLICATE_FORM_BLOCK, {
                                    type: this.type,
                                    name: this.name,
                                    index: n,
                                })
                        },
                        deleteBlock: function(n) {
                            this.$store.commit(r.f.DELETE_FORM_BLOCK, {
                                type: this.type,
                                name: this.name,
                                index: n,
                            })
                        },
                        collapseAllBlocks: function() {
                            this.opened = !1
                        },
                    },
                    mounted: function() {
                        var n = this
                        this.$nextTick(function() {
                            n.savedBlocks.length > 0 && n.collapseAllBlocks()
                        })
                    },
                },
                yn = (t('pwep'),
                Object(b.a)(
                    kn,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'div',
                            { staticClass: 'content' },
                            [
                                t(
                                    'draggable',
                                    {
                                        staticClass: 'content__content',
                                        attrs: { options: n.dragOptions },
                                        model: {
                                            value: n.blocks,
                                            callback: function(e) {
                                                n.blocks = e
                                            },
                                            expression: 'blocks',
                                        },
                                    },
                                    [
                                        t(
                                            'transition-group',
                                            {
                                                attrs: {
                                                    name: 'draggable_list',
                                                    tag: 'div',
                                                },
                                            },
                                            n._l(n.blocks, function(e, a) {
                                                return t(
                                                    'div',
                                                    {
                                                        key: e.id,
                                                        staticClass:
                                                            'content__item',
                                                    },
                                                    [
                                                        t(
                                                            'a17-block',
                                                            {
                                                                attrs: {
                                                                    block: e,
                                                                    index: a,
                                                                    size:
                                                                        n.blockSize,
                                                                    opened:
                                                                        n.opened,
                                                                },
                                                                on: {
                                                                    open:
                                                                        n.setOpened,
                                                                },
                                                            },
                                                            [
                                                                n.hasRemainingBlocks
                                                                    ? t(
                                                                          'a17-button',
                                                                          {
                                                                              attrs: {
                                                                                  slot:
                                                                                      'block-actions',
                                                                                  variant:
                                                                                      'icon',
                                                                                  'data-action':
                                                                                      '',
                                                                              },
                                                                              on: {
                                                                                  click: function(
                                                                                      e,
                                                                                  ) {
                                                                                      n.duplicateBlock(
                                                                                          a,
                                                                                      )
                                                                                  },
                                                                              },
                                                                              slot:
                                                                                  'block-actions',
                                                                          },
                                                                          [
                                                                              t(
                                                                                  'span',
                                                                                  {
                                                                                      directives: [
                                                                                          {
                                                                                              name:
                                                                                                  'svg',
                                                                                              rawName:
                                                                                                  'v-svg',
                                                                                          },
                                                                                      ],
                                                                                      attrs: {
                                                                                          symbol:
                                                                                              'add',
                                                                                      },
                                                                                  },
                                                                              ),
                                                                          ],
                                                                      )
                                                                    : n._e(),
                                                                n._v(' '),
                                                                t(
                                                                    'div',
                                                                    {
                                                                        attrs: {
                                                                            slot:
                                                                                'dropdown-action',
                                                                        },
                                                                        slot:
                                                                            'dropdown-action',
                                                                    },
                                                                    [
                                                                        t(
                                                                            'button',
                                                                            {
                                                                                attrs: {
                                                                                    type:
                                                                                        'button',
                                                                                },
                                                                                on: {
                                                                                    click: function(
                                                                                        e,
                                                                                    ) {
                                                                                        n.collapseAllBlocks()
                                                                                    },
                                                                                },
                                                                            },
                                                                            [
                                                                                n._v(
                                                                                    'Collapse All',
                                                                                ),
                                                                            ],
                                                                        ),
                                                                        n._v(
                                                                            ' ',
                                                                        ),
                                                                        t(
                                                                            'button',
                                                                            {
                                                                                attrs: {
                                                                                    type:
                                                                                        'button',
                                                                                },
                                                                                on: {
                                                                                    click: function(
                                                                                        e,
                                                                                    ) {
                                                                                        n.deleteBlock(
                                                                                            a,
                                                                                        )
                                                                                    },
                                                                                },
                                                                            },
                                                                            [
                                                                                n._v(
                                                                                    'Delete',
                                                                                ),
                                                                            ],
                                                                        ),
                                                                        n._v(
                                                                            ' ',
                                                                        ),
                                                                        n.hasRemainingBlocks
                                                                            ? t(
                                                                                  'button',
                                                                                  {
                                                                                      attrs: {
                                                                                          type:
                                                                                              'button',
                                                                                      },
                                                                                      on: {
                                                                                          click: function(
                                                                                              e,
                                                                                          ) {
                                                                                              n.duplicateBlock(
                                                                                                  a,
                                                                                              )
                                                                                          },
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                      n._v(
                                                                                          'Duplicate',
                                                                                      ),
                                                                                  ],
                                                                              )
                                                                            : n._e(),
                                                                    ],
                                                                ),
                                                            ],
                                                            1,
                                                        ),
                                                    ],
                                                    1,
                                                )
                                            }),
                                        ),
                                    ],
                                    1,
                                ),
                                n._v(' '),
                                t(
                                    'div',
                                    { staticClass: 'content__trigger' },
                                    [
                                        n.hasRemainingBlocks &&
                                        n.blockType.trigger
                                            ? t(
                                                  'a17-button',
                                                  {
                                                      class: n.triggerClass,
                                                      attrs: {
                                                          variant:
                                                              n.triggerVariant,
                                                          size: n.triggerSize,
                                                      },
                                                      on: {
                                                          click: function(e) {
                                                              n.addBlock()
                                                          },
                                                      },
                                                  },
                                                  [
                                                      n._v(
                                                          n._s(
                                                              n.blockType
                                                                  .trigger,
                                                          ),
                                                      ),
                                                  ],
                                              )
                                            : n._e(),
                                        n._v(' '),
                                        t(
                                            'div',
                                            {
                                                staticClass:
                                                    'content__note f--note f--small',
                                            },
                                            [n._t('default')],
                                            2,
                                        ),
                                    ],
                                    1,
                                ),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    'e6eb7872',
                    null,
                ))
            yn.options.__file = 'Repeater.vue'
            var $n = yn.exports,
                Sn = t('Y+p1'),
                Pn = t.n(Sn),
                On = t('2m9a'),
                Bn = t('Z/9q'),
                Cn = t('endW'),
                En = 'Show&nbsp;map',
                Nn = 'Hide&nbsp;map',
                An =
                    window.hasOwnProperty('APIKEYS') &&
                    window.APIKEYS.hasOwnProperty('googleMapApi')
                        ? window.APIKEYS.googleMapApi
                        : null,
                Dn = {
                    name: 'A17Locationfield',
                    mixins: [On.a, k.a, y.a, Bn.a],
                    props: {
                        type: { type: String, default: 'text' },
                        zoom: { type: Number, default: 15 },
                        showMap: { type: Boolean, default: !0 },
                        openMap: { type: Boolean, default: !1 },
                        initialLat: { type: Number, default: null },
                        initialLng: { type: Number, default: null },
                    },
                    data: function() {
                        return {
                            map: null,
                            autocompletePlace: null,
                            markers: [],
                            address: '',
                            beforeFocusAddress: '',
                            lat: this.initialLat,
                            lng: this.initialLng,
                            focused: !1,
                            isMapOpen: this.openMap,
                            mapMessage: this.openMap ? Nn : En,
                        }
                    },
                    computed: {
                        value: {
                            get: function() {
                                return {
                                    latlng: this.lat + '|' + this.lng,
                                    address: this.address,
                                }
                            },
                            set: function(n) {
                                var e = n.latlng.split('|')
                                ;(this.lat = parseFloat(e[0])),
                                    (this.lng = parseFloat(e[e.length - 1])),
                                    (this.address = n.address)
                            },
                        },
                        textfieldClasses: function() {
                            return {
                                's--focus': this.focused,
                                's--disabled': this.disabled,
                            }
                        },
                    },
                    methods: {
                        updateFromStore: function(n) {
                            if (
                                !Pn()(n, this.value) &&
                                ((this.value = n),
                                this.clearMarkers(),
                                '' === this.address &&
                                    ((this.lat = this.initialLat),
                                    (this.lng = this.initialLng)),
                                this.lat && this.lng && this.map)
                            ) {
                                var e = { lat: this.lat, lng: this.lng }
                                this.addMarker(e), this.map.panTo(e)
                            }
                        },
                        onFocus: function(n) {
                            ;(this.focused = !0),
                                (this.beforeFocusAddress = this.address),
                                this.$emit('focus')
                        },
                        onBlur: function(n) {
                            ;(this.focused = !1),
                                '' === this.address &&
                                    (this.clearMarkers(),
                                    (this.lat = this.initialLat),
                                    (this.lng = this.initialLng)),
                                this.beforeFocusAddress !== this.address &&
                                    this.saveIntoStore(),
                                this.$emit('blur')
                        },
                        onInput: function(n) {
                            var e = n.target.value
                            ;(this.address = e), this.$emit('change', e)
                        },
                        onPlaceChanged: function() {
                            var n = this.autocompletePlace.getPlace()
                            if (
                                (this.clearMarkers(),
                                this.clearLatLng(),
                                n.geometry)
                            ) {
                                var e = n.geometry.location
                                ;(this.address = n.formatted_address),
                                    this.setLatLng(e),
                                    this.map &&
                                        (this.addMarker(e),
                                        this.map.panTo(e),
                                        this.map.setZoom(this.zoom))
                            }
                            ;(this.beforeFocusAddress = this.address),
                                this.saveIntoStore()
                        },
                        clearMarkers: function() {
                            for (var n = 0; n < this.markers.length; n++)
                                this.markers[n] && this.markers[n].setMap(null)
                            this.markers = []
                        },
                        clearLatLng: function() {
                            ;(this.lat = 0), (this.lng = 0)
                        },
                        addMarker: function(n) {
                            var e = new google.maps.Marker({
                                position: n,
                                map: this.map,
                            })
                            this.markers.push(e)
                        },
                        setLatLng: function(n) {
                            ;(this.lat = n.lat()), (this.lng = n.lng())
                        },
                        toggleMap: function() {
                            ;(this.isMapOpen = !this.isMapOpen),
                                (this.mapMessage = this.isMapOpen ? Nn : En),
                                this.map ||
                                    'undefined' == typeof google ||
                                    this.$nextTick(function() {
                                        this.initMap()
                                    })
                        },
                        initMap: function() {
                            var n = this.lat + this.lng,
                                e = {
                                    zoom: n ? this.zoom : 1,
                                    center: new google.maps.LatLng(
                                        this.lat,
                                        this.lng,
                                    ),
                                    mapTypeControl: !1,
                                    panControl: !1,
                                    zoomControl: !1,
                                    streetViewControl: !1,
                                },
                                t = document.createElement('div')
                            ;(t.className = 'form__map'),
                                this.$el
                                    .querySelector('.form__mapContainer')
                                    .appendChild(t),
                                (this.map = new google.maps.Map(t, e)),
                                n &&
                                    this.addMarker(
                                        new google.maps.LatLng(
                                            this.lat,
                                            this.lng,
                                        ),
                                    )
                        },
                        initGeocoder: function() {
                            var n = this
                            if (
                                ((this.autocompletePlace = new google.maps.places.Autocomplete(
                                    this.$el.querySelector(
                                        'input[type="search"]',
                                    ),
                                )),
                                google.maps.event.addListener(
                                    this.autocompletePlace,
                                    'place_changed',
                                    this.onPlaceChanged,
                                ),
                                '' === this.address && this.lat && this.lng)
                            ) {
                                var e = new google.maps.Geocoder(),
                                    t = { lat: this.lat, lng: this.lng }
                                e.geocode({ location: t }, function(e, t) {
                                    'OK' === t
                                        ? e[1]
                                            ? (n.address =
                                                  e[1].formatted_address)
                                            : console.info(
                                                  'Geocoding - No results found',
                                              )
                                        : console.warn(
                                              'Geocoding - Geocoder failed due to: ' +
                                                  t,
                                          )
                                })
                            }
                        },
                        initGoogleApi: function() {
                            this.initGeocoder(),
                                this.showMap && this.isMapOpen && this.initMap()
                        },
                    },
                    mounted: function() {
                        var n = this
                        if ('undefined' != typeof google) this.initGoogleApi()
                        else {
                            var e =
                                'https://maps.googleapis.com/maps/api/js?libraries=places&key=' +
                                An
                            Object(Cn.a)(
                                'google-map-api-script',
                                e,
                                'text/javascript',
                            ).then(function() {
                                n.initGoogleApi()
                            })
                        }
                    },
                    beforeDestroy: function() {
                        'undefined' != typeof google &&
                            google.maps.event.clearListeners(
                                this.autocompletePlace,
                                'place_changed',
                                this.onPlaceChanged,
                            )
                    },
                },
                Tn = (t('N+q5'),
                Object(b.a)(
                    Dn,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'a17-inputframe',
                            {
                                attrs: {
                                    error: n.error,
                                    note: n.note,
                                    locale: n.locale,
                                    label: n.label,
                                    name: n.name,
                                    required: n.required,
                                },
                                on: { localize: n.updateLocale },
                            },
                            [
                                t(
                                    'div',
                                    {
                                        staticClass: 'form__field',
                                        class: n.textfieldClasses,
                                    },
                                    [
                                        t('input', {
                                            attrs: {
                                                type: 'search',
                                                placeholder: n.placeholder,
                                                name: n.name,
                                                id: n.name,
                                                disabled: n.disabled,
                                                required: n.required,
                                                readonly: n.readonly,
                                                autofocus: n.autofocus,
                                                autocomplete: n.autocomplete,
                                            },
                                            domProps: { value: n.address },
                                            on: {
                                                focus: n.onFocus,
                                                blur: n.onBlur,
                                                input: n.onInput,
                                            },
                                        }),
                                        n._v(' '),
                                        n.showMap
                                            ? t(
                                                  'div',
                                                  {
                                                      staticClass:
                                                          'form__field--showMap',
                                                  },
                                                  [
                                                      t(
                                                          'a',
                                                          {
                                                              attrs: {
                                                                  href: '#',
                                                                  type:
                                                                      'button',
                                                              },
                                                              on: {
                                                                  click: function(
                                                                      e,
                                                                  ) {
                                                                      return (
                                                                          e.preventDefault(),
                                                                          n.toggleMap(
                                                                              e,
                                                                          )
                                                                      )
                                                                  },
                                                              },
                                                          },
                                                          [
                                                              t('span', {
                                                                  directives: [
                                                                      {
                                                                          name:
                                                                              'svg',
                                                                          rawName:
                                                                              'v-svg',
                                                                      },
                                                                  ],
                                                                  attrs: {
                                                                      symbol:
                                                                          'location',
                                                                  },
                                                              }),
                                                              t('span', {
                                                                  domProps: {
                                                                      innerHTML: n._s(
                                                                          n.mapMessage,
                                                                      ),
                                                                  },
                                                              }),
                                                          ],
                                                      ),
                                                  ],
                                              )
                                            : n._e(),
                                        n._v(' '),
                                        t('input', {
                                            attrs: {
                                                type: 'hidden',
                                                name: n.name + '__lat',
                                            },
                                            domProps: { value: n.lat },
                                        }),
                                        n._v(' '),
                                        t('input', {
                                            attrs: {
                                                type: 'hidden',
                                                name: n.name + '__lng',
                                            },
                                            domProps: { value: n.lng },
                                        }),
                                    ],
                                ),
                                n._v(' '),
                                n.showMap
                                    ? t('div', {
                                          directives: [
                                              {
                                                  name: 'show',
                                                  rawName: 'v-show',
                                                  value: n.isMapOpen,
                                                  expression: 'isMapOpen',
                                              },
                                          ],
                                          staticClass: 'form__mapContainer',
                                      })
                                    : n._e(),
                            ],
                        )
                    },
                    [],
                    !1,
                    null,
                    '0332eb6e',
                    null,
                ))
            Tn.options.__file = 'LocationField.vue'
            var Rn = Tn.exports,
                In = t('uM7l'),
                Fn = t.n(In)
            function jn(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var Ln = {
                    name: 'A17ConnectorField',
                    props: {
                        fieldName: { type: String, required: !0 },
                        requiredFieldValues: { default: '' },
                        inModal: { type: Boolean, default: !1 },
                        keepAlive: { type: Boolean, default: !1 },
                        isValueEqual: { type: Boolean, default: !0 },
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    jn(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            storedValue: function() {
                                return this.inModal
                                    ? this.modalFieldValueByName(this.fieldName)
                                    : this.fieldValueByName(this.fieldName)
                            },
                        },
                        Object(o.b)([
                            'fieldValueByName',
                            'modalFieldValueByName',
                        ]),
                        Object(o.c)({
                            fields: function(n) {
                                return n.form.fields
                            },
                            modalFields: function(n) {
                                return n.form.modalFields
                            },
                        }),
                    ),
                    data: function() {
                        return { open: !1 }
                    },
                    watch: {
                        storedValue: function(n) {
                            this.toggleVisibility(n)
                        },
                    },
                    methods: {
                        toggleVisibility: function(n) {
                            var e = Fn()(n),
                                t = Fn()(this.requiredFieldValues)
                            Array.isArray(t) && t.sort(),
                                Array.isArray(e) && e.sort(),
                                this.isValueEqual
                                    ? (this.open = Pn()(e, t))
                                    : (this.open = !Pn()(e, t))
                        },
                    },
                    mounted: function() {
                        var n = this
                        this.$nextTick(function() {
                            n.toggleVisibility(this.storedValue)
                        })
                    },
                },
                Un = Object(b.a)(
                    Ln,
                    function() {
                        var n = this.$createElement,
                            e = this._self._c || n
                        return e(
                            'div',
                            [
                                this.keepAlive
                                    ? [
                                          e(
                                              'div',
                                              {
                                                  directives: [
                                                      {
                                                          name: 'show',
                                                          rawName: 'v-show',
                                                          value: this.open,
                                                          expression: 'open',
                                                      },
                                                  ],
                                              },
                                              [this._t('default')],
                                              2,
                                          ),
                                      ]
                                    : [
                                          this.open
                                              ? e(
                                                    'div',
                                                    [this._t('default')],
                                                    2,
                                                )
                                              : this._e(),
                                      ],
                            ],
                            2,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            Un.options.__file = 'ConnectorField.vue'
            var Mn = Un.exports,
                Vn = t('XRbP'),
                zn = t('GADm'),
                qn = t('T+6o')
            function Kn(n) {
                return (
                    (function(n) {
                        if (Array.isArray(n)) {
                            for (
                                var e = 0, t = new Array(n.length);
                                e < n.length;
                                e++
                            )
                                t[e] = n[e]
                            return t
                        }
                    })(n) ||
                    (function(n) {
                        if (
                            Symbol.iterator in Object(n) ||
                            '[object Arguments]' ===
                                Object.prototype.toString.call(n)
                        )
                            return Array.from(n)
                    })(n) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance',
                        )
                    })()
                )
            }
            function Wn(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var Hn = {
                    name: 'A17Browser',
                    components: { 'a17-filter': Vn.a, 'a17-itemlist': zn.a },
                    props: {
                        btnLabel: { type: String, default: 'Insert' },
                        btnMultiLabel: {
                            type: String,
                            default: 'Insert files',
                        },
                        initialPage: { type: Number, default: 1 },
                    },
                    data: function() {
                        return {
                            maxPage: 20,
                            fullItems: [],
                            listHeight: 0,
                            page: this.initialPage,
                        }
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    Wn(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            currentEndpoint: function() {
                                var n = this
                                return this.endpoints.find(function(e) {
                                    return e.value === n.endpoint
                                })
                            },
                            multiSources: function() {
                                return this.endpoints.length > 0
                            },
                            selectedItems: {
                                get: function() {
                                    return this.selected[this.connector] || []
                                },
                                set: function(n) {
                                    this.$store.commit(r.b.SAVE_ITEMS, n)
                                },
                            },
                        },
                        Object(o.c)({
                            connector: function(n) {
                                return n.browser.connector
                            },
                            max: function(n) {
                                return n.browser.max
                            },
                            endpoint: function(n) {
                                return n.browser.endpoint
                            },
                            endpointName: function(n) {
                                return n.browser.endpointName
                            },
                            endpoints: function(n) {
                                return n.browser.endpoints
                            },
                            browserTitle: function(n) {
                                return n.browser.title
                            },
                            selected: function(n) {
                                return n.browser.selected
                            },
                        }),
                    ),
                    methods: {
                        updateSelectedItems: function(n) {
                            var e = this.multiSources
                                ? ['id', 'endpointType']
                                : ['id']
                            if (
                                this.fullItems.some(function(t) {
                                    return e.every(function(e) {
                                        return t[e] === n[e]
                                    })
                                })
                            )
                                if (
                                    this.selectedItems.some(function(t) {
                                        return e.every(function(e) {
                                            return t[e] === n[e]
                                        })
                                    })
                                ) {
                                    var t = this.selectedItems.findIndex(
                                        function(t) {
                                            return e.every(function(e) {
                                                return t[e] === n[e]
                                            })
                                        },
                                    )
                                    if (t < 0) return
                                    var a = Kn(this.selectedItems)
                                    a.splice(t, 1), (this.selectedItems = a)
                                } else {
                                    if (
                                        (1 === this.max &&
                                            this.clearSelectedItems(),
                                        this.selectedItems.length >= this.max &&
                                            this.max > 0)
                                    )
                                        return
                                    this.selectedItems = [].concat(
                                        Kn(this.selectedItems),
                                        [n],
                                    )
                                }
                        },
                        getFormData: function(n) {
                            var e = Object(qn.a)(n)
                            return (
                                e
                                    ? (e.page = this.page)
                                    : (e = { page: this.page }),
                                e
                            )
                        },
                        clearSelectedItems: function() {
                            this.selectedItems = []
                        },
                        clearFullItems: function() {
                            this.fullItems.splice(0)
                        },
                        reloadList: function() {
                            var n = this,
                                e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0]
                            e && (this.page = 1)
                            var t = this.$refs.form,
                                a = this.$refs.list,
                                i = this.getFormData(t)
                            this.$http.get(this.endpoint, { params: i }).then(
                                function(t) {
                                    var i
                                    e && n.clearFullItems(),
                                        (i = n.fullItems).push.apply(
                                            i,
                                            Kn(t.data.data),
                                        ),
                                        n.$nextTick(function() {
                                            n.listHeight !== a.scrollHeight &&
                                                ((n.listHeight =
                                                    a.scrollHeight),
                                                a.addEventListener(
                                                    'scroll',
                                                    n.scrollToPaginate,
                                                ))
                                        })
                                },
                                function(n) {},
                            )
                        },
                        submitFilter: function() {
                            ;(this.page = 1),
                                this.clearFullItems(),
                                this.reloadList()
                        },
                        scrollToPaginate: function() {
                            var n = this.$refs.list
                            n.scrollTop + n.clientHeight >
                                this.listHeight - 10 &&
                                (n.removeEventListener(
                                    'scroll',
                                    this.scrollToPaginate,
                                ),
                                this.maxPage > this.page &&
                                    ((this.page = this.page + 1),
                                    this.reloadList()))
                        },
                        saveAndClose: function() {
                            this.$store.commit(
                                r.b.SAVE_ITEMS,
                                this.selectedItems,
                            ),
                                this.$parent.close()
                        },
                        changeBrowserSource: function(n) {
                            this.$store.commit(r.b.UPDATE_BROWSER_ENDPOINT, n),
                                this.reloadList(!0)
                        },
                    },
                    mounted: function() {
                        this.reloadList()
                    },
                },
                Gn = (t('r5O6'),
                t('zwUX'),
                Object(b.a)(
                    Hn,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t('div', { staticClass: 'browser' }, [
                            t('div', { staticClass: 'browser__frame' }, [
                                t(
                                    'div',
                                    {
                                        ref: 'form',
                                        staticClass: 'browser__header',
                                    },
                                    [
                                        n.multiSources
                                            ? t(
                                                  'div',
                                                  {
                                                      staticClass:
                                                          'browser__sources',
                                                  },
                                                  [
                                                      t('a17-vselect', {
                                                          staticClass:
                                                              'browser__sources-select',
                                                          attrs: {
                                                              name: 'sources',
                                                              selected:
                                                                  n.currentEndpoint,
                                                              options:
                                                                  n.endpoints,
                                                              required: !0,
                                                          },
                                                          on: {
                                                              change:
                                                                  n.changeBrowserSource,
                                                          },
                                                      }),
                                                  ],
                                                  1,
                                              )
                                            : n._e(),
                                        n._v(' '),
                                        t(
                                            'div',
                                            { staticClass: 'browser__search' },
                                            [
                                                t('a17-filter', {
                                                    on: {
                                                        submit: n.submitFilter,
                                                    },
                                                }),
                                            ],
                                            1,
                                        ),
                                    ],
                                ),
                                n._v(' '),
                                t('div', { staticClass: 'browser__inner' }, [
                                    t(
                                        'div',
                                        {
                                            ref: 'list',
                                            staticClass: 'browser__list',
                                        },
                                        [
                                            t('a17-itemlist', {
                                                attrs: {
                                                    items: n.fullItems,
                                                    keysToCheck: ['id', 'edit'],
                                                    selectedItems:
                                                        n.selectedItems,
                                                },
                                                on: {
                                                    change:
                                                        n.updateSelectedItems,
                                                },
                                            }),
                                        ],
                                        1,
                                    ),
                                ]),
                                n._v(' '),
                                t(
                                    'div',
                                    { staticClass: 'browser__footer' },
                                    [
                                        t(
                                            'a17-button',
                                            {
                                                attrs: {
                                                    type: 'button',
                                                    variant: 'action',
                                                },
                                                on: { click: n.saveAndClose },
                                            },
                                            [n._v(n._s(n.browserTitle))],
                                        ),
                                        n._v(' '),
                                        t(
                                            'span',
                                            {
                                                staticClass:
                                                    'browser__size-infos',
                                            },
                                            [
                                                n._v(
                                                    n._s(
                                                        n.selectedItems.length,
                                                    ) +
                                                        ' / ' +
                                                        n._s(n.max),
                                                ),
                                            ],
                                        ),
                                    ],
                                    1,
                                ),
                            ]),
                        ])
                    },
                    [],
                    !1,
                    null,
                    '3c542d1e',
                    null,
                ))
            Gn.options.__file = 'Browser.vue'
            var Yn = Gn.exports,
                Qn = t('Co96')
            function Xn(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var Zn = document.documentElement,
                Jn = Qn.a.overlay,
                ne = Qn.a.modal,
                ee = {
                    name: 'A17Overlay',
                    props: {
                        title: { type: String, default: '' },
                        revisionTitle: {
                            type: String,
                            default: 'Revision history',
                        },
                        forceClose: { type: Boolean, default: !1 },
                        forceLock: { type: Boolean, default: !1 },
                        mode: { type: String, default: '' },
                    },
                    data: function() {
                        return { active: !1, hidden: !0, locked: !1 }
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    Xn(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            activeRevision: function() {
                                return Object.keys(this.currentRevision).length
                            },
                            overlayTitle: function() {
                                return this.activeRevision
                                    ? this.revisionTitle
                                    : this.title
                            },
                            overlayClasses: function() {
                                return {
                                    'overlay--active': this.active,
                                    'overlay--hidden': this.hidden,
                                }
                            },
                        },
                        Object(o.c)({
                            currentRevision: function(n) {
                                return n.revision.active
                            },
                        }),
                    ),
                    methods: {
                        open: function(n) {
                            ;(this.active && !this.hidden) ||
                                ((this.active = !0),
                                (this.hidden = !1),
                                Zn.classList.add(Jn),
                                window.addEventListener(
                                    'keyup',
                                    this.keyPressed,
                                ),
                                this.$emit('open'))
                        },
                        mask: function() {
                            Zn.classList.remove(Jn),
                                window.removeEventListener(
                                    'keyup',
                                    this.keyPressed,
                                ),
                                this.$emit('close')
                        },
                        hide: function() {
                            this.active &&
                                (this.locked ||
                                    (this.forceClose
                                        ? this.close()
                                        : ((this.hidden = !0), this.mask())))
                        },
                        close: function(n) {
                            this.active &&
                                (this.locked ||
                                    ((this.active = !1), this.mask()))
                        },
                        keyPressed: function(n) {
                            if (27 === n.which || 27 === n.keyCode) {
                                if (Zn.classList.contains(ne)) return
                                this.hide(), this.$emit('esc-key')
                            }
                        },
                    },
                    beforeDestroy: function() {
                        this.$el.parentNode &&
                            (this.active &&
                                window.removeEventListener(
                                    'keyup',
                                    this.keyPressed,
                                ),
                            this.$el.parentNode.removeChild(this.$el))
                    },
                },
                te = (t('dLBB'),
                Object(b.a)(
                    ee,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'div',
                            { staticClass: 'overlay', class: n.overlayClasses },
                            [
                                t('div', { staticClass: 'overlay__window' }, [
                                    n.overlayTitle
                                        ? t(
                                              'header',
                                              {
                                                  staticClass:
                                                      'overlay__header',
                                              },
                                              [
                                                  n._v(
                                                      '\n      ' +
                                                          n._s(n.overlayTitle) +
                                                          '\n      ',
                                                  ),
                                                  t(
                                                      'button',
                                                      {
                                                          staticClass:
                                                              'overlay__close',
                                                          attrs: {
                                                              type: 'button',
                                                          },
                                                          on: { click: n.hide },
                                                      },
                                                      [
                                                          t('span', {
                                                              directives: [
                                                                  {
                                                                      name:
                                                                          'svg',
                                                                      rawName:
                                                                          'v-svg',
                                                                  },
                                                              ],
                                                              attrs: {
                                                                  symbol:
                                                                      'close_modal',
                                                              },
                                                          }),
                                                          t(
                                                              'span',
                                                              {
                                                                  staticClass:
                                                                      'overlay__closeLabel',
                                                              },
                                                              [n._v('Close')],
                                                          ),
                                                      ],
                                                  ),
                                              ],
                                          )
                                        : n._e(),
                                    n._v(' '),
                                    n.active
                                        ? t(
                                              'div',
                                              {
                                                  directives: [
                                                      {
                                                          name: 'show',
                                                          rawName: 'v-show',
                                                          value: !n.hidden,
                                                          expression: '!hidden',
                                                      },
                                                  ],
                                                  staticClass:
                                                      'overlay__content',
                                              },
                                              [n._t('default')],
                                              2,
                                          )
                                        : n._e(),
                                ]),
                            ],
                        )
                    },
                    [],
                    !1,
                    null,
                    'c81d0a60',
                    null,
                ))
            te.options.__file = 'Overlay.vue'
            var ae = te.exports,
                ie = {
                    name: 'A17previewerFrame',
                    props: {
                        size: { type: Number, default: 0 },
                        content: { type: String, default: '' },
                        scrollPosition: { type: Number, default: 0 },
                    },
                    data: function() {
                        return { currentScroll: this.scrollPosition }
                    },
                    watch: {
                        scrollPosition: function(n) {
                            this.$el.contentWindow.scrollTo(0, n)
                        },
                    },
                    methods: {
                        loadPreview: function(n) {
                            for (
                                var e = this,
                                    t = n.target,
                                    a = t.contentDocument.querySelectorAll(
                                        'a,button',
                                    ),
                                    i = 0;
                                i < a.length;
                                i++
                            )
                                a[i].setAttribute('disabled', 'disabled'),
                                    (a[i].style.pointerEvents = 'none'),
                                    (a[i].onclick = function() {
                                        return !1
                                    })
                            t.contentDocument.addEventListener(
                                'scroll',
                                function(n) {
                                    var a = t.contentWindow.pageYOffset
                                    a !== e.currentScroll &&
                                        (e.$emit('scrollDoc', a),
                                        (e.currentScroll = a))
                                },
                            ),
                                this.$el.contentWindow.scrollTo(
                                    0,
                                    this.currentScroll,
                                )
                        },
                    },
                },
                oe = (t('Bp2e'),
                Object(b.a)(
                    ie,
                    function() {
                        var n = this.$createElement
                        return (this._self._c || n)('iframe', {
                            staticClass: 'previewerframe',
                            style: {
                                width: this.size > 0 ? this.size + 'px' : '',
                            },
                            attrs: { srcdoc: this.content, frameborder: '0' },
                            on: { load: this.loadPreview },
                        })
                    },
                    [],
                    !1,
                    null,
                    '388f42fb',
                    null,
                ))
            function se(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            oe.options.__file = 'PreviewerFrame.vue'
            var re = {
                    name: 'A17Previewer',
                    components: { 'a17-iframe': oe.exports },
                    data: function() {
                        return {
                            loadedCurrent: !1,
                            slipScreen: !1,
                            activeBreakpoint: 1280,
                            lastActiveBreakpoint: 1280,
                            scrollPosition: 0,
                            breakpoints: [
                                { size: 1280, name: 'preview-desktop' },
                                { size: 1024, name: 'preview-tablet-h' },
                                { size: 768, name: 'preview-tablet-v' },
                                { size: 320, name: 'preview-mobile' },
                            ],
                        }
                    },
                    filters: _.a,
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    se(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            activeRevision: function() {
                                return Object.keys(this.currentRevision).length
                            },
                        },
                        Object(o.c)({
                            editor: function(n) {
                                return n.content.editor
                            },
                            loading: function(n) {
                                return n.revision.loading
                            },
                            currentRevision: function(n) {
                                return n.revision.active
                            },
                            activeContent: function(n) {
                                return n.revision.activeContent
                            },
                            currentContent: function(n) {
                                return n.revision.currentContent
                            },
                            revisions: function(n) {
                                return n.revision.all
                            },
                            restoreRevisionUrl: function(n) {
                                return n.form.restoreUrl
                            },
                        }),
                    ),
                    methods: {
                        open: function() {
                            var n =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0,
                                e = this
                            function t() {
                                e.$refs.overlay && e.$refs.overlay.open(),
                                    e.singleView()
                            }
                            ;(this.loadedCurrent = !1),
                                (this.activeBreakpoint = 1280),
                                (this.lastActiveBreakpoint = 1280),
                                n
                                    ? this.previewRevision(n, function() {
                                          t()
                                      })
                                    : this.previewCurrent(function() {
                                          t()
                                      })
                        },
                        close: function() {
                            this.$refs.overlay.close()
                        },
                        openEditor: function() {
                            var n = this.$root.$refs
                            n.preview && n.preview.close(),
                                n.editor && n.editor.open()
                        },
                        restoreRevision: function() {
                            window.location.href =
                                this.restoreRevisionUrl +
                                '?revisionId=' +
                                this.currentRevision.id
                        },
                        resizePreview: function(n) {
                            ;(this.activeBreakpoint = parseInt(n)),
                                (this.lastActiveBreakpoint = parseInt(n))
                        },
                        previewCurrent: function(n) {
                            this.$store.commit(r.n.UPDATE_REV, 0),
                                this.loadCurrent(n)
                        },
                        loadCurrent: function(n) {
                            var e = this
                            this.loadedCurrent
                                ? n && 'function' == typeof n && n()
                                : ((this.loadedCurrent = !0),
                                  this.$store.dispatch(l.a.GET_CURRENT).then(
                                      function() {
                                          n && 'function' == typeof n && n()
                                      },
                                      function(n) {
                                          e.$store.commit(
                                              r.f.SET_FORM_ERRORS,
                                              n.response.data,
                                          ),
                                              e.$store.commit(r.j.SET_NOTIF, {
                                                  message:
                                                      'Your submission could not be validated, please fix and retry',
                                                  variant: 'error',
                                              })
                                      },
                                  ))
                        },
                        toggleRevision: function(n) {
                            if (
                                this.activeRevision &&
                                this.currentRevision.id === n
                            )
                                return (
                                    this.singleView(),
                                    void this.previewCurrent()
                                )
                            this.previewRevision(n)
                        },
                        previewRevision: function(n, e) {
                            var t = this
                            this.$store.commit(r.n.UPDATE_REV, n),
                                this.$store.dispatch(l.a.GET_REVISION).then(
                                    function() {
                                        e && 'function' == typeof e && e()
                                    },
                                    function(n) {
                                        t.$store.commit(r.j.SET_NOTIF, {
                                            message: 'Invalid revision.',
                                            variant: 'error',
                                        })
                                    },
                                )
                        },
                        compareView: function() {
                            ;(this.activeBreakpoint = 0),
                                (this.slipScreen = !0),
                                this.activeRevision && this.loadCurrent()
                        },
                        singleView: function() {
                            ;(this.activeBreakpoint = this.lastActiveBreakpoint),
                                (this.slipScreen = !1)
                        },
                        setIframeScroll: function(n) {
                            this.scrollPosition = n
                        },
                    },
                },
                le = (t('cQa9'),
                Object(b.a)(
                    re,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'a17-overlay',
                            {
                                ref: 'overlay',
                                attrs: { title: 'Preview changes' },
                            },
                            [
                                n.revisions.length
                                    ? t(
                                          'div',
                                          {
                                              staticClass: 'previewer',
                                              class: {
                                                  'previewer--loading':
                                                      n.loading,
                                              },
                                          },
                                          [
                                              n.activeRevision
                                                  ? t(
                                                        'a17-button',
                                                        {
                                                            staticClass:
                                                                'previewer__restore',
                                                            attrs: {
                                                                variant:
                                                                    'warning',
                                                                size: 'small',
                                                            },
                                                            on: {
                                                                click:
                                                                    n.restoreRevision,
                                                            },
                                                        },
                                                        [n._v('Restore')],
                                                    )
                                                  : n._e(),
                                              n._v(' '),
                                              !n.activeRevision && n.editor
                                                  ? t(
                                                        'a17-button',
                                                        {
                                                            staticClass:
                                                                'previewer__restore',
                                                            attrs: {
                                                                variant:
                                                                    'editor',
                                                                size: 'small',
                                                            },
                                                            on: {
                                                                click:
                                                                    n.openEditor,
                                                            },
                                                        },
                                                        [
                                                            t('span', {
                                                                directives: [
                                                                    {
                                                                        name:
                                                                            'svg',
                                                                        rawName:
                                                                            'v-svg',
                                                                    },
                                                                ],
                                                                staticClass:
                                                                    'hide--xsmall',
                                                                attrs: {
                                                                    symbol:
                                                                        'editor',
                                                                },
                                                            }),
                                                            n._v('Editor'),
                                                        ],
                                                    )
                                                  : n._e(),
                                              n._v(' '),
                                              t(
                                                  'div',
                                                  {
                                                      staticClass:
                                                          'previewer__frame',
                                                  },
                                                  [
                                                      t(
                                                          'div',
                                                          {
                                                              staticClass:
                                                                  'previewer__inner',
                                                          },
                                                          [
                                                              t(
                                                                  'div',
                                                                  {
                                                                      staticClass:
                                                                          'previewer__nav',
                                                                  },
                                                                  [
                                                                      t(
                                                                          'div',
                                                                          {
                                                                              staticClass:
                                                                                  'previewer__revisions',
                                                                          },
                                                                          [
                                                                              n.slipScreen
                                                                                  ? t(
                                                                                        'span',
                                                                                        {
                                                                                            staticClass:
                                                                                                'tag tag--revision',
                                                                                        },
                                                                                        [
                                                                                            n._v(
                                                                                                'Past',
                                                                                            ),
                                                                                        ],
                                                                                    )
                                                                                  : n._e(),
                                                                              n._v(
                                                                                  ' ',
                                                                              ),
                                                                              t(
                                                                                  'a17-dropdown',
                                                                                  {
                                                                                      ref:
                                                                                          'previewRevisionsDropdown',
                                                                                      attrs: {
                                                                                          position:
                                                                                              'bottom-left',
                                                                                          maxWidth: 400,
                                                                                          maxHeight: 300,
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                      t(
                                                                                          'a17-button',
                                                                                          {
                                                                                              staticClass:
                                                                                                  'previewer__trigger',
                                                                                              on: {
                                                                                                  click: function(
                                                                                                      e,
                                                                                                  ) {
                                                                                                      n.$refs.previewRevisionsDropdown.toggle()
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                          [
                                                                                              n.activeRevision
                                                                                                  ? [
                                                                                                        n._v(
                                                                                                            '\n                ' +
                                                                                                                n._s(
                                                                                                                    n._f(
                                                                                                                        'formatDate',
                                                                                                                    )(
                                                                                                                        n
                                                                                                                            .currentRevision
                                                                                                                            .datetime,
                                                                                                                    ),
                                                                                                                ) +
                                                                                                                ' (' +
                                                                                                                n._s(
                                                                                                                    n
                                                                                                                        .currentRevision
                                                                                                                        .author,
                                                                                                                ) +
                                                                                                                ') ',
                                                                                                        ),
                                                                                                        t(
                                                                                                            'span',
                                                                                                            {
                                                                                                                directives: [
                                                                                                                    {
                                                                                                                        name:
                                                                                                                            'svg',
                                                                                                                        rawName:
                                                                                                                            'v-svg',
                                                                                                                    },
                                                                                                                ],
                                                                                                                attrs: {
                                                                                                                    symbol:
                                                                                                                        'dropdown_module',
                                                                                                                },
                                                                                                            },
                                                                                                        ),
                                                                                                    ]
                                                                                                  : [
                                                                                                        n._v(
                                                                                                            '\n                Last edited ',
                                                                                                        ),
                                                                                                        t(
                                                                                                            'timeago',
                                                                                                            {
                                                                                                                attrs: {
                                                                                                                    'auto-update': 1,
                                                                                                                    since: new Date(
                                                                                                                        n.revisions[0].datetime,
                                                                                                                    ),
                                                                                                                },
                                                                                                            },
                                                                                                        ),
                                                                                                        n._v(
                                                                                                            ' ',
                                                                                                        ),
                                                                                                        t(
                                                                                                            'span',
                                                                                                            {
                                                                                                                directives: [
                                                                                                                    {
                                                                                                                        name:
                                                                                                                            'svg',
                                                                                                                        rawName:
                                                                                                                            'v-svg',
                                                                                                                    },
                                                                                                                ],
                                                                                                                attrs: {
                                                                                                                    symbol:
                                                                                                                        'dropdown_module',
                                                                                                                },
                                                                                                            },
                                                                                                        ),
                                                                                                    ],
                                                                                          ],
                                                                                          2,
                                                                                      ),
                                                                                      n._v(
                                                                                          ' ',
                                                                                      ),
                                                                                      t(
                                                                                          'div',
                                                                                          {
                                                                                              attrs: {
                                                                                                  slot:
                                                                                                      'dropdown__content',
                                                                                              },
                                                                                              slot:
                                                                                                  'dropdown__content',
                                                                                          },
                                                                                          n._l(
                                                                                              n.revisions,
                                                                                              function(
                                                                                                  e,
                                                                                                  a,
                                                                                              ) {
                                                                                                  return t(
                                                                                                      'button',
                                                                                                      {
                                                                                                          key:
                                                                                                              e.id,
                                                                                                          staticClass:
                                                                                                              'previewerRevision',
                                                                                                          class: {
                                                                                                              'previewerRevision--active':
                                                                                                                  n
                                                                                                                      .currentRevision
                                                                                                                      .id ===
                                                                                                                  e.id,
                                                                                                          },
                                                                                                          attrs: {
                                                                                                              type:
                                                                                                                  'button',
                                                                                                          },
                                                                                                          on: {
                                                                                                              click: function(
                                                                                                                  t,
                                                                                                              ) {
                                                                                                                  n.toggleRevision(
                                                                                                                      e.id,
                                                                                                                  )
                                                                                                              },
                                                                                                          },
                                                                                                      },
                                                                                                      [
                                                                                                          t(
                                                                                                              'span',
                                                                                                              {
                                                                                                                  staticClass:
                                                                                                                      'previewerRevision__author',
                                                                                                              },
                                                                                                              [
                                                                                                                  n._v(
                                                                                                                      n._s(
                                                                                                                          e.author,
                                                                                                                      ),
                                                                                                                  ),
                                                                                                              ],
                                                                                                          ),
                                                                                                          n._v(
                                                                                                              ' ',
                                                                                                          ),
                                                                                                          t(
                                                                                                              'span',
                                                                                                              {
                                                                                                                  staticClass:
                                                                                                                      'previewerRevision__datetime',
                                                                                                              },
                                                                                                              [
                                                                                                                  0 ===
                                                                                                                  a
                                                                                                                      ? t(
                                                                                                                            'span',
                                                                                                                            {
                                                                                                                                staticClass:
                                                                                                                                    'tag',
                                                                                                                            },
                                                                                                                            [
                                                                                                                                n._v(
                                                                                                                                    'Current',
                                                                                                                                ),
                                                                                                                            ],
                                                                                                                        )
                                                                                                                      : n._e(),
                                                                                                                  n._v(
                                                                                                                      ' ' +
                                                                                                                          n._s(
                                                                                                                              n._f(
                                                                                                                                  'formatDate',
                                                                                                                              )(
                                                                                                                                  e.datetime,
                                                                                                                              ),
                                                                                                                          ),
                                                                                                                  ),
                                                                                                              ],
                                                                                                          ),
                                                                                                      ],
                                                                                                  )
                                                                                              },
                                                                                          ),
                                                                                      ),
                                                                                  ],
                                                                                  1,
                                                                              ),
                                                                          ],
                                                                          1,
                                                                      ),
                                                                      n._v(' '),
                                                                      n.slipScreen
                                                                          ? n._e()
                                                                          : t(
                                                                                'ul',
                                                                                {
                                                                                    staticClass:
                                                                                        'previewer__breakpoints',
                                                                                },
                                                                                n._l(
                                                                                    n.breakpoints,
                                                                                    function(
                                                                                        e,
                                                                                    ) {
                                                                                        return t(
                                                                                            'li',
                                                                                            {
                                                                                                key:
                                                                                                    e.size,
                                                                                                staticClass:
                                                                                                    'previewer__breakpoint',
                                                                                                class: {
                                                                                                    's--active':
                                                                                                        n.activeBreakpoint ===
                                                                                                        e.size,
                                                                                                },
                                                                                            },
                                                                                            [
                                                                                                t(
                                                                                                    'a',
                                                                                                    {
                                                                                                        attrs: {
                                                                                                            href:
                                                                                                                '#',
                                                                                                        },
                                                                                                        on: {
                                                                                                            click: function(
                                                                                                                t,
                                                                                                            ) {
                                                                                                                t.preventDefault(),
                                                                                                                    n.resizePreview(
                                                                                                                        e.size,
                                                                                                                    )
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                    [
                                                                                                        t(
                                                                                                            'span',
                                                                                                            {
                                                                                                                directives: [
                                                                                                                    {
                                                                                                                        name:
                                                                                                                            'svg',
                                                                                                                        rawName:
                                                                                                                            'v-svg',
                                                                                                                    },
                                                                                                                ],
                                                                                                                attrs: {
                                                                                                                    symbol:
                                                                                                                        e.name,
                                                                                                                },
                                                                                                            },
                                                                                                        ),
                                                                                                    ],
                                                                                                ),
                                                                                            ],
                                                                                        )
                                                                                    },
                                                                                ),
                                                                            ),
                                                                      n._v(' '),
                                                                      n.activeRevision
                                                                          ? t(
                                                                                'div',
                                                                                {
                                                                                    staticClass:
                                                                                        'previewer__compare',
                                                                                },
                                                                                [
                                                                                    n.slipScreen
                                                                                        ? t(
                                                                                              'a',
                                                                                              {
                                                                                                  attrs: {
                                                                                                      href:
                                                                                                          '#',
                                                                                                  },
                                                                                                  on: {
                                                                                                      click: function(
                                                                                                          e,
                                                                                                      ) {
                                                                                                          return (
                                                                                                              e.preventDefault(),
                                                                                                              n.singleView(
                                                                                                                  e,
                                                                                                              )
                                                                                                          )
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                              [
                                                                                                  t(
                                                                                                      'span',
                                                                                                      {
                                                                                                          staticClass:
                                                                                                              'previewer__compareLabel',
                                                                                                      },
                                                                                                      [
                                                                                                          n._v(
                                                                                                              'Single view',
                                                                                                          ),
                                                                                                      ],
                                                                                                  ),
                                                                                                  n._v(
                                                                                                      ' ',
                                                                                                  ),
                                                                                                  t(
                                                                                                      'span',
                                                                                                      {
                                                                                                          directives: [
                                                                                                              {
                                                                                                                  name:
                                                                                                                      'svg',
                                                                                                                  rawName:
                                                                                                                      'v-svg',
                                                                                                              },
                                                                                                          ],
                                                                                                          attrs: {
                                                                                                              symbol:
                                                                                                                  'revision-single',
                                                                                                          },
                                                                                                      },
                                                                                                  ),
                                                                                              ],
                                                                                          )
                                                                                        : t(
                                                                                              'a',
                                                                                              {
                                                                                                  attrs: {
                                                                                                      href:
                                                                                                          '#',
                                                                                                  },
                                                                                                  on: {
                                                                                                      click: function(
                                                                                                          e,
                                                                                                      ) {
                                                                                                          return (
                                                                                                              e.preventDefault(),
                                                                                                              n.compareView(
                                                                                                                  e,
                                                                                                              )
                                                                                                          )
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                              [
                                                                                                  t(
                                                                                                      'span',
                                                                                                      {
                                                                                                          staticClass:
                                                                                                              'previewer__compareLabel',
                                                                                                      },
                                                                                                      [
                                                                                                          n._v(
                                                                                                              'Compare view',
                                                                                                          ),
                                                                                                      ],
                                                                                                  ),
                                                                                                  n._v(
                                                                                                      ' ',
                                                                                                  ),
                                                                                                  t(
                                                                                                      'span',
                                                                                                      {
                                                                                                          directives: [
                                                                                                              {
                                                                                                                  name:
                                                                                                                      'svg',
                                                                                                                  rawName:
                                                                                                                      'v-svg',
                                                                                                              },
                                                                                                          ],
                                                                                                          attrs: {
                                                                                                              symbol:
                                                                                                                  'revision-compare',
                                                                                                          },
                                                                                                      },
                                                                                                  ),
                                                                                              ],
                                                                                          ),
                                                                                ],
                                                                            )
                                                                          : n._e(),
                                                                  ],
                                                              ),
                                                              n._v(' '),
                                                              t(
                                                                  'div',
                                                                  {
                                                                      staticClass:
                                                                          'previewer__content',
                                                                  },
                                                                  [
                                                                      t(
                                                                          'div',
                                                                          {
                                                                              staticClass:
                                                                                  'previewer__iframe',
                                                                          },
                                                                          [
                                                                              t(
                                                                                  'a17-iframe',
                                                                                  {
                                                                                      attrs: {
                                                                                          content: n.activeRevision
                                                                                              ? n.activeContent
                                                                                              : n.currentContent,
                                                                                          size:
                                                                                              n.activeBreakpoint,
                                                                                          scrollPosition:
                                                                                              n.scrollPosition,
                                                                                      },
                                                                                      on: {
                                                                                          scrollDoc:
                                                                                              n.setIframeScroll,
                                                                                      },
                                                                                  },
                                                                              ),
                                                                          ],
                                                                          1,
                                                                      ),
                                                                      n._v(' '),
                                                                      n.slipScreen
                                                                          ? t(
                                                                                'div',
                                                                                {
                                                                                    staticClass:
                                                                                        'previewer__iframe',
                                                                                },
                                                                                [
                                                                                    t(
                                                                                        'div',
                                                                                        {
                                                                                            staticClass:
                                                                                                'previewer__iframeInfos',
                                                                                        },
                                                                                        [
                                                                                            t(
                                                                                                'span',
                                                                                                {
                                                                                                    staticClass:
                                                                                                        'tag tag--revision',
                                                                                                },
                                                                                                [
                                                                                                    n._v(
                                                                                                        'Current',
                                                                                                    ),
                                                                                                ],
                                                                                            ),
                                                                                            n._v(
                                                                                                'Previewing with your unsaved changes',
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                    n._v(
                                                                                        ' ',
                                                                                    ),
                                                                                    t(
                                                                                        'a17-iframe',
                                                                                        {
                                                                                            attrs: {
                                                                                                content:
                                                                                                    n.currentContent,
                                                                                                scrollPosition:
                                                                                                    n.scrollPosition,
                                                                                            },
                                                                                            on: {
                                                                                                scrollDoc:
                                                                                                    n.setIframeScroll,
                                                                                            },
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                                1,
                                                                            )
                                                                          : n._e(),
                                                                  ],
                                                              ),
                                                          ],
                                                      ),
                                                  ],
                                              ),
                                          ],
                                          1,
                                      )
                                    : n._e(),
                            ],
                        )
                    },
                    [],
                    !1,
                    null,
                    '0ef57288',
                    null,
                ))
            le.options.__file = 'Previewer.vue'
            var ce = le.exports,
                me = t('Zss7'),
                ue = t.n(me)
            function de(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var pe = {
                    name: 'A17editorsidebar',
                    components: { draggable: pn.a },
                    mixins: [hn.a],
                    data: function() {
                        return {}
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    de(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            hasBlockActive: function() {
                                return Object.keys(this.activeBlock).length > 0
                            },
                            submitOptions: function() {
                                return this.$store.getters.getSubmitOptions
                            },
                        },
                        Object(o.c)({
                            activeBlock: function(n) {
                                return n.content.active
                            },
                            availableBlocks: function(n) {
                                return n.content.available
                            },
                            blocks: function(n) {
                                return n.content.blocks
                            },
                        }),
                    ),
                    methods: {
                        toggleDropdown: function(n) {
                            if (this.blocks.length > 1) {
                                var e = this.moveDropdown(n)
                                this.$refs[e].length &&
                                    this.$refs[e][0].toggle()
                            }
                        },
                        moveDropdown: function(n) {
                            return 'move'.concat(n, 'Dropdown')
                        },
                        isBlockActive: function(n) {
                            return (
                                !!this.hasBlockActive &&
                                n === this.activeBlock.id
                            )
                        },
                        componentName: function(n) {
                            return 'blocks[' + n + ']'
                        },
                        moveBlock: function(n, e) {
                            n !== e &&
                                this.$store.commit(r.d.MOVE_BLOCK, {
                                    oldIndex: n,
                                    newIndex: e,
                                })
                        },
                        saveBlock: function() {
                            this.$emit('save')
                        },
                        cancelBlock: function() {
                            this.$emit('cancel')
                        },
                        deleteBlock: function(n) {
                            this.$emit('delete', n)
                        },
                        saveForm: function(n) {
                            this.$store.commit(r.m.UPDATE_SAVE_TYPE, n),
                                this.$root.submitForm && this.$root.submitForm()
                        },
                    },
                    mounted: function() {},
                },
                he = (t('vBD8'),
                t('5DHK'),
                Object(b.a)(
                    pe,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'div',
                            { staticClass: 'editorSidebar' },
                            [
                                n._l(n.blocks, function(e, a) {
                                    return t(
                                        'div',
                                        {
                                            directives: [
                                                {
                                                    name: 'show',
                                                    rawName: 'v-show',
                                                    value: n.isBlockActive(
                                                        e.id,
                                                    ),
                                                    expression:
                                                        'isBlockActive(block.id)',
                                                },
                                            ],
                                            key: e.id,
                                            staticClass: 'editorSidebar__item',
                                        },
                                        [
                                            t(
                                                'div',
                                                {
                                                    staticClass:
                                                        'editorSidebar__title',
                                                },
                                                [
                                                    t(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'editorSidebar__blockTitle',
                                                        },
                                                        [
                                                            t(
                                                                'a17-dropdown',
                                                                {
                                                                    ref: n.moveDropdown(
                                                                        a,
                                                                    ),
                                                                    refInFor: !0,
                                                                    staticClass:
                                                                        'f--small',
                                                                    attrs: {
                                                                        position:
                                                                            'bottom-left',
                                                                        maxHeight: 270,
                                                                    },
                                                                },
                                                                [
                                                                    t(
                                                                        'span',
                                                                        {
                                                                            staticClass:
                                                                                'editorSidebar__counter f--tiny',
                                                                            on: {
                                                                                click: function(
                                                                                    e,
                                                                                ) {
                                                                                    n.toggleDropdown(
                                                                                        a,
                                                                                    )
                                                                                },
                                                                            },
                                                                        },
                                                                        [
                                                                            n._v(
                                                                                n._s(
                                                                                    a +
                                                                                        1,
                                                                                ),
                                                                            ),
                                                                        ],
                                                                    ),
                                                                    n._v(' '),
                                                                    t(
                                                                        'div',
                                                                        {
                                                                            attrs: {
                                                                                slot:
                                                                                    'dropdown__content',
                                                                            },
                                                                            slot:
                                                                                'dropdown__content',
                                                                        },
                                                                        n._l(
                                                                            n
                                                                                .blocks
                                                                                .length,
                                                                            function(
                                                                                e,
                                                                            ) {
                                                                                return t(
                                                                                    'button',
                                                                                    {
                                                                                        attrs: {
                                                                                            type:
                                                                                                'button',
                                                                                        },
                                                                                        on: {
                                                                                            click: function(
                                                                                                t,
                                                                                            ) {
                                                                                                n.moveBlock(
                                                                                                    a,
                                                                                                    e -
                                                                                                        1,
                                                                                                )
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        n._v(
                                                                                            n._s(
                                                                                                e,
                                                                                            ),
                                                                                        ),
                                                                                    ],
                                                                                )
                                                                            },
                                                                        ),
                                                                    ),
                                                                ],
                                                            ),
                                                            n._v(
                                                                n._s(
                                                                    n
                                                                        .activeBlock
                                                                        .title,
                                                                ) + '\n      ',
                                                            ),
                                                        ],
                                                        1,
                                                    ),
                                                    n._v(' '),
                                                    t('span', [
                                                        t(
                                                            'a',
                                                            {
                                                                staticClass:
                                                                    'f--small f--note f--underlined',
                                                                attrs: {
                                                                    href: '#',
                                                                },
                                                                on: {
                                                                    click: function(
                                                                        e,
                                                                    ) {
                                                                        e.preventDefault(),
                                                                            n.deleteBlock(
                                                                                a,
                                                                            )
                                                                    },
                                                                },
                                                            },
                                                            [n._v('Delete')],
                                                        ),
                                                    ]),
                                                ],
                                            ),
                                            n._v(' '),
                                            t(
                                                'div',
                                                {
                                                    staticClass:
                                                        'editorSidebar__body',
                                                },
                                                [
                                                    t('a17-inputframe', {
                                                        attrs: {
                                                            label: '',
                                                            name:
                                                                'block.' + e.id,
                                                        },
                                                    }),
                                                    n._v(' '),
                                                    t(
                                                        '' + e.type,
                                                        n._b(
                                                            {
                                                                key:
                                                                    '`editor_${block.type}_${block.id}`',
                                                                tag:
                                                                    'component',
                                                                attrs: {
                                                                    name: n.componentName(
                                                                        e.id,
                                                                    ),
                                                                },
                                                            },
                                                            'component',
                                                            e.attributes,
                                                            !1,
                                                        ),
                                                    ),
                                                ],
                                                1,
                                            ),
                                        ],
                                    )
                                }),
                                n._v(' '),
                                n.hasBlockActive
                                    ? [
                                          t(
                                              'div',
                                              {
                                                  staticClass:
                                                      'editorSidebar__actions',
                                              },
                                              [
                                                  t(
                                                      'a17-button',
                                                      {
                                                          attrs: {
                                                              variant: 'action',
                                                          },
                                                          on: {
                                                              click: function(
                                                                  e,
                                                              ) {
                                                                  n.saveBlock()
                                                              },
                                                          },
                                                      },
                                                      [n._v('Done')],
                                                  ),
                                                  n._v(' '),
                                                  t(
                                                      'a17-button',
                                                      {
                                                          attrs: {
                                                              variant:
                                                                  'secondary',
                                                          },
                                                          on: {
                                                              click: function(
                                                                  e,
                                                              ) {
                                                                  n.cancelBlock()
                                                              },
                                                          },
                                                      },
                                                      [n._v('Cancel')],
                                                  ),
                                              ],
                                              1,
                                          ),
                                      ]
                                    : [
                                          t(
                                              'div',
                                              {
                                                  staticClass:
                                                      'editorSidebar__list',
                                              },
                                              [
                                                  t(
                                                      'h4',
                                                      {
                                                          staticClass:
                                                              'editorSidebar__title',
                                                      },
                                                      [n._t('default')],
                                                      2,
                                                  ),
                                                  n._v(' '),
                                                  n.availableBlocks.length
                                                      ? t(
                                                            'draggable',
                                                            {
                                                                attrs: {
                                                                    options: {
                                                                        group: {
                                                                            name:
                                                                                'editorBlocks',
                                                                            pull:
                                                                                'clone',
                                                                            put: !1,
                                                                        },
                                                                        handle:
                                                                            '.editorSidebar__button',
                                                                    },
                                                                },
                                                                model: {
                                                                    value:
                                                                        n.availableBlocks,
                                                                    callback: function(
                                                                        e,
                                                                    ) {
                                                                        n.availableBlocks = e
                                                                    },
                                                                    expression:
                                                                        'availableBlocks',
                                                                },
                                                            },
                                                            n._l(
                                                                n.availableBlocks,
                                                                function(e) {
                                                                    return t(
                                                                        'div',
                                                                        {
                                                                            key:
                                                                                e.component,
                                                                            staticClass:
                                                                                'editorSidebar__button',
                                                                            attrs: {
                                                                                'data-title':
                                                                                    e.title,
                                                                                'data-icon':
                                                                                    e.icon,
                                                                                'data-component':
                                                                                    e.component,
                                                                            },
                                                                        },
                                                                        [
                                                                            t(
                                                                                'span',
                                                                                {
                                                                                    directives: [
                                                                                        {
                                                                                            name:
                                                                                                'svg',
                                                                                            rawName:
                                                                                                'v-svg',
                                                                                        },
                                                                                    ],
                                                                                    attrs: {
                                                                                        symbol:
                                                                                            e.icon,
                                                                                    },
                                                                                },
                                                                            ),
                                                                            n._v(
                                                                                n._s(
                                                                                    e.title,
                                                                                ) +
                                                                                    '\n        ',
                                                                            ),
                                                                        ],
                                                                    )
                                                                },
                                                            ),
                                                        )
                                                      : n._e(),
                                              ],
                                              1,
                                          ),
                                          n._v(' '),
                                          t(
                                              'div',
                                              {
                                                  staticClass:
                                                      'editorSidebar__actions',
                                              },
                                              [
                                                  t(
                                                      'a17-button',
                                                      {
                                                          attrs: {
                                                              name:
                                                                  n
                                                                      .submitOptions[0]
                                                                      .name,
                                                              variant:
                                                                  'validate',
                                                          },
                                                          on: {
                                                              click: function(
                                                                  e,
                                                              ) {
                                                                  n.saveForm(
                                                                      n
                                                                          .submitOptions[0]
                                                                          .name,
                                                                  )
                                                              },
                                                          },
                                                      },
                                                      [
                                                          n._v(
                                                              n._s(
                                                                  n
                                                                      .submitOptions[0]
                                                                      .text,
                                                              ),
                                                          ),
                                                      ],
                                                  ),
                                              ],
                                              1,
                                          ),
                                      ],
                            ],
                            2,
                        )
                    },
                    [],
                    !1,
                    null,
                    '3331cb7e',
                    null,
                ))
            he.options.__file = 'EditorSidebar.vue'
            var fe = he.exports
            function be(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var ve = {
                    name: 'A17editoriframe',
                    props: {
                        block: {
                            type: Object,
                            default: function() {
                                return {}
                            },
                        },
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    be(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            preview: function() {
                                return this.previewsById(this.block.id) || ''
                            },
                            title: function() {
                                return this.block.title || ''
                            },
                        },
                        Object(o.b)(['previewsById']),
                        Object(o.c)({
                            savedBlocks: function(n) {
                                return n.content.blocks
                            },
                        }),
                    ),
                    methods: {
                        loadedPreview: function(n) {
                            this.$refs.frame &&
                                this.$refs.frame.srcdoc &&
                                this.$emit('loaded', this.$refs.frame)
                        },
                    },
                },
                ge = (t('xjeM'),
                Object(b.a)(
                    ve,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t('div', { staticClass: 'editorIframe' }, [
                            '' === n.preview
                                ? t(
                                      'div',
                                      { staticClass: 'editorIframe__empty' },
                                      [n._v('\n    ' + n._s(n.title) + '\n  ')],
                                  )
                                : n._e(),
                            n._v(' '),
                            t('iframe', {
                                ref: 'frame',
                                attrs: { srcdoc: n.preview },
                                on: { load: n.loadedPreview },
                            }),
                        ])
                    },
                    [],
                    !1,
                    null,
                    '1c8a3e00',
                    null,
                ))
            ge.options.__file = 'EditorIframe.vue'
            var _e = ge.exports
            function we(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var xe = {
                    name: 'A17editorpreview',
                    components: { draggable: pn.a, 'a17-editor-iframe': _e },
                    mixins: [hn.a],
                    data: function() {
                        return {
                            activeItem: -1,
                            blocksLoaded: 0,
                            handle: '.editorPreview__dragger',
                        }
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    we(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            blocks: {
                                get: function() {
                                    return this.savedBlocks
                                },
                                set: function(n) {},
                            },
                            hasBlockActive: function() {
                                return Object.keys(this.activeBlock).length
                            },
                            editorPreviewClass: function() {
                                return {
                                    'editorPreview--loading': this.loading,
                                }
                            },
                        },
                        Object(o.c)({
                            loading: function(n) {
                                return n.content.loading
                            },
                            activeBlock: function(n) {
                                return n.content.active
                            },
                            savedBlocks: function(n) {
                                return n.content.blocks
                            },
                        }),
                    ),
                    methods: {
                        toggleDropdown: function(n) {
                            if (this.blocks.length > 1) {
                                var e = this.moveDropdown(n)
                                this.$refs[e].length &&
                                    this.$refs[e][0].toggle()
                            }
                        },
                        moveDropdown: function(n) {
                            return 'movePreview'.concat(n, 'Dropdown')
                        },
                        moveBlock: function(n, e) {
                            n !== e &&
                                this.$store.commit(r.d.MOVE_BLOCK, {
                                    oldIndex: n,
                                    newIndex: e,
                                })
                        },
                        onAdd: function(n) {
                            var e = n.item,
                                t = {}
                            ;(t.title = e.getAttribute('data-title')),
                                (t.component = e.getAttribute(
                                    'data-component',
                                )),
                                (t.icon = e.getAttribute('data-icon')),
                                this.addBlock(t, Math.max(0, n.newIndex))
                        },
                        onUpdate: function(n) {
                            this.$store.commit(r.d.MOVE_BLOCK, {
                                oldIndex: n.oldIndex,
                                newIndex: n.newIndex,
                            })
                        },
                        isBlockActive: function(n) {
                            return (
                                !!this.hasBlockActive &&
                                n === this.activeBlock.id
                            )
                        },
                        addBlock: function(n, e) {
                            var t = {
                                title: n.title,
                                type: n.component,
                                icon: n.icon,
                                attributes: n.attributes,
                            }
                            this.$store.commit(r.d.ADD_BLOCK, {
                                block: t,
                                index: e,
                            }),
                                this.$emit('add', e)
                        },
                        deleteBlock: function(n) {
                            this.$emit('delete', n)
                        },
                        selectBlock: function(n) {
                            this.$emit('select', n)
                        },
                        unselectBlock: function() {
                            this.$emit('unselect')
                        },
                        resizeIframe: function(n) {
                            var e = n.contentWindow.document.body
                            e.style.overflow = 'hidden'
                            var t = window.getComputedStyle(e),
                                a = t.getPropertyValue('margin-top'),
                                i = t.getPropertyValue('margin-bottom'),
                                o = e.scrollHeight + parseInt(a) + parseInt(i)
                            n.height = o + 'px'
                        },
                        resizeAllIframes: function() {
                            var n = this
                            this.$el
                                .querySelectorAll('iframe')
                                .forEach(function(e) {
                                    n.resizeIframe(e)
                                })
                        },
                        _resize: p()(function() {
                            this.resizeAllIframes()
                        }, 200),
                        init: function() {
                            window.addEventListener('resize', this._resize)
                        },
                        dispose: function() {
                            window.removeEventListener('resize', this._resize)
                        },
                    },
                    mounted: function() {
                        this.init()
                    },
                    beforeDestroy: function() {
                        this.dispose()
                    },
                },
                ke = (t('U4xr'),
                Object(b.a)(
                    xe,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'div',
                            {
                                staticClass: 'editorPreview',
                                attrs: {
                                    editorPreviewClass: n.editorPreviewClass,
                                },
                                on: { mousedown: n.unselectBlock },
                            },
                            [
                                n.blocks.length
                                    ? n._e()
                                    : t(
                                          'div',
                                          {
                                              staticClass:
                                                  'editorPreview__empty',
                                          },
                                          [
                                              t('b', [
                                                  n._v(
                                                      'Drag and drop content from the left navigation',
                                                  ),
                                              ]),
                                          ],
                                      ),
                                n._v(' '),
                                t(
                                    'draggable',
                                    {
                                        staticClass: 'editorPreview__content',
                                        attrs: {
                                            options: {
                                                group: 'editorBlocks',
                                                handle: n.handle,
                                            },
                                        },
                                        on: {
                                            add: n.onAdd,
                                            update: n.onUpdate,
                                        },
                                        model: {
                                            value: n.blocks,
                                            callback: function(e) {
                                                n.blocks = e
                                            },
                                            expression: 'blocks',
                                        },
                                    },
                                    n._l(n.blocks, function(e, a) {
                                        return t(
                                            'div',
                                            {
                                                key: e.id,
                                                ref: e.id,
                                                refInFor: !0,
                                                staticClass:
                                                    'editorPreview__item',
                                                class: {
                                                    'editorPreview__item--active': n.isBlockActive(
                                                        e.id,
                                                    ),
                                                    'editorPreview__item--hover':
                                                        n.activeItem === a,
                                                },
                                                on: {
                                                    mousedown: function(n) {
                                                        n.stopPropagation()
                                                    },
                                                },
                                            },
                                            [
                                                t(
                                                    'div',
                                                    {
                                                        staticClass:
                                                            'editorPreview__frame',
                                                    },
                                                    [
                                                        t('a17-editor-iframe', {
                                                            attrs: { block: e },
                                                            on: {
                                                                loaded:
                                                                    n.resizeIframe,
                                                            },
                                                        }),
                                                    ],
                                                    1,
                                                ),
                                                n._v(' '),
                                                t('div', {
                                                    staticClass:
                                                        'editorPreview__protector editorPreview__dragger',
                                                    on: {
                                                        click: function(e) {
                                                            e.preventDefault(),
                                                                n.selectBlock(a)
                                                        },
                                                    },
                                                }),
                                                n._v(' '),
                                                t(
                                                    'div',
                                                    {
                                                        staticClass:
                                                            'editorPreview__header',
                                                    },
                                                    [
                                                        t(
                                                            'a17-buttonbar',
                                                            {
                                                                attrs: {
                                                                    variant:
                                                                        'visible',
                                                                },
                                                            },
                                                            [
                                                                n.blocks
                                                                    .length > 1
                                                                    ? t(
                                                                          'a17-dropdown',
                                                                          {
                                                                              ref: n.moveDropdown(
                                                                                  a,
                                                                              ),
                                                                              refInFor: !0,
                                                                              staticClass:
                                                                                  'f--small',
                                                                              attrs: {
                                                                                  position:
                                                                                      'bottom-left',
                                                                                  maxHeight: 270,
                                                                              },
                                                                              on: {
                                                                                  open: function(
                                                                                      e,
                                                                                  ) {
                                                                                      n.activeItem = a
                                                                                  },
                                                                                  close: function(
                                                                                      e,
                                                                                  ) {
                                                                                      n.activeItem = -1
                                                                                  },
                                                                              },
                                                                          },
                                                                          [
                                                                              t(
                                                                                  'button',
                                                                                  {
                                                                                      attrs: {
                                                                                          type:
                                                                                              'button',
                                                                                      },
                                                                                      on: {
                                                                                          click: function(
                                                                                              e,
                                                                                          ) {
                                                                                              n.toggleDropdown(
                                                                                                  a,
                                                                                              )
                                                                                          },
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                      t(
                                                                                          'span',
                                                                                          {
                                                                                              directives: [
                                                                                                  {
                                                                                                      name:
                                                                                                          'svg',
                                                                                                      rawName:
                                                                                                          'v-svg',
                                                                                                  },
                                                                                              ],
                                                                                              attrs: {
                                                                                                  symbol:
                                                                                                      'drag',
                                                                                              },
                                                                                          },
                                                                                      ),
                                                                                  ],
                                                                              ),
                                                                              n._v(
                                                                                  ' ',
                                                                              ),
                                                                              t(
                                                                                  'div',
                                                                                  {
                                                                                      attrs: {
                                                                                          slot:
                                                                                              'dropdown__content',
                                                                                      },
                                                                                      slot:
                                                                                          'dropdown__content',
                                                                                  },
                                                                                  n._l(
                                                                                      n
                                                                                          .blocks
                                                                                          .length,
                                                                                      function(
                                                                                          e,
                                                                                      ) {
                                                                                          return t(
                                                                                              'button',
                                                                                              {
                                                                                                  attrs: {
                                                                                                      type:
                                                                                                          'button',
                                                                                                  },
                                                                                                  on: {
                                                                                                      click: function(
                                                                                                          t,
                                                                                                      ) {
                                                                                                          n.moveBlock(
                                                                                                              a,
                                                                                                              e -
                                                                                                                  1,
                                                                                                          )
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                              [
                                                                                                  n._v(
                                                                                                      n._s(
                                                                                                          e,
                                                                                                      ),
                                                                                                  ),
                                                                                              ],
                                                                                          )
                                                                                      },
                                                                                  ),
                                                                              ),
                                                                          ],
                                                                      )
                                                                    : n._e(),
                                                                n._v(' '),
                                                                t(
                                                                    'button',
                                                                    {
                                                                        attrs: {
                                                                            type:
                                                                                'button',
                                                                        },
                                                                        on: {
                                                                            click: function(
                                                                                e,
                                                                            ) {
                                                                                n.deleteBlock(
                                                                                    a,
                                                                                )
                                                                            },
                                                                        },
                                                                    },
                                                                    [
                                                                        t(
                                                                            'span',
                                                                            {
                                                                                directives: [
                                                                                    {
                                                                                        name:
                                                                                            'svg',
                                                                                        rawName:
                                                                                            'v-svg',
                                                                                    },
                                                                                ],
                                                                                attrs: {
                                                                                    symbol:
                                                                                        'trash',
                                                                                },
                                                                            },
                                                                        ),
                                                                    ],
                                                                ),
                                                            ],
                                                            1,
                                                        ),
                                                    ],
                                                    1,
                                                ),
                                            ],
                                        )
                                    }),
                                ),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    '280470fe',
                    null,
                ))
            ke.options.__file = 'EditorPreview.vue'
            var ye = ke.exports,
                $e = t('ZOWH'),
                Se = t('BkRI'),
                Pe = t.n(Se)
            function Oe(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var Be = document.documentElement,
                Ce = Qn.a.editor,
                Ee = {
                    name: 'A17Editor',
                    components: {
                        'a17-editorsidebar': fe,
                        'a17-editorpreview': ye,
                        'a17-spinner': $e.a,
                    },
                    props: { bgColor: { type: String, default: '#FFFFFF' } },
                    data: function() {
                        return {
                            isWatching: !1,
                            unSubscribe: function() {
                                return null
                            },
                        }
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    Oe(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {
                            blocks: {
                                get: function() {
                                    return this.savedBlocks
                                },
                                set: function(n) {
                                    this.$store.commit(r.d.REORDER_BLOCKS, n)
                                },
                            },
                            hasBlockActive: function() {
                                return Object.keys(this.activeBlock).length > 0
                            },
                            previewClass: function() {
                                return {
                                    'editor__preview--dark':
                                        ue()(this.bgColor).getBrightness() <
                                        180,
                                    'editor__preview--loading': this.loading,
                                }
                            },
                            sidebarClass: function() {
                                return {
                                    'editor__sidebar--mobile': this
                                        .hasBlockActive,
                                }
                            },
                            previewStyle: function() {
                                return { 'background-color': this.bgColor }
                            },
                        },
                        Object(o.c)({
                            loading: function(n) {
                                return n.content.loading
                            },
                            activeBlock: function(n) {
                                return n.content.active
                            },
                            savedBlocks: function(n) {
                                return n.content.blocks
                            },
                            availableBlocks: function(n) {
                                return n.content.available
                            },
                            revisions: function(n) {
                                return n.revision.all
                            },
                        }),
                    ),
                    watch: {
                        loading: function(n) {
                            var e = this
                            n ||
                                e.$nextTick(function() {
                                    setTimeout(function() {
                                        e.scrollToActive()
                                    }, 250)
                                })
                        },
                    },
                    methods: {
                        open: function(n) {
                            this.getAllPreviews(),
                                n >= 0 &&
                                    (this.selectBlock(n),
                                    this.scrollToActive()),
                                this.$refs.overlay.open()
                        },
                        close: function(n) {
                            this.$refs.overlay.close()
                        },
                        openEditor: function() {
                            Be.classList.add(Ce)
                        },
                        closeEditor: function() {
                            this.unselectBlock(), Be.classList.remove(Ce)
                        },
                        scrollToActive: function() {
                            if (this.hasBlockActive) {
                                var n = this.$refs.previews.$refs[
                                    this.activeBlock.id
                                ]
                                if (n) {
                                    var e = n[0].offsetTop
                                    this.$el.querySelector(
                                        '.editorPreview__content',
                                    ).scrollTop = Math.max(0, e - 20)
                                }
                            }
                        },
                        isBlockActive: function(n) {
                            return (
                                !!this.hasBlockActive &&
                                n === this.activeBlock.id
                            )
                        },
                        openPreview: function() {
                            this.$root.$refs.preview &&
                                this.$root.$refs.preview.open()
                        },
                        resize: function() {
                            window.addEventListener(
                                'mousemove',
                                this.resizeSidebar,
                                !1,
                            ),
                                window.addEventListener(
                                    'mouseup',
                                    this.stopResizeSidebar,
                                    !1,
                                )
                        },
                        resizeSidebar: function(n) {
                            var e = this.$refs.sidebar,
                                t = window.innerWidth
                            e &&
                                (e.style.width =
                                    ((n.clientX - e.offsetLeft) / t) * 100 +
                                    '%')
                        },
                        stopResizeSidebar: function() {
                            window.removeEventListener(
                                'mousemove',
                                this.resizeSidebar,
                                !1,
                            ),
                                window.removeEventListener(
                                    'mouseup',
                                    this.stopResizeSidebar,
                                    !1,
                                ),
                                this.$refs.previews.resizeAllIframes()
                        },
                        saveBlock: function() {
                            this.hasBlockActive && this.getPreview(),
                                this.unselectBlock()
                        },
                        addBlock: function(n) {
                            this.selectBlock(n), this.getPreview(n)
                        },
                        deleteBlock: function(n) {
                            var e = this
                            this.$root.$refs.warningContentEditor
                                ? this.$root.$refs.warningContentEditor.open(
                                      function() {
                                          e.unselectBlock(),
                                              e.$store.commit(
                                                  r.d.DELETE_BLOCK,
                                                  n,
                                              )
                                      },
                                  )
                                : (this.unselectBlock(),
                                  this.$store.commit(r.d.DELETE_BLOCK, n))
                        },
                        cancelBlock: function() {
                            this.hasBlockActive &&
                                (window.hasOwnProperty('PREVSTATE') &&
                                    (console.warn(
                                        'Store - Restore previous Store state',
                                    ),
                                    this.$store.replaceState(window.PREVSTATE)),
                                this.getPreview()),
                                this.unselectBlock()
                        },
                        getBlockId: function(n) {
                            return void 0 === this.blocks[n]
                                ? 0
                                : this.blocks[n].id
                        },
                        getAllPreviews: function() {
                            this.$store.dispatch(l.a.GET_ALL_PREVIEWS)
                        },
                        getPreview: function() {
                            var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : -1
                            console.warn('Editor - getPreview'),
                                this.$store.dispatch(l.a.GET_PREVIEW, n)
                        },
                        selectBlock: function(n) {
                            var e = this,
                                t = this.getBlockId(n)
                            t &&
                                (this.isBlockActive(t)
                                    ? this.unselectBlock()
                                    : (console.warn(
                                          'Store - copy current Store state',
                                      ),
                                      (window.PREVSTATE = Pe()(
                                          this.$store.state,
                                      )),
                                      this.$store.commit(r.d.ACTIVATE_BLOCK, n),
                                      this.isWatching ||
                                          ((this.isWatching = !0),
                                          (this.unSubscribe = this.$store.subscribe(
                                              function(n, t) {
                                                  r.l.REFRESH_BLOCK_PREVIEW.includes(
                                                      n.type,
                                                  ) &&
                                                      (console.log(
                                                          'Editor - store changed : ' +
                                                              n.type,
                                                      ),
                                                      r.l.REFRESH_BLOCK_PREVIEW_ALL.includes(
                                                          n.type,
                                                      )
                                                          ? e.getAllPreviews()
                                                          : e.getPreview())
                                              },
                                          )))))
                        },
                        unselectBlock: function() {
                            this.unSubscribe(),
                                (this.isWatching = !1),
                                window.hasOwnProperty('PREVSTATE') &&
                                    delete window.PREVSTATE,
                                this.hasBlockActive &&
                                    this.$store.commit(r.d.ACTIVATE_BLOCK, -1)
                        },
                    },
                    mounted: function() {},
                },
                Ne = (t('+5Qi'),
                Object(b.a)(
                    Ee,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'a17-overlay',
                            {
                                ref: 'overlay',
                                attrs: { title: 'Content editor' },
                                on: {
                                    close: n.closeEditor,
                                    open: n.openEditor,
                                },
                            },
                            [
                                t(
                                    'div',
                                    { staticClass: 'editor' },
                                    [
                                        n.revisions.length
                                            ? t(
                                                  'a17-button',
                                                  {
                                                      staticClass:
                                                          'editor__leave',
                                                      attrs: {
                                                          variant: 'editor',
                                                          size: 'small',
                                                      },
                                                      on: {
                                                          click: n.openPreview,
                                                      },
                                                  },
                                                  [
                                                      t('span', {
                                                          directives: [
                                                              {
                                                                  name: 'svg',
                                                                  rawName:
                                                                      'v-svg',
                                                              },
                                                          ],
                                                          staticClass:
                                                              'hide--xsmall',
                                                          attrs: {
                                                              symbol: 'preview',
                                                          },
                                                      }),
                                                      n._v('Preview'),
                                                  ],
                                              )
                                            : n._e(),
                                        n._v(' '),
                                        t(
                                            'div',
                                            { staticClass: 'editor__frame' },
                                            [
                                                t(
                                                    'div',
                                                    {
                                                        staticClass:
                                                            'editor__inner',
                                                    },
                                                    [
                                                        t(
                                                            'div',
                                                            {
                                                                ref: 'sidebar',
                                                                staticClass:
                                                                    'editor__sidebar',
                                                                class:
                                                                    n.sidebarClass,
                                                            },
                                                            [
                                                                t(
                                                                    'a17-editorsidebar',
                                                                    {
                                                                        on: {
                                                                            delete:
                                                                                n.deleteBlock,
                                                                            save:
                                                                                n.saveBlock,
                                                                            cancel:
                                                                                n.cancelBlock,
                                                                        },
                                                                    },
                                                                    [
                                                                        n._v(
                                                                            'Add content',
                                                                        ),
                                                                    ],
                                                                ),
                                                            ],
                                                            1,
                                                        ),
                                                        n._v(' '),
                                                        t(
                                                            'div',
                                                            {
                                                                staticClass:
                                                                    'editor__resizer',
                                                                on: {
                                                                    mousedown:
                                                                        n.resize,
                                                                },
                                                            },
                                                            [t('span')],
                                                        ),
                                                        n._v(' '),
                                                        t(
                                                            'div',
                                                            {
                                                                staticClass:
                                                                    'editor__preview',
                                                                class:
                                                                    n.previewClass,
                                                                style:
                                                                    n.previewStyle,
                                                            },
                                                            [
                                                                t(
                                                                    'a17-editorpreview',
                                                                    {
                                                                        ref:
                                                                            'previews',
                                                                        on: {
                                                                            select:
                                                                                n.selectBlock,
                                                                            delete:
                                                                                n.deleteBlock,
                                                                            unselect:
                                                                                n.unselectBlock,
                                                                            add:
                                                                                n.addBlock,
                                                                        },
                                                                    },
                                                                ),
                                                                n._v(' '),
                                                                n.loading
                                                                    ? t(
                                                                          'a17-spinner',
                                                                          {
                                                                              attrs: {
                                                                                  visible: !0,
                                                                              },
                                                                          },
                                                                          [
                                                                              n._v(
                                                                                  'Loading…',
                                                                              ),
                                                                          ],
                                                                      )
                                                                    : n._e(),
                                                            ],
                                                            1,
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                    ],
                                    1,
                                ),
                            ],
                        )
                    },
                    [],
                    !1,
                    null,
                    '77052975',
                    null,
                ))
            Ne.options.__file = 'Editor.vue'
            var Ae = Ne.exports,
                De = t('LgGc'),
                Te = t('VNOR'),
                Re = {
                    name: 'A17ModalAdd',
                    props: {
                        name: { type: String, default: '' },
                        modalTitle: { type: String, default: 'Add new' },
                        formCreate: { type: String, default: '#' },
                    },
                    components: { 'a17-modal-validation': w.a },
                    methods: {
                        open: function() {
                            this.$refs.modal && this.$refs.modal.open()
                        },
                        submit: function(n) {
                            var e = this
                            this.$store.commit(r.f.UPDATE_FORM_LOADING, !0)
                            var t = document.activeElement.name
                            this.$nextTick(function() {
                                this.$store
                                    .dispatch(l.a.CREATE_FORM_IN_MODAL, {
                                        name: this.name,
                                        endpoint: this.formCreate,
                                        method: 'post',
                                    })
                                    .then(
                                        function() {
                                            e.$refs.modal &&
                                                e.$refs.modal.close(),
                                                e.$nextTick(function() {
                                                    e.$store.commit(
                                                        r.j.SET_NOTIF,
                                                        {
                                                            message:
                                                                'Your content has been added',
                                                            variant: 'success',
                                                        },
                                                    ),
                                                        'create-another' ===
                                                            t &&
                                                            e.$refs.modal &&
                                                            e.$refs.modal.open()
                                                })
                                        },
                                        function(n) {
                                            e.$store.commit(r.j.SET_NOTIF, {
                                                message:
                                                    'Your content can not be added, please retry',
                                                variant: 'error',
                                            })
                                        },
                                    )
                            })
                        },
                    },
                },
                Ie = Object(b.a)(
                    Re,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'a17-modal',
                            {
                                ref: 'modal',
                                staticClass: 'modal--form',
                                attrs: { title: n.modalTitle, forceClose: !0 },
                            },
                            [
                                t(
                                    'form',
                                    {
                                        attrs: { action: n.formCreate },
                                        on: {
                                            submit: function(e) {
                                                return (
                                                    e.preventDefault(),
                                                    n.submit(e)
                                                )
                                            },
                                        },
                                    },
                                    [
                                        n._t('default'),
                                        n._v(' '),
                                        t('a17-modal-validation', {
                                            attrs: { 'is-disable': !0 },
                                        }),
                                    ],
                                    2,
                                ),
                            ],
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            Ie.options.__file = 'ModalAdd.vue'
            var Fe,
                je = Ie.exports,
                Le = t('znL1')
            function Ue(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var Me,
                Ve,
                ze = {
                    state: {
                        withPublicationToggle:
                            window.STORE.publication.withPublicationToggle ||
                            !1,
                        published: window.STORE.publication.published || !1,
                        publishSubmit:
                            window.STORE.publication.published ||
                            !window.STORE.publication.withPublicationToggle
                                ? 'update'
                                : 'live',
                        publishedLabel:
                            window.STORE.publication.publishedLabel || 'Live',
                        draftLabel:
                            window.STORE.publication.draftLabel || 'Draft',
                        withPublicationTimeframe:
                            window.STORE.publication.withPublicationTimeframe ||
                            !1,
                        startDate: window.STORE.publication.startDate || null,
                        endDate: window.STORE.publication.endDate || null,
                        visibility: window.STORE.publication.visibility || !1,
                        reviewProcess:
                            window.STORE.publication.reviewProcess || [],
                        saveType: void 0,
                        visibilityOptions: [
                            { value: 'public', label: 'Public' },
                            { value: 'private', label: 'Private' },
                        ],
                        submitOptions: window.STORE.publication
                            .submitOptions || {
                            draft: [
                                { name: 'save', text: 'Save as draft' },
                                {
                                    name: 'save-close',
                                    text: 'Save as draft and close',
                                },
                                {
                                    name: 'save-new',
                                    text: 'Save as draft and create new',
                                },
                                { name: 'cancel', text: 'Cancel' },
                            ],
                            live: [
                                { name: 'publish', text: 'Publish' },
                                {
                                    name: 'publish-close',
                                    text: 'Publish and close',
                                },
                                {
                                    name: 'publish-new',
                                    text: 'Publish and create new',
                                },
                                { name: 'cancel', text: 'Cancel' },
                            ],
                            update: [
                                { name: 'update', text: 'Update' },
                                {
                                    name: 'update-close',
                                    text: 'Update and close',
                                },
                                {
                                    name: 'update-new',
                                    text: 'Update and create new',
                                },
                                { name: 'cancel', text: 'Cancel' },
                            ],
                        },
                    },
                    getters: {
                        reviewProcessComplete: function(n) {
                            return n.reviewProcess.filter(function(n) {
                                return n.checked
                            })
                        },
                        getSubmitOptions: function(n) {
                            return n.published || !n.withPublicationToggle
                                ? n.submitOptions[n.publishSubmit]
                                : n.submitOptions.draft
                        },
                        getSaveType: function(n, e) {
                            return n.saveType || e.getSubmitOptions[0].name
                        },
                    },
                    mutations: (Ue(
                        (Fe = {}),
                        r.m.UPDATE_PUBLISH_START_DATE,
                        function(n, e) {
                            n.startDate = e
                        },
                    ),
                    Ue(Fe, r.m.UPDATE_PUBLISH_END_DATE, function(n, e) {
                        n.endDate = e
                    }),
                    Ue(Fe, r.m.UPDATE_PUBLISH_STATE, function(n, e) {
                        n.published = e
                    }),
                    Ue(Fe, r.m.UPDATE_PUBLISH_SUBMIT, function(n) {
                        n.publishSubmit = n.published ? 'update' : 'live'
                    }),
                    Ue(Fe, r.m.UPDATE_PUBLISH_VISIBILITY, function(n, e) {
                        n.visibility = e
                    }),
                    Ue(Fe, r.m.UPDATE_REVIEW_PROCESS, function(n, e) {
                        var t = '',
                            a = -1
                        e.length &&
                            ((t = e[e.length - 1]),
                            n.reviewProcess.forEach(function(n, e) {
                                n.value === t && (a = e)
                            })),
                            n.reviewProcess.forEach(function(n, e) {
                                ;(n.checked = e <= a),
                                    (n.disabled = !(e === a || e === a + 1))
                            })
                    }),
                    Ue(Fe, r.m.UPDATE_SAVE_TYPE, function(n, e) {
                        n.saveType = e
                    }),
                    Fe),
                },
                qe = t('vDqi'),
                Ke = t.n(qe),
                We = t('cn2v'),
                He = {
                    getBlockPreview: function(n, e, t, a) {
                        Ke.a.post(n, e).then(
                            function(n) {
                                t && 'function' == typeof t && t(n.data)
                            },
                            function(n) {
                                Object(We.a)('CONTENT', n),
                                    a && 'function' == typeof a && a(n),
                                    console.warn('block preview request error.')
                            },
                        )
                    },
                },
                Ge = t('kXBT')
            function Ye(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            function Qe() {
                return Date.now()
            }
            function Xe(n, e, t, a) {
                if (n.hasOwnProperty('id')) {
                    var i = Object(Ge.a)(n, t)
                    t.language.all.length > 1 &&
                        (i.activeLanguage = t.language.active.value),
                        Object(Ge.e)(i)
                            ? (e(r.d.ADD_BLOCK_PREVIEW, { id: n.id, html: '' }),
                              a && 'function' == typeof a && a())
                            : He.getBlockPreview(
                                  t.form.blockPreviewUrl,
                                  i,
                                  function(t) {
                                      e(r.d.ADD_BLOCK_PREVIEW, {
                                          id: n.id,
                                          html: t,
                                      }),
                                          a && 'function' == typeof a && a()
                                  },
                                  function(n) {},
                              )
                }
            }
            var Ze,
                Je,
                nt = {
                    state: {
                        loading: !1,
                        editor: window.STORE.form.editor || !1,
                        available: window.STORE.form.content || {},
                        blocks: window.STORE.form.blocks || [],
                        previews: window.STORE.form.previews || {},
                        active: {},
                    },
                    getters: {
                        previewsById: function(n) {
                            return function(e) {
                                return n.previews[e] ? n.previews[e] : ''
                            }
                        },
                    },
                    mutations: (Ye((Me = {}), r.d.ADD_BLOCK, function(n, e) {
                        var t = e.block
                        ;(t.id = Qe()),
                            e.index > -1
                                ? n.blocks.splice(e.index, 0, t)
                                : n.blocks.push(t)
                    }),
                    Ye(Me, r.d.MOVE_BLOCK, function(n, e) {
                        if (e.newIndex >= n.blocks.length)
                            for (
                                var t = e.newIndex - n.blocks.length;
                                1 + t--;

                            )
                                n.blocks.push(void 0)
                        n.blocks.splice(
                            e.newIndex,
                            0,
                            n.blocks.splice(e.oldIndex, 1)[0],
                        )
                    }),
                    Ye(Me, r.d.DELETE_BLOCK, function(n, e) {
                        var t = n.blocks[e].id
                        t && i.a.delete(n.previews, t), n.blocks.splice(e, 1)
                    }),
                    Ye(Me, r.d.DUPLICATE_BLOCK, function(n, e) {
                        var t = Object.assign({}, n.blocks[e])
                        ;(t.id = Qe()), n.blocks.splice(e + 1, 0, t)
                    }),
                    Ye(Me, r.d.REORDER_BLOCKS, function(n, e) {
                        n.blocks = e
                    }),
                    Ye(Me, r.d.ACTIVATE_BLOCK, function(n, e) {
                        n.blocks[e] ? (n.active = n.blocks[e]) : (n.active = {})
                    }),
                    Ye(Me, r.d.ADD_BLOCK_PREVIEW, function(n, e) {
                        i.a.set(n.previews, e.id, e.html)
                    }),
                    Ye(Me, r.d.UPDATE_PREVIEW_LOADING, function(n, e) {
                        n.loading = !n.loading
                    }),
                    Me),
                    actions: (Ye((Ve = {}), l.a.GET_PREVIEW, function(n) {
                        var e = n.commit,
                            t = n.state,
                            a = n.rootState,
                            i =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : -1,
                            o = i >= 0 ? t.blocks[i] : {}
                        t.active.hasOwnProperty('id') &&
                            -1 === i &&
                            (o = t.active),
                            Xe(o, e, a)
                    }),
                    Ye(Ve, l.a.GET_ALL_PREVIEWS, function(n) {
                        var e = n.commit,
                            t = n.state,
                            a = n.rootState
                        if (t.blocks.length && !t.loading) {
                            e(r.d.UPDATE_PREVIEW_LOADING, !0)
                            var i = 0
                            t.blocks.forEach(function(n) {
                                Xe(n, e, a, function() {
                                    ++i === t.blocks.length &&
                                        e(r.d.UPDATE_PREVIEW_LOADING, !0)
                                })
                            })
                        }
                    }),
                    Ve),
                },
                et = t('xewe'),
                tt = function(n, e, t, a) {
                    Ke.a.put(n, e).then(
                        function(n) {
                            t && 'function' == typeof t && t(n.data)
                        },
                        function(n) {
                            Object(We.a)('REVISION', n),
                                a && 'function' == typeof a && a(n),
                                console.warn('preview request error.')
                        },
                    )
                }
            function at(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var it,
                ot = {
                    loading: !1,
                    active: {},
                    activeContent: '',
                    currentContent: '',
                    all: window.STORE.revisions || [],
                },
                st = (at((Ze = {}), r.n.LOADING_REV, function(n) {
                    n.loading = !0
                }),
                at(Ze, r.n.UPDATE_REV, function(n, e) {
                    var t = n.all.findIndex(function(n) {
                        return n.id === e
                    })
                    n.active = -1 !== t ? n.all[t] : {}
                }),
                at(Ze, r.n.UPDATE_REV_CONTENT, function(n, e) {
                    ;(n.loading = !1), (n.activeContent = e)
                }),
                at(Ze, r.n.UPDATE_REV_CURRENT_CONTENT, function(n, e) {
                    ;(n.loading = !1), (n.currentContent = e)
                }),
                at(Ze, r.n.UPDATE_REV_ALL, function(n, e) {
                    n.all = e
                }),
                Ze),
                rt = {
                    state: ot,
                    getters: {},
                    actions: (at((Je = {}), l.a.GET_CURRENT, function(n) {
                        var e = n.commit,
                            t = n.rootState
                        return new Promise(function(n, a) {
                            e(r.n.LOADING_REV)
                            var i = Object(Ge.b)(t)
                            t.language.all.length > 1 &&
                                (i.activeLanguage = t.language.active.value),
                                tt(
                                    t.form.previewUrl,
                                    i,
                                    function(t) {
                                        e(r.n.UPDATE_REV_CURRENT_CONTENT, t),
                                            n()
                                    },
                                    function(n) {
                                        a(n)
                                    },
                                )
                        })
                    }),
                    at(Je, l.a.GET_REVISION, function(n) {
                        var e = n.commit,
                            t = n.state,
                            a = n.rootState
                        return new Promise(function(n, i) {
                            e(r.n.LOADING_REV)
                            var o = {
                                revisionId:
                                    0 === Object.keys(t.active).length
                                        ? t.all[0].id
                                        : t.active.id,
                            }
                            a.language.all.length > 1 &&
                                (o.activeLanguage = a.language.active.value),
                                tt(
                                    a.form.previewUrl,
                                    o,
                                    function(t) {
                                        e(r.n.UPDATE_REV_CONTENT, t), n()
                                    },
                                    function(n) {
                                        i(n)
                                    },
                                )
                        })
                    }),
                    Je),
                    mutations: st,
                }
            function lt(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            var ct,
                mt = {
                    state: {
                        connector: null,
                        title: 'Attach related resources',
                        endpoint: '',
                        endpointName: '',
                        endpoints: [],
                        max: 0,
                        selected: window.STORE.browser.selected || {},
                    },
                    getters: {
                        selectedItemsByIds: function(n) {
                            var e = []
                            for (var t in n.selected)
                                e[t] = n.selected[t].map(function(n) {
                                    return ''
                                        .concat(n.endpointType, '_')
                                        .concat(n.id)
                                })
                            return e
                        },
                    },
                    mutations: (lt((it = {}), r.b.SAVE_ITEMS, function(n, e) {
                        if (n.connector)
                            if (
                                n.selected[n.connector] &&
                                n.selected[n.connector].length
                            )
                                n.selected[n.connector] = e
                            else {
                                var t = {}
                                ;(t[n.connector] = e),
                                    (n.selected = Object.assign(
                                        {},
                                        n.selected,
                                        t,
                                    ))
                            }
                    }),
                    lt(it, r.b.DESTROY_ITEMS, function(n, e) {
                        n.selected[e.name] && i.a.delete(n.selected, e.name)
                    }),
                    lt(it, r.b.DESTROY_ITEM, function(n, e) {
                        n.selected[e.name] &&
                            (n.selected[e.name].splice(e.index, 1),
                            0 === n.selected[e.name].length &&
                                i.a.delete(n.selected, e.name),
                            (n.connector = null))
                    }),
                    lt(it, r.b.REORDER_ITEMS, function(n, e) {
                        var t = {}
                        ;(t[e.name] = e.items),
                            (n.selected = Object.assign({}, n.selected, t))
                    }),
                    lt(it, r.b.UPDATE_BROWSER_MAX, function(n, e) {
                        n.max = Math.max(0, e)
                    }),
                    lt(it, r.b.UPDATE_BROWSER_CONNECTOR, function(n, e) {
                        e && '' !== e && (n.connector = e)
                    }),
                    lt(it, r.b.UPDATE_BROWSER_TITLE, function(n, e) {
                        e && '' !== e && (n.title = e)
                    }),
                    lt(it, r.b.DESTROY_BROWSER_CONNECTOR, function(n) {
                        n.connector = null
                    }),
                    lt(it, r.b.UPDATE_BROWSER_ENDPOINT, function(n, e) {
                        e &&
                            '' !== e &&
                            ((n.endpoint = e.value),
                            (n.endpointName = e.label || ''))
                    }),
                    lt(it, r.b.DESTROY_BROWSER_ENDPOINT, function(n) {
                        ;(n.endpoint = ''), (n.endpointName = '')
                    }),
                    lt(it, r.b.UPDATE_BROWSER_ENDPOINTS, function(n, e) {
                        ;(!e && !e.length > 0) ||
                            ((n.endpoints = e),
                            (n.endpoint = e[0].value),
                            (n.endpointName = e[0].label))
                    }),
                    lt(it, r.b.DESTROY_BROWSER_ENDPOINTS, function(n) {
                        n.endpoints = []
                    }),
                    it),
                }
            function ut(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            function dt() {
                return Date.now()
            }
            var pt = {
                state: {
                    repeaters: window.STORE.form.repeaters || {},
                    availableRepeaters:
                        window.STORE.form.availableRepeaters || {},
                },
                getters: {},
                mutations: (ut((ct = {}), r.f.ADD_FORM_BLOCK, function(n, e) {
                    var t = e.name,
                        a = e.type,
                        i = {},
                        o = n.availableRepeaters[a],
                        s = !n.repeaters[t]
                    if (o)
                        if (
                            ((i.id = dt()),
                            (i.type = o.component),
                            (i.title = o.title),
                            s)
                        ) {
                            var r = {}
                            ;(r[t] = []),
                                r[t].push(i),
                                (n.repeaters = Object.assign(
                                    {},
                                    n.repeaters,
                                    r,
                                ))
                        } else n.repeaters[t].push(i)
                }),
                ut(ct, r.f.DELETE_FORM_BLOCK, function(n, e) {
                    n.repeaters[e.name].splice(e.index, 1)
                }),
                ut(ct, r.f.DUPLICATE_FORM_BLOCK, function(n, e) {
                    var t = Object.assign({}, n.repeaters[e.name][e.index])
                    ;(t.id = dt()),
                        n.repeaters[e.name].splice(e.index + 1, 0, t)
                }),
                ut(ct, r.f.REORDER_FORM_BLOCKS, function(n, e) {
                    var t = {}
                    ;(t[e.name] = e.blocks),
                        (n.repeaters = Object.assign({}, n.repeaters, t))
                }),
                ct),
            }
            var ht,
                ft,
                bt,
                vt = {
                    state: {
                        active: window.STORE.parentId || 0,
                        all: window.STORE.parents || [],
                    },
                    getters: {},
                    mutations: ((ht = {}),
                    (ft = r.k.UPDATE_PARENT),
                    (bt = function(n, e) {
                        n.active = e || 0
                    }),
                    ft in ht
                        ? Object.defineProperty(ht, ft, {
                              value: bt,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (ht[ft] = bt),
                    ht),
                },
                gt = t('9FGi'),
                _t = t('SGjJ')
            function wt(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = t),
                    n
                )
            }
            i.a.use(De.a),
                i.a.use(Te.a),
                s.a.registerModule('form', Le.a),
                s.a.registerModule('publication', ze),
                s.a.registerModule('content', nt),
                s.a.registerModule('language', et.a),
                s.a.registerModule('revision', rt),
                s.a.registerModule('browser', mt),
                s.a.registerModule('repeaters', pt),
                s.a.registerModule('parents', vt),
                s.a.registerModule('attributes', gt.a),
                i.a.component('a17-repeater', $n),
                i.a.component('a17-browser', Yn),
                i.a.component('a17-connectorfield', Mn),
                i.a.component('a17-locationfield', Rn),
                i.a.component('a17-overlay', ae),
                i.a.component('a17-previewer', ce),
                i.a.component('a17-editor', Ae),
                i.a.component('a17-modal-add', je)
            var xt = t('l0g9')
            xt.keys().map(function(n) {
                var e = n
                    .replace(/customs\//, '')
                    .match(/\w+/)[0]
                    .replace(/([a-z])([A-Z])/g, '$1-$2')
                    .replace(/\s+/g, '-')
                    .toLowerCase()
                if ('block' !== e)
                    return i.a.component('a17-' + e, xt(n).default)
            }),
                (window.vm = new i.a({
                    store: s.a,
                    el: '#app',
                    components: {
                        'a17-spinner': $e.a,
                        'a17-sticky-nav': g,
                        'a17-title-editor': O,
                        'a17-langswitcher': B.a,
                        'a17-fieldset': C.a,
                        'a17-content': wn,
                        'a17-publisher': rn,
                        'a17-page-nav': un,
                    },
                    mixins: [_t.a, fn.a],
                    data: function() {
                        return {
                            unSubscribe: function() {
                                return null
                            },
                            isFormUpdated: !1,
                        }
                    },
                    computed: (function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(t)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                t,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(e) {
                                    wt(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {},
                        Object(o.c)({
                            loading: function(n) {
                                return n.form.loading
                            },
                            editor: function(n) {
                                return n.content.editor
                            },
                            isCustom: function(n) {
                                return n.form.isCustom
                            },
                        }),
                        Object(o.b)(['getSaveType']),
                    ),
                    methods: {
                        submitForm: function(n) {
                            var e = this
                            this.loading ||
                                ((this.isFormUpdated = !1),
                                this.$store.commit(r.f.UPDATE_FORM_LOADING, !0),
                                this.unSubscribe(),
                                this.$nextTick(function() {
                                    var n =
                                        e.getSaveType ||
                                        document.activeElement.name
                                    e.$store
                                        .dispatch(l.a.SAVE_FORM, n)
                                        .then(function() {
                                            e.mutationsSubscribe()
                                        })
                                }))
                        },
                        confirmExit: function(n) {
                            if (this.isFormUpdated && !this.isCustom)
                                return 'message'
                            void 0 !== window.event
                                ? (window.event.cancelBubble = !0)
                                : (n.cancelBubble = !0)
                        },
                        mutationsSubscribe: function() {
                            var n = this
                            this.unSubscribe = this.$store.subscribe(function(
                                e,
                                t,
                            ) {
                                c.a.includes(e.type) &&
                                    ((n.isFormUpdated = !0), n.unSubscribe())
                            })
                        },
                    },
                    mounted: function() {
                        var n = this
                        this.$nextTick(function() {
                            ;(window.onbeforeunload = n.confirmExit),
                                n.mutationsSubscribe()
                        })
                    },
                    beforeDestroy: function() {
                        this.unSubscribe()
                    },
                    created: function() {
                        Object(u.a)()
                    },
                })),
                document.addEventListener('DOMContentLoaded', m.a)
        },
        '9wRs': function(n, e, t) {
            'use strict'
            var a = t('sCoS')
            t.n(a).a
        },
        AXxK: function(n, e, t) {
            var a = t('YWfh')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        AmqQ: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.revaccordion__scroller[data-v-26d548bc] {\n  height: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n  max-height: 165px;\n  margin: -12px -20px;\n}\n.revaccordion__list[data-v-26d548bc] {\n  padding: 12px 20px;\n}\n.revaccordion__item a[data-v-26d548bc] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: no-wrap;\n  color: #8c8c8c;\n  padding: 7.5px 20px;\n  margin-left: -20px;\n  margin-right: -20px;\n  text-decoration: none;\n}\n.revaccordion__item a[data-v-26d548bc]:focus, .revaccordion__item a[data-v-26d548bc]:hover {\n  color: #262626;\n  background: #f2f2f2;\n}\n.revaccordion__author[data-v-26d548bc] {\n  flex-grow: 1;\n  white-space: nowrap;\n}\n.revaccordion__datetime[data-v-26d548bc] {\n  padding-left: 10px;\n  color: #3278B8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
                '',
            ])
        },
        Bp2e: function(n, e, t) {
            'use strict'
            var a = t('/ztK')
            t.n(a).a
        },
        D6LV: function(n, e, t) {
            var a = t('nKux')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        EjQq: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.previewerframe[data-v-388f42fb] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  max-width: calc(100% - 20px);\n  display: block;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  transition: width 0.3s ease;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  background: #fff;\n}",
                '',
            ])
        },
        F2Xa: function(n, e, t) {
            var a = t('cKmk')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        'H/N6': function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.publisher__wrapper[data-v-8bbae9a8] {\n  border-radius: 2px;\n  border: 1px solid #e5e5e5;\n  background: #fff;\n  margin-bottom: 20px;\n}\n.publisher__trash[data-v-8bbae9a8] {\n  padding: 0 10px;\n  margin-bottom: 20px;\n}\n.publisher__item[data-v-8bbae9a8] {\n  border-bottom: 1px solid #f2f2f2;\n}\n.publisher__item[data-v-8bbae9a8]:last-child {\n  border-bottom: 0 none;\n}\n.publisher__item[data-v-8bbae9a8] {\n  color: #8c8c8c;\n}\n.publisher__item a[data-v-8bbae9a8] {\n  color: #3278B8;\n  text-decoration: none;\n}\n.revisionaccordion__list[data-v-8bbae9a8] {\n  padding: 20px;\n}\n.publisher__link[data-v-8bbae9a8] {\n  height: 55px;\n  line-height: 55px;\n  padding: 0 20px;\n  display: block;\n}\n.publisher__link .icon[data-v-8bbae9a8] {\n  margin-right: 10px;\n  color: #3278B8;\n}\n.publisher__item--btns[data-v-8bbae9a8] {\n  padding: 10px;\n}",
                '',
            ])
        },
        ICSs: function(n, e, t) {
            var a = t('zl2a')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        IJNK: function(n, e, t) {
            'use strict'
            t.r(e)
            var a = { mixins: [t('8Piv').a] },
                i = t('KHd+'),
                o = Object(i.a)(
                    a,
                    function() {
                        var n = this.$createElement,
                            e = this._self._c || n
                        return e(
                            'div',
                            { staticClass: 'block__body' },
                            [
                                e(
                                    'a17-inputframe',
                                    {
                                        attrs: {
                                            label: 'Image',
                                            name: 'medias.cover',
                                        },
                                    },
                                    [
                                        e('a17-mediafield', {
                                            attrs: {
                                                name: this.fieldName('cover'),
                                                'crop-context': 'cover',
                                            },
                                        }),
                                    ],
                                    1,
                                ),
                                e('a17-locale', {
                                    attrs: {
                                        type: 'a17-textfield',
                                        attributes: {
                                            label:
                                                'Image Subtitle (translated)',
                                            name: this.fieldName(
                                                'image_subtitle',
                                            ),
                                            type: 'textarea',
                                            required: !0,
                                            placeholder: 'Description.',
                                            maxlength: 250,
                                            inStore: 'value',
                                        },
                                    },
                                }),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            o.options.__file = 'BlockImage_With_Text.vue'
            e.default = o.exports
        },
        KZPO: function(n, e, t) {
            var a = t('H/N6')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        KaLS: function(n, e, t) {
            var a = t('xhqP')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        Krk1: function(n, e, t) {
            'use strict'
            t.r(e)
            var a = { mixins: [t('8Piv').a] },
                i = t('KHd+'),
                o = Object(i.a)(
                    a,
                    function() {
                        var n = this.$createElement,
                            e = this._self._c || n
                        return e(
                            'div',
                            { staticClass: 'block__body' },
                            [
                                e(
                                    'a17-inputframe',
                                    {
                                        attrs: {
                                            label: 'Gallery',
                                            name: 'medias.gallery',
                                        },
                                    },
                                    [
                                        e(
                                            'a17-slideshow',
                                            {
                                                attrs: {
                                                    name: this.fieldName(
                                                        'gallery',
                                                    ),
                                                    max: 5,
                                                    'crop-context': 'gallery',
                                                },
                                            },
                                            [
                                                this._v(
                                                    'Minimum image width: 1500px',
                                                ),
                                            ],
                                        ),
                                    ],
                                    1,
                                ),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            o.options.__file = 'BlockGallery.vue'
            e.default = o.exports
        },
        'N+q5': function(n, e, t) {
            'use strict'
            var a = t('3fFh')
            t.n(a).a
        },
        OoG9: function(n, e, t) {
            'use strict'
            var a = t('S0eq')
            t.n(a).a
        },
        'P+7G': function(n, e, t) {
            'use strict'
            var a = t('AXxK')
            t.n(a).a
        },
        Pj0O: function(n, e, t) {
            'use strict'
            var a = t('ICSs')
            t.n(a).a
        },
        QRp4: function(n, e, t) {
            var a = t('4PRQ')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        S0eq: function(n, e, t) {
            var a = t('AmqQ')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        T7fi: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.stickyNav[data-v-f583b87e] {\n  background-color: rgba(242, 242, 242, 0.95);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  background-clip: padding-box;\n}\n@media screen and (min-width: 850px) {\n.stickyNav[data-v-f583b87e] {\n    height: 90px;\n    z-index: 10;\n    overflow: hidden;\n}\n.stickyNav.sticky__fixed[data-v-f583b87e], .stickyNav.sticky__fixedTop[data-v-f583b87e], .stickyNav.sticky__fixedBottom[data-v-f583b87e] {\n    height: 60px;\n}\n.stickyNav.sticky__fixed .container[data-v-f583b87e], .stickyNav.sticky__fixedTop .container[data-v-f583b87e], .stickyNav.sticky__fixedBottom .container[data-v-f583b87e] {\n    padding-top: 14px;\n}\n.stickyNav.sticky__fixed .stickyNav__links[data-v-f583b87e], .stickyNav.sticky__fixedTop .stickyNav__links[data-v-f583b87e], .stickyNav.sticky__fixedBottom .stickyNav__links[data-v-f583b87e] {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity 0.25s;\n}\n.stickyNav.sticky__fixed .titleEditor[data-v-f583b87e], .stickyNav.sticky__fixedTop .titleEditor[data-v-f583b87e], .stickyNav.sticky__fixedBottom .titleEditor[data-v-f583b87e] {\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.25s ease, visibility 0s 0.25s;\n}\n.stickyNav.sticky__fixed .titleEditor[data-v-f583b87e]:first-child, .stickyNav.sticky__fixedTop .titleEditor[data-v-f583b87e]:first-child, .stickyNav.sticky__fixedBottom .titleEditor[data-v-f583b87e]:first-child {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity 0.25s;\n}\n}\n.titleEditor[data-v-f583b87e] {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.25s;\n}\n.stickyNav__links[data-v-f583b87e] {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s ease, visibility 0s 0.25s;\n  display: flex;\n}\n.stickyNav__links a[data-v-f583b87e] {\n  display: block;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 17px;\n  padding: 0 17px;\n  text-decoration: none;\n  color: #8c8c8c;\n  background-color: rgba(255, 255, 255, 0);\n  transition: background-color 0.25s linear;\n}\n.stickyNav__links a[data-v-f583b87e]:hover {\n  color: #262626;\n}\n.stickyNav__links a.s--on[data-v-f583b87e] {\n  background-color: white;\n  color: #262626;\n}\n.stickyNav__nav[data-v-f583b87e] {\n  position: relative;\n}\n.stickyNav__nav .stickyNav__links[data-v-f583b87e] {\n  position: absolute;\n}\n.stickyNav__actions > div[data-v-f583b87e] {\n  display: flex;\n}\n.stickyNav__actions > div .button[data-v-f583b87e] {\n  margin-left: 20px;\n}\n@media screen and (max-width: 849px) {\n.stickyNav__actions > div .button[data-v-f583b87e] {\n    margin-left: 0;\n    margin-top: 20px;\n}\n}\n@media screen and (max-width: 849px) {\n.stickyNav__actions > div[data-v-f583b87e] {\n    flex-direction: column;\n}\n}\n.stickyNav .container[data-v-f583b87e] {\n  display: block;\n  padding-top: 26px;\n  padding-bottom: 26px;\n}\n@media screen and (min-width: 850px) {\n.stickyNav .container[data-v-f583b87e] {\n    display: flex;\n}\n}\n@media screen and (min-width: 850px) {\n.stickyNav__nav[data-v-f583b87e] {\n    flex-grow: 1;\n}\n}",
                '',
            ])
        },
        U4xr: function(n, e, t) {
            'use strict'
            var a = t('uw9q')
            t.n(a).a
        },
        XXnY: function(n, e, t) {
            var a = t('6f3J')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        YWfh: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                '.block .block__content .block__body .input {\n  margin-top: 15px;\n}\n.block .block__content .block__body > .media,\n.block .block__content .block__body > .slideshow,\n.block .block__content .block__body > .browserField {\n  margin-left: -15px;\n  margin-right: -15px;\n  border: 0 none;\n}\n.block .block__content .block__body > .media:last-child,\n.block .block__content .block__body > .slideshow:last-child,\n.block .block__content .block__body > .browserField:last-child {\n  margin-bottom: -15px;\n}',
                '',
            ])
        },
        ZOnm: function(n, e, t) {
            'use strict'
            t.r(e)
            var a = { mixins: [t('8Piv').a] },
                i = t('KHd+'),
                o = Object(i.a)(
                    a,
                    function() {
                        var n = this.$createElement,
                            e = this._self._c || n
                        return e(
                            'div',
                            { staticClass: 'block__body' },
                            [
                                e('a17-locale', {
                                    attrs: {
                                        type: 'a17-wysiwyg',
                                        attributes: {
                                            label: 'Paragraph',
                                            name: this.fieldName('paragraph'),
                                            note: 'You can edit the source.',
                                            maxlength: 200,
                                            editSource: !0,
                                            inStore: 'value',
                                        },
                                    },
                                }),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            o.options.__file = 'BlockParagraph.vue'
            e.default = o.exports
        },
        'aW/G': function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                '/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we\'ll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we\'re mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don\'t need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you\'d like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.editorSidebar[data-v-3331cb7e] {\n  margin: 20px 0 20px 0;\n  position: relative;\n  overflow: hidden;\n  height: calc(100% - 40px);\n}\n.editorSidebar__item[data-v-3331cb7e],\n.editorSidebar__list[data-v-3331cb7e] {\n  padding: 0 10px 0 20px;\n  overflow-y: scroll;\n  position: absolute;\n  top: 0;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n.editorSidebar__list[data-v-3331cb7e] {\n  height: calc(100% - 60px);\n}\n.editorSidebar__title[data-v-3331cb7e] {\n  padding: 15px 0 10px 0;\n  display: flex;\n}\n.editorSidebar__body[data-v-3331cb7e] {\n  border: 1px solid #e5e5e5;\n  border-radius: 2px;\n  background: #fff;\n  padding: 15px;\n}\n.editorSidebar__counter[data-v-3331cb7e] {\n  border: 1px solid #e5e5e5;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  text-align: center;\n  display: inline-block;\n  line-height: 25px;\n  margin-right: 10px;\n  background: #fff;\n  color: #8c8c8c;\n  -webkit-font-feature-settings: "kern";\n          font-feature-settings: "kern";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: default;\n}\n.dropdown .editorSidebar__counter[data-v-3331cb7e] {\n  cursor: pointer;\n}\n.editorSidebar__counter[data-v-3331cb7e]:hover,\n.dropdown--active .editorSidebar__counter[data-v-3331cb7e] {\n  color: #262626;\n  border-color: #262626;\n}\nh4[data-v-3331cb7e],\n.editorSidebar__blockTitle[data-v-3331cb7e] {\n  font-weight: 600;\n}\n.editorSidebar__blockTitle[data-v-3331cb7e] {\n  flex-grow: 1;\n}\n.editorSidebar__blockTitle .dropdown[data-v-3331cb7e] {\n  display: inline-block;\n}\n.editorSidebar__actions[data-v-3331cb7e] {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  padding: 20px 10px 0 20px;\n  background: #f2f2f2;\n  display: flex;\n}\n.editorSidebar__actions button[data-v-3331cb7e] {\n  width: calc(50% - 10px);\n}\n.editorSidebar__actions button + button[data-v-3331cb7e] {\n  margin-left: 20px;\n}\n.editorSidebar__actions button.button--validate[data-v-3331cb7e]:last-child {\n  width: 100%;\n  margin-left: 0;\n}\n.editorSidebar__button[data-v-3331cb7e] {\n  background-color: transparent;\n  -webkit-appearance: none;\n  cursor: pointer;\n  font-size: 1em;\n  outline: none;\n  margin: 0;\n  border: 0 none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  letter-spacing: inherit;\n  cursor: move;\n  display: block;\n  width: 100%;\n  text-align: left;\n  background: #fff;\n  border-radius: 2px;\n  margin-bottom: 10px;\n  height: 60px;\n  line-height: 60px;\n  padding: 0 20px;\n  border: 1px solid #e5e5e5;\n  color: #8c8c8c;\n}\n.editorSidebar__button .icon[data-v-3331cb7e] {\n  margin-left: -20px;\n  min-width: 65px;\n  text-align: center;\n  color: #a6a6a6;\n  height: 58px;\n}\n.editorSidebar__button[data-v-3331cb7e]:hover, .editorSidebar__button[data-v-3331cb7e]:focus {\n  color: #262626;\n  border-color: #ccc;\n}\n.editorSidebar__button:hover .icon[data-v-3331cb7e], .editorSidebar__button:focus .icon[data-v-3331cb7e] {\n  color: #262626;\n}',
                '',
            ])
        },
        ayNj: function(n, e, t) {
            'use strict'
            t.r(e)
            var a = { name: 'A17Title', mixins: [t('8Piv').a] },
                i = t('KHd+'),
                o = Object(i.a)(
                    a,
                    function() {
                        var n = this.$createElement,
                            e = this._self._c || n
                        return e(
                            'div',
                            { staticClass: 'block__body' },
                            [
                                e('a17-locale', {
                                    attrs: {
                                        type: 'a17-textfield',
                                        attributes: {
                                            label: 'Title',
                                            name: this.fieldName('text'),
                                            type: 'text',
                                            maxlength: 250,
                                            inStore: 'value',
                                        },
                                    },
                                }),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            o.options.__file = 'BlockTitle.vue'
            e.default = o.exports
        },
        cEi1: function(n, e, t) {
            var a = t('fa6T')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        cKmk: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.browser[data-v-3c542d1e] {\n  display: block;\n  width: 100%;\n  padding: 0;\n  position: relative;\n  flex-grow: 1;\n}\n.browser__frame[data-v-3c542d1e] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-flow: column nowrap;\n}\n.browser__inner[data-v-3c542d1e] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  flex-grow: 1;\n}\n.browser__inner[data-v-3c542d1e]::after {\n  content: \"\";\n  position: absolute;\n  height: 1px;\n  bottom: 0;\n  background-color: #f2f2f2;\n  left: 20px;\n  right: 20px;\n}\n.browser__header[data-v-3c542d1e] {\n  background: #f2f2f2;\n  padding: 0 20px;\n  display: flex;\n}\n.browser__sources[data-v-3c542d1e] {\n  flex-grow: 2;\n}\n.browser__sources .browser__sources-select[data-v-3c542d1e] {\n  padding: 20px 0;\n  margin-right: 15px;\n}\n.browser__footer[data-v-3c542d1e] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  width: 100%;\n  color: #8c8c8c;\n  overflow: hidden;\n  background: #fff;\n}\n.browser__size-infos[data-v-3c542d1e] {\n  font-size: 11px;\n  letter-spacing: 0;\n  text-align: right;\n  float: right;\n}\n.browser__list[data-v-3c542d1e] {\n  padding: 10px 10px 0 10px;\n  margin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n}\n.browser__list .itemlist[data-v-3c542d1e] {\n  padding-bottom: 0;\n}",
                '',
            ])
        },
        cQa9: function(n, e, t) {
            'use strict'
            var a = t('9PQ/')
            t.n(a).a
        },
        dCKn: function(n, e, t) {
            var a = t('/Zxv')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        dLBB: function(n, e, t) {
            'use strict'
            var a = t('54yU')
            t.n(a).a
        },
        'e6+0': function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.form__field[data-v-0332eb6e] {\n  display: flex;\n  align-items: center;\n  padding: 0 15px;\n}\n.form__field input[data-v-0332eb6e] {\n  padding: 0;\n}\n.form__field .form__field--showMap a[data-v-0332eb6e] {\n  font-size: 11px;\n  letter-spacing: 0;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #8c8c8c;\n  transition: color 250ms;\n}\n.form__field .form__field--showMap a[data-v-0332eb6e]:hover {\n  color: #666;\n}\n.form__field .form__field--showMap a span[data-v-0332eb6e] {\n  margin-right: 5px;\n}",
                '',
            ])
        },
        eKeC: function(n, e, t) {
            'use strict'
            t.r(e)
            var a = { mixins: [t('8Piv').a] },
                i = t('KHd+'),
                o = Object(i.a)(
                    a,
                    function() {
                        var n = this.$createElement,
                            e = this._self._c || n
                        return e(
                            'div',
                            { staticClass: 'block__body' },
                            [
                                e('a17-locale', {
                                    attrs: {
                                        type: 'a17-textfield',
                                        attributes: {
                                            label: 'Quote (translated)',
                                            name: this.fieldName('quote'),
                                            type: 'textarea',
                                            required: !0,
                                            maxlength: 250,
                                            rows: 3,
                                            inStore: 'value',
                                        },
                                    },
                                }),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            o.options.__file = 'BlockQuote.vue'
            e.default = o.exports
        },
        fa6T: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.content[data-v-032be055] {\n  margin-top: 20px;\n}\n.content__container[data-v-032be055] {\n  margin-bottom: 20px;\n}\n.content__container + .dropdown[data-v-032be055] {\n  display: inline-block;\n}\n.content__actions[data-v-032be055] {\n  display: flex;\n}\n.content__secondaryActions[data-v-032be055] {\n  flex-grow: 1;\n  text-align: right;\n  margin-left: 20px;\n  padding-top: 8px;\n}\n.content__item[data-v-032be055] {\n  border: 1px solid #e5e5e5;\n  border-top: 0 none;\n}\n.content__item.sortable-ghost[data-v-032be055] {\n  opacity: 0.5;\n}\n.content__actions button .content__icon[data-v-032be055] {\n  margin-right: 0;\n  margin-left: -15px;\n  min-width: 55px;\n  text-align: center;\n  height: 40px;\n}\n.content__item[data-v-032be055]:first-child {\n  border-top: 1px solid #e5e5e5;\n}",
                '',
            ])
        },
        'kS/y': function(n, e, t) {
            'use strict'
            t.r(e)
            var a = { name: 'A17Bodytext', mixins: [t('8Piv').a] },
                i = t('KHd+'),
                o = Object(i.a)(
                    a,
                    function() {
                        var n = this.$createElement,
                            e = this._self._c || n
                        return e(
                            'div',
                            { staticClass: 'block__body' },
                            [
                                e('a17-wysiwyg', {
                                    attrs: {
                                        name: this.fieldName('html'),
                                        inStore: 'value',
                                    },
                                }),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            o.options.__file = 'BlockWysiwyg.vue'
            e.default = o.exports
        },
        l0g9: function(n, e, t) {
            var a = {
                './Block.vue': '7Oz9',
                './BlockImage.vue': 'rAni',
                './BlockTitle.vue': 'ayNj',
                './BlockWysiwyg.vue': 'kS/y',
                './customs/BlockGallery.vue': 'Krk1',
                './customs/BlockImage_With_Text.vue': 'IJNK',
                './customs/BlockParagraph.vue': 'ZOnm',
                './customs/BlockQuote.vue': 'eKeC',
            }
            function i(n) {
                var e = o(n)
                return t(e)
            }
            function o(n) {
                var e = a[n]
                if (!(e + 1)) {
                    var t = new Error("Cannot find module '" + n + "'")
                    throw ((t.code = 'MODULE_NOT_FOUND'), t)
                }
                return e
            }
            ;(i.keys = function() {
                return Object.keys(a)
            }),
                (i.resolve = o),
                (n.exports = i),
                (i.id = 'l0g9')
        },
        nKux: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                '.editorSidebar__body .input {\n  margin-top: 15px;\n}\n.editorSidebar__body .block__body > .media,\n.editorSidebar__body .block__body > .slideshow,\n.editorSidebar__body .block__body > .browserField {\n  margin-left: -15px;\n  margin-right: -15px;\n  border: 0 none;\n}\n.editorSidebar__body .block__body > .media:last-child,\n.editorSidebar__body .block__body > .slideshow:last-child,\n.editorSidebar__body .block__body > .browserField:last-child {\n  margin-bottom: -15px;\n}',
                '',
            ])
        },
        oAF4: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.overlay[data-v-c81d0a60] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 400;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.35s ease, visibility 0s 0.35s;\n  padding: 0;\n  background-color: #333;\n}\n.overlay + .overlay[data-v-c81d0a60] {\n  z-index: 401;\n}\n.overlay__window[data-v-c81d0a60] {\n  background: #fff;\n  min-width: 50vw;\n  position: relative;\n  border-radius: 2px;\n  display: flex;\n  flex-flow: column nowrap;\n  width: 100%;\n  height: 100%;\n  max-width: inherit;\n}\n.overlay__content[data-v-c81d0a60] {\n  overflow: hidden;\n  flex-grow: 1;\n  height: 100%;\n}\n.overlay__header[data-v-c81d0a60] {\n  background: #000;\n  color: #fff;\n  padding: 0 20px;\n  height: 60px;\n  line-height: 60px;\n  position: relative;\n  font-weight: 600;\n  text-align: center;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.overlay__close[data-v-c81d0a60] {\n  background-color: transparent;\n  -webkit-appearance: none;\n  cursor: pointer;\n  font-size: 1em;\n  outline: none;\n  margin: 0;\n  border: 0 none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  letter-spacing: inherit;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: transparent;\n  height: 60px;\n  color: #8c8c8c;\n  padding: 22px 20px;\n  text-align: left;\n}\n.overlay__close[data-v-c81d0a60]:hover, .overlay__close[data-v-c81d0a60]:focus {\n  color: #fff;\n}\n.overlay__closeLabel[data-v-c81d0a60] {\n  position: relative;\n  margin-left: 10px;\n  top: -2px;\n}\n.overlay__content[data-v-c81d0a60] {\n  padding: 0;\n  display: flex;\n}\n.overlay__content > button[data-v-c81d0a60] {\n  margin-bottom: 20px;\n}\n.overlay--active[data-v-c81d0a60] {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.35s;\n}\n.overlay--hidden[data-v-c81d0a60] {\n  display: none;\n}",
                '',
            ])
        },
        pcLQ: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.titleEditor[data-v-91723f64] {\n  margin-bottom: 20px;\n}\n@media screen and (min-width: 850px) {\n.titleEditor[data-v-91723f64] {\n    margin-bottom: 0;\n}\n}\n.titleEditor__title[data-v-91723f64] {\n  font-weight: 600;\n}\n.titleEditor__title a[data-v-91723f64] {\n  text-decoration: none;\n}\n.titleEditor__title .icon[data-v-91723f64] {\n  color: #a6a6a6;\n  margin-left: 7px;\n}\n.titleEditor__title a:hover .icon[data-v-91723f64] {\n  color: #262626;\n}\n.stickyNav.sticky__fixedTop .titleEditor__title[data-v-91723f64] {\n  line-height: 35px;\n}\n.titleEditor--error .titleEditor__title .f--underlined--o[data-v-91723f64],\n.titleEditor--error .titleEditor__title .icon[data-v-91723f64] {\n  color: #e61414;\n}\n.titleEditor--error .titleEditor__title:hover .f--underlined--o[data-v-91723f64],\n.titleEditor--error .titleEditor__title:hover .icon[data-v-91723f64] {\n  color: #e61414;\n}\n.titleEditor--error .titleEditor__title:hover .f--underlined--o[data-v-91723f64] {\n  text-decoration: none;\n  background-image: linear-gradient(to bottom, rgba(230, 20, 20, 0.5) 75%, rgba(230, 20, 20, 0.5) 75%);\n  background-repeat: repeat-x;\n  background-size: 1px 1px;\n  background-position: 0 98%;\n}\n.titleEditor__title-only[data-v-91723f64] {\n  line-height: 35px;\n}\n.titleEditor__permalink[data-v-91723f64] {\n  text-decoration: none;\n  display: inline-block;\n  white-space: nowrap;\n}\n.stickyNav.sticky__fixedTop .titleEditor__permalink[data-v-91723f64] {\n  display: none;\n}",
                '',
            ])
        },
        pwep: function(n, e, t) {
            'use strict'
            var a = t('QRp4')
            t.n(a).a
        },
        pzTV: function(n, e, t) {
            'use strict'
            var a = t('0V9B')
            t.n(a).a
        },
        r5O6: function(n, e, t) {
            'use strict'
            var a = t('F2Xa')
            t.n(a).a
        },
        rAni: function(n, e, t) {
            'use strict'
            t.r(e)
            var a = { name: 'A17Image', mixins: [t('8Piv').a] },
                i = t('KHd+'),
                o = Object(i.a)(
                    a,
                    function() {
                        var n = this.$createElement,
                            e = this._self._c || n
                        return e(
                            'div',
                            { staticClass: 'block__body' },
                            [
                                e('a17-mediafield', {
                                    attrs: {
                                        name: this.fieldName('image'),
                                        'crop-context': 'image',
                                    },
                                }),
                            ],
                            1,
                        )
                    },
                    [],
                    !1,
                    null,
                    null,
                    null,
                )
            o.options.__file = 'BlockImage.vue'
            e.default = o.exports
        },
        rKNi: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.previewer[data-v-0ef57288] {\n  display: block;\n  width: 100%;\n  padding: 0;\n  position: relative;\n  flex-grow: 1;\n  background-color: #333;\n}\n.previewer__restore[data-v-0ef57288] {\n  position: fixed;\n  right: 20px;\n  top: 13px;\n  z-index: 401;\n}\n.tag--revision[data-v-0ef57288] {\n  color: #262626;\n  position: absolute;\n  top: 17px;\n  left: 0;\n  margin: 0;\n  opacity: 0.5;\n}\n.previewer__nav[data-v-0ef57288] {\n  display: flex;\n  flex-direction: row;\n  height: 80px;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.previewer__frame[data-v-0ef57288] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-flow: column nowrap;\n}\n.previewer__inner[data-v-0ef57288] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  flex-grow: 1;\n  display: flex;\n  flex-flow: column nowrap;\n}\n.previewer__trigger[data-v-0ef57288] {\n  height: auto;\n  line-height: inherit;\n}\n.previewer__trigger .icon[data-v-0ef57288] {\n  margin-left: 6px;\n}\n.previewer__trigger[data-v-0ef57288],\n.previewer__compare[data-v-0ef57288] {\n  color: #8c8c8c;\n  padding-left: 0;\n  padding-right: 0;\n}\n.previewer__trigger[data-v-0ef57288]:hover, .previewer__trigger[data-v-0ef57288]:focus,\n.previewer__compare[data-v-0ef57288]:hover,\n.previewer__compare[data-v-0ef57288]:focus {\n  color: #fff;\n}\n.previewer__trigger a[data-v-0ef57288],\n.previewer__compare a[data-v-0ef57288] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-decoration: none;\n}\n@media screen and (min-width: 850px) {\n.previewer__compare[data-v-0ef57288] {\n    margin-left: 20px;\n}\n}\n.previewer__compare .icon[data-v-0ef57288] {\n  position: relative;\n  margin-left: 9px;\n  top: 2px;\n}\n.previewer__compareLabel[data-v-0ef57288] {\n  display: none;\n}\n@media screen and (min-width: 600px) {\n.previewer__compareLabel[data-v-0ef57288] {\n    display: inline;\n}\n}\n.previewer__revisions[data-v-0ef57288],\n.previewer__compare[data-v-0ef57288] {\n  margin-right: 20px;\n  padding-top: 40px;\n}\n.previewer__revisions[data-v-0ef57288] {\n  margin-left: 20px;\n  padding-top: 40px;\n  flex-grow: 1;\n  position: relative;\n}\n.previewer__breakpoints[data-v-0ef57288] {\n  display: none;\n}\n@media screen and (min-width: 850px) {\n.previewer__breakpoints[data-v-0ef57288] {\n    display: block;\n    margin: 0 auto;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    font-size: 0;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    height: 80px;\n    line-height: 80px;\n}\n}\n.previewer__breakpoint[data-v-0ef57288] {\n  display: inline-block;\n  color: #8c8c8c;\n  padding: 25px 15px;\n  vertical-align: bottom;\n}\n.previewer__breakpoint a[data-v-0ef57288] {\n  display: block;\n}\n.previewer__breakpoint a[data-v-0ef57288]:hover, .previewer__breakpoint a[data-v-0ef57288]:focus {\n  color: #a6a6a6;\n}\n.previewer__breakpoint .icon[data-v-0ef57288] {\n  display: block;\n}\n.previewer__breakpoint.s--active[data-v-0ef57288] {\n  color: #fff;\n}\n.previewer__breakpoint.s--active a[data-v-0ef57288]:hover, .previewer__breakpoint.s--active a[data-v-0ef57288]:focus {\n  color: #fff;\n}\n.previewer__content[data-v-0ef57288] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-grow: 1;\n  flex-flow: row nowrap;\n}\n.previewer__iframe[data-v-0ef57288] {\n  width: 100%;\n  opacity: 1;\n  transition: opacity 0.3s ease, width 0.3s ease;\n  position: relative;\n  display: flex;\n  flex-grow: 1;\n}\n.previewer--loading .previewer__nav[data-v-0ef57288],\n.previewer--loading .previewer__iframe[data-v-0ef57288] {\n  opacity: 0;\n  pointer-events: none;\n}\n.previewer--loading .previewer__content[data-v-0ef57288]::after {\n  content: \"Loading preview...\";\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  width: 200px;\n  margin-left: -100px;\n  text-align: center;\n  color: #8c8c8c;\n}\n.previewer__iframeInfos[data-v-0ef57288] {\n  height: 80px;\n  margin-top: -80px;\n  position: absolute;\n  color: #8c8c8c;\n  top: 0;\n  left: 10px;\n  padding-top: 40px;\n}\nbutton.previewerRevision[data-v-0ef57288] {\n  display: flex;\n  padding: 0 15px;\n}\nbutton.previewerRevision--active[data-v-0ef57288] {\n  color: #262626;\n  background: #f2f2f2;\n}\n.previewerRevision__author[data-v-0ef57288] {\n  padding-right: 10px;\n  flex-grow: 1;\n  white-space: nowrap;\n}\n@media screen and (min-width: 600px) {\n.previewerRevision__author[data-v-0ef57288] {\n    padding-right: 30px;\n}\n}\n.previewerRevision__datetime[data-v-0ef57288] {\n  color: #3278B8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
                '',
            ])
        },
        rQG1: function(n, e, t) {
            'use strict'
            var a = t('1sNv')
            t.n(a).a
        },
        rXe6: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.editor[data-v-77052975] {\n  display: block;\n  width: 100%;\n  padding: 0;\n  position: relative;\n  flex-grow: 1;\n  background-color: #fff;\n}\n.editor__leave[data-v-77052975] {\n  position: fixed;\n  right: 20px;\n  top: 13px;\n  z-index: 401;\n}\n.editor__frame[data-v-77052975] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-flow: column nowrap;\n}\n.editor__inner[data-v-77052975] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  flex-grow: 1;\n  display: flex;\n  flex-flow: row nowrap;\n}\n.editor__sidebar[data-v-77052975] {\n  background: #f2f2f2;\n  width: 30vw;\n  min-width: 400px;\n}\n@media screen and (max-width: 849px) {\n.editor__sidebar[data-v-77052975] {\n    display: none;\n}\n}\n@media screen and (max-width: 849px) {\n.editor__sidebar--mobile[data-v-77052975] {\n    display: block;\n}\n}\n.editor__resizer[data-v-77052975] {\n  width: 10px;\n  min-width: 10px;\n  cursor: col-resize;\n  background: #f2f2f2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.editor__resizer span[data-v-77052975] {\n  width: 2px;\n  height: 20px;\n  display: block;\n  background: repeating-linear-gradient(180deg, #bfbfbf 0, #bfbfbf 2px, transparent 2px, transparent 4px);\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n}\n.editor__preview[data-v-77052975] {\n  flex-grow: 1;\n  position: relative;\n  min-width: 300px;\n  color: #8c8c8c;\n}\n.editor__preview--dark[data-v-77052975] {\n  color: #fff;\n}",
                '',
            ])
        },
        sCoS: function(n, e, t) {
            var a = t('3wGY')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        uw9q: function(n, e, t) {
            var a = t('x2ZO')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        vBD8: function(n, e, t) {
            'use strict'
            var a = t('83fg')
            t.n(a).a
        },
        vGHV: function(n, e, t) {
            'use strict'
            var a = t('xjGo')
            t.n(a).a
        },
        x2ZO: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                '/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we\'ll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we\'re mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don\'t need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you\'d like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.editorPreview[data-v-280470fe] {\n  background-color: inherit;\n  color: inherit;\n}\n.editorPreview.editorPreview--loading[data-v-280470fe] {\n  opacity: 0;\n}\n.editorPreview__content[data-v-280470fe] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  padding: 20px;\n  overflow-y: scroll;\n  background-color: inherit;\n}\n.editorPreview__empty[data-v-280470fe] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: inherit;\n  background-color: inherit;\n}\n.editorPreview__empty[data-v-280470fe]::after {\n  display: block;\n  content: "";\n  position: absolute;\n  top: 20px;\n  bottom: 20px;\n  right: 20px;\n  left: 20px;\n  border: 1px dashed #d9d9d9;\n}\n.editorPreview__empty > *[data-v-280470fe] {\n  padding: 0 40px;\n  font-size: 18px;\n  line-height: 1.35em;\n  text-align: center;\n  font-weight: 400;\n}\n.editorPreview__empty + .editorPreview__content[data-v-280470fe] {\n  background-color: transparent;\n}\n.editorPreview__item[data-v-280470fe] {\n  min-height: 80px;\n  position: relative;\n  margin-bottom: 1px;\n  z-index: 1;\n}\n.editorPreview__item[data-v-280470fe]::after {\n  content: "";\n  border-radius: 2px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border: 1px solid #e5e5e5;\n  z-index: 0;\n  opacity: 0;\n}\n.editorPreview__item[data-v-280470fe]:hover::after {\n  border-color: #e5e5e5;\n  opacity: 1;\n}\n.editorPreview__item--hover[data-v-280470fe] {\n  z-index: 2;\n}\n.editorPreview__item--active[data-v-280470fe]::after,\n.editorPreview__item--active[data-v-280470fe]:hover::after {\n  border-color: #148DDB;\n  opacity: 1;\n}\n.editorPreview__protector[data-v-280470fe] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  cursor: move;\n  z-index: 1;\n}\n.editorPreview__header[data-v-280470fe] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 0;\n  display: none;\n  background-clip: padding-box;\n  z-index: 2;\n}\n.editorPreview__handle[data-v-280470fe] {\n  position: absolute;\n  height: 10px;\n  width: 40px;\n  left: 50%;\n  top: 50%;\n  margin-left: -20px;\n  margin-top: -5px;\n  cursor: move;\n  background: repeating-linear-gradient(180deg, #bfbfbf 0, #bfbfbf 2px, transparent 2px, transparent 4px);\n}\n.editorPreview__handle[data-v-280470fe]:before {\n  position: absolute;\n  display: block;\n  content: "";\n  background: repeating-linear-gradient(90deg, #f4f9fd 0, #f4f9fd 2px, transparent 2px, transparent 4px);\n  width: 100%;\n  height: 100%;\n}\n.editorPreview__item:hover .editorPreview__header[data-v-280470fe],\n.editorPreview__item--active .editorPreview__header[data-v-280470fe],\n.editorPreview__item--hover .editorPreview__header[data-v-280470fe] {\n  display: flex;\n}\n\n/* Dragged item */\n.editorPreview__item.sortable-chosen[data-v-280470fe] {\n  opacity: 1;\n}\n.editorPreview__item.sortable-ghost[data-v-280470fe] {\n  opacity: 0.25;\n}',
                '',
            ])
        },
        x8Ls: function(n, e, t) {
            'use strict'
            var a = t('cEi1')
            t.n(a).a
        },
        xhqP: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.editorIframe[data-v-1c8a3e00] {\n  cursor: pointer;\n}\n.editorIframe iframe[data-v-1c8a3e00] {\n  width: 100%;\n  overflow: hidden;\n  display: block;\n}\n.editorIframe__empty[data-v-1c8a3e00] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  text-align: center;\n  display: flex;\n  flex-wrap: no-wrap;\n  align-items: center;\n  justify-content: center;\n  color: rgba(38, 38, 38, 0.5);\n  background-color: rgba(20, 141, 219, 0.05);\n  border: 1px solid rgba(20, 141, 219, 0.33);\n}\n.editor__preview--dark .editorIframe__empty[data-v-1c8a3e00] {\n  color: rgba(255, 255, 255, 0.75);\n  background-color: rgba(20, 141, 219, 0.2);\n  border: 1px solid rgba(20, 141, 219, 0.5);\n}",
                '',
            ])
        },
        xjGo: function(n, e, t) {
            var a = t('pcLQ')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        xjeM: function(n, e, t) {
            'use strict'
            var a = t('KaLS')
            t.n(a).a
        },
        zl2a: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.multibutton[data-v-4328497a] {\n  height: 40px;\n  position: relative;\n  display: block;\n}\n.multibutton .dropdown[data-v-4328497a] {\n  display: flex;\n}\n.multibutton .dropdown > button[data-v-4328497a]:first-child {\n  display: block;\n  flex-grow: 1;\n}\n.multibutton .dropdown__content[data-v-4328497a] {\n  max-width: 100%;\n  width: 100%;\n}\n.multibutton__trigger[data-v-4328497a] {\n  background-color: transparent;\n  -webkit-appearance: none;\n  cursor: pointer;\n  font-size: 1em;\n  outline: none;\n  margin: 0;\n  border: 0 none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  letter-spacing: inherit;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #1d9f3c;\n  color: #fff;\n  margin-left: -2px;\n  border-left: 1px solid #1A8F36;\n  padding: 0 10px;\n  transition: color 0.2s linear, border-color 0.2s linear, background-color 0.2s linear;\n}\n.multibutton__trigger[data-v-4328497a]:focus, .multibutton__trigger[data-v-4328497a]:hover {\n  background: #1A8F36;\n}\n.multibutton__trigger .icon[data-v-4328497a] {\n  color: #fff;\n  position: relative;\n  top: -3px;\n}",
                '',
            ])
        },
        zwUX: function(n, e, t) {
            'use strict'
            var a = t('XXnY')
            t.n(a).a
        },
    },
    [[1, 0, 1]],
])
