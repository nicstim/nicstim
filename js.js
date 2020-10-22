let getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};

let getDistance = function(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

let getDistanceHint = function (distance) {
    if (distance < 10){
        return "Уфф заклад очень близко";
    } else if (distance < 20){
        return "Хорошо, заклад достаточно близко";
    } else if (distance < 40 ){
        return "Так, закладка рядом, я чувствую";
    } else if (distance < 80){
        return "Нуу...Ты двигаешься в правильом направлении";
    } else if (distance < 160){
        return "Дядя, ну ты даешь, её тут точно нет";
    } else if (distance < 320) {
        return "Хмм...Ты Ебобо? Ищи в другом месте!";
    } else {
        return "Это пиздец, как далеко от закладки, ищи в другом месте!";
    }

};

let width = 400;
let height = 400;
let clicks = 0;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#map").click(function(event){
    clicks++;

    let distance = getDistance(event, target);

    let distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);

    if (distance < 8){
        alert("Клад найден! Сделано кликов: " + clicks);
    }
});


$("html").click(function(counter){
    return counter--;
})

