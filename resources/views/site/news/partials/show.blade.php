<div class='hero'>
    @if ($article->hasImage('image'))
        <img src="{{ $article->image('hero_image', 'default') }}">
    @endif

    <h1>{{ $article->title }}</h1>
    <br><br><br>
</div>

<div class='content'>
    {!! $article->renderBlocks(false) !!}
</div>
