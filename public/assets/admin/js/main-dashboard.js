;(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    {
        '1/2V': function(n, t, e) {
            'use strict'
            var a = e('wSSy')
            e.n(a).a
        },
        3: function(n, t, e) {
            n.exports = e('43iT')
        },
        '43iT': function(n, t, e) {
            'use strict'
            e.r(t)
            var a = e('XuX8'),
                i = e.n(a),
                s = e('FTnM'),
                o = e('sXHA'),
                r = (e('h4r+'), e('Fvk7')),
                l = e('LgGc'),
                c = e('VNOR'),
                m = {
                    name: 'A17ShortcutCreator',
                    props: {
                        entities: {
                            type: Array,
                            default: function() {
                                return []
                            },
                        },
                    },
                    computed: {},
                    methods: {},
                },
                u = (e('x8TG'), e('flhB'), e('KHd+')),
                d = Object(u.a)(
                    m,
                    function() {
                        var n = this,
                            t = n.$createElement,
                            e = n._self._c || t
                        return e('div', { staticClass: 'shortcutCreator' }, [
                            n.entities.length
                                ? e('div', { staticClass: 'container' }, [
                                      e(
                                          'div',
                                          {
                                              staticClass:
                                                  'wrapper wrapper--reverse',
                                          },
                                          [
                                              e(
                                                  'div',
                                                  {
                                                      staticClass:
                                                          'shortcutCreator__create',
                                                  },
                                                  [
                                                      e(
                                                          'a17-dropdown',
                                                          {
                                                              ref:
                                                                  'createNewDropdown',
                                                              staticClass:
                                                                  'shortcutCreator__dropdown',
                                                              attrs: {
                                                                  position:
                                                                      'bottom-right',
                                                                  width: 'full',
                                                                  offset: 0,
                                                              },
                                                          },
                                                          [
                                                              e(
                                                                  'a17-button',
                                                                  {
                                                                      staticClass:
                                                                          'shortcutCreator__btn',
                                                                      attrs: {
                                                                          type:
                                                                              'button',
                                                                          variant:
                                                                              'action',
                                                                      },
                                                                      on: {
                                                                          click: function(
                                                                              t,
                                                                          ) {
                                                                              n.$refs.createNewDropdown.toggle()
                                                                          },
                                                                      },
                                                                  },
                                                                  [
                                                                      n._v(
                                                                          '\n            Create new\n            ',
                                                                      ),
                                                                      e(
                                                                          'span',
                                                                          {
                                                                              staticClass:
                                                                                  'shortcutCreator__trigger',
                                                                          },
                                                                          [
                                                                              e(
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
                                                                      ),
                                                                  ],
                                                              ),
                                                              n._v(' '),
                                                              e(
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
                                                                      e(
                                                                          'ul',
                                                                          n._l(
                                                                              n.entities,
                                                                              function(
                                                                                  t,
                                                                              ) {
                                                                                  return t.createUrl
                                                                                      ? e(
                                                                                            'li',
                                                                                            [
                                                                                                e(
                                                                                                    'a',
                                                                                                    {
                                                                                                        attrs: {
                                                                                                            href:
                                                                                                                t.createUrl,
                                                                                                        },
                                                                                                    },
                                                                                                    [
                                                                                                        n._v(
                                                                                                            n._s(
                                                                                                                t.singular,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ],
                                                                                                ),
                                                                                            ],
                                                                                        )
                                                                                      : n._e()
                                                                              },
                                                                          ),
                                                                      ),
                                                                  ],
                                                              ),
                                                          ],
                                                          1,
                                                      ),
                                                  ],
                                                  1,
                                              ),
                                              n._v(' '),
                                              e(
                                                  'div',
                                                  {
                                                      staticClass:
                                                          'shortcutCreator__listing',
                                                  },
                                                  n._l(n.entities, function(t) {
                                                      return t.number
                                                          ? e(
                                                                'a',
                                                                {
                                                                    staticClass:
                                                                        'shortcutCreator__listingItem',
                                                                    attrs: {
                                                                        href:
                                                                            t.url,
                                                                    },
                                                                },
                                                                [
                                                                    e(
                                                                        'span',
                                                                        {
                                                                            staticClass:
                                                                                'shortcutCreator__label',
                                                                        },
                                                                        [
                                                                            n._v(
                                                                                n._s(
                                                                                    t.label,
                                                                                ),
                                                                            ),
                                                                        ],
                                                                    ),
                                                                    n._v(' '),
                                                                    e(
                                                                        'h3',
                                                                        {
                                                                            staticClass:
                                                                                'shortcutCreator__sum f--heading',
                                                                        },
                                                                        [
                                                                            n._v(
                                                                                n._s(
                                                                                    t.number,
                                                                                ),
                                                                            ),
                                                                        ],
                                                                    ),
                                                                ],
                                                            )
                                                          : n._e()
                                                  }),
                                              ),
                                          ],
                                      ),
                                  ])
                                : n._e(),
                        ])
                    },
                    [],
                    !1,
                    null,
                    '2c140eaa',
                    null,
                )
            d.options.__file = 'shortcutCreator.vue'
            var p = d.exports,
                h = e('L2JU'),
                b = e('BCmc'),
                f = {
                    name: 'A17ActivityRow',
                    props: {
                        index: { type: Number, default: 0 },
                        row: {
                            type: Object,
                            default: function() {
                                return {}
                            },
                        },
                        columns: {
                            type: Array,
                            default: function() {
                                return []
                            },
                        },
                    },
                    computed: {},
                    methods: {
                        cellClasses: function(n) {
                            return {
                                'activityCell--icon':
                                    'featured' === n.name ||
                                    'published' === n.name,
                                'activityCell--pub hide--xsmall':
                                    'published' === n.name,
                                'activityCell--thumb hide--xsmall':
                                    'thumbnail' === n.name,
                            }
                        },
                        isSpecificColumn: function(n) {
                            return (
                                'featured' === n.name ||
                                'published' === n.name ||
                                'thumbnail' === n.name
                            )
                        },
                    },
                },
                x = (e('TSHm'),
                Object(u.a)(
                    f,
                    function() {
                        var n = this,
                            t = n.$createElement,
                            e = n._self._c || t
                        return e(
                            'tr',
                            { staticClass: 'activityRow' },
                            [
                                n._l(n.columns, function(t) {
                                    return e(
                                        'td',
                                        {
                                            key: t.name,
                                            staticClass: 'activityCell',
                                            class: n.cellClasses(t),
                                        },
                                        [
                                            n.isSpecificColumn(t)
                                                ? [
                                                      'published' === t.name
                                                          ? e('span', {
                                                                directives: [
                                                                    {
                                                                        name:
                                                                            'tooltip',
                                                                        rawName:
                                                                            'v-tooltip',
                                                                    },
                                                                ],
                                                                staticClass:
                                                                    'activityCell__pubstate',
                                                                class: {
                                                                    'activityCell__pubstate--live':
                                                                        n.row[
                                                                            t
                                                                                .name
                                                                        ],
                                                                },
                                                                attrs: {
                                                                    'data-tooltip-title': n
                                                                        .row[
                                                                        t.name
                                                                    ]
                                                                        ? 'Published'
                                                                        : 'Draft',
                                                                },
                                                            })
                                                          : n._e(),
                                                      n._v(' '),
                                                      'thumbnail' === t.name
                                                          ? e(
                                                                'a',
                                                                {
                                                                    staticClass:
                                                                        'activityCell__thumb',
                                                                    attrs: {
                                                                        href:
                                                                            n
                                                                                .row
                                                                                .edit,
                                                                    },
                                                                },
                                                                [
                                                                    e('img', {
                                                                        attrs: {
                                                                            src:
                                                                                n
                                                                                    .row[
                                                                                    t
                                                                                        .name
                                                                                ],
                                                                        },
                                                                    }),
                                                                ],
                                                            )
                                                          : n._e(),
                                                  ]
                                                : [
                                                      'name' === t.name
                                                          ? [
                                                                e(
                                                                    'a',
                                                                    {
                                                                        staticClass:
                                                                            'activityCell__link',
                                                                        attrs: {
                                                                            href:
                                                                                n
                                                                                    .row
                                                                                    .edit,
                                                                        },
                                                                    },
                                                                    [
                                                                        n._v(
                                                                            n._s(
                                                                                n
                                                                                    .row[
                                                                                    t
                                                                                        .name
                                                                                ],
                                                                            ),
                                                                        ),
                                                                    ],
                                                                ),
                                                                n._v(' '),
                                                                e(
                                                                    'p',
                                                                    {
                                                                        staticClass:
                                                                            'activityCell__meta f--note',
                                                                    },
                                                                    [
                                                                        n._v(
                                                                            '\n          ' +
                                                                                n._s(
                                                                                    n
                                                                                        .row
                                                                                        .activity,
                                                                                ) +
                                                                                ' ',
                                                                        ),
                                                                        e(
                                                                            'timeago',
                                                                            {
                                                                                attrs: {
                                                                                    'auto-update': 1,
                                                                                    since: new Date(
                                                                                        n.row.date,
                                                                                    ),
                                                                                },
                                                                            },
                                                                        ),
                                                                        n._v(
                                                                            ' by ' +
                                                                                n._s(
                                                                                    n
                                                                                        .row
                                                                                        .author,
                                                                                ) +
                                                                                '\n          ',
                                                                        ),
                                                                        e(
                                                                            'span',
                                                                            {
                                                                                staticClass:
                                                                                    'activityCell__type',
                                                                            },
                                                                            [
                                                                                n._v(
                                                                                    n._s(
                                                                                        n
                                                                                            .row
                                                                                            .type,
                                                                                    ),
                                                                                ),
                                                                            ],
                                                                        ),
                                                                    ],
                                                                    1,
                                                                ),
                                                            ]
                                                          : n._e(),
                                                  ],
                                        ],
                                        2,
                                    )
                                }),
                                n._v(' '),
                                e(
                                    'td',
                                    {
                                        staticClass:
                                            'activityCell activityCell--icon',
                                    },
                                    [
                                        e(
                                            'a17-dropdown',
                                            {
                                                ref: 'activityRowSetupDropdown',
                                                attrs: {
                                                    position: 'bottom-right',
                                                },
                                            },
                                            [
                                                e(
                                                    'a17-button',
                                                    {
                                                        attrs: {
                                                            variant: 'icon',
                                                        },
                                                        on: {
                                                            click: function(t) {
                                                                n.$refs.activityRowSetupDropdown.toggle()
                                                            },
                                                        },
                                                    },
                                                    [
                                                        e('span', {
                                                            directives: [
                                                                {
                                                                    name: 'svg',
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
                                                e(
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
                                                        n.row.hasOwnProperty(
                                                            'permalink',
                                                        )
                                                            ? e(
                                                                  'a',
                                                                  {
                                                                      attrs: {
                                                                          href:
                                                                              n
                                                                                  .row
                                                                                  .permalink,
                                                                          target:
                                                                              '_blank',
                                                                      },
                                                                  },
                                                                  [
                                                                      n._v(
                                                                          'View Permalink',
                                                                      ),
                                                                  ],
                                                              )
                                                            : n._e(),
                                                        n._v(' '),
                                                        n.row.hasOwnProperty(
                                                            'edit',
                                                        )
                                                            ? e(
                                                                  'a',
                                                                  {
                                                                      attrs: {
                                                                          href:
                                                                              n
                                                                                  .row
                                                                                  .edit,
                                                                      },
                                                                  },
                                                                  [
                                                                      n._v(
                                                                          'Edit',
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
                                ),
                            ],
                            2,
                        )
                    },
                    [],
                    !1,
                    null,
                    '054a900a',
                    null,
                ))
            function _(n, t, e) {
                return (
                    t in n
                        ? Object.defineProperty(n, t, {
                              value: e,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[t] = e),
                    n
                )
            }
            x.options.__file = 'activityRow.vue'
            var g = {
                    name: 'A17ActivityFeed',
                    components: { 'a17-activity-row': x.exports },
                    props: {
                        emptyMessage: {
                            type: String,
                            default: "You don't have any activity yet.",
                        },
                    },
                    data: function() {
                        return {
                            navFilters: [
                                { name: 'All activity', slug: 'all' },
                                { name: 'My activity', slug: 'mine' },
                            ],
                            navActive: 0,
                        }
                    },
                    computed: (function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(e)
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(e).filter(
                                        function(n) {
                                            return Object.getOwnPropertyDescriptor(
                                                e,
                                                n,
                                            ).enumerable
                                        },
                                    ),
                                )),
                                a.forEach(function(t) {
                                    _(n, t, e[t])
                                })
                        }
                        return n
                    })(
                        {
                            rows: {
                                get: function() {
                                    return this.$store.state.datatable.data
                                },
                                set: function(n) {
                                    this.$store.commit(
                                        b.e.UPDATE_DATATABLE_DATA,
                                        n,
                                    )
                                },
                            },
                        },
                        Object(h.c)({
                            page: function(n) {
                                return n.datatable.page
                            },
                            maxPage: function(n) {
                                return n.datatable.maxPage
                            },
                            columns: function(n) {
                                return n.datatable.columns
                            },
                        }),
                    ),
                    methods: {
                        filterStatus: function(n, t) {
                            this.navActive !== n &&
                                ((this.navActive = n),
                                window.STORE.datatable &&
                                    window.STORE.datatable.hasOwnProperty(t) &&
                                    (this.rows = window.STORE.datatable[t]))
                        },
                    },
                },
                v = (e('1/2V'),
                Object(u.a)(
                    g,
                    function() {
                        var n = this,
                            t = n.$createElement,
                            e = n._self._c || t
                        return e('div', { staticClass: 'box activityFeed' }, [
                            e(
                                'header',
                                { staticClass: 'box__header' },
                                [
                                    n._t('default'),
                                    n._v(' '),
                                    e(
                                        'ul',
                                        { staticClass: 'box__filter' },
                                        n._l(n.navFilters, function(t, a) {
                                            return e('li', [
                                                e(
                                                    'a',
                                                    {
                                                        class: {
                                                            's--on':
                                                                n.navActive ===
                                                                a,
                                                        },
                                                        attrs: { href: '#' },
                                                        on: {
                                                            click: function(e) {
                                                                e.preventDefault(),
                                                                    n.filterStatus(
                                                                        a,
                                                                        t.slug,
                                                                    )
                                                            },
                                                        },
                                                    },
                                                    [n._v(n._s(t.name))],
                                                ),
                                            ])
                                        }),
                                    ),
                                ],
                                2,
                            ),
                            n._v(' '),
                            e(
                                'div',
                                { staticClass: 'box__body' },
                                [
                                    n.rows.length > 0
                                        ? e(
                                              'table',
                                              {
                                                  staticClass:
                                                      'activityFeed__table',
                                              },
                                              [
                                                  n._l(n.rows, function(t, a) {
                                                      return [
                                                          e(
                                                              'a17-activity-row',
                                                              {
                                                                  key: t.id,
                                                                  attrs: {
                                                                      row: t,
                                                                      index: a,
                                                                      columns:
                                                                          n.columns,
                                                                  },
                                                              },
                                                          ),
                                                      ]
                                                  }),
                                              ],
                                              2,
                                          )
                                        : [
                                              e(
                                                  'div',
                                                  {
                                                      staticClass:
                                                          'activityFeed__empty',
                                                  },
                                                  [
                                                      e('h4', [
                                                          n._v(
                                                              n._s(
                                                                  n.emptyMessage,
                                                              ),
                                                          ),
                                                      ]),
                                                  ],
                                              ),
                                          ],
                                ],
                                2,
                            ),
                        ])
                    },
                    [],
                    !1,
                    null,
                    'e256ae38',
                    null,
                ))
            v.options.__file = 'activityFeed.vue'
            var w = v.exports,
                y = e('2hnR')
            i.a.use(y.a)
            var k = {
                    name: 'A17StatFeed',
                    props: {
                        facts: {
                            type: Object,
                            default: function() {
                                return {}
                            },
                        },
                    },
                    data: function() {
                        return {
                            selectedPeriod: 'yesterday',
                            periods: [
                                { label: 'Today', value: 'today' },
                                { label: 'Yesterday', value: 'yesterday' },
                                { label: 'This week', value: 'week' },
                                { label: 'This month', value: 'month' },
                            ],
                        }
                    },
                    computed: {
                        factsForSelectedPeriod: function() {
                            return this.facts[this.selectedPeriod]
                        },
                        selectedPeriodLabel: function() {
                            var n = this
                            return this.periods.find(function(t) {
                                return t.value === n.selectedPeriod
                            }).label
                        },
                    },
                    methods: {
                        trending: function(n) {
                            return (
                                'statFeed__numb--' +
                                this.factsForSelectedPeriod[n].trend
                            )
                        },
                        selectPeriod: function(n) {
                            this.selectedPeriod = n
                        },
                    },
                },
                C = (e('sUoU'),
                Object(u.a)(
                    k,
                    function() {
                        var n = this,
                            t = n.$createElement,
                            e = n._self._c || t
                        return e('div', { staticClass: 'box statFeed' }, [
                            e('header', { staticClass: 'box__header' }, [
                                e('div', { staticClass: 'wrapper' }, [
                                    e('div', { staticClass: 'col--double' }, [
                                        e('b', [n._t('default')], 2),
                                    ]),
                                    n._v(' '),
                                    e('div', { staticClass: 'col--double' }, [
                                        e(
                                            'div',
                                            {
                                                staticClass:
                                                    'statFeed__dropdown',
                                            },
                                            [
                                                e(
                                                    'a17-dropdown',
                                                    {
                                                        ref:
                                                            'statPeriodDropdown',
                                                        attrs: {
                                                            position:
                                                                'bottom-right',
                                                        },
                                                    },
                                                    [
                                                        e(
                                                            'a17-button',
                                                            {
                                                                attrs: {
                                                                    variant:
                                                                        'ghost',
                                                                },
                                                                on: {
                                                                    click: function(
                                                                        t,
                                                                    ) {
                                                                        n.$refs.statPeriodDropdown.toggle()
                                                                    },
                                                                },
                                                            },
                                                            [
                                                                n._v(
                                                                    n._s(
                                                                        n.selectedPeriodLabel,
                                                                    ) + ' ',
                                                                ),
                                                                e('span', {
                                                                    directives: [
                                                                        {
                                                                            name:
                                                                                'svg',
                                                                            rawName:
                                                                                'v-svg',
                                                                        },
                                                                    ],
                                                                    staticClass:
                                                                        'statFeed__dropdownIcon',
                                                                    attrs: {
                                                                        symbol:
                                                                            'dropdown_module',
                                                                    },
                                                                }),
                                                            ],
                                                        ),
                                                        n._v(' '),
                                                        e(
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
                                                                n.periods,
                                                                function(t) {
                                                                    return t.value !==
                                                                        n.selectedPeriod
                                                                        ? e(
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
                                                                                          n.selectPeriod(
                                                                                              t.value,
                                                                                          )
                                                                                      },
                                                                                  },
                                                                              },
                                                                              [
                                                                                  n._v(
                                                                                      n._s(
                                                                                          t.label,
                                                                                      ),
                                                                                  ),
                                                                              ],
                                                                          )
                                                                        : n._e()
                                                                },
                                                            ),
                                                        ),
                                                    ],
                                                    1,
                                                ),
                                            ],
                                            1,
                                        ),
                                    ]),
                                ]),
                            ]),
                            n._v(' '),
                            e(
                                'div',
                                { staticClass: 'box__body' },
                                [
                                    n._l(n.factsForSelectedPeriod, function(
                                        t,
                                        a,
                                    ) {
                                        return [
                                            e(
                                                'a',
                                                {
                                                    staticClass:
                                                        'statFeed__item',
                                                    attrs: {
                                                        href: t.url,
                                                        target: '_blank',
                                                    },
                                                },
                                                [
                                                    e(
                                                        'h3',
                                                        {
                                                            staticClass:
                                                                'statFeed__numb f--heading',
                                                            class: n.trending(
                                                                a,
                                                            ),
                                                        },
                                                        [n._v(n._s(t.figure))],
                                                    ),
                                                    n._v(' '),
                                                    e(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'statFeed__info',
                                                        },
                                                        [
                                                            e(
                                                                'h4',
                                                                {
                                                                    staticClass:
                                                                        'statFeed__label',
                                                                },
                                                                [
                                                                    n._v(
                                                                        n._s(
                                                                            t.label,
                                                                        ),
                                                                    ),
                                                                ],
                                                            ),
                                                            n._v(' '),
                                                            e(
                                                                'p',
                                                                {
                                                                    staticClass:
                                                                        'statFeed__meta f--note f--small',
                                                                },
                                                                [
                                                                    n._v(
                                                                        n._s(
                                                                            t.insight,
                                                                        ),
                                                                    ),
                                                                ],
                                                            ),
                                                        ],
                                                    ),
                                                    n._v(' '),
                                                    e(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'statFeed__line',
                                                        },
                                                        [
                                                            e('trend', {
                                                                attrs: {
                                                                    data:
                                                                        t.data,
                                                                    gradient: [
                                                                        '#cccccc',
                                                                    ],
                                                                    'stroke-width':
                                                                        '2',
                                                                    padding: 0,
                                                                    'auto-draw':
                                                                        '',
                                                                    smooth: '',
                                                                    width:
                                                                        '100',
                                                                    height:
                                                                        '50',
                                                                },
                                                            }),
                                                        ],
                                                        1,
                                                    ),
                                                ],
                                            ),
                                        ]
                                    }),
                                ],
                                2,
                            ),
                            n._v(' '),
                            n._m(0),
                        ])
                    },
                    [
                        function() {
                            var n = this.$createElement,
                                t = this._self._c || n
                            return t(
                                'footer',
                                { staticClass: 'box__footer statFeed__footer' },
                                [
                                    t(
                                        'a',
                                        {
                                            staticClass: 'f--external',
                                            attrs: {
                                                href:
                                                    'https://analytics.google.com/analytics/web',
                                                target: '_blank',
                                            },
                                        },
                                        [this._v('Google Analytics')],
                                    ),
                                ],
                            )
                        },
                    ],
                    !1,
                    null,
                    'cfb29360',
                    null,
                ))
            C.options.__file = 'statFeed.vue'
            var $ = C.exports,
                F = {
                    name: 'A17GenericFeed',
                    props: {
                        entities: {
                            type: Array,
                            default: function() {
                                return []
                            },
                        },
                    },
                    computed: {
                        hasNumber: function() {
                            return this.entities.filter(function(n) {
                                return n.hasOwnProperty('number')
                            }).length
                        },
                    },
                    methods: {
                        target: function(n) {
                            return !!n.hasOwnProperty('external') && '_blank'
                        },
                    },
                },
                P = (e('SBjR'),
                Object(u.a)(
                    F,
                    function() {
                        var n = this,
                            t = n.$createElement,
                            e = n._self._c || t
                        return e('div', { staticClass: 'box genericFeed' }, [
                            e('header', { staticClass: 'box__header' }, [
                                e('b', [n._t('default')], 2),
                            ]),
                            n._v(' '),
                            e('div', { staticClass: 'box__body' }, [
                                e(
                                    'ol',
                                    {
                                        staticClass: 'genericFeed__list',
                                        class: {
                                            'genericFeed__list--numbered':
                                                n.hasNumber,
                                        },
                                    },
                                    n._l(n.entities, function(t) {
                                        return e('li', [
                                            e(
                                                'a',
                                                {
                                                    staticClass:
                                                        'genericFeed__item',
                                                    attrs: {
                                                        href: t.url,
                                                        target: n.target(t),
                                                    },
                                                },
                                                [
                                                    t.thumbnail
                                                        ? e(
                                                              'span',
                                                              {
                                                                  staticClass:
                                                                      'genericFeed__thumbnails',
                                                              },
                                                              [
                                                                  e('img', {
                                                                      attrs: {
                                                                          src:
                                                                              t.thumbnail,
                                                                      },
                                                                  }),
                                                              ],
                                                          )
                                                        : n._e(),
                                                    n._v(' '),
                                                    e(
                                                        'span',
                                                        {
                                                            staticClass:
                                                                'genericFeed__label',
                                                        },
                                                        [
                                                            e('span', [
                                                                e(
                                                                    'span',
                                                                    {
                                                                        staticClass:
                                                                            'genericFeed__hover',
                                                                    },
                                                                    [
                                                                        n._v(
                                                                            n._s(
                                                                                t.name,
                                                                            ),
                                                                        ),
                                                                    ],
                                                                ),
                                                            ]),
                                                        ],
                                                    ),
                                                    n._v(' '),
                                                    t.number
                                                        ? e(
                                                              'span',
                                                              {
                                                                  staticClass:
                                                                      'genericFeed__views f--tiny',
                                                              },
                                                              [
                                                                  n._v(
                                                                      n._s(
                                                                          t.number,
                                                                      ),
                                                                  ),
                                                              ],
                                                          )
                                                        : n._e(),
                                                    n._v(' '),
                                                    t.type
                                                        ? e(
                                                              'span',
                                                              {
                                                                  staticClass:
                                                                      'genericFeed__type',
                                                              },
                                                              [
                                                                  n._v(
                                                                      n._s(
                                                                          t.type,
                                                                      ),
                                                                  ),
                                                              ],
                                                          )
                                                        : n._e(),
                                                ],
                                            ),
                                        ])
                                    }),
                                ),
                            ]),
                        ])
                    },
                    [],
                    !1,
                    null,
                    '59821ab6',
                    null,
                ))
            P.options.__file = 'genericFeed.vue'
            var S = P.exports,
                B = e('sK5X'),
                N = e('znL1')
            i.a.use(l.a),
                i.a.use(c.a),
                s.a.registerModule('datatable', B.a),
                s.a.registerModule('form', N.a),
                (window.vm = new i.a({
                    store: s.a,
                    el: '#app',
                    components: {
                        'a17-shortcut-creator': p,
                        'a17-activity-feed': w,
                        'a17-stat-feed': $,
                        'a17-feed': S,
                    },
                    created: function() {
                        Object(r.a)()
                    },
                })),
                document.addEventListener('DOMContentLoaded', o.a)
        },
        GPM1: function(n, t, e) {
            ;(n.exports = e('I1BE')(!1)).push([
                n.i,
                '@charset "UTF-8";\n/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we\'ll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we\'re mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don\'t need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you\'d like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.activityRow[data-v-054a900a] {\n  border-bottom: 1px solid #f2f2f2;\n}\n.activityRow:hover td[data-v-054a900a] {\n  background-color: #fbfbfb;\n}\n.activityRow[data-v-054a900a]:last-child {\n  border-bottom: 0 none;\n}\n.activityCell[data-v-054a900a] {\n  vertical-align: top;\n  padding: 20px 15px;\n  background-color: #fff;\n}\n.activityCell__link[data-v-054a900a] {\n  color: #3278B8;\n  text-decoration: none;\n}\n.activityCell__link[data-v-054a900a]:hover {\n  text-decoration: none;\n  background-image: linear-gradient(to bottom, rgba(50, 120, 184, 0.5) 75%, rgba(50, 120, 184, 0.5) 75%);\n  background-repeat: repeat-x;\n  background-size: 1px 1px;\n  background-position: 0 98%;\n}\n.activityCell__meta[data-v-054a900a] {\n  margin-top: 5px;\n}\n.activityCell__type[data-v-054a900a]::before {\n  content: "\\2022";\n  color: #8c8c8c;\n  display: inline;\n  padding: 0 8px 0 5px;\n  font-size: 11px;\n  position: relative;\n  top: -2px;\n}\n.activityCell--thumb[data-v-054a900a] {\n  width: 1px;\n}\n.activityCell--thumb img[data-v-054a900a] {\n  display: block;\n  width: 50px;\n  min-height: 50px;\n  background: #f2f2f2;\n  height: auto;\n}\n.activityCell__feature[data-v-054a900a] {\n  display: block;\n  cursor: pointer;\n}\n.activityCell__feature .icon[data-v-054a900a] {\n  color: #a6a6a6;\n  display: block;\n  top: -2px;\n  position: relative;\n}\n.activityCell__feature .icon--star-feature_active[data-v-054a900a] {\n  color: #e61414;\n}\n.activityCell__feature .icon--star-feature[data-v-054a900a] {\n  display: block;\n}\n.activityCell__feature .icon--star-feature_active[data-v-054a900a] {\n  display: none;\n}\n.activityCell__feature--active .icon svg[data-v-054a900a] {\n  fill: #e61414;\n}\n.activityCell__feature--active .icon--star-feature[data-v-054a900a] {\n  display: none;\n}\n.activityCell__feature--active .icon--star-feature_active[data-v-054a900a] {\n  display: block;\n}\n.activityCell__pubstate[data-v-054a900a] {\n  border-radius: 50%;\n  height: 9px;\n  width: 9px;\n  display: block;\n  background: #d9d9d9;\n  position: relative;\n  top: 3px;\n}\n.activityCell__pubstate--live[data-v-054a900a] {\n  background: #1d9f3c;\n}\n.activityCell--icon[data-v-054a900a] {\n  width: 1px;\n}\n.activityCell--pub[data-v-054a900a] {\n  padding-left: 0;\n  padding-right: 0;\n}',
                '',
            ])
        },
        H4ao: function(n, t, e) {
            ;(n.exports = e('I1BE')(!1)).push([
                n.i,
                '/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we\'ll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we\'re mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don\'t need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you\'d like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.genericFeed__list[data-v-59821ab6] {\n  list-style-type: none;\n}\n.genericFeed__hover[data-v-59821ab6] {\n  display: inline;\n}\n.genericFeed__item[data-v-59821ab6] {\n  padding: 20px;\n  border-top: 1px solid #f2f2f2;\n  text-decoration: none;\n  display: flex;\n  background-color: #fff;\n}\n.genericFeed__item[data-v-59821ab6]:hover {\n  background-color: #fbfbfb;\n}\n.genericFeed__item:hover .genericFeed__hover[data-v-59821ab6] {\n  text-decoration: none;\n  background-image: linear-gradient(to bottom, rgba(50, 120, 184, 0.5) 75%, rgba(50, 120, 184, 0.5) 75%);\n  background-repeat: repeat-x;\n  background-size: 1px 1px;\n  background-position: 0 98%;\n}\nli:first-child .genericFeed__item[data-v-59821ab6] {\n  border-top: 0 none;\n}\n.genericFeed__label[data-v-59821ab6] {\n  flex-grow: 1;\n  color: #3278B8;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.genericFeed__thumbnails[data-v-59821ab6] {\n  padding-right: 15px;\n}\n.genericFeed__thumbnails img[data-v-59821ab6] {\n  display: block;\n  width: 50px;\n  min-height: 50px;\n  background: #f2f2f2;\n  height: auto;\n}\n.genericFeed__views[data-v-59821ab6] {\n  color: #8c8c8c;\n  padding-left: 15px;\n}\n.genericFeed__type[data-v-59821ab6] {\n  color: #8c8c8c;\n  padding-left: 15px;\n}\n\n/* With numbers */\n.genericFeed__list--numbered[data-v-59821ab6] {\n  counter-reset: references;\n}\n.genericFeed__list--numbered .genericFeed__item[data-v-59821ab6]::before {\n  counter-increment: references;\n  content: counter(references);\n  margin-right: 13px;\n  -webkit-font-feature-settings: "kern";\n          font-feature-settings: "kern";\n}',
                '',
            ])
        },
        MFUL: function(n, t, e) {
            var a = e('ur8Z')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            e('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        SBjR: function(n, t, e) {
            'use strict'
            var a = e('xg5j')
            e.n(a).a
        },
        TSHm: function(n, t, e) {
            'use strict'
            var a = e('ueI9')
            e.n(a).a
        },
        'V+av': function(n, t, e) {
            var a = e('csAm')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            e('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        XLpO: function(n, t, e) {
            ;(n.exports = e('I1BE')(!1)).push([
                n.i,
                '@charset "UTF-8";\n/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we\'ll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we\'re mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don\'t need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you\'d like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.statFeed__dropdown[data-v-cfb29360] {\n  text-align: right;\n}\n.statFeed__item[data-v-cfb29360] {\n  border-top: 1px solid #f2f2f2;\n  text-decoration: none;\n  padding: 15px 0;\n  display: flex;\n  -webkit-font-feature-settings: "kern";\n          font-feature-settings: "kern";\n}\n.statFeed__item[data-v-cfb29360]:hover {\n  background: #fbfbfb;\n}\n.statFeed__item svg[data-v-cfb29360] {\n  width: 100%;\n  height: auto;\n}\n.statFeed__numb[data-v-cfb29360] {\n  line-height: 1em;\n  min-width: 33.333%;\n  position: relative;\n  padding: 10px 35px 10px 20px;\n  font-weight: 600;\n}\n.statFeed__item[data-v-cfb29360]:first-child {\n  border-top: 0 none;\n}\n.statFeed__numb[data-v-cfb29360],\n.statFeed__footer[data-v-cfb29360] {\n  color: #853bb7;\n}\n.statFeed__numb--up[data-v-cfb29360]::after,\n.statFeed__numb--down[data-v-cfb29360]::after {\n  font-size: 15px;\n  color: inherit;\n  position: absolute;\n  top: 0;\n  /*bottom:0em;*/\n  vertical-align: baseline;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n  font-weight: 400;\n}\n.statFeed__numb--up[data-v-cfb29360]::after {\n  content: "\\2197";\n}\n.statFeed__numb--down[data-v-cfb29360]::after {\n  content: "\\2198";\n}\n.statFeed__info[data-v-cfb29360] {\n  padding: 10px 20px;\n  flex-grow: 1;\n  border-left: 1px solid #f2f2f2;\n}\n.statFeed__line[data-v-cfb29360] {\n  padding: 5px 20px 0 20px;\n}',
                '',
            ])
        },
        csAm: function(n, t, e) {
            ;(n.exports = e('I1BE')(!1)).push([
                n.i,
                '@charset "UTF-8";\n/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we\'ll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we\'re mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don\'t need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you\'d like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.shortcutCreator[data-v-2c140eaa] {\n  padding: 20px 0;\n  width: 100%;\n  background-color: #f2f2f2;\n  border-bottom: 1px solid #e5e5e5;\n}\n.shortcutCreator__listing[data-v-2c140eaa] {\n  display: flex;\n  flex-grow: 1;\n  flex-flow: column nowrap;\n}\n@media screen and (min-width: 600px) {\n.shortcutCreator__listing[data-v-2c140eaa] {\n    flex-flow: row nowrap;\n}\n}\n.shortcutCreator__listingItem[data-v-2c140eaa] {\n  text-decoration: none;\n  padding: 20px 0 0;\n  flex: 0 0 auto;\n}\n@media screen and (max-width: 599px) {\n.shortcutCreator__listingItem[data-v-2c140eaa] {\n    width: calc(100vw - 40px);\n    margin-left: 15px;\n}\n}\n@media screen and (min-width: 600px) and (max-width: 849px) {\n.shortcutCreator__listingItem[data-v-2c140eaa] {\n    width: calc((((100vw - 135px) / 6) * 2) + 15px);\n    margin-left: 15px;\n}\n}\n@media screen and (min-width: 850px) and (max-width: 1039px) {\n.shortcutCreator__listingItem[data-v-2c140eaa] {\n    width: calc((((100vw - 180px) / 6) * 1) + 0px);\n    margin-left: 20px;\n}\n}\n@media screen and (min-width: 1040px) and (max-width: 1539px) {\n.shortcutCreator__listingItem[data-v-2c140eaa] {\n    width: calc((((100vw - 200px) / 6) * 1) + 0px);\n    margin-left: 20px;\n}\n}\n@media screen and (min-width: 1540px) {\n.shortcutCreator__listingItem[data-v-2c140eaa] {\n    width: 223.3333333333px;\n    margin-left: 20px;\n}\n}\n@media screen and (min-width: 600px) {\n.shortcutCreator__listingItem[data-v-2c140eaa] {\n    padding: 5px 0 7px;\n}\n}\n.shortcutCreator__listingItem[data-v-2c140eaa]:hover {\n  color: #3278B8;\n}\n.shortcutCreator__listingItem:hover .shortcutCreator__label[data-v-2c140eaa]::after {\n  content: "\\2192";\n  font-size: 15px;\n  color: inherit;\n  position: absolute;\n  top: 0;\n  /*bottom:0em;*/\n  vertical-align: baseline;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n  font-weight: 400;\n}\n.shortcutCreator__label[data-v-2c140eaa] {\n  padding-bottom: 7px;\n  display: block;\n  position: relative;\n}\n.shortcutCreator__sum[data-v-2c140eaa] {\n  line-height: 1em;\n  -webkit-font-feature-settings: "kern";\n          font-feature-settings: "kern";\n  font-weight: 600;\n}\n@media screen and (min-width: 850px) {\n.shortcutCreator__listingItem[data-v-2c140eaa] {\n    border-right: 1px solid #e5e5e5;\n}\n.shortcutCreator__listingItem[data-v-2c140eaa]:last-child {\n    border-right: 0 none;\n}\n}\n.shortcutCreator__create[data-v-2c140eaa] {\n  display: flex;\n  flex: 0 0 auto;\n}\n@media screen and (max-width: 599px) {\n.shortcutCreator__create[data-v-2c140eaa] {\n    width: calc(100vw - 40px);\n    margin-left: 15px;\n}\n}\n@media screen and (min-width: 600px) and (max-width: 849px) {\n.shortcutCreator__create[data-v-2c140eaa] {\n    width: calc(100vw - 60px);\n    margin-left: 15px;\n}\n}\n@media screen and (min-width: 850px) and (max-width: 1039px) {\n.shortcutCreator__create[data-v-2c140eaa] {\n    width: calc((((100vw - 180px) / 6) * 3) + 40px);\n    margin-left: 20px;\n}\n}\n@media screen and (min-width: 1040px) and (max-width: 1539px) {\n.shortcutCreator__create[data-v-2c140eaa] {\n    width: calc((((100vw - 200px) / 6) * 1) + 0px);\n    margin-left: 20px;\n}\n}\n@media screen and (min-width: 1540px) {\n.shortcutCreator__create[data-v-2c140eaa] {\n    width: 223.3333333333px;\n    margin-left: 20px;\n}\n}\n.shortcutCreator__create .dropdown[data-v-2c140eaa] {\n  width: 100%;\n  height: 40px;\n}\n@media screen and (min-width: 600px) {\n.shortcutCreator__create .dropdown[data-v-2c140eaa] {\n    margin: 20px 0;\n}\n}\n.shortcutCreator__create .dropdown > button[data-v-2c140eaa]:first-child {\n  flex-grow: 1;\n  padding-left: 0;\n  padding-right: 0;\n}\n.shortcutCreator__trigger[data-v-2c140eaa] {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  transition: color 0.2s linear;\n  padding-left: 6px;\n}\n.shortcutCreator__trigger .icon[data-v-2c140eaa] {\n  position: relative;\n  top: -2px;\n}\nbutton:focus + .shortcutCreator__trigger[data-v-2c140eaa],\nbutton:hover + .shortcutCreator__trigger[data-v-2c140eaa] {\n  background: #2D6CA6;\n}',
                '',
            ])
        },
        flhB: function(n, t, e) {
            'use strict'
            var a = e('MFUL')
            e.n(a).a
        },
        'kOl/': function(n, t, e) {
            var a = e('XLpO')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            e('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        ojo7: function(n, t, e) {
            ;(n.exports = e('I1BE')(!1)).push([
                n.i,
                "/* 1540 = $max-width + 50 + 50 */\n/**** Text Colors ****/\n/**** Forms Colors ****/\n/**** Drag Colors ****/\n/**** Main Button Colors ****/\n/**** UI Colors ****/\n/**** Env Colors ****/\n/**** Notif Colors ****/\n/**** Buckets Colors ****/\n/**** Wysiwyg ****/\n/*\n  @function get-breakpoint-directions\n\n  Sorts through breakpoints SASS map,\n  generates a full SASS map containing all the breakpoint\n  variations we'll require\n\n  Parameters:\n  none\n*/\n/*\n  @mixin breakpoint\n\n  Inserts a media query\n\n  Parameters:\n  $name - name of breakpoint, choose from:\n\n  xsmall, small, medium, large, xlarge, xxlarge  - *just* that breakpoint\n  small-, medium-, large-, xlarge-, xxlarge-  - that breakpoint *and* below\n  xsmall+, small+, medium+, large+, xlarge+  - that breakpoint *and* up\n\n  NB: the we're mobile up, so the minus values should be avoided..\n*/\n/*\n  @function get-media\n\n  Returns start and stop points of a given media query\n\n  Parameters:\n  $bp - the breakpoint you want the stop and stop points of\n*/\n/*\n  @mixin placeholder\n\n  Style form placeholder text\n*/\n/*\n  @mixin resetfield\n  Form fields reset default styles\n*/\n/*\n  @mixin textfield\n  Form fields minimal styles\n*/\n/*\n  @mixin defaultState\n  Form fields reset default styles\n*/\n/*\n  @mixin hoverState\n  Form fields hover styles\n*/\n/*\n  @mixin focusState\n  Form fields hover styles\n*/\n/*\n  @mixin disabledState\n  Form fields disabled styles\n*/\n/* Dragger mixins */\n/* Draw the grid of dots */\n/*\n  @function colspan\n\n  Returns a calc() that represents a column span\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n  $inverse - if you want to return a negative number (to move things backwards)\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width\n\n  Returns a width and a calc() to correctly span columns\n  with breakpoint selection and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to span\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin width-multi\n\n  A mix of @mixin width and @mixin column. Pass a map of the number\n  of columns to span at each breakpoint. Use when you don't need to\n  float on the grid.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to span on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include width-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push\n\n  Returns a margin-left and a calc() to correctly push\n  a block a number of columns with breakpoint selection\n  and optional bump value\n\n  Parameters:\n  $number-of-columns - the number of columns you want to push\n  $breakpoint - at which breakpoint\n  $bump - if you want the colspan + an arbitrary number\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-multi\n\n  A mix of @mixin push and @mixin column. Pass a map of the number\n  of columns to push at each breakpoint.\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column\n  needs to push on each breakpoint. Omitting a breakpoint from the\n  map will not set a width at that breakpoint.\n  $bump - if you want the colspan + an arbitrary number\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include push-multi($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin push-gutter\n\n  Adds gutter margin to the sides passed to the set breakpoints.\n  Defaults to left margin across all breakpoints.\n\n  Parameters:\n  $sides - the sides you'd like to apply margin to\n  $bps - at which breakpoints\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container\n\n  Sets up columns container\n\n  Parameters:\n  none\n\n  ```scss\n    .list-articles {\n    @include columns-container;\n  }\n  ```\n*/\n/*\n  @mixin column\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin columns-container-flex\n\n  Sets up columns container - flex version\n\n  Parameters:\n  none\n\n  ```scss\n  .list-articles {\n    @include columns-container-flex;\n  }\n  ```\n*/\n/*\n  @mixin column-flex\n\n  Sets up single column\n\n  Parameters:\n  $colspans - scss map detailing how many design columns this column needs to span on each breakpoint\n\n  ```scss\n  $column-spans__list-articles: (\n    xsmall: 3,\n    small: 3,\n    medium: 4,\n    large: 4,\n    xlarge: 3,\n    xxlarge: 3\n  );\n\n  .list-articles__item {\n    @include column-flex($column-spans__list-articles);\n  }\n  ```\n\n  NB: only works with breakpoint names, not the +/- variants\n*/\n/*\n  @mixin font_smoothing\n\n  Set font smoothing ON or OFF\n*/\n/*\n  @mixin hide_text\n\n  Hides text in an element\n*/\n/*\n    @mixin bordered\n\n    Parameters:\n    $color - color\n    $color--hover - color for hover\n    $pos - vertical position (in % or in px)\n*/\n.activityFeed__table[data-v-e256ae38] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.activityFeed__empty[data-v-e256ae38] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  padding: 15px 20px;\n}\n.activityFeed__empty h4[data-v-e256ae38] {\n  font-size: 18px;\n  color: #8c8c8c;\n}",
                '',
            ])
        },
        sUoU: function(n, t, e) {
            'use strict'
            var a = e('kOl/')
            e.n(a).a
        },
        ueI9: function(n, t, e) {
            var a = e('GPM1')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            e('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        ur8Z: function(n, t, e) {
            ;(n.exports = e('I1BE')(!1)).push([
                n.i,
                '.shortcutCreator .shortcutCreator__btn {\n  position: relative;\n}',
                '',
            ])
        },
        wSSy: function(n, t, e) {
            var a = e('ojo7')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            e('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
        x8TG: function(n, t, e) {
            'use strict'
            var a = e('V+av')
            e.n(a).a
        },
        xg5j: function(n, t, e) {
            var a = e('H4ao')
            'string' == typeof a && (a = [[n.i, a, '']])
            var i = { hmr: !0, transform: void 0, insertInto: void 0 }
            e('aET+')(a, i)
            a.locals && (n.exports = a.locals)
        },
    },
    [[3, 0, 1]],
])
