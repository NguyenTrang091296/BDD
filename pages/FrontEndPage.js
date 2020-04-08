const {} = inject();
    module.exports = {

  // insert your locators and methods here

    urlProductFrontEndPage: '/index.php/product',
    buttonAddToCart: "//span[contains(text(),'Add to cart')]",
    messageAddToCartSuccess: "Product has been added to your cart.",
    urlCartPage: '/index.php/cart',

    returnLink(nameLink)
    {
        return "//a[contains(text(),'" + nameLink + "')]";
    }
}
