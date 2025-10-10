// Object and It's Methods

{
    let person = {
        name: "Harsh",
        age: 20,
        profession: "Developer"
    };
    console.log(person.name);
    console.log(person["age"]);
}

{
    person.city = "Surat";
    person.age = 21;
    delete person.profession;

    console.log(person);
}

{
    let calculator = {
        a: 10,
        b: 5,
        add: function () { return this.a + this.b; },
        multiply: function () { return this.a * this.b; }
    };
    console.log(calculator.add());
    console.log(calculator.multiply());
}

//  Object with Array
{
    let student = {
        name: "Harsh",
        marks: [90, 80, 85, 95]
    };

    console.log(student.marks);
    console.log(student.marks[2]);
}

// Array with Object
{
    let student = [
        { name: "Harsh", age: 20 },
        { name: "Suresh", age: 22 },
        { name: "Rakesh", age: 19 }
    ];

    console.log(student[1].name);
}

{
    let quotes = [
        { text: "Believe in yourself", author: "Yourself" },
        { text: "Dream big, work hard", author: "Harsh Vaghani" },
        { text: "Stay positive", author: "EveryOnePerson" }
    ];

    quotes.forEach(q => console.log(`"${q.text}" - ${q.author}`));

    let harshQuote = quotes.find(q => q.author === "Harsh Vaghani");
    console.log("\nQuote by Harsh:", `"${harshQuote.text}"`);

}