// Business Logic -------
function PizzaPie (pizzaSize, pizzaType) {
    this.pizzaSize = pizzaSize;
    this.pizzaType = pizzaType;
    //this.pizzatopping = pizzaTopping;
}


PizzaPie.prototype.calculateCost = function() {
    let cost = 5;
    if (this.pizzaSize === "Small" && this.pizzaType === "Cheese") {
        cost += 2;
    }
    else if  (this.pizzaSize === "Small" && this.pizzaType === "Peperoni") {
        cost += 10;
    } else if  (this.pizzaSize === "Small" && this.pizzaType === "Sausage") {
        cost += 12;
    }
    else if (this.pizzaSize === "Medium" && "Cheese") {
        cost += 5;
    }
    else if  (this.pizzaSize === "Medium" && "Peperoni") {
        cost += 10;
    }
    else if (this.pizzaSize === "Medium" && "Pepperoni") {
        cost += 12;
    }
    else if (this.pizzaSize === "Medium") {
        cost += 10;
    } else if (this.pizzaSize === "Large") {
        cost += 15;
    }
    return cost;
}

PizzaPie.prototype.selectedPizzaPie = function() {
    return this.pizzaSize + " " + this.pizzaType;
}


// UI Logic -------

function handleFormSubmission(event) {
    event.preventDefault();
    const selectedPizzaSize = document.querySelector("select#pizza-size").value;
    const selectedPizzaType = document.querySelector("select#pizza-type").value;
    let newPizzaPie = new PizzaPie(selectedPizzaSize, selectedPizzaType);
    let orderSpot = document.getElementById("Order");
    let outputSizeSpot = document.getElementById("outputSize");
    let outputTypeSpot = document.getElementById("outputType");
    let cost = document.getElementById("cost");
    let totalCost = newPizzaPie.calculateCost() 
    outputSizeSpot.innerText = newPizzaPie.pizzaSize;
    outputTypeSpot.innerText = newPizzaPie.pizzaType;
    cost.innerText = "$" + totalCost
    orderSpot.removeAttribute("class");
    (newPizzaPie.selectedPizzaPie());
    (newPizzaPie.calculateCost());
}

window.addEventListener("load", function() {
    document.getElementById("pizza-order").addEventListener("submit", handleFormSubmission);
});