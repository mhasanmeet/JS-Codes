const Data = [
    {id: 1, title: "first"},
    {id: 2, title: "second"},
    {id: 3, title: "third"},
    {id: 4, title: "forth"},
]

const filterData = Data.filter(el => el.id % 2 === 0)
console.log(filterData)
//[ { id: 2, title: 'second' }, { id: 4, title: 'forth' } ]