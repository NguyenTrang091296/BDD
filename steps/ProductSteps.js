const { I, ProductPage } = inject();

module.exports = {

    loginAdmin(userName, password) {
        I.amOnPage(ProductPage.urlAdmin);
        I.fillField(ProductPage.username, userName);
        I.fillField(ProductPage.password, password);
        I.click(ProductPage.loginButton);
        I.waitForText("Control Panel", 10);
    },

    createProduct(product, category)
    {
        I.amOnPage(ProductPage.urlProductPage);
        I.click(ProductPage.newButton);
        I.seeElement(ProductPage.productName);
        I.fillField(ProductPage.productName, product.name);
        I.fillField(ProductPage.productPrice, product.price);
        I.fillField(ProductPage.productNumber, product.number);
        I.waitForClickable(ProductPage.categoryId, 30);
        I.click(ProductPage.categoryId);
        I.fillField(ProductPage.categoryFile, category);
        I.waitForElement(ProductPage.returnChoice(category), 30);
        I.click(ProductPage.returnChoice(category));

        I.click(ProductPage.saveCloseButton);
    }
}
