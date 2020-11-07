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
    return text;
}

