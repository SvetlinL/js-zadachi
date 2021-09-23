function colorize() {
    const rows = document.querySelectorAll("table tr" );
    //moje i "table tr: nth-child(even)" -> vrushta chetnite redove i obhovdame s i++

    for (let i = 1; i < rows.length; i+=2) {
        rows[i].style.backgroundColor = 'teal';
    }
}