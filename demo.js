function solve() {
    let products = {
        apple: 50,
        lemon: 10
    }

    if (products.hasOwnProperty('apple')) {
        products['apple'] += 50
    }

    products.orange = 20;

    console.log(products);

    let name = 'apple';
    console.log(products[name]);
}


solve();