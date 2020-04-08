const { I, ProductSteps} = inject();
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
Given('I have product name ${string}', (nameProduct) => {
    I.amOnPage('/index.php/product');
    I.seeElement("//a[contains(text(),'Events and Forms')]");
    I.click("//a[contains(text(),'Events and Forms')]");
    I.seeElement("//a[contains(text(),'" + nameProduct + "')]");
    I.click("//a[contains(text(),'" + nameProduct + "')]");
    I.seeElement("//span[contains(text(),'Add to cart')]");
    I.click("//span[contains(text(),'Add to cart')]");
    I.see("Product has been added to your cart.");
});

// or a simple string
When('I go to checkout process', () => {
    I.amOnPage('/index.php/cart');
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

        I.amOnPage('/index.php/product');
        I.seeElement("//a[contains(text(),'" + category + "')]");
        I.click("//a[contains(text(),'"+ category + "')]");
        I.seeElement("//a[contains(text(),'" + name + "')]");
        I.click("//a[contains(text(),'" + name + "')]");
        I.see(price);
        I.seeElement("//span[contains(text(),'Add to cart')]");
        I.click("//span[contains(text(),'Add to cart')]");
        I.see("Product has been added to your cart.");
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

        I.seeElement("//a[contains(text(),'" + name + "')]");
        I.see(price);
    }
});