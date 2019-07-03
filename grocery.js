var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.itemInfo = name + " " + quantity + " " + price;
    }
    return Grocery;
}());
function groceryItemInfo(item) {
    var subtotal = item.quantity * item.price;
    return "Name: " + item.name + " " + "Quantity: " + item.quantity + "  " + "Price: $" + item.price + " " + "Subtotal: $" + subtotal.toFixed(2) + " " + '<br>';
}
var arrayList = [{ name: 'milk', quantity: 1, price: 1.89 }, { name: 'bread', quantity: 2, price: 1.99 }, { name: 'eggs', quantity: 3, price: 2.05 }];
var listItem = document.createElement('p');
for (var _i = 0, arrayList_1 = arrayList; _i < arrayList_1.length; _i++) {
    var item = arrayList_1[_i];
    document.body.innerHTML = document.body.innerHTML + groceryItemInfo(item);
}
