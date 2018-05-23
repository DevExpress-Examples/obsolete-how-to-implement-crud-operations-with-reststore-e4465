Application1.addView = function (params) {
    var viewModel = {
        categoryName: ko.observable(),
        btnSaveClick: function (e) {
            var category = {
                CategoryID: 0,
                CategoryName: viewModel.categoryName()
            }
            Application1.db.sampleData.insert(category).done(function (insertedCategory) {
                app.navigate('Index');
            });
        }
    };
    return viewModel;
};