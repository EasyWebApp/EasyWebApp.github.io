(function($, WebCell, DOM_Renderer, Loading) {
    var request = WebCell.request,
        documentReady = WebCell.documentReady,
        mediaReady = WebCell.mediaReady,
        View = DOM_Renderer.default;

    function render(element, data) {
        var template = View.getTemplate(element);

        data = data instanceof Array ? data : [data];

        return Promise.all(
            data.map(function(item) {
                var view = new View(template);

                return view.render(item).then(function() {
                    return view.topNodes;
                });
            })
        ).then(function(list) {
            element.append.apply(element, [].concat.apply([], list));
        });
    }

    Promise.all([request('page/index.json'), documentReady])
        .then(function(data) {
            data = data[0].body;

            return Array.prototype.reduce.call(
                document.querySelectorAll('[data-key]'),
                function(promise, element) {
                    return promise.then(
                        render.bind(null, element, data[element.dataset.key])
                    );
                },
                Promise.resolve()
            );
        })
        .then(mediaReady);
    //  .then(Loading.closeAll.bind(Loading));

    $(document).on('click', 'footer a[href="#top"]', function() {
        self.scrollTo(0, 0);

        return false;
    });
})(
    self.jQuery,
    self['web-cell'],
    self['dom-renderer']
    // self['Loading'].default
);
