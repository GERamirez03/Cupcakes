const $document = $(document);
const $cupcakeForm = $("#cupcake-form")
const $cupcakeList = $("#cupcake-list")

const $flavorInput =  $("#flavor-input")
const $sizeInput = $("#size-input")
const $ratingInput = $("#rating-input")
const $imageInput = $("#image-input")

function appendCupcakeLI(cupcake) {

    // create an LI element
    const $newCupcakeLI = $(document.createElement("li"));

    // will include the flavor, size, and rating of cupcake
    $newCupcakeLI.text(`${cupcake.flavor} | Size: ${cupcake.size} | Rating: ${cupcake.rating}/10`);

    // create img element for image of cupcake to be displayed below each entry
    const $newCupcakeImage = $(document.createElement("img"));

    // set the src attribute of the cupcake image to be its image_url
    $newCupcakeImage.attr("src", cupcake.image)

    // append cupcake image to its respective cupcake LI
    $newCupcakeLI.append($newCupcakeImage);

    // append completed cupcake LI to the cupcake list
    $cupcakeList.append($newCupcakeLI);

}

async function populateCupcakes() {

    // console.log("before get request")

    const response = await axios.get('/api/cupcakes')

    // console.log("after get request")

    // console.log("response", response)

    // console.log("response.data", response.data)

    // cupcakes will be an array of cupcake elements
    const cupcakes = response.data.cupcakes

    // for each cupcake in cupcakes, create and append a representative LI to the cupcake list
    cupcakes.forEach(appendCupcakeLI)






    // console.log("WE DID IT REDDIT!!!!!!!!")

}

// TODO: PART FOUR WRITE TESTS!

async function processNewCupcake() {

    // console.log("inside of new cupcake function!!!")

    const response = await axios.post('/api/cupcakes',
    data = {
        flavor: $flavorInput.val(),
        size: $sizeInput.val(),
        rating: $ratingInput.val(),
        image: $imageInput.val(), // concern here is blank URL overwriting the default image.
    })

    const cupcake = response.data.cupcake;

    appendCupcakeLI(cupcake);

    // console.log(cupcake)

    // console.log(cupcake.flavor)

    // console.log("after the axios post req!")
}

$(document).ready(function() {
    // console.log("HELLOOOOO!!!!");
    populateCupcakes();
})

$cupcakeForm.submit(function(event) {
    event.preventDefault();
    processNewCupcake();
});



/** 
 * OK SO HERE ARE THE TO-DOS FOR THIS PART OF THE ASSIGNMENT:
 * 1. REMBER HOW TF AXIOS AND JQUERY WORK
 * 2. QUERY API TO GET CUPCAKES AND ADD THEM TO PAGE
 * 3. HANDLE FORM SUBMISSION TO LET THE API KNOW ABT NEW CUPCAKE
 * AND ALSO UPDATE THE LIST ON THE PAGE/SHOW THE NEW CUPCAKE/ADD IT
 * **/





// CONFUSION 


// $(document).ready(populateCupcakes);








// await axios.get('/api/cupcakes')





// $("#cupcake-form").submit(function(event) {
//     event.preventDefault();

// })

// async function processNewCupcake(event) {
//     event.preventDefault();

// }