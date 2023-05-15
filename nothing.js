
let person = {
    name : "Balazs",
    age : 39,
    country : "Austria"
}
document.getElementById("persond").textContent = person;


function logData() {
    return (person.name + is + person.age + "years old and lives in" + person.country) 
}

logData();

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let x = Math.floor(Math.random()*fighters.length)
    let y = Math.floor(Math.random()*fighters.length)
    stageEl.textContent = fighters[x] + " " + "vs" + " " + fighters[y]
    console.log("click")
})

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sorting() {
    for (let x=0; x<fruit.length; x++){
        if (fruit[x]==="🍊"){
            orangeShelf.textContent += "🍊"
            
        }
        else if(fruit[x]==="🍎"){
            appleShelf.textContent += "🍎"
        }
        //console.log(fruit[x])
    }
}
sorting()
