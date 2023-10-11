// This is where Cal-pal will come in handy ex: Pi = 4/1 - 4/3 + 4/5 - 4/7...

// using this will make it more accturate

function calcPI(iterations){
    let pi = 0, divisor = 1;
    for(let i = 0; i <= iterations; i++){
        pi = pi + (4/divisor) - (4/
        (divisor + 2));
        divisor += 4;
    } // This value will never change of course it's pi.
    document.getElementById("output1")
    .value = pi.toFixed(10);
}

// Fib list EX: 1, 1, 2, 3, 8, 13

let fiblist = [];
function getFibList(howMany){
    for(i = 0; i < howMany; i++){
    fiblist[i] = fib(i);
    }
    fiblist.shift();
    document.getElementById("output1")
    .value = fiblist.join(", ");
}

function fib(whichNumber){
    let num1 = 1,
    num2 = 0,
    temp,
    i = 0;
    while(i < whichNumber){
        temp = num1;
        num1 = num1 + num2;
        num2 = temp;
        i++;    
    }
    return num2;
}

let mLtext = "My dear old ~ sat me down to hear some words of wisdom \n" +
"1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n" +
 "2. He who ~ at the right time can ~ again \n" + 
 "3. Always wear ~ ~ in case your're in a ~ \n" +
 "4. Don't use your ~ with you";

// include a array to search for key words = convert into an array
let mLArray = mLtext.split(" ");
// need a array that will hold user input
let inputArray = []

function madLibGenerator(){
    createInputArray();
    
    if(checkForMissingInput()){
        document.getElementById("output1")
        .value = "Enter all values above";
    } else {
        createMLSentence();
    }
}

function createInputArray(){
    for(i = 0; i <= 13; i++){
        inputArray[i] = document.getElementById("i" + i).value;
    }
}

function checkForMissingInput(){
    let defaultArrayVals = ["Person", "Noun", "Verb", "Verb", "Verb", "Verb", "Plural Verb",
"Verb", "Adjective", "Noun", "Event", "Noun", "Body Part", "Event"];

    for(i = 0; i < inputArray.length; i++
     ){
            if(defaultArrayVals.indexOf
            (inputArray[i]) > -1){
                return true;
            }
            
    }
    return false;
}

function createMLSentence(){
    let arrIndex = 0;
    for(i = 0; i < mLArray.length; i++){
        let matchIndex = mLArray.indexOf
        ("~");
        mLArray[matchIndex] = inputArray
        [arrIndex];
        arrIndex++;
    }
    document.getElementById("output1")
    .value = mLArray.join(" ");
}