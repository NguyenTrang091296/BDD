const { I, ProductSteps, FrontEndPage} = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
});

Given('I login on admin page with ${string} and ${string}',(userName, password) =>
{
    ProductSteps.loginAdmin(userName, password);
});

When('I create category name ${string} and product with', (category, table) => {

    const cells = table.rows[1].cells;

        const nameProduct   = cells[0].value;
        const priceProduct  = cells[1].value;
        const numberProduct = cells[2].value;

        products = {
            name : nameProduct,
            price: priceProduct,
            number: numberProduct
        }

        ProductSteps.createProduct(products, category);

});

// you can provide RegEx to match corresponding steps
Given('I have category name ${string} and product name ${string}', (nameCategory, nameProduct) => {
    I.amOnPage(FrontEndPage.urlProductFrontEndPage);
    I.seeElement(FrontEndPage.returnLink(nameCategory));
    I.click(FrontEndPage.returnLink(nameCategory));
    I.seeElement(FrontEndPage.returnLink(nameProduct));
    I.click(FrontEndPage.returnLink(nameProduct));
    I.seeElement(FrontEndPage.buttonAddToCart);
    I.click(FrontEndPage.buttonAddToCart);
    I.see(FrontEndPage.messageAddToCartSuccess);
});

// or a simple string
When('I go to checkout process', () => {
    I.amOnPage(FrontEndPage.urlCartPage);
});

// parameters are passed in via Cucumber expressions
Then("I should see that total number of products is ${string}", (num) => {
    I.see(num, '.cart_totals');
});

Then("/my order amount is ${int}/", (sum) => { // eslint-disable-line
    I.see('Total: DKK' + sum);
});


Given('I add to cart some products', (table) => { // eslint-disable-line

    for (const id in table.rows) {
        if (id < 1) {
            continue; // skip a header of a table
        }

        // go by row cells
        const cells = table.rows[id].cells;

        // take values
        const name = cells[0].value;
        const category = cells[1].value;
        const price = cells[2].value;

        I.amOnPage(FrontEndPage.urlProductFrontEndPage);
        I.seeElement(FrontEndPage.returnLink(category));
        I.click(FrontEndPage.returnLink(category));
        I.seeElement(FrontEndPage.returnLink(name));
        I.click(FrontEndPage.returnLink(name));
        I.see(price);
        I.seeElement(FrontEndPage.buttonAddToCart);
        I.click(FrontEndPage.buttonAddToCart);
        I.see(FrontEndPage.messageAddToCartSuccess);
    }
});

Then('I check some products in cart', (table) => { // eslint-disable-line

    for (const id in table.rows) {
        if (id < 1) {
            continue; // skip a header of a table
        }

        // go by row cells
        const cells = table.rows[id].cells;

        // take values
        const name = cells[0].value;
        const price = cells[2].value;

        I.seeElement(FrontEndPage.returnLink(name));
        I.see(price);
    }
});