/**
 * Objective: get base,height of a traingle. Calculate the area using the provided formula and then display the area.
 * step-1: get base value of the traingle
 * step-2: added an id in the base input field
 * step-3: use getElementByID to access the input field
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the value to a number. use parseFloat
 */



// console.log('connected'); 
function calculateTraingleArea(){
    const traingleBaseInput = document.getElementById('traingle-base');
    const traingleBaseText = traingleBaseInput.value ;
    const base = parseFloat(traingleBaseText);
    console.log(base);

    // get traingle height value
    const traingleHeightInput = document.getElementById('traingle-height');
    const traingleHeightText = traingleHeightInput.value;
    const height = parseFloat(traingleHeightText);
    console.log(height);

    // calculate traingle area
    const area = 0.5 * base * height;
    console.log(area);

    // display traingle area
    const traingleAreaSpan = document.getElementById('traingle-area');
    traingleAreaSpan.innerText = area;
}
