// Remember, we're gonna use strict mode in all scripts now!
'use strict';

function printForecast(temperatureArray){
    temperatureArray.map((temp, i) => {console.log(`...${temp}C in ${++i} days`)})
}

