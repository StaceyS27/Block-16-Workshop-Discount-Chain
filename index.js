
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//calculate the total cost of refill for each customer

let customer = rocky; //change variable for each customer

 function costOfRefill (customer) {
    return customer.pricePerRefill * customer.refills;
 }

let cost = costOfRefill(customer);

//if the customer has a subscription,
//will receive 25% discount after refill total

function discountWithSubscription (customer) {
    if (customer.subscription === true) {
        return cost - (cost*.25);
    }
    else {
        return cost;
    }
}

let subscriptionDiscount = discountWithSubscription(customer);

//if the customer has a coupon,
//will receive $10 discount after subscription discount

function discountWithCoupon (customer) {
    if (customer.coupon === true) {
        return subscriptionDiscount - 10;
    }
    else {
        return subscriptionDiscount;
    }
}

let totalCost = discountWithCoupon (customer);

//grand total statement using total cost variable 

console.log ("Your grand total is $" + totalCost + ".")
