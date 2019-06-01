window.observeShareButtons = () => {
    new window.jBox('Modal', {
        attach: '.share',
        onOpen: function() {
            this.setContent(
                jQuery('#share-article-' + this.source.attr('data-id')),
            )
        },
    })
}
