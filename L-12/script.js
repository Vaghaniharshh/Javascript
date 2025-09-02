    let text = prompt("Enter a word or sentence:");

    let firstPart = text.substring(0, 3);

    let lastPart = text.slice(-3);

    alert("Original text: " + text +
          "\nSubstring (first 3 characters): " + firstPart +
          "\nSlice (last 3 characters): " + lastPart);