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
    //return comparison;
}
const trigger = [
    //0 
    ["hey", "hello", "what is up", "hi", "wazzup", "jov"],
    //1
    ["what is the state of coronavirus", "number of infected", "how many infections", "infections", "corona", "coronavirus"],
    //2
    ["what is going on", "what is up"],
    //3
    ["janša", "janez", "janez janša", "predsednik vlade", "kaj pravi janez janša", "kaj pravi predsednik vlade"],
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
        `Ppzuizdsgidsf oidsoihrfdosi woiewfoewn </br>
        sdoijdsoifndspofinodwsifnpwoijfpewojf </br>
        <a href='//www.google.com' target='google'>Google</a>`,
        "<a href='//www.google.com' target='google'>Google</a>"
    ],
    //3
    [`<a class="twitter-timeline" href="https://twitter.com/JJansaSDS?ref_src=twsrc%5Etfw">Tweets by JJansaSDS</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> `,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/BtN-goy9VOY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    ],
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

function compare(triggerArray, replyArray, text) {
    let item = alternative[Math.floor(Math.random() * alternative.length)];
    let index = 0;
    console.log(text);

    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == text) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
                index = x;
                break;
            }
        }
    }
    console.log("index is: " + index);
    if (index == 1) {
        console.log("index is 1");
        return getData();
    }
    else{
        return item;
    }
}
function getData() {
    return fetch("https://api.apify.com/v2/key-value-stores/603AyvQ8QjyqmnZx6/records/LATEST?disableRedirect=true")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return "Daily new cases: " + data.dailyInfected + "</br>" + "Daily tested: " + data.dailyTested + "</br>" + "Daily deaths: " + data.dailyDeaths+"</br> You can find more data on the <a href='https://covid-19.sledilnik.org/en/stats' target='tracker'>covid-19 tracker site</a>";
            
        })
        .catch(error => {
            console.log("error");
            return null;
        })
}


