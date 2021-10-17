class ChristmasDinner{

    constructor(budget) {
        this._budget = this.setBudget(budget);
        this.dishes = [];
        this.products =[];
        this.guests = {};
    }
    get budget(){
        return this._budget;
    }

    setBudget(budget){
        Number(budget);
        if (budget <= 0){
            throw new Error('The budget cannot be a negative number');
        }else {
            return budget;
        }
    }

    shopping(productArr){
        let [type , price] = [...productArr];
        if (Number(price) > this._budget){
            throw new Error(`Not enough money to buy this product`);
        }else {
            this._budget -= price;
            this.products.push(type);
            return `You have successfully bought ${type}!`
        }
    }

    recipes(recipe){
        for (let i = 0; i < recipe.productsList.length; i++) {
            if (!this.products.some(prod=> prod === recipe.productsList[i])){
                throw new Error('We do not have this product');
            }
        }
        this.dishes.push({
            recipeName: recipe.recipeName,
            productsList: recipe.productsList
        });

        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish){
        if (!this.dishes.some(entry=> entry.recipeName === dish)){
            throw new Error('We do not have this dish');
        }
        if (this.guests.hasOwnProperty(name)){
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance(){
        let resultString = '';
        for (let guest in this.guests) {
            resultString += `${guest} will eat ${this.guests[guest]}, which consists of `;
            let dish = this.dishes.find(dish => dish.recipeName === this.guests[guest]);
            resultString += `${dish.productsList.join(', ')}\n`;
        }

        return resultString.trim();
    }

}

let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Savory', 1]));
console.log(dinner.shopping(['Peppers', 1]));
console.log(dinner.shopping(['Fruits', 40]));
console.log(dinner.shopping(['Honey', 10]));

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}));
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
console.log(dinner.inviteGuests('chushka', 'lapa'));
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));

console.log(dinner.showAttendance());