@foreach($rows as $row)
    <div class="row">
        @foreach($row as $cols)
            <div class="col-6">
                @foreach($cols as $article)
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
                                <a href="#" class="button" style="background-image: url({{ $article->author->image('avatar') }})"></a>
                                <ul>
                                    <li>{{ $article->author->name }}</li>
                                    <li>{{ $article->author->occupation->title }}</li>
                                </ul>
                                <a href="#" class="button share"></a>
                            </footer>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>
@endforeach
