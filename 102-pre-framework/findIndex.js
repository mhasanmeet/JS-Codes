const Data = [
    {id: 1, title: "first"},
    {id: 2, title: "second"},
    {id: 3, title: "third"},
    {id: 4, title: "forth"},
]

const findIndex = Data.findIndex(el => el.id === 2)
console.log(findIndex)
//1