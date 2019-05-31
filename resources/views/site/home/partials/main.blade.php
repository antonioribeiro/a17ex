<div class="row">
    @foreach($articles as $article)
        <div class="col-6">
            <div class="asset-box {{ $article->featured ? 'tall' : '' }}">
                <div class="asset-image">
                    <a
                        href="#"
                        target="_self"
                        style="background-image: url({{ $article->image($article->featured ? 'portrait' : 'default', $article->featured ? 'portrait' : 'landscape') }})"
                        title="{{ $article->imageAltText($article->featured ? 'portrait' : 'default') }}"
                    ></a>
                </div>
                <div class="asset-content">
                    <header>
                        <h1><a href="#">{{ $article->title }}</a></h1>
                    </header>
                    <footer>
                        <a href="#" class="button" style="background-image:url(images/sanders.jpg)"></a>
                        <ul>
                            <li>{{ $article->author->name }}</li>
                            <li>{{ $article->author->occupation->title }}</li>
                        </ul>
                        <a href="#" class="button share"></a>
                    </footer>
                </div>
            </div>
        </div>
    @endforeach











    <div class="col-6">
        <div class="asset-box tall">
            <div class="asset-image">
                <a href="#" target="_self" style="background-image: url(images/phoenix.jpg)" title=""></a>
            </div>
            <div class="asset-content">
                <header>
                    <h1><a href="#">Find the Perfect Dress for Special Occasions</a></h1>
                </header>
                <footer>
                    <a href="#" class="button" style="background-image:url(images/sanders.jpg)"></a>
                    <ul>
                        <li>Jennifer Nicole Sullivan</li>
                        <li>Vintage Clothing Expert</li>
                    </ul>
                    <a href="#" class="button share"></a>
                </footer>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="asset-box">
            <div class="asset-image">
                <a href="#" target="_self" style="background-image: url(images/batman.jpg)" title=""></a>
            </div>
            <div class="asset-content">
                <header>
                    <h1><a href="#">Attracting Butterflies to Your Garden</a></h1>
                    <a href="#" class="button share"></a>
                </header>
                <footer>
                    <a href="#" class="button" style="background-image:url(images/sanders.jpg)"></a>
                    <ul>
                        <li>Marie Iannotti</li>
                        <li>Gardening Expert</li>
                    </ul>
                </footer>
            </div>
        </div>
        <div class="asset-box">
            <div class="asset-image">
                <a href="#" target="_self" style="background-image: url(images/daredevil.jpg)" title=""></a>
            </div>
            <div class="asset-content">
                <header>
                    <h1><a href="#">The Absolute Beginner's Guide to Running</a></h1>
                    <a href="#" class="button share"></a>
                </header>
                <footer>
                    <a href="#" class="button" style="background-image:url(images/sanders.jpg)"></a>
                    <ul>
                        <li>Christine Luff</li>
                        <li>Running Expert</li>
                    </ul>
                </footer>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-6">
        <div class="asset-box">
            <div class="asset-image">
                <a href="#" target="_self" style="background-image: url(images/hulk.jpg)" title=""></a>
            </div>
            <div class="asset-content">
                <header>
                    <h1><a href="#">DIY Live Edge Coffee Table</a></h1>
                    <a href="#" class="button share"></a>
                </header>
                <footer>
                    <a href="#" class="button" style="background-image:url(images/sanders.jpg)"></a>
                    <ul>
                        <li>Staphanie White</li>
                        <li>DIY Expert</li>
                    </ul>
                </footer>
            </div>
        </div>
        <div class="asset-box">
            <div class="asset-image">
                <a href="#" target="_self" style="background-image: url(images/squirell-girl.jpg)" title=""></a>
            </div>
            <div class="asset-content">
                <header>
                    <h1><a href="#">Best Free Attractions in New York City</a></h1>
                    <a href="#" class="button share"></a>
                </header>
                <footer>
                    <a href="#" class="button" style="background-image:url(images/sanders.jpg)"></a>
                    <ul>
                        <li>Heather Cross</li>
                        <li>New York City Travel Expert</li>
                    </ul>
                </footer>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="asset-box">
            <div class="asset-image">
                <a href="#" target="_self" style="background-image: url(images/spiderman.jpg)" title=""></a>
            </div>
            <div class="asset-content">
                <header>
                    <h1><a href="#">Italian Sausage and Bell Pepper Pizza</a></h1>
                    <a href="#" class="button share"></a>
                </header>
                <footer>
                    <a href="#" class="button" style="background-image:url(images/sanders.jpg)"></a>
                    <ul>
                        <li>Will Forte</li>
                        <li>Last Man On Earch</li>
                    </ul>
                </footer>
            </div>
        </div>
        <div class="asset-box">
            <div class="asset-image">
                <a href="#" target="_self" style="background-image: url(images/wolverine.jpg)" title=""></a>
            </div>
            <div class="asset-content">
                <header>
                    <h1><a href="#">10 Mid Century Moden Items for Your Home</a></h1>
                    <a href="#" class="button share"></a>
                </header>
                <footer>
                    <a href="#" class="button" style="background-image:url(images/sanders.jpg)"></a>
                    <ul>
                        <li>Jessica Jones</li>
                        <li>Private Detective</li>
                    </ul>
                </footer>
            </div>
        </div>
    </div>
</div>
