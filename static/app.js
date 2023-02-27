const $document = $(document);

async function populateCupcakes() {

    response = await axios.get('/api/cupcakes')

    console.log(response.data)

}





// CONFUSION 


$(document).ready(populateCupcakes);








await axios.get('/api/cupcakes')





$("#cupcake-form").submit(function(event) {
    event.preventDefault();

})

async function processNewCupcake(event) {
    event.preventDefault();

}