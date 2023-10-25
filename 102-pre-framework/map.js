const Data = [
    {id: 1, title: "first"},
    {id: 2, title: "second"},
    {id: 3, title: "third"},
    {id: 4, title: "forth"},
]

const makeUpperCase = Data.map(el => el.title.toUpperCase())
console.log(makeUpperCase)
//[ 'FIRST', 'SECOND', 'THIRD', 'FORTH' ]