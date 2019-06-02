<a
    href="{{ $author->showUrl }}"
    class="button"
    style="background-image: url({{ $author->image('avatar') }})"
    title="More about {{ $author->name }}"
></a>

<ul>
    <li>{{ $author->name }}</li>
    <li>{{ $author->occupation->title }}</li>
</ul>
