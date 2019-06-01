<div class="module list">
    <h3>Trending</h3>

    @foreach($trending as $article)
        @include('site.news.partials.trending-article')
    @endforeach
</div>
