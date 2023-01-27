function PizzaPie (pizzaSize) {
    this.pizzaSize = pizzaSize;
}


PizzaPie.prototype.calculateCost = function() {
    let cost = 5;
    if (this.pizzaSize === "Small") {
        cost += 5;
    } else if (this.pizzaSize === "Medium") {
        cost += 10;
    } else if (this.pizzaSize === "Large") {
        cost += 15;
    }
    return cost;
}
