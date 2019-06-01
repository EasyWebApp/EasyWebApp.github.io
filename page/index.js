(function(WebCell, DOM_Renderer) {
    var request = WebCell.request,
        documentReady = WebCell.documentReady,
        $ = WebCell.$,
        ViewList = DOM_Renderer.ViewList,
        mediaReady = WebCell.mediaReady,
        delegate = WebCell.delegate;

    Promise.all([request('page/index.json'), documentReady])
        .then(function(data) {
            data = data[0].body;

            return Promise.all(
                $('[data-view]').map(function(view) {
                    return new ViewList(view, data).render(
                        data[view.dataset.view]
                    );
                })
            );
        })
        .then(function() {
            return mediaReady();
        })
        .then(function() {
            $('load-cover')[0].open = false;
        });

    document.addEventListener(
        'click',
        delegate('a[href^="#"]', function(event) {
            event.preventDefault();

            const ID = this.getAttribute('href');

            (ID === '#top' ? document.body : $(ID)[0]).scrollIntoView({
                behavior: 'smooth'
            });
        })
    );
})(self['web-cell'], self['dom-renderer']);
