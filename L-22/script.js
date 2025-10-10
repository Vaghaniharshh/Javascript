// Array Methods  

// Array.filter()
{
    const word = ["spray", "elite", "exuberant", "destruction", "present"];

    const profiles = [
        {
            name: 'Harsh',
            age: 21
        },
        {
            name: 'Pravesh',
            age: 20
        },
        {
            name: 'Rakesh',
            age: 25
        },
        {
            name: 'Sahil',
            age: 30
        },
        {
            name: 'Pal',
            age: 23
        },
        {
            name: 'Suresh',
            age: 35
        },
    ]
    let result = profiles.filter((age) => age.age == 12).map((name) => name.name)

    console.log(result);
}

// Array.at()

{
    let fruits = ["Apple", "Mango", "Banana"];
    console.log(fruits.at(1));
    console.log(fruits.at(-1));
}

// Array.copywithin()

{
    let nums = [1, 2, 3, 4, 5];
    nums.copyWithin(0, 3);
    console.log(nums);
}

// Array.entires()

{
    let fruits = ["Apple", "Mango", "Banana"];
    let iterator = fruits.entries();

    for (let entry of iterator) {
        console.log(entry);
    }
}

// Array.every()

{
    let numbers = [2, 4, 6, 8];
    let allEven = numbers.every(num => num % 2 === 0);
    console.log(allEven);
}

// Array.fill()

{
    let arr = [1, 2, 3, 4, 5];
    arr.fill(0, 1, 4); 
    console.log(arr);  

}

