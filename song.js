//One of my favorite song is Demons-Imagine Dragons

let songName = "Demons"
let released = "January 28, 2013";

//using object to store song details
let details = new Object();
details['recorded'] = "2011-12";
details['studio'] = "Westlake Recording Studios";
details['genre'] = "POP Rock";

//using number to save length
let length = 2.57;

//storing writers in array
let writtenBy = new Array();
writtenBy.push("Imagine Dragons");
writtenBy.push("Alex Da Kid");

//boolean to check if song is good
let isGoodSong = true;

//loggin variables in console
console.log(`Song name: ${songName}`);
console.log(`Song released on: ${released}`);
console.log(`Recorded in: ${details.recorded}`);
console.log(`Studio: ${details['studio']}`);
console.log(`Song genre: ${details.genre}`);
console.log(`Song length: ${length}`);
console.log(`Writtenn by: ${writtenBy.toString()}`);
console.log(`Is this song good?: ${isGoodSong}`)