Application1.Index = function (params) {
    var viewModel = {
        dSource: Application1.db.sampleData.toDataSource(),
        btnEditClick: function (id, name) {
            var uri = app.router.format({
                view: 'editView',
                categoryId: id,
                categoryName: name
            });
            app.navigate(uri);
        },
        btnDeleteClick: function (id) {
            Application1.db.sampleData.remove(id).done(function (categoryID) {
                viewModel.dSource.load();
            });
        },
        btnAddClick: function (e) {
            app.navigate('addView');
        }
    };
    return viewModel;
};