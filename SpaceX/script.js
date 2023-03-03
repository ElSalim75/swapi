const url = "https://swapi.dev/api/"

function Init(){
    fillNumbers();
}

Init();


async function fillNumbers(){
    let = livingCount = document.querySelector("#livingcount");
    let = vehicleCount = document.querySelector("#vehiclecount");
    let = planetCount = document.querySelector("#planetcount");
    livingCount.textContent = await getApiNumber("people")
    vehicleCount.textContent = await getApiNumber("starships")
    planetCount.textContent = await getApiNumber("planets")
}

async function getApiNumber(datatype){
    const response = await fetch(url + datatype);
    const data = await response.json();
    return data.count;
}