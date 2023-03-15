// TEMPLATE LITERAL //
// we can use it to facilitate the calculations, like this:
let product = "tomato";
let price = 2;
let qnt = 6;

"You bought " + qnt + " " + product + ". " + "Total is:" + price*qnt;

// we can put some text out of the equation sintax. We use the "$" to create an equation
// we can add a variable into the "equation"
// sintax: `string ${equation}`;

`You bought ${qnt} ${product}. Total is: R$${price * qnt},00!`;
'You bought 6 tomato. Total is: R$12,00!'