const url = "https://swapi.dev/api/planets/"

//fonction qui lance toutes les fonctions nécessaires au chargement
//de la page
function Init() {
    displayPlanets();
}

Init();

// Fonction qui calcule le nombre de pages de planètes reçu de l'API
async function getNumberOfPages() {
    const response = await fetch(url);
    const data = await response.json();
    return data.count / 10;
}

//Fonction qui récupère toutes les planètes sous forme d'un array
async function getplanets() {
    const pages = await getNumberOfPages();
    let planetlist = [];
    //Boucle qui parcoure toutes les pages de planètes et les ajoute à l'array
    for (i = 1; i <= pages; i++) {
        const response = await fetch(url + `?page=${i}`);
        const data = await response.json();
        planets = data.results
        //Ajoute la nouvelle page de planète à l'array
        planetlist.push(planets);
    }
    //Converti l'array en une seule dimension (applati) càd un array qui 
    //contient une planète par cellule
    return planetlist.flat();
}

//fonction qui affiche la liste de planètes dans le html
async function displayPlanets() {
    let planetul = document.querySelector("#planetlist");
    let planetlist = await getplanets();
    //console.log(planetlist);
    //boucle qui parcoure tout le tableau de planètes
    for (planet of planetlist) {
        //pour chaque planète, on créer un li qui contient les 2 informations
        //qu'on souhaite afficher : le nom et le terrain
        const li = document.createElement("li");
        const pname = document.createElement("p");
        const pterrain = document.createElement("p");
        pname.textContent = planet.name;
        pterrain.textContent = planet.terrain;
        li.appendChild(pname);
        li.appendChild(pterrain);
        //On ajoute le nouvel élément li à la liste de planètes
        planetul.appendChild(li);
    }
    let resultcount = document.querySelector("#resultcount");
    resultcount.textContent = planetlist.length;

}