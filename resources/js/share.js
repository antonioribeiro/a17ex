window.observeShareButtons = () => {
    new window.jBox('Modal', {
        attach: '.share',
        onOpen: function() {
            this.setContent($('#share-article-' + this.source.attr('data-id')))
        },
    })
}
