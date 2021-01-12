const mortal = "MORTAL";
let men = {
    Newton: mortal,
    Edison: mortal,
    Socrates: mortal,
}

if("Socrates" in men && men["Socrates"] === mortal){
    console.log("Socrates is "+mortal);
}
else{
    console.log("Socrates is not martal");
}
