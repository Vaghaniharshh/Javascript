// Date and Time Object in Javascirpt

{
    let now = new Date();

    console.log("Full Date & Time:", now);

    console.log("getFullYear():", now.getFullYear());
    console.log("getMonth():", now.getMonth() + 1);
    console.log("getDate():", now.getDate());
    console.log("getDay():", now.getDay());
    console.log("getHours():", now.getHours());
    console.log("getMinutes():", now.getMinutes());
    console.log("getSeconds():", now.getSeconds());
    console.log("getMilliseconds():", now.getMilliseconds());
    console.log("getTime():", now.getTime());

    console.log("toDateString():", now.toDateString());
    console.log("toTimeString():", now.toTimeString());

    console.log("toLocaleDateString():", now.toLocaleDateString());
    console.log("toLocaleTimeString():", now.toLocaleTimeString());
    console.log("toLocaleString():", now.toLocaleString());

}

// Calculate age from birth year using user input

{
    let birthYear = prompt("Enter your birth year:");
    birthYear = parseInt(birthYear);

    let today = new Date();
    let currentYear = today.getFullYear();

    let age = currentYear - birthYear;

    alert("You are " + age + " years old.");
}


// Find days left until New Year from today's date

{
    let todayInput = prompt("Enter today's date in YYYY-MM-DD format (or leave empty for today):");

    let today;
    if (todayInput) {
        today = new Date(todayInput);
    } else {
        today = new Date(); 
    }

    let currentYear = today.getFullYear();
    let newYear = new Date(currentYear + 1, 0, 1); 
    let diffTime = newYear - today; 
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    alert("Days left until New Year: " + diffDays);

}

