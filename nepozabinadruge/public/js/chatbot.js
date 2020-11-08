var stringSimilarity = require('string-similarity');

function readMessage(message) {
    console.log(message);
    console.log("reading");
    //remove all characters except word characters, space, and digits
    let text = message.toLowerCase().replace(/[^\w\s\d]/gi, "");

    // 'tell me a story' -> 'tell me story'
    // 'i feel happy' -> 'happy'
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");

    
    return compare(trigger, reply, text);
}
const trigger = [
    //0 
    ["hey", "hello", "what is up"],
    //1
    ["what is the state of coronavirus", "number of", "how many infections", "infections", "corona"],
    //2
    ["what is going on", "what is up"],
    //3
    ["happy", "good", "well", "fantastic", "cool"],
    //4
    ["bad", "bored", "tired", "sad"],
    //5
    ["tell me story", "tell me joke"],
    //6
    ["thanks", "thank you"],
    //7
    ["bye", "good bye", "goodbye"]
];

const reply = [
    //0 
    ["Hello citizen!", "Hi citizen!", "Hey citizen !", "Greetings citizen!"],
    //1
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    //2
    [
        "Nothing much",
        "Exciting things!"
    ],
    //3
    ["Glad to hear it"],
    //4
    ["Why?", "Cheer up buddy"],
    //5
    ["What about?", "Once upon a time..."],
    //6
    ["You're welcome", "No problem"],
    //7
    ["Goodbye", "See you later"],
];

const alternative = [
    "Hmm. Not sure about that...",
    "Go on...",
    "Try again",
    "I'm listening...",
    "Bro..."
];

function findAnswer(triggerArray, responseArray, text){
    var matches = [];
    for (let x = 0; x < triggerArray.length; x++) {
        var best = stringSimilarity.findBestMatch(text, triggerArray[x])
        console.log("best match: "+best);
        matches.push(best);
    }
    console.log(matches)
}

function compare(triggerArray, replyArray, text) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == text) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    if(item == undefined){
        item = alternative[Math.floor(Math.random() * alternative.length)]
    }
    return item;
}


