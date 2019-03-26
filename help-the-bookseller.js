function stockList(listOfArt, listOfCat) {
    if (!listOfArt.length) {
        return "";
    }
    
    const books = listOfArt
        .map(art => art.split(' '))
        .map(book => ({ category: book[0][0], quantity: +book[1] }));

    let uniqueBooks = new Map();
    books.forEach(book => {
        let quantity = book.quantity;
        const uniqueBook = uniqueBooks.get(book.category);
        
        if (uniqueBook) {
            quantity += uniqueBook;
        }

        uniqueBooks.set(book.category, quantity);
    });

    return listOfCat
        .map(category => `(${category} : ${uniqueBooks.get(category) || 0})`)
        .join(' - ');
}