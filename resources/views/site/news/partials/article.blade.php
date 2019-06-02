<div class="asset-box {{ $article->featured ? 'tall' : '' }}">
    <div class="asset-image">
        <a
            href="{{ $article->showUrl }}"
            target="_self"
            style="background-image: url({{ $article->image('image', $article->featured ? 'portrait' : 'default') }})"
            title="{{ $article->imageAltText($article->featured ? 'portrait' : 'default') }}"
        ></a>
    </div>
    <div class="asset-content">
        <header>
            <h1><a href="{{ $article->showUrl }}">{{ $article->title }}</a></h1>
        </header>
        <footer>
            @include('site.news.partials.author-button', ['author' => $article->author])

            @include('site.news.partials.share', ['article' => $article])
        </footer>
    </div>
</div>
