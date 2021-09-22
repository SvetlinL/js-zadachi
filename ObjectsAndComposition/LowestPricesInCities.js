// function lowestPricesInCities(input) {

//     let productsMap = new Map();
//     for (const iterator of input) {
//         let [cityName, productName, price] = iterator.split(' | ');
//         price = Number(price);
//         if (!productsMap.has(productName)) {
//             productsMap.set(productName, [price, cityName]);
//         }
//         if (productsMap.get(productName)[0] > price) {
//             productsMap.set(productName, [price, cityName]);
//         }

//     }

//     for (let [key, value] of productsMap) {
//         console.log(`${key} -> ${value[0]} (${value[1]})`);
//     }

// }
function solve(arr) {
    let catalogue = {};
    arr.forEach(element => {
        let [town, product, price] = element.split(' | ');
        price = Number(price);
        if (!catalogue[product]) {
            catalogue[product] = {};
        }
        catalogue[product][town] = price;
    });

    //let sortedItems = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (const prod in catalogue) {
        const sorted = Object.entries(catalogue[prod]).sort((a, b) => a[1] - b[1]);
        console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}



solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);