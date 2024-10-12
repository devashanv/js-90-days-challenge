//initialize
const inpCelsius = document.getElementById("inp_celsius");
const inpFahren = document.getElementById("inp_fahren");

//celcius to fahren
const toFahren = () => {
    //calculate fahren value
    let valFahren = ( parseFloat(inpCelsius.value) * (9 / 5) ) + 32;

    //get fahren value to 2 decimal places
    inpFahren.value = parseFloat(valFahren.toFixed(2));
};

//fahren to celsius
const toCelsius = () => {
        //calculate fahren value
        let valCelsius = ( parseFloat(inpFahren.value) - 32) * (5 / 9);

        //get fahren value to 2 decimal places
        inpCelsius.value = parseFloat(valCelsius.toFixed(2));
} 