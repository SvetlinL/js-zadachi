class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(inputArr) {
        for (let product of inputArr) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            if (!this.stockProducts.hasOwnProperty(productName)) {
                if (this.budgetMoney >= Number(productTotalPrice)) {
                    this.budgetMoney -= Number(productTotalPrice);
                    this.stockProducts[productName] = Number(productQuantity);
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                } else {
                    this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
                }
            } else {
                if (this.budgetMoney >= Number(productTotalPrice)) {
                    this.budgetMoney -= Number(productTotalPrice);
                    this.stockProducts[productName] += Number(productQuantity);
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                } else {
                    this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
                }
            }
        }
        return this.history.join('\n');
    };

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            let keysArr = Object.keys(this.menu);
            this.menu[meal] = {};
            for (let product of neededProducts) {
                let [productName, productQuantity] = product.split(' ');
                this.menu[meal][productName] = Number(productQuantity);
            }
            this.menu[meal]['price'] = Number(price);
            if (keysArr.length === 0){
                return`Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }else {
                return `Great idea! Now with the ${meal} we have ${keysArr.length+1} meals in the menu, other ideas?`;
            }
        }else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu(){
        let result = '';
        let menu = Object.keys(this.menu);
        if (menu.length !== 0){
            for (let key in this.menu) {
                result += `${key} - $ ${this.menu[key].price}\n`;
            }
        }else {
            return `Our menu is not ready yet, please come later...`;
        }
        return result.trim();
    }

    makeTheOrder(meal){
        let flag = true;
        if (!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }else {
            Object.entries(this.menu[meal]).forEach(entry=> {
                let currentProd = entry[0];
                if (this.stockProducts[currentProd] >= entry[1]){
                    this.stockProducts[currentProd] -= entry[1];
                }else {
                    if (currentProd !== 'price') {
                        flag = false;
                    }
                }
            });
            if (flag){
                this.budgetMoney += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
    }

}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));



