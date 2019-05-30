;(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        '/t/B': function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.buckets[data-v-12d0f569] {\n  padding-bottom: 80px;\n}\n.buckets__page-title[data-v-12d0f569] {\n  margin-bottom: 20px;\n  background-color: #f2f2f2;\n  border-bottom: 1px solid #e5e5e5;\n  overflow: hidden;\n}\n.buckets__page-title .buckets__page-title-content[data-v-12d0f569] {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.buckets__fieldset__header[data-v-12d0f569] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.buckets__fieldset__header .buckets__number[data-v-12d0f569] {\n  margin-right: 10px;\n}\n.buckets__fieldset__header .buckets__size-infos[data-v-12d0f569] {\n  font-size: 11px;\n  letter-spacing: 0;\n  text-align: right;\n  float: right;\n}\n.buckets__header[data-v-12d0f569] {\n  display: flex;\n  align-items: center;\n  padding: 0 15px;\n  height: 80px;\n  background-color: #fbfbfb;\n  border-bottom: 1px solid #f2f2f2;\n}\n.buckets__header .buckets__sources[data-v-12d0f569] {\n  flex-grow: 2;\n}\n.buckets__header .buckets__sources .sources__select[data-v-12d0f569] {\n  margin-top: -35px;\n}\n.buckets__header .buckets__filter[data-v-12d0f569] {\n  margin-left: 15px;\n}\n.buckets__list[data-v-12d0f569] {\n  width: 100%;\n  display: flex;\n}\n.buckets__list tbody[data-v-12d0f569] {\n  width: 100%;\n}\n.buckets__empty[data-v-12d0f569] {\n  display: flex;\n  align-items: center;\n  height: 80px;\n  padding: 15px 20px;\n}\n.buckets__empty h4[data-v-12d0f569] {\n  color: #8c8c8c;\n}",
                '',
            ])
        },
        2: function(n, e, t) {
            n.exports = t('bWv8')
        },
        '8Byw': function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.buckets__item {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 80px;\n  padding: 0 15px;\n  border-top: 1px solid #f2f2f2;\n}\n.buckets__item td {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.buckets__item:hover {\n  background-color: #fbfbfb;\n}\n.buckets__item:first-child {\n  border-top: 0 none;\n}\n@media screen and (max-width: 599px) {\n.buckets__item .buckets__itemThumbnail {\n    display: none;\n}\n}\n.buckets__item .buckets__itemThumbnail img {\n  display: block;\n  width: 50px;\n  min-width: 50px;\n  min-height: 50px;\n  height: auto;\n  background: #f2f2f2;\n}\n.buckets__item .buckets__itemTitle {\n  flex-grow: 1;\n  margin: 0 30px 0 15px;\n  overflow: hidden;\n}\n.buckets__item .buckets__itemTitle h4 {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.buckets__item .buckets__itemTitle h4 a :not(.tag) {\n  color: #3278B8;\n}\n@media screen and (max-width: 599px) {\n.buckets__item .buckets__itemTitle {\n    margin-left: 0;\n}\n}\n@media screen and (min-width: 1440px) {\n.buckets__item .buckets__itemTitle {\n    margin-right: 80px;\n}\n}\n.buckets__item .buckets__itemTitle .f--link-underlined--o a {\n  color: #3278B8;\n  text-decoration: none;\n}\n@media screen and (min-width: 850px) and (max-width: 1039px) {\n.buckets__item .buckets__itemDate {\n    display: none;\n}\n}\n.buckets__item .buckets__itemDate,\n.buckets__item .buckets__itemContentType {\n  margin-right: 25px;\n  color: #8c8c8c;\n}\n@media screen and (max-width: 599px) {\n.buckets__item .buckets__itemDate,\n.buckets__item .buckets__itemContentType {\n    display: none;\n}\n}\n@media screen and (min-width: 850px) and (max-width: 1039px) {\n.buckets__item .buckets__itemDate,\n.buckets__item .buckets__itemContentType {\n    margin-right: 15px;\n}\n}\n@media screen and (min-width: 1040px) and (max-width: 1539px) {\n.buckets__item .buckets__itemDate,\n.buckets__item .buckets__itemContentType {\n    margin-right: 40px;\n}\n}\n@media screen and (min-width: 1440px) {\n.buckets__item .buckets__itemDate,\n.buckets__item .buckets__itemContentType {\n    margin-right: 80px;\n}\n}\n.buckets__item .buckets__itemOptions {\n  display: flex;\n}\n.buckets__item .buckets__itemOptions .item__dropdown .item__dropdown__content {\n  min-width: 250px;\n}\n.buckets__item .buckets__itemOptions .item__dropdown .item__dropdown__content .radioGroup__item:hover {\n  background-color: #f2f2f2;\n}\n.buckets__item .buckets__itemOptions .button--add:disabled {\n  opacity: 0.3;\n}\n.buckets__item .buckets__itemOptions .bucket__action {\n  font-size: 11px;\n  letter-spacing: 0;\n  line-height: 25px;\n  margin-right: 15px;\n}\n.buckets__item .buckets__itemOptions .bucket__action:last-child {\n  margin-right: 0;\n}\n.buckets__item .buckets__itemOptions .bucket__action.selected {\n  opacity: 0.4;\n}\n.buckets__item.single.selected > * {\n  opacity: 0.4;\n}\n.buckets__item.draggable {\n  padding-left: 27px;\n}",
                '',
            ])
        },
        AITC: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.drag__handle[data-v-be6f1bea] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 12px;\n  min-width: 12px;\n  height: 100%;\n  background-color: #fbfbfb;\n  transition: background 250ms ease;\n  cursor: move;\n}\n.drag__handle[data-v-be6f1bea]:hover {\n  background-color: #f2f2f2;\n}\n.drag__handle:hover .drag__handle--drag[data-v-be6f1bea]:before {\n  background: repeating-linear-gradient(90deg, #f2f2f2 0, #f2f2f2 2px, transparent 2px, transparent 4px);\n}\n.drag__handle--drag[data-v-be6f1bea] {\n  position: relative;\n  width: 10px;\n  height: 42px;\n  margin-left: auto;\n  margin-right: auto;\n  transition: background 250ms ease;\n  cursor: move;\n  background: repeating-linear-gradient(180deg, #bfbfbf 0, #bfbfbf 2px, transparent 2px, transparent 4px);\n}\n.drag__handle--drag[data-v-be6f1bea]:before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  background: repeating-linear-gradient(90deg, #fbfbfb 0, #fbfbfb 2px, transparent 2px, transparent 4px);\n  width: 100%;\n  height: 100%;\n}\n.buckets__itemStarred[data-v-be6f1bea] {\n  display: block;\n  cursor: pointer;\n  position: relative;\n  top: 2px;\n}\n.buckets__itemStarred .icon[data-v-be6f1bea] {\n  color: #a6a6a6;\n  display: block;\n  top: -2px;\n  position: relative;\n}\n.buckets__itemStarred .icon--star-feature_active[data-v-be6f1bea] {\n  color: #e61414;\n}\n.buckets__itemStarred .icon--star-feature[data-v-be6f1bea] {\n  display: block;\n}\n.buckets__itemStarred .icon--star-feature_active[data-v-be6f1bea] {\n  display: none;\n}\n.buckets__itemStarred--active .icon svg[data-v-be6f1bea] {\n  fill: #e61414;\n}\n.buckets__itemStarred--active .icon--star-feature[data-v-be6f1bea] {\n  display: none;\n}\n.buckets__itemStarred--active .icon--star-feature_active[data-v-be6f1bea] {\n  display: block;\n}",
                '',
            ])
        },
        OBV5: function(n, e, t) {
            var a = t('RkYl')
            'string' == typeof a && (a = [[n.i, a, '']])
            var s = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, s)
            a.locals && (n.exports = a.locals)
        },
        PCue: function(n, e, t) {
            var a = t('AITC')
            'string' == typeof a && (a = [[n.i, a, '']])
            var s = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, s)
            a.locals && (n.exports = a.locals)
        },
        PgPx: function(n, e, t) {
            'use strict'
            var a = t('OBV5')
            t.n(a).a
        },
        RkYl: function(n, e, t) {
            ;(n.exports = t('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.buckets .buckets__fieldset {\n  /* override fieldset style */\n}\n.buckets .buckets__fieldset .fieldset__content {\n  padding: 0;\n}\n.buckets .buckets__fieldset.buckets__fieldset--1 header {\n  color: #fff;\n  background-color: #7ca4a2;\n}\n.buckets .buckets__fieldset.buckets__fieldset--2 header {\n  color: #fff;\n  background-color: #70769f;\n}\n.buckets .buckets__fieldset.buckets__fieldset--3 header {\n  color: #fff;\n  background-color: #E37A75;\n}\n.buckets .filter__search {\n  width: 100%;\n}\n.buckets .filter__search input {\n  width: 100%;\n  min-width: inherit;\n}",
                '',
            ])
        },
        TbjE: function(n, e, t) {
            var a = t('/t/B')
            'string' == typeof a && (a = [[n.i, a, '']])
            var s = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, s)
            a.locals && (n.exports = a.locals)
        },
        Vpxi: function(n, e, t) {
            var a = t('8Byw')
            'string' == typeof a && (a = [[n.i, a, '']])
            var s = { hmr: !0, transform: void 0, insertInto: void 0 }
            t('aET+')(a, s)
            a.locals && (n.exports = a.locals)
        },
        bWv8: function(n, e, t) {
            'use strict'
            t.r(e)
            var a = t('XuX8'),
                s = t.n(a),
                i = t('FTnM'),
                o = t('sXHA'),
                r = (t('h4r+'), t('Fvk7')),
                l = t('L2JU'),
                c = t('BCmc'),
                u = t('8a/O'),
                m = t('FL1c'),
                d = t('OlL3')
            function p(n, e, t) {
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
            var b = {
                    components: { A17Dropdown: m.a },
                    name: 'a17BucketItem',
                    props: {
                        bucket: { type: String },
                        draggable: { type: Boolean, default: !1 },
                        restricted: { type: Boolean, default: !1 },
                        type: { type: String, default: 'bucket' },
                        singleSource: { type: Boolean, default: !1 },
                        withToggleFeatured: { type: Boolean, default: !1 },
                        toggleFeaturedLabels: {
                            type: Array,
                            default: function() {
                                return []
                            },
                        },
                    },
                    mixins: [d.a],
                    computed: {
                        inBuckets: function() {
                            var n = this,
                                e = !1
                            return (
                                n.buckets.forEach(function(t) {
                                    t.children.find(function(e) {
                                        return (
                                            e.id === n.item.id &&
                                            e.content_type.value ===
                                                n.item.content_type.value
                                        )
                                    }) && (e = !0)
                                }),
                                e
                            )
                        },
                        customClasses: function() {
                            return (function(n) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t =
                                            null != arguments[e]
                                                ? arguments[e]
                                                : {},
                                        a = Object.keys(t)
                                    'function' ==
                                        typeof Object.getOwnPropertySymbols &&
                                        (a = a.concat(
                                            Object.getOwnPropertySymbols(
                                                t,
                                            ).filter(function(n) {
                                                return Object.getOwnPropertyDescriptor(
                                                    t,
                                                    n,
                                                ).enumerable
                                            }),
                                        )),
                                        a.forEach(function(e) {
                                            p(n, e, t[e])
                                        })
                                }
                                return n
                            })({}, this.bucketClasses, {
                                draggable: this.draggable,
                            })
                        },
                        dropDownBuckets: function() {
                            var n = [],
                                e = this,
                                t = 1
                            return (
                                this.buckets.length > 0 &&
                                    this.buckets.forEach(function(a) {
                                        e.restrictedBySource(a.id) &&
                                            n.push({
                                                value: e.slug(a.id),
                                                label: t + ' ' + a.name,
                                            }),
                                            t++
                                    }),
                                n
                            )
                        },
                    },
                    methods: {
                        removeFromBucket: function() {
                            var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.bucket
                            this.$emit('remove-from-bucket', this.item, n)
                        },
                        toggleFeatured: function() {
                            this.$emit(
                                'toggle-featured-in-bucket',
                                this.item,
                                this.bucket,
                            )
                        },
                        selectedBuckets: function() {
                            var n = [],
                                e = this
                            return (
                                this.buckets.length > 0 &&
                                    this.buckets.forEach(function(t) {
                                        e.inBucketById(t.id) &&
                                            n.push(e.slug(t.id))
                                    }),
                                n.length > 0 ? n : []
                            )
                        },
                        slug: function(n) {
                            return (
                                'bucket-' +
                                this.bucket +
                                '_item-' +
                                this.item.id +
                                '_type-' +
                                this.item.content_type.value +
                                '_inb-' +
                                n
                            )
                        },
                        updateBucket: function(n) {
                            var e = this,
                                t = e.selectedBuckets()
                            if (e.restricted) {
                                var a = n.split('inb-')[1]
                                e.inBucketById(a) ||
                                    (e.$refs.bucketDropdown.toggle(),
                                    e.addToBucket(a))
                            } else
                                t.forEach(function(t) {
                                    if (-1 === n.indexOf(t)) {
                                        var a = t.split('inb-')[1]
                                        e.$refs.bucketDropdown.toggle(),
                                            e.removeFromBucket(a)
                                    }
                                }),
                                    Array.isArray(n) &&
                                        n.forEach(function(n) {
                                            var t = n.split('inb-')[1]
                                            e.inBucketById(t) ||
                                                (e.$refs.bucketDropdown.toggle(),
                                                e.addToBucket(t))
                                        })
                        },
                    },
                },
                h = (t('dCjy'), t('KHd+')),
                f = Object(h.a)(
                    b,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'tr',
                            {
                                staticClass: 'buckets__item',
                                class: n.customClasses,
                            },
                            [
                                n.draggable
                                    ? t('td', { staticClass: 'drag__handle' }, [
                                          t('div', {
                                              staticClass: 'drag__handle--drag',
                                          }),
                                      ])
                                    : n._e(),
                                n._v(' '),
                                n.item.thumbnail
                                    ? t(
                                          'td',
                                          {
                                              staticClass:
                                                  'buckets__itemThumbnail',
                                          },
                                          [
                                              t('img', {
                                                  attrs: {
                                                      src: n.item.thumbnail,
                                                      alt: n.item.name,
                                                  },
                                              }),
                                          ],
                                      )
                                    : n._e(),
                                n._v(' '),
                                n.withToggleFeatured
                                    ? t(
                                          'td',
                                          {
                                              staticClass:
                                                  'buckets__itemStarred',
                                              class: {
                                                  'buckets__itemStarred--active':
                                                      n.item.starred,
                                              },
                                          },
                                          [
                                              t(
                                                  'span',
                                                  {
                                                      directives: [
                                                          {
                                                              name: 'tooltip',
                                                              rawName:
                                                                  'v-tooltip',
                                                          },
                                                      ],
                                                      attrs: {
                                                          'data-tooltip-title': n
                                                              .item.starred
                                                              ? n
                                                                    .toggleFeaturedLabels
                                                                    .unstar
                                                                  ? n
                                                                        .toggleFeaturedLabels
                                                                        .unstar
                                                                  : 'Unfeature'
                                                              : n
                                                                    .toggleFeaturedLabels
                                                                    .star
                                                              ? n
                                                                    .toggleFeaturedLabels
                                                                    .star
                                                              : 'Feature',
                                                      },
                                                      on: {
                                                          click: function(e) {
                                                              return (
                                                                  e.preventDefault(),
                                                                  n.toggleFeatured(
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
                                                              symbol:
                                                                  'star-feature_active',
                                                          },
                                                      }),
                                                      n._v(' '),
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
                                                                  'star-feature',
                                                          },
                                                      }),
                                                  ],
                                              ),
                                          ],
                                      )
                                    : n._e(),
                                n._v(' '),
                                t('td', { staticClass: 'buckets__itemTitle' }, [
                                    t('h4', [
                                        n.item.edit
                                            ? t(
                                                  'span',
                                                  {
                                                      staticClass:
                                                          'f--link-underlined--o',
                                                  },
                                                  [
                                                      t(
                                                          'a',
                                                          {
                                                              attrs: {
                                                                  href:
                                                                      n.item
                                                                          .edit,
                                                                  target:
                                                                      '_blank',
                                                              },
                                                          },
                                                          [
                                                              n._v(
                                                                  n._s(
                                                                      n.item
                                                                          .name,
                                                                  ),
                                                              ),
                                                          ],
                                                      ),
                                                  ],
                                              )
                                            : t('span', [
                                                  n._v(n._s(n.item.name)),
                                              ]),
                                    ]),
                                ]),
                                n._v(' '),
                                n.item.content_type && !n.singleSource
                                    ? t(
                                          'td',
                                          {
                                              staticClass:
                                                  'buckets__itemContentType',
                                          },
                                          [
                                              n._v(
                                                  '\n    ' +
                                                      n._s(
                                                          n.item.content_type
                                                              .label,
                                                      ) +
                                                      '\n  ',
                                              ),
                                          ],
                                      )
                                    : n._e(),
                                n._v(' '),
                                t(
                                    'td',
                                    { staticClass: 'buckets__itemOptions' },
                                    [
                                        n.singleBucket
                                            ? n._e()
                                            : t(
                                                  'a17-dropdown',
                                                  {
                                                      ref: 'bucketDropdown',
                                                      staticClass:
                                                          'item__dropdown bucket__action',
                                                      attrs: {
                                                          position:
                                                              'bottom-right',
                                                          title: 'Featured in',
                                                          clickable: !0,
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
                                                                      n.$refs.bucketDropdown.toggle()
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
                                                      n.restricted
                                                          ? t(
                                                                'div',
                                                                {
                                                                    staticClass:
                                                                        'item__dropdown__content',
                                                                    attrs: {
                                                                        slot:
                                                                            'dropdown__content',
                                                                    },
                                                                    slot:
                                                                        'dropdown__content',
                                                                },
                                                                [
                                                                    t(
                                                                        'a17-radiogroup',
                                                                        {
                                                                            attrs: {
                                                                                name:
                                                                                    'bucketsSelection',
                                                                                radioClass:
                                                                                    'bucket',
                                                                                radios:
                                                                                    n.dropDownBuckets,
                                                                                initialValue: n.selectedBuckets()[0],
                                                                            },
                                                                            on: {
                                                                                change:
                                                                                    n.updateBucket,
                                                                            },
                                                                        },
                                                                    ),
                                                                ],
                                                                1,
                                                            )
                                                          : t(
                                                                'div',
                                                                {
                                                                    staticClass:
                                                                        'item__dropdown__content',
                                                                    attrs: {
                                                                        slot:
                                                                            'dropdown__content',
                                                                    },
                                                                    slot:
                                                                        'dropdown__content',
                                                                },
                                                                [
                                                                    t(
                                                                        'a17-checkboxgroup',
                                                                        {
                                                                            attrs: {
                                                                                name:
                                                                                    'bucketsSelection',
                                                                                options:
                                                                                    n.dropDownBuckets,
                                                                                selected: n.selectedBuckets(),
                                                                            },
                                                                            on: {
                                                                                change:
                                                                                    n.updateBucket,
                                                                            },
                                                                        },
                                                                    ),
                                                                ],
                                                                1,
                                                            ),
                                                  ],
                                                  1,
                                              ),
                                        n._v(' '),
                                        t(
                                            'a17-button',
                                            {
                                                staticClass: 'bucket__action',
                                                attrs: { icon: 'close' },
                                                on: {
                                                    click: function(e) {
                                                        n.removeFromBucket()
                                                    },
                                                },
                                            },
                                            [
                                                t('span', {
                                                    directives: [
                                                        {
                                                            name: 'svg',
                                                            rawName: 'v-svg',
                                                        },
                                                    ],
                                                    attrs: {
                                                        symbol: 'close_icon',
                                                    },
                                                }),
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
                    'be6f1bea',
                    null,
                )
            f.options.__file = 'BucketItem.vue'
            var _ = f.exports,
                k = t('mNKw'),
                g = {
                    mixins: [d.a],
                    components: { 'a17-tableLanguages': k.a },
                },
                x = Object(h.a)(
                    g,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'tr',
                            {
                                staticClass: 'buckets__item',
                                class: n.bucketClasses,
                            },
                            [
                                n.item.thumbnail
                                    ? t(
                                          'td',
                                          {
                                              staticClass:
                                                  'buckets__itemThumbnail',
                                          },
                                          [
                                              t('img', {
                                                  attrs: {
                                                      src: n.item.thumbnail,
                                                      alt: n.item.name,
                                                  },
                                              }),
                                          ],
                                      )
                                    : n._e(),
                                n._v(' '),
                                t('td', { staticClass: 'buckets__itemTitle' }, [
                                    t(
                                        'h4',
                                        [
                                            n.item.edit
                                                ? t(
                                                      'span',
                                                      {
                                                          staticClass:
                                                              'f--link-underlined--o',
                                                      },
                                                      [
                                                          t(
                                                              'a',
                                                              {
                                                                  attrs: {
                                                                      href:
                                                                          n.item
                                                                              .edit,
                                                                      target:
                                                                          '_blank',
                                                                  },
                                                              },
                                                              [
                                                                  n._v(
                                                                      n._s(
                                                                          n.item
                                                                              .name,
                                                                      ),
                                                                  ),
                                                              ],
                                                          ),
                                                      ],
                                                  )
                                                : t('span', [
                                                      n._v(n._s(n.item.name)),
                                                  ]),
                                            n._v(' '),
                                            n.item.languages
                                                ? [
                                                      t('br'),
                                                      t('a17-tableLanguages', {
                                                          attrs: {
                                                              languages:
                                                                  n.item
                                                                      .languages,
                                                          },
                                                      }),
                                                  ]
                                                : n._e(),
                                        ],
                                        2,
                                    ),
                                ]),
                                n._v(' '),
                                n.item.publication
                                    ? t(
                                          'td',
                                          { staticClass: 'buckets__itemDate' },
                                          [
                                              n._v(
                                                  '\n    ' +
                                                      n._s(n.item.publication) +
                                                      '\n  ',
                                              ),
                                          ],
                                      )
                                    : n._e(),
                                n._v(' '),
                                t(
                                    'td',
                                    { staticClass: 'buckets__itemOptions' },
                                    [
                                        n.singleBucket &&
                                        !n.inBucketById(n.buckets[0].id)
                                            ? t(
                                                  'a17-button',
                                                  {
                                                      attrs: { icon: 'add' },
                                                      on: {
                                                          click: function(e) {
                                                              n.addToBucket(
                                                                  n.buckets[0]
                                                                      .id,
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
                                                              symbol: 'add',
                                                          },
                                                      }),
                                                  ],
                                              )
                                            : n.singleBucket
                                            ? t(
                                                  'a17-button',
                                                  {
                                                      attrs: {
                                                          icon: 'add',
                                                          disabled: !0,
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
                                                              symbol: 'add',
                                                          },
                                                      }),
                                                  ],
                                              )
                                            : n._l(n.buckets, function(e, a) {
                                                  return [
                                                      !n.inBucketById(e.id) &&
                                                      n.restrictedBySource(e.id)
                                                          ? t(
                                                                'a17-button',
                                                                {
                                                                    key: e.id,
                                                                    staticClass:
                                                                        'bucket__action',
                                                                    attrs: {
                                                                        icon:
                                                                            'bucket--' +
                                                                            (a +
                                                                                1),
                                                                    },
                                                                    on: {
                                                                        click: function(
                                                                            t,
                                                                        ) {
                                                                            n.addToBucket(
                                                                                e.id,
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
                                                            )
                                                          : n.restrictedBySource(
                                                                e.id,
                                                            )
                                                          ? t(
                                                                'a17-button',
                                                                {
                                                                    key: e.id,
                                                                    staticClass:
                                                                        'bucket__action selected',
                                                                    attrs: {
                                                                        icon:
                                                                            'bucket--' +
                                                                            (a +
                                                                                1),
                                                                        disabled: !0,
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
                                                            )
                                                          : n._e(),
                                                  ]
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
            x.options.__file = 'BucketSourceItem.vue'
            var v = x.exports,
                w = t('VCAz'),
                y = t('FRYs'),
                B = t.n(y),
                S = t('VdJJ'),
                $ = t('dfuq'),
                T = t('XRbP'),
                C = t('e15i')
            function E(n, e, t) {
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
            var P = {
                    name: 'A17Buckets',
                    mixins: [w.a],
                    props: {
                        title: { type: String, default: 'Features' },
                        emptyBuckets: {
                            type: String,
                            default: 'No items selected.',
                        },
                        emptySource: {
                            type: String,
                            default: 'No items found.',
                        },
                        overridableMax: { type: Boolean, default: !1 },
                        restricted: { type: Boolean, default: !0 },
                    },
                    components: {
                        A17VSelect: C.a,
                        'a17-bucket-item': _,
                        'a17-bucket-item-source': v,
                        'a17-fieldset': $.a,
                        'a17-paginate': S.a,
                        'a17-filter': T.a,
                        'a17-vselect': C.a,
                        draggable: B.a,
                    },
                    data: function() {
                        return {
                            currentBucketID: '',
                            currentItem: '',
                            overrideItem: !1,
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
                                    E(n, e, t[e])
                                })
                        }
                        return n
                    })(
                        {},
                        Object(l.c)({
                            buckets: function(n) {
                                return n.buckets.buckets
                            },
                            source: function(n) {
                                return n.buckets.source
                            },
                            dataSources: function(n) {
                                return n.buckets.dataSources.content_types
                            },
                            page: function(n) {
                                return n.buckets.page
                            },
                            availableOffsets: function(n) {
                                return n.buckets.availableOffsets
                            },
                            offset: function(n) {
                                return n.buckets.offset
                            },
                            max: function(n) {
                                return n.buckets.maxPage
                            },
                        }),
                        Object(l.b)(['currentSource']),
                        {
                            singleBucket: function() {
                                return 1 === this.buckets.length
                            },
                            singleSource: function() {
                                return 1 === this.dataSources.length
                            },
                            overrideBucketText: function() {
                                var n = this,
                                    e = this.buckets.find(function(e) {
                                        return e.id === n.currentBucketID
                                    }),
                                    t = '',
                                    a = ''
                                return (
                                    e && ((t = e.name), (a = e.max)),
                                    'Bucket <em>"' +
                                        t +
                                        '"</em> has a strict limit of ' +
                                        a +
                                        ' items. Do you want to override the first item of this bucket ?'
                                )
                            },
                        },
                    ),
                    methods: {
                        addToBucket: function(n, e) {
                            var t = this.buckets.findIndex(function(n) {
                                return n.id === e
                            })
                            if (n || -1 !== t) {
                                ;(this.currentBucketID = e),
                                    (this.currentItem = n)
                                var a = { index: t, item: n },
                                    s = this.buckets[t].children.length
                                s > -1 && s < this.buckets[t].max
                                    ? (this.checkRestriced(n),
                                      this.$store.commit(c.c.ADD_TO_BUCKET, a))
                                    : this.overridableMax || this.overrideItem
                                    ? (this.checkRestriced(n),
                                      this.$store.commit(c.c.ADD_TO_BUCKET, a),
                                      this.$store.commit(
                                          c.c.DELETE_FROM_BUCKET,
                                          { index: t, itemIndex: 0 },
                                      ),
                                      (this.overrideItem = !1))
                                    : this.$refs.overrideBucket.open()
                            }
                        },
                        deleteFromBucket: function(n, e) {
                            var t = this.buckets.findIndex(function(n) {
                                return n.id === e
                            })
                            if (-1 !== t) {
                                var a = this.buckets[t].children.findIndex(
                                    function(e) {
                                        return (
                                            e.id === n.id &&
                                            e.content_type.value ===
                                                n.content_type.value
                                        )
                                    },
                                )
                                if (-1 !== a) {
                                    var s = { index: t, itemIndex: a }
                                    this.$store.commit(
                                        c.c.DELETE_FROM_BUCKET,
                                        s,
                                    )
                                }
                            }
                        },
                        toggleFeaturedInBucket: function(n, e) {
                            var t = this.buckets.findIndex(function(n) {
                                return n.id === e
                            })
                            if (-1 !== t) {
                                var a = this.buckets[t].children.findIndex(
                                    function(e) {
                                        return (
                                            e.id === n.id &&
                                            e.content_type.value ===
                                                n.content_type.value
                                        )
                                    },
                                )
                                if (-1 !== a) {
                                    var s = { index: t, itemIndex: a }
                                    this.$store.commit(
                                        c.c.TOGGLE_FEATURED_IN_BUCKET,
                                        s,
                                    )
                                }
                            }
                        },
                        checkRestriced: function(n) {
                            var e = this
                            this.restricted &&
                                this.buckets.forEach(function(t) {
                                    t.children.forEach(function(a) {
                                        a.id === n.id &&
                                            a.content_type.value ===
                                                n.content_type.value &&
                                            e.deleteFromBucket(n, t.id)
                                    })
                                })
                        },
                        sortBucket: function(n, e) {
                            var t = {
                                bucketIndex: e,
                                oldIndex: n.moved.oldIndex,
                                newIndex: n.moved.newIndex,
                            }
                            this.$store.commit(c.c.REORDER_BUCKET_LIST, t)
                        },
                        changeDataSource: function(n) {
                            this.$store.commit(
                                c.c.UPDATE_BUCKETS_DATASOURCE,
                                n,
                            ),
                                this.$store.commit(
                                    c.c.UPDATE_BUCKETS_DATA_PAGE,
                                    1,
                                ),
                                this.$store.dispatch(u.a.GET_BUCKETS)
                        },
                        filterBucketsData: function(n) {
                            this.$store.commit(c.c.UPDATE_BUCKETS_DATA_PAGE, 1),
                                this.$store.commit(
                                    c.c.UPDATE_BUCKETS_FILTER,
                                    n || { search: '' },
                                ),
                                this.$store.dispatch(u.a.GET_BUCKETS)
                        },
                        updateOffset: function(n) {
                            this.$store.commit(c.c.UPDATE_BUCKETS_DATA_PAGE, 1),
                                this.$store.commit(
                                    c.c.UPDATE_BUCKETS_DATA_OFFSET,
                                    n,
                                ),
                                this.$store.dispatch(u.a.GET_BUCKETS)
                        },
                        updatePage: function(n) {
                            this.$store.commit(c.c.UPDATE_BUCKETS_DATA_PAGE, n),
                                this.$store.dispatch(u.a.GET_BUCKETS)
                        },
                        override: function() {
                            ;(this.overrideItem = !0),
                                this.addToBucket(
                                    this.currentItem,
                                    this.currentBucketID,
                                ),
                                this.$refs.overrideBucket.close()
                        },
                        save: function() {
                            this.$store.dispatch(u.a.SAVE_BUCKETS)
                        },
                    },
                },
                O = (t('e26r'),
                t('gcYl'),
                t('PgPx'),
                Object(h.a)(
                    P,
                    function() {
                        var n = this,
                            e = n.$createElement,
                            t = n._self._c || e
                        return t(
                            'div',
                            { staticClass: 'buckets' },
                            [
                                t(
                                    'div',
                                    { staticClass: 'buckets__page-title' },
                                    [
                                        t(
                                            'div',
                                            {
                                                staticClass:
                                                    'container buckets__page-title-content',
                                            },
                                            [
                                                t('h2', [n._t('default')], 2),
                                                n._v(' '),
                                                t(
                                                    'a17-button',
                                                    {
                                                        attrs: {
                                                            variant: 'validate',
                                                        },
                                                        on: { click: n.save },
                                                    },
                                                    [n._v('Publish')],
                                                ),
                                            ],
                                            1,
                                        ),
                                    ],
                                ),
                                n._v(' '),
                                t('div', { staticClass: 'container' }, [
                                    t('div', { staticClass: ' wrapper' }, [
                                        t(
                                            'div',
                                            {
                                                staticClass:
                                                    'buckets__container col--even',
                                            },
                                            [
                                                t(
                                                    'a17-fieldset',
                                                    {
                                                        staticClass:
                                                            'buckets__fieldset',
                                                        attrs: {
                                                            title: n.title,
                                                            activeToggle: !1,
                                                        },
                                                    },
                                                    [
                                                        t(
                                                            'div',
                                                            {
                                                                staticClass:
                                                                    'buckets__header',
                                                            },
                                                            [
                                                                t(
                                                                    'div',
                                                                    {
                                                                        staticClass:
                                                                            'buckets__sources',
                                                                    },
                                                                    [
                                                                        n.singleSource
                                                                            ? n._e()
                                                                            : t(
                                                                                  'a17-vselect',
                                                                                  {
                                                                                      staticClass:
                                                                                          'sources__select',
                                                                                      attrs: {
                                                                                          name:
                                                                                              'sources',
                                                                                          selected:
                                                                                              n.currentSource,
                                                                                          options:
                                                                                              n.dataSources,
                                                                                          required: !0,
                                                                                      },
                                                                                      on: {
                                                                                          change:
                                                                                              n.changeDataSource,
                                                                                      },
                                                                                  },
                                                                              ),
                                                                    ],
                                                                    1,
                                                                ),
                                                                n._v(' '),
                                                                t(
                                                                    'div',
                                                                    {
                                                                        staticClass:
                                                                            'buckets__filter',
                                                                    },
                                                                    [
                                                                        t(
                                                                            'a17-filter',
                                                                            {
                                                                                on: {
                                                                                    submit:
                                                                                        n.filterBucketsData,
                                                                                },
                                                                            },
                                                                        ),
                                                                    ],
                                                                    1,
                                                                ),
                                                            ],
                                                        ),
                                                        n._v(' '),
                                                        n.source.items.length >
                                                        0
                                                            ? t(
                                                                  'table',
                                                                  {
                                                                      staticClass:
                                                                          'buckets__list',
                                                                  },
                                                                  [
                                                                      t(
                                                                          'tbody',
                                                                          n._l(
                                                                              n
                                                                                  .source
                                                                                  .items,
                                                                              function(
                                                                                  e,
                                                                              ) {
                                                                                  return t(
                                                                                      'a17-bucket-item-source',
                                                                                      {
                                                                                          key:
                                                                                              e.id,
                                                                                          attrs: {
                                                                                              item: e,
                                                                                              singleBucket:
                                                                                                  n.singleBucket,
                                                                                              buckets:
                                                                                                  n.buckets,
                                                                                          },
                                                                                          on: {
                                                                                              'add-to-bucket':
                                                                                                  n.addToBucket,
                                                                                          },
                                                                                      },
                                                                                  )
                                                                              },
                                                                          ),
                                                                      ),
                                                                  ],
                                                              )
                                                            : t(
                                                                  'div',
                                                                  {
                                                                      staticClass:
                                                                          'buckets__empty',
                                                                  },
                                                                  [
                                                                      t('h4', [
                                                                          n._v(
                                                                              n._s(
                                                                                  n.emptySource,
                                                                              ),
                                                                          ),
                                                                      ]),
                                                                  ],
                                                              ),
                                                        n._v(' '),
                                                        t('a17-paginate', {
                                                            attrs: {
                                                                max: n.max,
                                                                value: n.page,
                                                                offset:
                                                                    n.offset,
                                                                availableOffsets:
                                                                    n.availableOffsets,
                                                            },
                                                            on: {
                                                                changePage:
                                                                    n.updatePage,
                                                                changeOffset:
                                                                    n.updateOffset,
                                                            },
                                                        }),
                                                    ],
                                                    1,
                                                ),
                                            ],
                                            1,
                                        ),
                                        n._v(' '),
                                        t(
                                            'div',
                                            {
                                                staticClass:
                                                    'buckets__container col--even',
                                            },
                                            n._l(n.buckets, function(e, a) {
                                                return t(
                                                    'a17-fieldset',
                                                    {
                                                        key: e.id,
                                                        class:
                                                            'buckets__fieldset buckets__fieldset--' +
                                                            (a + 1),
                                                        attrs: {
                                                            name:
                                                                'bucket_' +
                                                                e.id,
                                                            activeToggle: !1,
                                                        },
                                                    },
                                                    [
                                                        t(
                                                            'h3',
                                                            {
                                                                staticClass:
                                                                    'buckets__fieldset__header',
                                                                attrs: {
                                                                    slot:
                                                                        'header',
                                                                },
                                                                slot: 'header',
                                                            },
                                                            [
                                                                t('span', [
                                                                    n.buckets
                                                                        .length >
                                                                    1
                                                                        ? t(
                                                                              'span',
                                                                              {
                                                                                  staticClass:
                                                                                      'buckets__number',
                                                                              },
                                                                              [
                                                                                  n._v(
                                                                                      n._s(
                                                                                          a +
                                                                                              1,
                                                                                      ),
                                                                                  ),
                                                                              ],
                                                                          )
                                                                        : n._e(),
                                                                    n._v(
                                                                        ' ' +
                                                                            n._s(
                                                                                e.name,
                                                                            ),
                                                                    ),
                                                                ]),
                                                                n._v(' '),
                                                                t(
                                                                    'span',
                                                                    {
                                                                        staticClass:
                                                                            'buckets__size-infos',
                                                                    },
                                                                    [
                                                                        n._v(
                                                                            n._s(
                                                                                e
                                                                                    .children
                                                                                    .length,
                                                                            ) +
                                                                                ' / ' +
                                                                                n._s(
                                                                                    e.max,
                                                                                ),
                                                                        ),
                                                                    ],
                                                                ),
                                                            ],
                                                        ),
                                                        n._v(' '),
                                                        e.children.length > 0
                                                            ? t(
                                                                  'draggable',
                                                                  {
                                                                      staticClass:
                                                                          'buckets__list buckets__draggable',
                                                                      attrs: {
                                                                          options:
                                                                              n.dragOptions,
                                                                          value:
                                                                              e.children,
                                                                          element:
                                                                              'table',
                                                                      },
                                                                      on: {
                                                                          change: function(
                                                                              e,
                                                                          ) {
                                                                              n.sortBucket(
                                                                                  e,
                                                                                  a,
                                                                              )
                                                                          },
                                                                      },
                                                                  },
                                                                  [
                                                                      t(
                                                                          'transition-group',
                                                                          {
                                                                              attrs: {
                                                                                  name:
                                                                                      'fade_scale_list',
                                                                                  tag:
                                                                                      'tbody',
                                                                              },
                                                                          },
                                                                          n._l(
                                                                              e.children,
                                                                              function(
                                                                                  a,
                                                                                  s,
                                                                              ) {
                                                                                  return t(
                                                                                      'a17-bucket-item',
                                                                                      {
                                                                                          key: s,
                                                                                          attrs: {
                                                                                              item: a,
                                                                                              restricted:
                                                                                                  n.restricted,
                                                                                              draggable:
                                                                                                  e
                                                                                                      .children
                                                                                                      .length >
                                                                                                  1,
                                                                                              singleBucket:
                                                                                                  n.singleBucket,
                                                                                              singleSource:
                                                                                                  n.singleSource,
                                                                                              bucket:
                                                                                                  e.id,
                                                                                              buckets:
                                                                                                  n.buckets,
                                                                                              withToggleFeatured:
                                                                                                  e.withToggleFeatured,
                                                                                              toggleFeaturedLabels:
                                                                                                  e.toggleFeaturedLabels,
                                                                                          },
                                                                                          on: {
                                                                                              'add-to-bucket':
                                                                                                  n.addToBucket,
                                                                                              'remove-from-bucket':
                                                                                                  n.deleteFromBucket,
                                                                                              'toggle-featured-in-bucket':
                                                                                                  n.toggleFeaturedInBucket,
                                                                                          },
                                                                                      },
                                                                                  )
                                                                              },
                                                                          ),
                                                                      ),
                                                                  ],
                                                                  1,
                                                              )
                                                            : t(
                                                                  'div',
                                                                  {
                                                                      staticClass:
                                                                          'buckets__empty',
                                                                  },
                                                                  [
                                                                      t('h4', [
                                                                          n._v(
                                                                              n._s(
                                                                                  n.emptyBuckets,
                                                                              ),
                                                                          ),
                                                                      ]),
                                                                  ],
                                                              ),
                                                    ],
                                                    1,
                                                )
                                            }),
                                        ),
                                    ]),
                                ]),
                                n._v(' '),
                                t(
                                    'a17-modal',
                                    {
                                        ref: 'overrideBucket',
                                        staticClass:
                                            'modal--tiny modal--form modal--withintro',
                                        attrs: { title: 'Override Bucket' },
                                    },
                                    [
                                        t(
                                            'p',
                                            {
                                                staticClass:
                                                    'modal--tiny-title',
                                            },
                                            [
                                                t('strong', [
                                                    n._v('Are you sure ?'),
                                                ]),
                                            ],
                                        ),
                                        n._v(' '),
                                        t('p', {
                                            domProps: {
                                                innerHTML: n._s(
                                                    n.overrideBucketText,
                                                ),
                                            },
                                        }),
                                        n._v(' '),
                                        t(
                                            'a17-inputframe',
                                            [
                                                t(
                                                    'a17-button',
                                                    {
                                                        attrs: {
                                                            variant: 'validate',
                                                        },
                                                        on: {
                                                            click: n.override,
                                                        },
                                                    },
                                                    [n._v('Override')],
                                                ),
                                                n._v(' '),
                                                t(
                                                    'a17-button',
                                                    {
                                                        attrs: {
                                                            variant: 'aslink',
                                                        },
                                                        on: {
                                                            click: function(e) {
                                                                n.$refs.overrideBucket.close()
                                                            },
                                                        },
                                                    },
                                                    [
                                                        t('span', [
                                                            n._v('Cancel'),
                                                        ]),
                                                    ],
                                                ),
                                            ],
                                            1,
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
                    '12d0f569',
                    null,
                ))
            O.options.__file = 'Bucket.vue'
            var A,
                D,
                F = O.exports,
                I = t('LgGc'),
                U = t('VNOR'),
                N = t('vDqi'),
                R = t.n(N),
                j = t('W1Fj'),
                K = t('cn2v'),
                L = function(n, e, t) {
                    R.a
                        .get(Object(j.a)(), { params: n })
                        .then(function(n) {
                            e && 'function' == typeof e && e(n.data)
                        })
                        .catch(function(n) {
                            Object(K.a)('BUCKETS', n),
                                t && 'function' == typeof t && t(n)
                        })
                },
                G = function(n, e, t, a) {
                    R.a
                        .post(n, e)
                        .then(function(n) {
                            t && 'function' == typeof t && t(n)
                        })
                        .catch(function(n) {
                            Object(K.a)('BUCKETS', n),
                                a && 'function' == typeof a && a(n)
                        })
                }
            function M(n, e, t) {
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
            var q = {
                    state: {
                        saveUrl: window.STORE.buckets.saveUrl || '',
                        dataSources: window.STORE.buckets.dataSources || {},
                        source: window.STORE.buckets.source || {},
                        buckets: window.STORE.buckets.items || [],
                        filter: window.STORE.buckets.filter || {},
                        page: window.STORE.buckets.page || 1,
                        maxPage: window.STORE.buckets.maxPage || 10,
                        offset: window.STORE.buckets.offset || 10,
                        availableOffsets: window.STORE.buckets
                            .availableOffsets || [10, 20, 30],
                    },
                    getters: {
                        currentSource: function(n) {
                            return n.source.content_type
                        },
                    },
                    mutations: (M((A = {}), c.c.ADD_TO_BUCKET, function(n, e) {
                        n.buckets[e.index].children.push(e.item)
                    }),
                    M(A, c.c.DELETE_FROM_BUCKET, function(n, e) {
                        n.buckets[e.index].children.splice(e.itemIndex, 1)
                    }),
                    M(A, c.c.TOGGLE_FEATURED_IN_BUCKET, function(n, e) {
                        var t = n.buckets[e.index].children.splice(
                            e.itemIndex,
                            1,
                        )
                        ;(t[0].starred = !t[0].starred),
                            n.buckets[e.index].children.splice(
                                e.itemIndex,
                                0,
                                t[0],
                            )
                    }),
                    M(A, c.c.UPDATE_BUCKETS_DATASOURCE, function(n, e) {
                        n.dataSources.selected.value !== e.value &&
                            (n.dataSources.selected = e)
                    }),
                    M(A, c.c.UPDATE_BUCKETS_DATA, function(n, e) {
                        n.source = Object.assign({}, n.source, e)
                    }),
                    M(A, c.c.UPDATE_BUCKETS_FILTER, function(n, e) {
                        n.filter = Object.assign({}, n.filter, e)
                    }),
                    M(A, c.c.REORDER_BUCKET_LIST, function(n, e) {
                        var t = n.buckets[e.bucketIndex].children.splice(
                            e.oldIndex,
                            1,
                        )
                        n.buckets[e.bucketIndex].children.splice(
                            e.newIndex,
                            0,
                            t[0],
                        )
                    }),
                    M(A, c.c.UPDATE_BUCKETS_DATA_OFFSET, function(n, e) {
                        n.offset = e
                    }),
                    M(A, c.c.UPDATE_BUCKETS_DATA_PAGE, function(n, e) {
                        n.page = e
                    }),
                    M(A, c.c.UPDATE_BUCKETS_MAX_PAGE, function(n, e) {
                        n.maxPage = e
                    }),
                    A),
                    actions: (M((D = {}), u.a.GET_BUCKETS, function(n) {
                        var e = n.commit,
                            t = n.state
                        L(
                            {
                                content_type: t.dataSources.selected.value,
                                page: t.page,
                                offset: t.offset,
                                filter: t.filter,
                            },
                            function(n) {
                                e(c.c.UPDATE_BUCKETS_DATA, n.source),
                                    e(c.c.UPDATE_BUCKETS_MAX_PAGE, n.maxPage)
                            },
                        )
                    }),
                    M(D, u.a.SAVE_BUCKETS, function(n) {
                        var e = n.commit,
                            t = n.state,
                            a = {}
                        t.buckets.forEach(function(n) {
                            var e = []
                            n.children.forEach(function(n) {
                                e.push({
                                    id: n.id,
                                    type: n.content_type.value,
                                    starred: n.starred,
                                })
                            }),
                                (a[n.id] = e)
                        }),
                            G(
                                t.saveUrl,
                                { buckets: a },
                                function(n) {
                                    e(c.j.SET_NOTIF, {
                                        message: 'Features saved. All good!',
                                        variant: 'success',
                                    })
                                },
                                function(n) {
                                    e(c.j.SET_NOTIF, {
                                        message:
                                            'Your submission could not be validated, please fix and retry',
                                        variant: 'error',
                                    })
                                },
                            )
                    }),
                    D),
                },
                V = t('znL1')
            s.a.use(I.a),
                s.a.use(U.a),
                i.a.registerModule('buckets', q),
                i.a.registerModule('form', V.a),
                (window.vm = new s.a({
                    store: i.a,
                    el: '#app',
                    components: { 'a17-buckets': F },
                    created: function() {
                        Object(r.a)()
                    },
                })),
                document.addEventListener('DOMContentLoaded', o.a)
        },
        dCjy: function(n, e, t) {
            'use strict'
            var a = t('PCue')
            t.n(a).a
        },
        e26r: function(n, e, t) {
            'use strict'
            var a = t('TbjE')
            t.n(a).a
        },
        gcYl: function(n, e, t) {
            'use strict'
            var a = t('Vpxi')
            t.n(a).a
        },
    },
    [[2, 0, 1]],
])
