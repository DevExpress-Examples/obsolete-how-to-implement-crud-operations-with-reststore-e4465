(function() {
    Application1.db = {
        sampleData: new DevExpress.data.RestStore({
            url: "http://localhost:53168/Categories",
            key: "CategoryID"
        })

    };
})();