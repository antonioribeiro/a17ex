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


# FaaS
## AWS CLI
pip3 install awscli --upgrade --user
 
## AWS SAM CLI
brew tap aws/tap
brew install aws-sam-cli

## Create App
laravel new serverless-app

## Install Bref
composer require mnapoli/bref

## create template.yml and configure app
https://bref.sh/docs/frameworks/laravel.html

## create a bucket (mb = make bucket)
aws s3 mb s3://my-bucket

## remove dev packages
composer install --optimize-autoloader --no-dev

## generate the stack configuration
sam package \
    --output-template-file .stack.yaml \
    --s3-bucket my-bucket

## deploy
    aws cloudformation deploy / 
        --template-file /Users/antoniocarlosribeiro/code/area17/faas/.stack.yaml 
        --stack-name area17-faas

sam deploy \
    --template-file .stack.yaml \
    --capabilities CAPABILITY_IAM \
    --stack-name area17
