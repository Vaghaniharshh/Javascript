// Replace and Replace All

{
    let str = "The Car is faster than any other Car on this street.";

    let regex = /Car/g;

    let resultReplace = str.replace(/Car/, "Bike");
    console.log("replace:", resultReplace);

    let resultReplaceAllRegex = str.replace(regex, "Bike");
    console.log("replace (all with regex):", resultReplaceAllRegex);
}

// Match and Match All

{
    let str = "The Apple is red and another Apple is green.";

    let regex = /Apple/g;

    let resultMatch = str.match(regex);
    console.log("match:", resultMatch);

    let resultMatchAll = [...str.matchAll(regex)];
    console.log("matchAll:", resultMatchAll);
}
