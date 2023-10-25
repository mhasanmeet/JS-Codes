//promise structure
const fetchData = async() => {
    try{
        //code here
    }
    catch(e){
        console.log(e) //error return here
    }
}



const fetchingData = async() => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok) throw new Error(response.status)
        
        const result = await response.json()
        return result
    }
    catch(e){
        console.log(e)
    }
}

