// Assignment -4: Arrange in alphabetical order

const books = [{
    title: "Rich Dad",
    author: "Sam",
    year: 1998
},
{
    title: "Facts of life",
    author: "albert",
    year: 1992
},
{
    title: "Rule of Life",
    author: "altman",
    year: 2009
},
{
    title: "Aim of Life",
    author: "sultan",
    year: 2010
}];

function newList() {
    const arrayOfNewList = [];
    books.map((Element) => {
        arrayOfNewList.push(Element.title);
    });
    const titleShort = arrayOfNewList.sort();
    return console.log(titleShort);
};

function alphabeticOrder(callback) {
    return callback();
};

alphabeticOrder(newList);


// Output:::
// [ 'Aim of Life', 'Facts of life', 'Rich Dad', 'Rule of Life' ]