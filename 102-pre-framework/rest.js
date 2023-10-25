//rest operator

const data = ["Hello", "there", "how", "are", "you"]
const restData = [...data]
console.log(...restData)
//Hello there how are you


const getSize = (...arg) => {
    return arg.length
}
console.log(getSize(10, 20, 30))
//3