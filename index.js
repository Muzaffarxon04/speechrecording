// ===========LONG WORD =============

// let letter = "lorem loremlllllllx loremlllllllv loremllllllly loremm looremm lol";

// function longeWord(words){
//     let splitted = words.split(" ")
//     let x = "";
//     let y = [];

//     for(let word of splitted){
//         if(word.length > x.length){
//             x = word
//         }
//     }
//     console.log(x.length)
//     for(let allLongWord of splitted){
//         if(allLongWord.length == x.length){
//             y.push(allLongWord)
//         }
//     }

//     return y
// }

// console.log(longeWord(letter))

// ================SUM===========

// let number = [5,5,10,25] //45

// function sum(x){
//     let result = 0;

//     for(let num of x){
//         result = result + num
//     }
//     return result
// }
// console.log(sum(number))


// console.log(parseInt("12px"));
// console.log(parseInt("12eur"));
// console.log(parseInt("12.5"));
// console.log(parseInt("12.9"));
// console.log(parseInt("12.9"));

// console.log(parseFloat("12px"));
// console.log(parseFloat("12.5"));
// console.log(parseFloat("12.9 + 10"));
// console.log(parseFloat("$12.9"));

// function x(y,x){
//     console.log(y+x)
// }
// let y = setTimeout(x, 3000, 5,7);
// clearTimeout(y);

// setTimeout(function sum(x){
//     console.log(x)
// }, 5000, "axmad");

// let x = [function y(n){return 3}];

// console.log(x[0]())

// let obj = {
//     x: "Dushanba",
//      y: "Seshanba",
//       z: "Chorshanba",
//       k: function x(x){
//           return x
//       }
//     };

// console.log(obj.k("salom"))


// let person = {
//     name: "Abdusattor",
//     age: 35,
//     profession: "Professor"
// }

// console.log(person["name"])


// let person = [
//     {
//         name: "Abdusattor",
//         age: 35,
//         profession: "teacher"
//     },
//     {
//         name: "Nodir",
//         age: 30,
//         profession: "student"
//     },
//     {
//         name: "Akmal",
//         age: 20,
//         profession: "pilot"
//     },
//     {
//         name: "Sardor",
//         age: 20,
//         profession: "student"
//     }
// ];

// function render(param){
    
//     for(let i = 0; i < person.length; i++){
//         let newLi = document.createElement("li")
//         newLi.textContent = `${param[i].name}'s age is ${param[i].age}`
//         list.appendChild(newLi)
//     }
//     return param
// }

// render(person)

// const year = new Date().getFullYear()
// const month = new Date().getMonth() +1
// const day = new Date().getDate()

// console.log(`${year}-${month}-${day}`)



// console.log(typeof []);
// console.log(typeof {});

// let obj = {};
// let x = [];

// console.log(Array.isArray(x));
// console.log(obj.isArray());

let rec = new webkitSpeechRecognition()


rec.lang = "en-EN"

rec.onerror = function(err){
    console.log(err, "err")
}

rec.onend = function(){
    console.log("Aloqa tugadi")
}

rec.onresult = function(evt){
    let command = evt.results[0][0].transcript
    let newLi = document.createElement("li")
    newLi.textContent = command
    list.appendChild(newLi)

    if(command == "red"){
        document.body.style.background = "red";
    }
    else if(command == "blue"){
        document.body.style.background = "blue";
    }
    else if(command == "gold"){
        document.body.style.background = "gold";
    }
    
    console.log(command)
    
}

button.addEventListener("click", function(){
    rec.start()
})

console.log(rec)









