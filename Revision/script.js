
// Map Methods 

{
    const users = [
        { name: "Harsh", email: "harsh@example.com", city: "Surat" },
        { name: "Amit", email: "amit@example.com", city: "Mumbai" },
        { name: "Riya", email: "riya@example.com", city: "Delhi" },
        { name: "Neha", email: "neha@example.com", city: "Pune" }
    ];
    const contactList = users.map(user => `${user.name} (${user.email}) - ${user.city}`);
    console.log(contactList);
}

