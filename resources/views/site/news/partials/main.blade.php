@foreach($rows as $row)
    <div class="row">
        @foreach($row as $cols)
            <div class="col-6">
                @foreach($cols as $article)
                    @include('site.news.partials.article', ['article' => $article])
                @endforeach
            </div>
        @endforeach
    </div>
@endforeach
