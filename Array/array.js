let array = ["Md sahil", "Pooja", "Arbaz", "Akshay", "Tanay", "Chirag"];
console.log(array);

// Add person at end
array.push("Pep")
console.log(array);

// Remove person from end
array.pop()
console.log(array);

// Remove person from starting
array.shift()
console.log(array);


// Add person at starting
array.unshift("Md Sahil")
console.log(array);


// Find person at index
console.log(array.indexOf("Pooja"));

// Remove person from mid
array.splice(2, 1)
console.log(array);

// Add person in mid
array.splice(2, 0, "Amir")
console.log(array);

// Replace person
array.splice(2, 1, "Arbaz")
console.log(array);

// Devide person
console.log(array.slice(0, 2));



