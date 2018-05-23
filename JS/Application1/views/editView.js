Application1.editView = function (params) {

    var viewModel = {
        categoryId: params.categoryId,
        categoryName: ko.observable(params.categoryName),
        btnSaveClick: function (e) {
            var category = {
                CategoryID: viewModel.categoryId,
                CategoryName: viewModel.categoryName()
            }
            Application1.db.sampleData.update(category.CategoryID, { CategoryName: category.CategoryName  }).done(function (catId, modifiedCat) {
                app.back();
            });
        }
    };

    return viewModel;
};