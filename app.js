function login() {
    // Get bakeryname from user input
    const bakeryname = prompt("Enter your bakeryname: ");

    // Send a POST request to login.php with bakeryname
    fetch("login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `bakeryname=${bakeryname}`,
    })
    .then(response => response.text())
    .then(result => {
        if (result === "success") {
            // Login successful, you may redirect or perform other actions
            alert("Login successful!");
        } else {
            alert("Login failed. Bakeryname not found.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

// Example usage (e.g., on a button click)
document.getElementById("loginBtn").addEventListener("click", login);

let totalCookies = 0;
let cookiesAddedPerClick = 1;
let cookiesPerSecond = 0;

// Declaring all buildings
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
        cost: 600,
        cps: 8,
        elementIds: {
            cost: "farminfo_cost",
            owned: "farminfo_owned",
        },
    },
    mine: {
        amount: 0,
        cost: 10000,
        cps: 47,
        elementIds: {
            cost: "mineinfo_cost",
            owned: "mineinfo_owned",
        },
    },
    factory: {
        amount: 0,
        cost: 120000,
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

// The cookie itself. It calls the cookieIncrement function when pressed.
document.getElementById("btn").addEventListener("click", cookieIncrement);
// Event listeners that calls the buyBulding function with the corresponding building type
document.getElementById("1").addEventListener("click", () => buyBuilding("grandma"));
document.getElementById("2").addEventListener("click", () => buyBuilding("farm"));
document.getElementById("3").addEventListener("click", () => buyBuilding("mine"));
document.getElementById("4").addEventListener("click", () => buyBuilding("factory"));
document.getElementById("5").addEventListener("click", () => buyBuilding("bank"));

//nameBakery prompts the bakery name. This function is disabled as of now.
function nameBakery() {
    bakeryName = prompt("What is the name of your bakery? ");
    if (bakeryName === "") {
        alert("Invalid bakery name");
        nameBakery();
    } else {
        document.getElementById("bakeryname").innerHTML = bakeryName + " Bakery";
    }
}

// adds cookiesAddedPerClick to totalCookies, console.logs it and updates the hmtl.
 function cookieIncrement() {
    totalCookies += cookiesAddedPerClick;
    console.log(totalCookies + (totalCookies === 1 ? " cookie" : " cookies"));
    document.getElementById("cookiecount").innerHTML = totalCookies;
}

function buyBuilding(buildingType) {
    // Checks if you have enough cookies to buy a the building
    if (totalCookies >= buildings[buildingType].cost) {
        // Deducts the cost of buildig bought from totalCookies
        totalCookies -= buildings[buildingType].cost;
        // Adds a building
        buildings[buildingType].amount++;
        // Increases the cost of the building by 15%
        buildings[buildingType].cost = Math.round(buildings[buildingType].cost * 1.15);
        // Adds CPS
        cookiesPerSecond += buildings[buildingType].cps;

        // Updates DOM
        document.getElementById("cookiecount").innerHTML = totalCookies;
        document.getElementById(buildings[buildingType].elementIds.cost).innerHTML = buildings[buildingType].cost;
        document.getElementById(buildings[buildingType].elementIds.owned).innerHTML = buildings[buildingType].amount;
        document.getElementById("cpsHTML").innerHTML = "cps: " + cookiesPerSecond;

        console.log("Cookies Per Second:", cookiesPerSecond);
    } else {
        alert("Not enough cookies to buy " + buildingType);
    }
}
// Function thats adds cookiesPerSecound each secound
setInterval(function () {
    totalCookies += cookiesPerSecond;
    document.getElementById("cookiecount").innerHTML = totalCookies;
}, 1000);




// Jeg må sette opp database på virtuell maskin og koble til koden