const mortal = "MORTAL";
let men = {
    Newton: mortal,
    Edison: mortal,
    Socrates: mortal,
}

const isMortal = (name = null) => {
    if(name !== null && name.length > 0){
        if(name in men){
            return men[name];
        }
        else{
            return "Immortal";
        }
    }
    return "not a name";
}

console.log("Socartes is "+isMortal("Socrates"));
console.log("Soul is "+isMortal("Soul"));
console.log("Null is "+isMortal(null));
console.log("[No parameter passed] so, "+isMortal());
console.log(" \"\" is "+isMortal(""));
console.log("120 is "+isMortal(120));



//cake

const cakeFlavors = ["Strawberry","Orange","Lemon","Chocolate","Vanilla"];

function checkFalvor(isChocolate,...flavors){
    flavors.map((flavor) => {
        if(flavor === "Chocolate"){
            isChocolate = true;
            return console.log("Hey, It's a "+flavor+" flavored cake");
        }
        isChocolate = false;
        return console.log(flavor+" flavored cake");
    })
}

checkFalvor(false,...cakeFlavors);