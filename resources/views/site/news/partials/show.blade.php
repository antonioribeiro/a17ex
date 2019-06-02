<div class='hero'>
    @if ($article->hasImage('image'))
        <img src="{{ $article->image('hero_image', 'default') }}">
    @endif

    <h1>{{ $article->title }}</h1>

    <a href="{{ $article->author->showUrl }}">
        <div class="row" style="margin-top: 5px;">
            <div class="col-3">
                <img src="{{ $article->author->image('avatar') }}" alt="" width="35" style="padding-right: 8px">
            </div>
            <div class="col-3">
                <ul>
                    <li style="font-size: 0.8em !important;">{{ $article->author->name }}</li>
                    <li style="font-size: 0.8em !important;">{{ $article->author->occupation->title }}</li>
                </ul>
            </div>
        </div>
    </a>

    <br><br>
</div>

<div class='content'>
    {!! $article->renderBlocks(false) !!}
</div>
