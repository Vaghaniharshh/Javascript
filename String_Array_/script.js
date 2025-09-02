{
    let username = prompt("Enter your username (with spaces in both the side):");

    console.log("Original:", '"' + username + '"');

    // Trim 
    console.log("Trimmed:", '"' + username.trim() + '"');
    console.log("TrimStart:", '"' + username.trimStart() + '"');
    console.log("TrimEnd:", '"' + username.trimEnd() + '"');

    // Convert to lowercase and uppercase
    let trimmed = username.trim();
    console.log("Lowercase:", trimmed.toLowerCase());
    console.log("Uppercase:", trimmed.toUpperCase());

    // Length as string
    let lengthStr = trimmed.length.toString();
    console.log("Length as string:", lengthStr);

    // PadStart 
    let paddedStart = trimmed.padStart(10, "*");    
    console.log("PadStart(10):", paddedStart);

    // PadEnd 
    let paddedEnd = paddedStart.padEnd(10, "#");
    console.log("PadEnd(10):", paddedEnd);
}