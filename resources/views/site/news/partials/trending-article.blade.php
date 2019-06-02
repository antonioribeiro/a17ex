<div class="row">
    <div class="col-6">
        <span class="image-wrap">
            <a href="{{ $article->showUrl }}" class="image"><img src="{{ $article->image('image') }}"/></a>
            <a href="{{ $article->showUrl }}" class="button" style="background-image:url({{ $article->author->image('avatar') }})"></a>
        </span>
    </div>
    <div class="col-6">
        <h4><a href="{{ $article->showUrl }}">{{ $article->title }}</a></h4>
        <footer>
            @include('site.news.partials.author-button', ['author' => $article->author])

            @include('site.news.partials.share', ['article' => $article])
        </footer>
    </div>
</div>
