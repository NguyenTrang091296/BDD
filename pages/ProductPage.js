const {} = inject();
    module.exports = {

  // insert your locators and methods here

    namePage: "Product Management",
    urlProductPage: '/administrator/index.php?option=com_redshop&view=product',
    urlAdmin: "/administrator",
    username: '#mod-login-username',
    password: '#mod-login-password',
    loginButton: ".login-button",
    categorySearch: "#s2id_category_id",
    categorySearchField: "#s2id_autogen2_search",
    searchStatusId: "#s2id_product_sort",
    searchStatusField: "#s2id_autogen4_search",
    h1: "//h1",
    productFilter: "#keyword",
    discountStart: "#discount_stratdate",
    discountEnd: "#discount_enddate",
    discountPrice: "#discount_price",
    minimumPerProduct: "#minimum_per_product_total",
    minimumQuantity: "#min_order_product_quantity",
    maximumQuantity: "#max_order_product_quantity",
    productNumber: "#product_number",
    productPrice: "#product_price",
    productName: "#product_name",
    categoryId: "#s2id_product_category",
    categoryFile: "#s2id_autogen4",
    vatDropdownList: "//div[@id='s2id_product_tax_group_id']",
    buttonCheckOut: '//input[@value="Checkout"]',
    buttonLogin: '//button [@name="Submit"]',
    iconEdit: '//a[@title="Edit order"]',
    giftCode: "#coupon_input",
    $vatSearchField : "#s2id_autogen8_search",
    stockroomTab:  "//a[contains(text(), 'Stockroom')]",
    $quantityInStock: "//input[@name='quantity[]']",
    preOrderStock: "//input[@name='preorder_stock[]']",
    messageSaveSuccess: "Product details saved",
    messageDeleteProductSuccess: 'Product deleted successfully',
    newButton: "New",
    saveCloseButton: "Save & Close",

    returnChoice(value)
    {
        return "//span[contains(text(), '" + value + "')]";
    }
}
