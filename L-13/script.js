
{
    function validateEmail(email) {
        let regex = /^\w+@\w+\.\w+$/;

        if (regex.test(email)) {
            console.log("Valid Email ✅");
        } else {
            console.log("Invalid Email ❌");
        }
    }

    validateEmail("harsh@example.com");
    validateEmail("harsh.example.com");
}
