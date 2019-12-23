var fortuneCookies = [
    "conqure your fears or they will conquer you.",
    "Rivers needs springs",
    "Do Not fear whatyou dont know",
    "You will have a pleasent suprise"
];

exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
}