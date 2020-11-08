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
    ["what is the state of coronavirus", "number of infected", "how many infections", "infections", "statistics", "daily statistics", "daily corona", "daily stats"],
    //2
    ["what is going on", "what is up"],
    //3
    ["jansa", "janez", "janez jansa", "what is prime minister doing", "what does janez janša say"],
    //4
    ["jelko", "kacin", "jelko kacin", "who are you"],
    //5
    ["will there be new restrictions", "video"],
    //6
    ["how are you", "how are you doing"],
    //7
    ["bye", "good bye", "goodbye", "adios"],
    //8
    ["i have coronavirus", "im infected", "im sick", "i think i have coronavirus", "coronavirus", "i have corona", "what to do if you're sick", "corona", "sick", "covid"],
    //9
    ["great", "excellent", "im great", "im excellent", "im fine", "fine", "good", "fantastic","marvellous", "splendid"],
    //10
    ["not too good", "not good", "not well", "im not well", "bad", "im not feeling good", "im not feeling well"],
    //11
    ["what are the current restrictions", "what is the government doing to stop the coronavirus", "is there lockdown", "what measures are in place", "current measures", "restrictions", "lockdown", "police hour"],
    //12
    ["where can i get more information", "information", "info", "where can i get info", "what is the nuber of the call center", "coronavirus hotline", "phone"],
    //13
    ["play a game", "play game", "i want to have fun", "can i go see my girlfriend", "i want to play game", "play", "game", "I am bored"],
    //14
    ["help", "!help", "/help", "commands", "how to use", "list commands"],
    //15
    ["i need help with groceries", "groceries", "shopping", "help needed", "shop", "food", "store", "help with groceries", "help shopping", "need help"],
    //16
    ["joke", "tell joke", "tell a joke", "tell me a joke", "tell me joke", "funny", "laugh", "say something funny"]
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
        `Nothing much, how about you?`
    ],
    //3
    [`<a class="twitter-timeline" href="https://twitter.com/JJansaSDS?ref_src=twsrc%5Etfw">Tweets by JJansaSDS</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> `
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
    <b>• Call you doctor</b> or the emergency services. They will talk to you and decide if you are at risk of infection. If they decide that you might be infected, they will give you further instructions on the phone.</br></br>
    It is also important that we do not go to the doctor, for emergency medical care or to the hospital in person. If we need to seek emergency medical help, we first <b> call her on the phone</b>.</br>
    More info is available on <a href="https://www.gov.si/en/topics/coronavirus-disease-covid-19/" target= "covidGov">this</a> site`,
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
    Movement between municipalities is prohibited with certain exceptions for which adequate proof must be submitted. The territories of municipalities are defined in the Act on the Establishment of Municipalities and Municipal Boundaries. The list of municipalities is published on the <a href="https://www.gov.si/en/state-authorities/municipalities/" target="gov">GOV.SI webpage</a>. `
    ],
    //12
    [`
    <h5><b>Call centre for information on the coronavirus</b></h5></br>
    A call centre has been set up again to assist people in obtaining reliable information regarding the coronavirus. Senior year students of the Faculty of Medicine of the University of Ljubljana under the mentorship of relevant experts will answer your questions. 
    
        You can reach the call centre <b>free of charge</b> on workdays from <b>Monday to Friday between 8:00 and 18:00</b> at <b>080 1404</b>.
        If you are calling from abroad, you can reach the call centre at <b>+386 1 478 7550</b>.
    
    `,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/BtN-goy9VOY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`],
    //13
    ["<h5>Do you want to play a game?</h5></br><span>Warning: not suitable for epileptics<span></br><a href='../../minigames/chase' target='game'>YES</a>"],
    //14
    [`Ask me things like:</br>
    statistics</br>
    who are you</br>
    what to do if you're sick</br>
    information</br>
    restrictions</br>
    play game</br>
    help shopping</br>
    tell me a joke</br>
    ...
    `],
    //15
    [`We offer a service where you list the things you need and other people can volunteer to pick them up.</br>
    Try it out <a href="../../request/list" target="shopping">here</a>`],
    //16
    ["Without you my life is as empty as the supermarket shelf.",
    "If COVID-19 doesn't take you out... Can I?",
    "Is that hand sanitizer in your pocket or are you just happy to be within 6ft of me?",
    "Why does leaving the house feel like I'm making a supply run on an episode of the Walking dead?",
    "Finland has just closed their borders. No one will be crossing the finish line.",
    "My parents are just about to discover the teacher was not the problem.",
    "Stay inside, isolate or practice social distancing, clean yourself. Omg, I've become a housecat.",
    "Anyone else feel like life is being written by a 4th grader right now? ... and there was this virus and everyone was scared. And then the world ran out of toilet paper yeah, and then there was no school for like a month and then it snowed!",
    "Being quarantined with a talkative child is like having an insane parrot super glued to your shoulder.",
    "The mayor has ordered local bands to play their originals in public areas to prevent people from gathering.",
    "Ladies, time to start dating older dudes. They can get you in the grocery store early."
    ]
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
    "My grandma always said bad things don't last forever. I hope that helps a little bit."
];

function compare(triggerArray, replyArray, text) {
    let item = alternative[Math.floor(Math.random() * alternative.length)];
    let index = 0;

    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < triggerArray[x].length; y++) {
            console.log("["+x+"]"+"["+y+"]"+triggerArray[x][y]);
            if (triggerArray[x][y].localeCompare(text) ==0) {
                console.log(triggerArray[x][y]+" == "+text);
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
                index = x;
            }
        }
    }
    console.log("index is: " + index);
    if (index == 1) {
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
            return "Daily new cases: " + data.dailyInfected + "</br>" + "Daily tested: " + data.dailyTested + "</br>" + "Daily deaths: " + data.dailyDeaths+"</br> You can find more data on the <a href='https://covid-19.sledilnik.org/en/stats' target='tracker'>covid-19 tracker site</a>";
            
        })
        .catch(error => {
            return null;
        })
}


