function moderateText() {
    let text = document.getElementById("textInput").value;

    let bannedWords = ["aand","aandu","balatkar","balatkari","behen chod","behenchod","behen ka loda","beti chod","bhadva","bhadve","bhandve","bhangi","bhootni ke","bhosad","bhosadi ke","boobe","chakke","chinaal","chinki","chod","chodu","chodu bhagat","chooche","choochi","choope","choot","choot ke baal","chootia","chootiya","chuche","chuchi","chudaap","chudai khanaa","chudam chudai","chude","chuda","chut","chut ka chuha","chut ka churan","chut ka mail","chut ke baal","chut ke dhakkan","chut maarli","chutad","chutadd","chutan","chutia","chutiya","gaand","gaandfat","gaandmasti","gaandufad","gandfattu","gandu","gashti","gasti","ghassa","ghasti","gucchi","gucchu","harami","haramzade","hawas","hawas ke pujari","hijda","hijra","jhant","jhant chaatu","jhant ka keeda","jhant ke baal","jhant ke pissu","jhantu","kamine","kaminey","kanjar","kutta","kutta kamina","kutte ki aulad","kutte ki jat","kuttiya","loda","lodu","lund","lund choos","lund ka bakkal","lund khajoor","lundtopi","lundure","maa ki chut","maal","madar chod","madarchod","madhavchod","mooh mein le","mutth","mutthal","najayaz","najayaz aulaad","najayaz paidaish","paki","pataka","patakha","raand","randaap","randi","randi rona","saala","saala kutta","saali kutti","saali randi","suar","suar ke lund","suar ki aulad","tatte","tatti","teri maa ka bhosada","teri maa ka boba chusu","teri maa ki behenchod","teri maa ki chut","tharak","tharki","tu chuda"];

    let regex = new RegExp(bannedWords.map(word => `\\b${word}\\b`).join("|"), "gi");

    let moderatedText = text.replace(regex, (match) => "*".repeat(match.length));

    document.getElementById("outputText").innerText = moderatedText;
}