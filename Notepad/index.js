
const arr = [

    {
        count : 1
    },

    {
        count : 1
    }
    
    
]

const newArr = arr.map ( ( obj ) => {

    obj.count = 25;
    return obj;
    
} )

console.log( arr );