<div
    class="button share"
    data-id="{{ $article->id }}"
    title="Share it!"
></div>

<div id="share-article-{{ $article->id }}" style="display: none;">
    <h4>share it!</h4>
    <p>
        <a href="https://facebook.com?u={{ $article->showUrl }}" target="_blank">facebook</a> |
        <a href="https://twitter.com/share?url={{ $article->showUrl }}" target="_blank">twitter</a>
    </p>
</div>
