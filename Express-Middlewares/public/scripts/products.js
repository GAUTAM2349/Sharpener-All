const form = document.getElementById('form').addEventListener( 'submit', sendFormData );
        
function sendFormData(e){

    e.preventDefault();

    const sendData = {
        "product" : e.target.product.value
    }

    axios.post( 'http://localhost:5508/products', sendData )
        .then( (result) =>{
            console.log(result.data);
        } )
    

    
}