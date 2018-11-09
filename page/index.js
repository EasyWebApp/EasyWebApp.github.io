(function($, WebCell, Loading) {
    var request = WebCell.request,
        documentReady = WebCell.documentReady,
        mediaReady = WebCell.mediaReady,
        ObjectView = WebCell.ObjectView;

    Promise.all([request("page/index.json"), documentReady])
        .then(function(data) {
            var view = new ObjectView($("body > footer")[0]);

            view.render(data[0]);

            return mediaReady();
        })
        .then(Loading.closeAll.bind(Loading));

    $(document).on("click", 'footer a[href="#top"]', function() {
        self.scrollTo(0, 0);

        return false;
    });
})(self.jQuery, self["web-cell"], self["Loading"].default);
