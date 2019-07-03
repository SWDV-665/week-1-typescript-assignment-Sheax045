
class Grocery{
    itemInfo: string;
    constructor(public name, public quantity, public price){
        this.itemInfo = name + " " + quantity + " " + price;
    }
}

interface groceryItem{
    name:string;
    quantity:number;
    price:number;
}

function groceryItemInfo(item:groceryItem){
    let subtotal = item.quantity * item.price;
    return "Name: " + item.name + " " + "Quantity: " + item.quantity + "  " + "Price: $" + item.price + " " + "Subtotal: $" + subtotal.toFixed(2) + " " + '<br>'; 
}

let arrayList: Array<groceryItem> = [{name: 'milk', quantity: 1, price: 1.89}, {name: 'bread', quantity: 2, price: 1.99}, {name: 'eggs', quantity: 3, price: 2.05}];

let listItem = document.createElement('p')

for (let item of arrayList) {
    document.body.innerHTML = document.body.innerHTML + groceryItemInfo(item);
}

//How many hours do you estimate you used completing this assignment? I probably spent 3 hours on this assignment. 
//What was easiest for you when completing this assignment? The easiest part was creating the Grocery class. 
//What was the most difficult challenge you experienced when completing this assignment? The most difficult part was creating the array for the grocery items.