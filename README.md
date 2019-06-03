# Area 17 Exercise
-  Build some sort of CMS, ideally using Laravel
-  Create CRUD process for NEWS items
-  Link the landing page to your CMS by integrating your statics with actual content (title, image, author)
-  Make the ad in the upper right editable in the CMS
-  Implement a detail page for news items that includes some sort of “block editor” capabilities to edit the body of the page
-  Add the ability to translate content

## Presentation
- Home page
- Links
- Article page
- Author page
- Trending
- Ads
- Share button
- S3/Imgix
- Admin / Twill
- VueJS+API vs Full Dynamic Content Generation
- public/site and the mix() and mix-manifest.json conundrum
- Response cache and clear strategy
- Compiling assets to production removes something
- Share button (need help with design!)
- Version (meta) and deploy script 
- .button => cursor: pointer;
- Maybe add a section to the posts?
- Routes (response cache) per locale
- Tests 
- Larastan
- Audit
- Scalability = FaaS / Lambda (wip) / Varnish (wip)

## TODO
- Article detail page design
- Author Bio page design
- Share modal design. We need to discus the whole implementation.
- Validation / Configure Requests
- Required data in Twill
- Author/Article preview in Twill
- Order articles
- CleanUp unused PHP code for site
- Test Exceptions
- Add audit to Admin
- What is this "image-wrap" on trending? Is this image supposed to be shown at some point?
- Add a favicon
X Add some blocks to article seeding
X Set locale / Response cache per locale
X Enable Google Analytics Stats
X Author Bio
X Author Page
X Tests
X Share button
X HTTPS
X Settings (number of posts) - broken
X Dynamic design
X Install laravel-responsecache (https://github.com/spatie/laravel-responsecache)
X 404 Page design
X Add Varnish
X Featured article
X Compile assets
x Login
X Install Twill
X Upload images
X Schedule an Audit clean

## ISSUES
- Point Github readme to the https://twill.io/ page
- Add CORS to the docs, to warn people about S3 && JavaScript
- Add "use Illuminate\Support\Facades\Schema;" to Twill migrations
- Fix typo "colums"
- Error: "Argument 1 passed to Illuminate\Database\Grammar::parameterize() must be of the type array, string given, called in /Users/antoniocarlos/code/area17/a17-exercise/vendor/laravel/framework/src/Illuminate/Database/Query/Grammars/Grammar.php on line 869"
    === Related to some fillable not being in translatableAttributes
    === It's hard to disable translation for the title (first & main table field), not sure if we can yet  
- Maybe warn the developer when Translations $fillable are not in Models $fillable?
- Looks like things are too tied to title, removed description from $translatedAttributes in favor of title and error is gone? 
- Some (all?) validation error messages are not showing when field is not in the page
    === we only see a "Your submission could not be validated, please fix and retry"
- Dashboard modules: error "Call to undefined method Illuminate\Database\Eloquent\Builder::mine()"
    === getDrafts($modules) => $drafts = $repository->draft()->mine()
    === When a module has no revisions 
- When clicking in "1 Live" some popup thingy appears above the link but below the header, so we cannot see what it says
    === Looks like it's some sort of language selector (English/French) 
- After changing resources/views/admin/authors/form.blade.php the form did not change -- add to docs
    === Add data creation workflow in the docs, which is not really easy to understand, but, again, some images would help too
    === Add some images to the docs. I'm having trouble to picture a block, for example.
- Update docs for 5.8
    === "Twill is compatible with Laravel 5.3, 5.4, 5.5, 5.6 and 5.7"
    === "In summary:" table -- 5.7
    === search for "5.7" and update them all
- When clicking (badge) to edit a different language, page refreshes and get back to the index list 
- What triggers the module to go to the second CRUD (form.blade.php) page? 
- Route [admin.blocks.preview] 
    === raises a "not defined" error when 'editInModal' => false, 
    === needs docs
- ToDocs: create.blade.php -- https://spectrum.chat/twill/help/editinmodal-true-add-fields-shown-in-modal~15e4cf7d-8309-4eca-9da8-3b5163d49967
- ToDocs: Route "admin.{module}.browser" when using relationships
- Edit image/crop showing no image 
    === Console errors: TypeError: Cannot read property 'medium' of undefined
                        TypeError: Cannot read property 'width' of undefined
- Presenter: we nedd to show to the user which presenter class does not exists:
    === throw new \Exception('Please set the Presenter path to your Presenter :' . $presenter . ' FQN');
- Relationship translations
- Assets compilation for site conflicts with admin, how to keep both in mix-manifest.json?
    === We can't really use mix for the site because mix-manifest.json will always be rewritten for one or another
    === https://github.com/area17/twill/issues/252
    === https://github.com/JeffreyWay/laravel-mix/issues/1759
- Moving site's mix-manifest.json also did not work
    === when we add (to webpack.mix.js):
        global.Mix.manifest.path = function() {
            return path.join('public/site', this.name)
        }
        
        and change assets dir to:
         
        .sass('resources/sass/app.scss', 'public/site/css')
     
        this is how it is formed:  
        {
            "/site/js/app.js": "/site/js/app.js?id=ef66b6c531ec63f3718a",
            "/site/css/app.css": "/site/css/app.css?id=7a524dcd6150c54e3d8c"
        }
        
        and this (site/site) is our mix('...') end result url:
        ---> http://a17-demo.test/site/site/css/app.css?id=7a524dcd6150c54e3d8c

        this is how it should be formed for it to work:
        {
            "/site/js/app.js": "/js/app.js?id=ef66b6c531ec63f3718a",
            "/site/css/app.css": "/css/app.css?id=7a524dcd6150c54e3d8c"
        }

        because if we do:
        {{ mix('/site/js/app.js', '/site') }}
        
        mix helper will add /site to the 
- Could not overload mix() helper
    === https://github.com/laravel/ideas/issues/1569
- Setting the featured field as the first one in table gives the error "Undefined index: field"
- Article 1 doesn't stick with all languages in 'live'
- Would be nice if select could be changed to a Select2
- If a relation is in $translatedAttributes, the getter will return null
- A missing "public $translatedAttributes = [];" gave the error Undefined property: App\Models\Author::$translatedAttributes                                                                  
- When changing the title, slugs weren't updated, calling afterSaveHandleSlugs() did not help, was it supposed to? 
- How to disable settings translation for one particular setting? It keeps trying to save it translated 

