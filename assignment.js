//feet-mile assignment

function feetToMile(feet){
    return feet/5280;
}

var lengthInFeet = 1000;
if(lengthInFeet < 0){
    console.log("Length can't be negative");
}
else{
    console.log("Length in mile:", feetToMile(lengthInFeet).toFixed(2), "Miles");
}


//wood calculator assignment

function woodCalculator(chair, table, bed){
    return 1*chair + 3*table + 5*bed;
}

var numOfChair = 4;
var numOfTable = 3;
var numOfBed = 5;
console.log("Wood Reqcuired:", woodCalculator(numOfChair, numOfTable, numOfBed), "cubic foot");


//bricks calculator assignment

function brickCalculator(floor){
    if(floor <= 10){
        return 15*floor;
    }
    else if(floor <= 20){
        return 15*10 + 12*(floor-10);
    }
    else{
        return 15*10 + 12*10 + 10*(floor-20);
    }
}
var numOfFloor = 100;
if(numOfFloor < 0){
    console.log("Number of floor can't be negative.");
}
else{
    console.log("Number of bricks required:", brickCalculator(numOfFloor)*1000);
}


//tiny friend assignment

function tinyFriend(friends){
    let tiny = friends[0].length;
    for(var i = 1; i<friends.length; i++){
        if(tiny > friends[i].length){
            tiny = friends[i].length;
            var tinyFriendName = friends[i];
        }
    }
    return tinyFriendName;
}

var friendNames = ['Akash', 'Shafa', 'Koushik', 'Abir', 'Ani', 'Ovi'];
console.log("Tiny friend name is:", tinyFriend(friendNames));

