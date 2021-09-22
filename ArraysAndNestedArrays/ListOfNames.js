function sort(namesArray) {
    let num = 1;
    namesArray.sort((a, b) => a.localeCompare(b));
    for (const element of namesArray) {
        console.log(num + '.' + element)
        num++;
    }
}

sort(["John", "Bob", "Christina", "Ema"])