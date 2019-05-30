# Area 17 Exercise

## Build some sort of CMS, ideally using Laravel
## Create CRUD process for NEWS items
## Link the landing page to your CMS by integrating your statics with actual content (title, image, author)
## Make the ad in the upper right editable in the CMS
## Implement a detail page for news items that includes some sort of “block editor” capabilities to edit the body of the page
## Add the ability to translate content

## Description

Hey Luis,

I was putting some thought on the exercise and come up with some ideas on what I could build to make it work. I don't really have any big questions about the exercise itself, at first it looks like something simple, the ones I have are basically "what kind of information we need to give back to the client?", "am I overthinking this?", and "is this something they would do themselves to please their client?". So, please, give it a read and tell me what you can about this concept:

I have to build a web page and an admin CMS to manage and render:
    - Posts
    - A detail page for the post
    - An space for one ad
    - A "Trending posts" section
    
- Posts 
Looks like a pretty straight forward page with posts, so from what I could see in the design, they consists of   
    - Title
    - Featured post
    - Order
    - Author
        - Name (not translatable)
        - Occupation
    - Image
        - Landscape 3/2 ratio for a normal post
        - Portrait 3/4 ratio for a featured post
    - Body  
    - Published status
    - Number of clicks (to be used in trending, but being very simplistic on something that can obviously be huge)

- Detail page for the post
As far as I can tell, you didn't provide HTML+CSS for the detail page frontend, so we have two options here: your frontend engineers help me with this, which is, of course, the better solution here, or I make one myself just to present to you, but it won't be as pretty as I would like it to be. :)
I did not get to that yet, but Twill has a block editor, which should probably help me build this the way the exercise ask me to. 
                        
- An ad space which should show only one ad
I'm not sure if you guys still manage ads yourselves in the "real world", since there are many ad services out there, so I have two options here: put some Carbon or Google Ad in that space or just build something very simple (something like this, to give real information, could be easily overthought) to have the ad space filled in a way we could still get some statistics from it, so for this exercise I'm going with the second one in, again, a very simplistic way:
    - Ads consists in
        - Title (not to be show in the page)
        - A 6/5 ratio image
        - URL
        - Published status
    - An "Ad shown" table to store
        - IP address
        - Timestamp      
    - An "Ad Clicks" table to store user interactions with ads
        - Ad id
        - IP address
        - Timestamp        

- Trending posts:
The exercise did not mention it, but it's in the page and something must be done with it, right? What I think I can do to make it work like in "the real world" is take 4 of the 7 posts we have in the page, ordered (desc) by number of clicks.    

- Translation
Twill also makes our lives very easy in this area, so it should not be a problem to develop. The only matter I see here is that we have no language selector in the design you gave me, so, again, if I add translation to the code we (you guys or me) would have to come up with something, but, of course, we can always start by using the user's browser locale. 
Translation is something I had some trouble in with Twill and I broke it bad, so bad I had to restart from scratch, this time not touching too many things. I tend to break things, because I don't do things the way some people do, so sometimes I find bugs or I bump into requirements not fit for a particular feature. But I should probably talk to Quentin about this later. I already sent a Pull Request to Twill, fixing some namespacing problems I found while organizing classes my way. 


     
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
 - Presenter, show the user that the presenter class they are try to use does not exists:
    === throw new \Exception('Please set the Presenter path to your Presenter :' . $presenter . ' FQN');
 - Relationship translations
                                                         
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
