// Object Entries()
{
    let entries = [["name", "Harsh"], ["age", 20], ["city", "Surat"]];
    let obj = Object.fromEntries(entries);

    console.log(obj);
}

// Object Hasitown()
{
    let person = { name: "Alice", age: 22 };

    console.log(Object.hasOwn(person, "name"));
    console.log(Object.hasOwn(person, "city"));
}

// Obejct is()
{
    console.log(Object.is(10, 10));
    console.log(Object.is("Hello", "Hi"));
    console.log(Object.is(NaN, NaN));
}

// Object keys()
{
    let person = { name: "Rakesh", age: 22, city: "Haryana" };
    console.log(Object.keys(person));
}

// Object values()
{
    console.log(Object.values(person));
}

// Object entries()
{
    console.log(Object.entries(person));
}

// Object groupBy()
{
    let users = [
        { name: "Harsh", age: 22 },
        { name: "Suresh", age: 22 },
        { name: "Raju", age: 25 }
    ];

    let grouped = Object.groupBy(users, user => user.age);
    console.log(grouped);
}
