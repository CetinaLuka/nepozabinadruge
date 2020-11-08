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
    ["what is the state of coronavirus", "number of infected", "how many infections", "infections", "statistics"],
    //2
    ["what is going on", "what is up"],
    //3
    ["janša", "janez", "janez janša", "what is prime minister doing", "what does janez janša say"],
    //4
    ["jelko", "kacin", "jelko kacin", "who are you"],
    //5
    ["tell me story", "will there be new restrictions"],
    //6
    ["how are you", "how are you doing"],
    //7
    ["bye", "good bye", "goodbye", "adios"],
    //8
    ["i have coronavirus", "im infected", "im sick", "i think i have coronavirus", "coronavirus", "i have corona", "what to do if you're sick"],
    //9
    ["great", "excellent", "im great", "im excellent", "im fine", "fine", "good"],
    //10
    ["not too good", "not good", "not well", "im not well", "bad", "im not feeling good", "im not feeling well"],
    //11
    ["what are the current restrictions", "what is the government doing to stop the coronavirus", "is there a lockdown", "what measures are in place", "current measures"]
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
    [`<iframe width="560" height="315" src="https://www.youtube.com/embed/X78p9fcIU0Q?start=7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    ],
    //5
    [`<iframe width="560" height="315" src="https://www.youtube.com/embed/FXEd1NeqN-A?start=7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    ],
    //6
    ["Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?",
    "Staying strong and quaranteening. I hope you are well."],
    //7
    ["Goodbye. Stay healthy.", "See you later. Watch yourself and others around you.", "All the best to you"],
    //8
    [`If you are sick (coughing, feverish or are breathing heavily)<br/>
    <b>• Stay at home</b> and avoid all contacts.</br>
    <b>• Call you doctor</b>or the emergenci services. They will talk to you and decide if you are at risk of infection. If they decide that you might be infected, they will give you further instructions on the phone.</br></br>
    It is also important that we do not go to the doctor, for emergency medical care or to the hospital in person. If we need to seek emergency medical help, we first <b> call her on the phone</b>.</br>
    Več informacij lahko najdete na <a href="https://www.gov.si/en/topics/coronavirus-disease-covid-19/" target= "covidGov">tej</a> strani`,
    `<h6>Most common signs of infection</h6></br>
    The new coronavirus SARS-CoV-2 causes covid-19 disease, which is most commonly manifested by <b> malaise, fatigue, colds, fever, cough </b>, and in more severe forms with shortness of breath. The more severe course is characterized by pneumonia.
     </br>
     Infection with the new coronavirus cannot be distinguished from other causes of acute respiratory infections solely on the basis of the course of the disease and the patient's problems. <b> Microbiological testing </b> is required for confirmation or exclusion.</br>
     Več informacij lahko najdete na <a href="https://www.gov.si/en/topics/coronavirus-disease-covid-19/" target= "covidGov">tej</a> strani`
    ],
    //9
    ["Well that's fantastic. Stay well.", "Great, that's nice to hear.", "That's nice to hear", "Awesome.", "That's what I like to hear"],
    //10
    ["Well that's too bad.", "I hope you fell better soon.", "I'm sad to hear that.", "That's too bad.", "Can I help?"],
    //11
    [`
    <h5><b>Restriction of movement between 21:00 and 6:00</b></h5></br>
    
    Movement of people on the entire territory of the Republic of Slovenia is <b>temporarily prohibited between 22:00 and 6:00</b> with the following <b>exceptions</b>:</br>
    
        1. the elimination of immediate threats to health, life and property;</br>
        2. <b>travel to and from work and the performance of urgent work duties</b>;</br>
        3. access to and provision of emergency services;</br>
        4. delivery of food or medicines;</br>
        5. the travel of persons who have entered the Republic of Slovenia in order to transit to a neighbouring country or to their residence in the Republic of Slovenia.</br>
    `,
    `
    <h5><b>Ban on gathering of people</b></h5>
    
    On the entire territory of the Republic of Slovenia a <b>ban</b> is imposed on:</br>
        1. gatherings of more than six persons,</br>
        2. events,</br>
        3. public gatherings,</br>
        4. weddings and</br>
        5. religious ceremonies.</br>
    `,
    `<h5><b>Restriction of movement between municipalities</b></h5></br>
    Movement between municipalities is prohibited with certain exceptions for which adequate proof must be submitted. The territories of municipalities are defined in the Act on the Establishment of Municipalities and Municipal Boundaries. The list of municipalities is published on the <a href="https://www.gov.si/en/state-authorities/municipalities/" target="gov">GOV.SI webpage</a>. `],
];

const alternative = [
    "Hmm 🤔. Not sure about that...",
    "Go on...",
    "Try again",
    "I'm listening...",
    "Bro...",
    "I'm not sure I can help with that",
    "Thoughts and prayers 🙏",
    "What would you like me to do",
    "I hear you...",
    "These are tough times",
    "My grandma always said baid things don't last forever. I hope that helps a little bit."
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


