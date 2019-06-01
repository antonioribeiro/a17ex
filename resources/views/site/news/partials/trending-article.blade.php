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
            <a href="#" class="button" style="background-image:url({{ $article->author->image('avatar') }})"></a>
            <ul>
                <li>{{ $article->author->name }}</li>
                <li>{{ $article->author->occupation->title }}</li>
            </ul>
            <a href="#" class="button share"></a>
        </footer>
    </div>
</div>
