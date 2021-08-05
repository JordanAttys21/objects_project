let mainDiv = document.querySelector("#content")
let firstPerson = document.querySelector("#first")
let secondPerson = document.querySelector("#second")
let thirdPerson = document.querySelector("#third")
let fourthPerson = document.querySelector("#fourth")




let info = {
    0: {
        firstName: "Francisco",
        lastName: "Bermúdez",
        heightFeet: "6",
        heighInches: "3",
        favoriteFood: "pupusas",
        favoriteColor: "pink",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    1: {
        firstName: "Jordan",
        lastName: "Attys",
        heightFeet: "5",
        heighInches: "11",
        favoriteFood: "pizza",
        favoriteColor: "red",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    2: {
        firstName: "Jeremy",
        lastName: "Charleston",
        heightFeet: "5",
        heighInches: "11",
        favoriteFood: "chinese food",
        favoriteColor: "orange",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
    3: {
        firstName: "Chika",
        lastName: "Oniyuke",
        heightFeet: "5",
        heighInches: "7",
        favoriteFood: "pizza",
        favoriteColor: "yellow",
        sayFullName: function() {
            alert("This is " + this.firstName + " " + this.lastName);
        }
    },
}


firstPerson.onclick = function(event) {
    event.preventDefault();
    let newDiv = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
   
    p1.innerHTML = "My name is " + info[0].firstName + " " + info[0].lastName
    p2.innerHTML = "My height is " + info[0].heightFeet + " " + info[0].heighInches
    p3.innerHTML = "My name favorite food is " + info[0].favoriteFood + " and my favorite color is " + info[0].favoriteColor
   
    newDiv.style.color = "white"
    newDiv.style.fontSize = "50px"
    newDiv.style.margin = "5% 20% 5% 20%"
    newDiv.style.padding = "30px"
    newDiv.style.border = "solid black 5px"

    
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
    mainDiv.appendChild(newDiv);
   
    
    
}

secondPerson.onclick = function(event) {
    event.preventDefault();
    let newDiv2 = document.createElement("div");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");
   
    p4.innerHTML = "My name is " + info[1].firstName + " " + info[1].lastName
    p5.innerHTML = "My height is " + info[1].heightFeet + " " + info[1].heighInches
    p6.innerHTML = "My name favorite food is " + info[1].favoriteFood + " and my favorite color is " + info[1].favoriteColor
   
    newDiv2.style.color = "white"
    newDiv2.style.fontSize = "50px"
    newDiv2.style.margin = "5% 20% 5% 20%"
    newDiv2.style.padding = "30px"
    newDiv2.style.border = "solid black 5px"

    
    newDiv2.appendChild(p4);
    newDiv2.appendChild(p5);
    newDiv2.appendChild(p6);
    mainDiv.appendChild(newDiv2);
   
    
    
}

thirdPerson.onclick = function(event) {
    event.preventDefault();
    let newDiv3 = document.createElement("div");
    let p7 = document.createElement("p");
    let p8 = document.createElement("p");
    let p9 = document.createElement("p");
   
    p7.innerHTML = "My name is " + info[2].firstName + " " + info[2].lastName
    p8.innerHTML = "My height is " + info[2].heightFeet + " " + info[2].heighInches
    p9.innerHTML = "My name favorite food is " + info[2].favoriteFood + " and my favorite color is " + info[2].favoriteColor
   
    newDiv3.style.color = "white"
    newDiv3.style.fontSize = "50px"
    newDiv3.style.margin = "5% 20% 5% 20%"
    newDiv3.style.padding = "30px"
    newDiv3.style.border = "solid black 5px"

    
    newDiv3.appendChild(p7);
    newDiv3.appendChild(p8);
    newDiv3.appendChild(p9);
    mainDiv.appendChild(newDiv3);
   
    
    
}

fourthPerson.onclick = function(event) {
    event.preventDefault();
    let newDiv4 = document.createElement("div");
    let p10 = document.createElement("p");
    let p11 = document.createElement("p");
    let p12 = document.createElement("p");
   
    p10.innerHTML = "My name is " + info[3].firstName + " " + info[3].lastName
    p11.innerHTML = "My height is " + info[3].heightFeet + " " + info[3].heighInches
    p12.innerHTML = "My name favorite food is " + info[3].favoriteFood + " and my favorite color is " + info[3].favoriteColor
   
    newDiv4.style.color = "white"
    newDiv4.style.fontSize = "50px"
    newDiv4.style.margin = "5% 20% 5% 20%"
    newDiv4.style.padding = "30px"
    newDiv4.style.border = "solid black 5px"

    
    newDiv4.appendChild(p10);
    newDiv4.appendChild(p11);
    newDiv4.appendChild(p12);
    mainDiv.appendChild(newDiv4);
   
    
    
}