
// Javascript JSON Method

// 1. JSON.parse()
// 2. JSON.stringify()
{
    let jsonString = '{"name":"Harsh","age":20,"city":"Surat"}';
    let obj = JSON.parse(jsonString);

    console.log(obj.name);
    console.log(obj.city);
}

{
    let student = { name: "Alice", marks: [90, 80, 85] };
    let jsonStr = JSON.stringify(student);

    console.log(jsonStr);
}
// Object.assign() 
{
    let obj1 = { a: 1, b: 2 };
    let obj2 = { b: 3, c: 4 };

    let merged = Object.assign({}, obj1, obj2);
    console.log(merged);
}

// Object.create()
{
    let person = {
        greet: function () {
            console.log("Hello, " + this.name);
        }
    };

    let harry = Object.create(person);
    harry.name = "Rakesh";
    harry.greet(); 
}

{
    let jsonData = '{"name":"Alice","age":22}';

    //   JSON parse
    let user = JSON.parse(jsonData);
    console.log(user.name);

    //   JSON stringify
    user.city = "Delhi";
    let updatedJSON = JSON.stringify(user);
    console.log(updatedJSON);

    // 3. Merge with another object
    let extra = { country: "India", age: 23 };
    let mergedUser = Object.assign({}, user, extra);
    console.log(mergedUser);

    // 4. new object 
    let proto = { greet: function () { console.log("Hello " + this.name); } };
    let bob = Object.create(proto);
    bob.name = "Bob";
    bob.greet();

}