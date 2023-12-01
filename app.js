let totalCookies = 0;
let cookiesAddedPerClick = 1;
let cookiesPerSecond = 0;

let buildings = {
    grandma: {
        amount: 0,
        cost: 20,
        cps: 1,
        elementIds: {
            cost: "grannyinfo_cost",
            owned: "grannyinfo_owned",
        },
    },
    farm: {
        amount: 0,
        cost: 800,
        cps: 8,
        elementIds: {
            cost: "farminfo_cost",
            owned: "farminfo_owned",
        },
    },
    mine: {
        amount: 0,
        cost: 12000,
        cps: 47,
        elementIds: {
            cost: "mineinfo_cost",
            owned: "mineinfo_owned",
        },
    },
    factory: {
        amount: 0,
        cost: 130000,
        cps: 260,
        elementIds: {
            cost: "factoryinfo_cost",
            owned: "factoryinfo_owned",
        },
    },
    bank: {
        amount: 0,
        cost: 1400000,
        cps: 1400,
        elementIds: {
            cost: "bankinfo_cost",
            owned: "bankinfo_owned",
        },
    },
};

document.getElementById("btn").addEventListener("click", cookieIncrement);
document.getElementById("1").addEventListener("click", () => buyBuilding("grandma"));
document.getElementById("2").addEventListener("click", () => buyBuilding("farm"));
document.getElementById("3").addEventListener("click", () => buyBuilding("mine"));
document.getElementById("4").addEventListener("click", () => buyBuilding("factory"));
document.getElementById("5").addEventListener("click", () => buyBuilding("bank"));

function nameBakery() {
    bakeryName = prompt("What is the name of your bakery? ");
    if (bakeryName === "") {
        alert("Invalid bakery name");
        nameBakery();
    } else {
        document.getElementById("bakeryname").innerHTML = bakeryName + " Bakery";
    }
}

function cookieIncrement() {
    totalCookies += cookiesAddedPerClick;
    console.log(totalCookies + (totalCookies === 1 ? " cookie" : " cookies"));
    document.getElementById("cookiecount").innerHTML = totalCookies;
}

function buyBuilding(buildingType) {
    if (totalCookies >= buildings[buildingType].cost) {
        totalCookies -= buildings[buildingType].cost;
        buildings[buildingType].amount++;
        buildings[buildingType].cost = Math.round(buildings[buildingType].cost * 1.15);
        cookiesPerSecond += buildings[buildingType].cps;

        // Oppdater DOM
        document.getElementById("cookiecount").innerHTML = totalCookies;
        document.getElementById(buildings[buildingType].elementIds.cost).innerHTML = buildings[buildingType].cost;
        document.getElementById(buildings[buildingType].elementIds.owned).innerHTML = buildings[buildingType].amount;
        document.getElementById("cpsHTML").innerHTML = "cps: " + cookiesPerSecond;

        console.log("Cookies Per Second:", cookiesPerSecond);
    } else {
        alert("Not enough cookies to buy " + buildingType);
    }
}

setInterval(function () {
    totalCookies += cookiesPerSecond;
    document.getElementById("cookiecount").innerHTML = totalCookies;
}, 1000);




// Jeg må sette opp database på virtuell maskin og koble til koden