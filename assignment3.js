

// Start kilometerToMeter---------

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(10);
console.log(result);

var rahim = [12, 34, 45, 60];

var nanaMeter = kilometerToMeter(rahim[1]);
console.log(nanaMeter);


// Start hotelCost-------

function hotelCost(day){

var Cost = 0;
if(day <= 10){
    cost = day * 100;
}
else if(day <= 20){
    var firsDay = 10 * 100;
    var remaining = day - 10;
    var secondDay = remaining * 80;
    cost = firsDay + secondDay;
}
else{
    var firsDay = 10 * 100;
    var secondDay = 10 * 80;
    var remaining = day - 20;
    var thirdDay = remaining * 50;
    cost = firsDay + secondDay + thirdDay;
}
if(cost >= 0){
    return cost;
}
else {
    console.log("Nagative value isn't allow. Thanks ");
}
}

var result = hotelCost(-30);
console.log(result);







// Start megaFriend------------

function megaFriend(friend){
    var largeName = "";
    for(var i = 0; i < friend.length; i++){
        var element = friend[i];
        if(element.length > largeName.length){
            largeName = friend[i];
        }
    }
    return largeName;
}
var result = megaFriend(["sujon", "shajue", "sheju", "Baju"]);
console.log(result);


// Start budgetCalculator------------

function budgetCalculator(watch, mobile, laptop){
    var watch = watch * 50;
    var mobile = mobile * 100;
    var laptop = laptop *500;

    var totalPrice = watch + mobile + laptop;
    return totalPrice;
}

var result = budgetCalculator(6, 4, 0)
console.log(result);
