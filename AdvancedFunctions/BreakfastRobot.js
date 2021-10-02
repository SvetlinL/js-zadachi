function robot(){
    const recipes = {
        apple: { carbohydrates: 1, flavour: 2},
        lemonade: { carbohydrates: 10, flavour: 20},
        burger: { carbohydrates: 5, fat: 7, flavour: 3},
        eggs: { protein: 5, fat: 1, flavour: 1},
        turkey: { protein: 10, carbohydrates: 10, fat: 10, flavour:10}
    }

    const storage ={
        carbohydrates: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    function restock(element, quantity){
        storage[element] += Number(quantity);
        return "Success";
    }

    function prepare(recipe, quantity){
        const remainingStorage = {

        };

        for (const element in recipes[recipe]){
            const remaining = storage[element] = recipes[recipe][element] * quantity;
            if (remaining < 0){
                return `Error: not enough ${element} in stock `;
            }else{
                remainingStorage[element] = remaining;
            }

        }
        Object.assign(storage, remainingStorage);
        return "Success";
    }

    function control(str){
        const [command, item, quantity] = str.split(" ");

        switch (command){
            case "restock":
                return restock(item, Number(quantity));

            case "prepare":
               return prepare(item, Number(quantity));

            case "report":
               return  report();

        }
    }

    return control;

    function report(){
        return `protein=${storage.protein} carbohydrates=${storage.carbohydrates} fat${storage.fat} flavour=${storage.flavour}`;
    //protein={qty} carbohydrate={qty} fat={qty} flavour={qty}
    }
}
//reshenieto ne e dovursheno dava greshen rezultat shot ..... na maikamu putkata

let manager = robot();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock

