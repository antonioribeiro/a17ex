# Area 17 Exercise

## Build some sort of CMS, ideally using Laravel
## Create CRUD process for NEWS items
## Link the landing page to your CMS by integrating your statics with actual content (title, image, author)
## Make the ad in the upper right editable in the CMS
## Implement a detail page for news items that includes some sort of “block editor” capabilities to edit the body of the page
## Add the ability to translate content

## Presentation
- Audit
- S3/Imgix  
- Scalability = FaaS / Lambda
- Larastan
- VueJS+API vs Full Dynamic Content Generation 
- Not publishable tables (authors/occupations)

## TODO
- Install laravel-responsecache (https://github.com/spatie/laravel-responsecache)
- Compile assets
- Login
- Install Twill
- Upload images
X Schedule an Audit clean

## ISSUES
- Add CORS to the docs, to warn people about S3 && JavaScript
- Twill readme.md: warn people about browser upload and CORS configuration
- Add "use Illuminate\Support\Facades\Schema;" to Twill migrations
- Fix typo "colums"
- Error: "Argument 1 passed to Illuminate\Database\Grammar::parameterize() must be of the type array, string given, called in /Users/antoniocarlos/code/area17/a17-exercise/vendor/laravel/framework/src/Illuminate/Database/Query/Grammars/Grammar.php on line 869"
- Maybe warn the developer when Translations $fillable are not in Models $fillable?
- Looks like things are too tied to title, removed description from $translatedAttributes in favor of title and error is gone? 
- Validation errors not showing when field is not in the page, we only see a "Your submission could not be validated, please fix and retry"
- Dashboard modules: error "Call to undefined method Illuminate\Database\Eloquent\Builder::mine()"
   === $drafts = $repository->draft()->mine() --- FROM HasRevisions()
- When clicking in "1 Live" some popup thingy appears above the link but below the header, so we cannot see what it says
   === Looks like it's some sort of language selector (English/French) 
- After changing resources/views/admin/authors/form.blade.php the form did not change -- add to docs
   === Add data creation workflow in the docs, which is not really easy to understand, but, again, some images would help too
   === Add some images to the docs. I'm having trouble to picture a block, for example.
- Update: "Twill is compatible with Laravel 5.3, 5.4, 5.5, 5.6 and 5.7"
   === Update: "In summary:" table -- 5.7
   === Update: search for "5.7" and update them all
- When clicking (badge) to edit a different language, page refreshes and get back to the index list 
- What triggers the module to go to the second CRUD (form.blade.php) page? 
- It's hard to disable translation for the title (first & main table field)
                         
## DATABASE
articles
  - title
  - body
  - image_id
  - author_id
  - published_at
  - published_by
  - featured
  - order

authors
  - name
  - position
  - image_id

ads
  - image_id
  - enabled

## CORS
<CORSConfiguration>
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedMethod>DELETE</AllowedMethod>
        
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
    
    <CORSRule>
        <AllowedOrigin>http://a17.test</AllowedOrigin>
        
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedMethod>DELETE</AllowedMethod>
        
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
    
    <CORSRule>
        <AllowedOrigin>https://a17.antoniocarlosribeiro.com</AllowedOrigin>
        
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedMethod>DELETE</AllowedMethod>
        
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
