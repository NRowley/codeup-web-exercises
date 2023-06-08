(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = new Object();
    person.firstName = 'Nic';
    person.lastName = 'Rowley';
    console.log(person);
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return `Hello from ${person.firstName} ${person.lastName}`;
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //Function to apply discount
    function hebDiscount(name, amount) {
        // amount = parseInt(amount);
        if (amount > 200) {
            return `${name} has spent $${amount}, they get a 12% discount. Their new total is $${(amount - (amount * 0.12)).toFixed(2)}.`
        } else {
            return `${name} has spent $${amount}, they do not receive a discount`;
        }
    }

//Apply the hebDiscount function by using forEach on each Array Element
    shoppers.forEach(function (shopper) {
        console.log(shopper);
        console.log(hebDiscount(shopper.name, shopper.amount));
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: 'Steel Shins',
            author: {
                firstName: 'Nic',
                lastName: 'Rowley',
            }
        },
        {
            title: "Dog Life: 10 Great Places to Poop When it's Raining Outside",
            author: {
                firstName: 'Halen',
                lastName: 'Rowley',
            }
        },
        {
            title: 'Gaming the Potty System',
            author: {
                firstName: 'Killian',
                lastName: 'Rowley',
            }
        },
        {
            title: '10 Ways to Spice up Yo Tantrums',
            author: {
                firstName: 'Killian',
                lastName: 'Rowley',
            }
        }
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    //Function to show all books and info
    function catalogue(book) {
        const bookNumber = parseInt(books.indexOf(book)) +1;
        // return `Book #${books.indexOf(book)}; ${book.title}; ${book.author}`;
        console.log("Book #" + bookNumber, book, book.author);
    }

    books.forEach(function (book) {
        catalogue(book);
    });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    console.log(`---BONUS: CreateBook and showBookInfo---`);

//initialize someBooks for added books and addBooks boolean for adding the books in a prompt loop
    let someBooks = [];
    let addBooks = true;
    // console.log(typeof someBooks);

    //createBook function, takes in title and author from a prompt to the user
    function createBook(title, firstName, lastName) {
        let aBook = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName,
            },
        }
        someBooks.push(aBook);
        return someBooks;
    }
//show created book info function
    function catalogueCreatedBooks(book) {
        console.log("The Book is", book, book.author);
    }
    // do while loop to prompt the user for books
    do {
        console.log(createBook(prompt(`Enter the Title of the Book`), prompt(`Enter the Authors First Name`), prompt(`Enter the Authors Last Name`)));
        addBooks = confirm('Add another book?');
    } while (addBooks === true);

    catalogueCreatedBooks(someBooks[0]);
})();