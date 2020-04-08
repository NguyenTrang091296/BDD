Feature: checkout process

  Scenario: Checkout with 1 product
    Given I have product name $"redCOOKIE"
    When I go to checkout process
    Then I should see that total number of products is $"24,00"


  Scenario: Checkout with some product
    Given I add to cart some products
      | name         | category           | price  |
      | redCOOKIE    | Events and Forms   | 24,00  |
      | redITEM      | CCK and e-Commerce | 48,00  |
      | redBAKERY    | Templates          | 50,00  |
    When I go to checkout process
    Then I check some products in cart
      | name         | category           | price  |
      | redCOOKIE    | Events and Forms   | 24,00  |
      | redITEM      | CCK and e-Commerce | 48,00  |
      | redBAKERY    | Templates          | 50,00  |

  Scenario: Create product
    Given I login on admin page with $"admin" and $"admin"
    When  I create category name $"Events and Forms" and product with
      | productName     | productPrice | productNumber|
      | Product demo    |  50          | 80           |

