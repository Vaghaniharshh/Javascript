// Javascript Functions and Function Expression

{
    function greet(name) {
        return `Hello, ${name}!`;
    }
    console.log(greet("Harsh"));
}

// CallBack Function
{
    function greeting(name, callback) {
        console.log("Hi " + name);
        callback();
    }

    function callMe() {
        console.log("I am a callback function!");
    }

    greeting("Harsh", callMe);
}

// Timing Functions
// setTimeout()

{
    console.log("Start");

    setTimeout(() => {
        console.log("This runs after 3 seconds");
    }, 3000);

    console.log("End");
}

// clearTimeout()
{
    let timer = setTimeout(() => {
        console.log("You won't see this");
    }, 5000);

    clearTimeout(timer);
}

// setInterval()
{
    let count = 0;
    let interval = setInterval(() => {
        count++;
        console.log("Count:", count);
        if (count === 5) clearInterval(interval); 
    }, 1000);
}