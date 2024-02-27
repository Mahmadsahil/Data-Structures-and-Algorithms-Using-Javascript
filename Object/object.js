// Creating object for persons biodata
const BioData={
    fistName:"MD sahil",
    lastName:"Achanoor",
    Email:"*****@gmail.com",
    Height:6,
    Location:"Karnataka",
    fullName:function(){
        return this.fistName +" "+ this.lastName;
    }
}

// Reading firstName
console.log(BioData.fistName);

// Reading FullName
console.log(BioData.fullName());

// Update height
console.log(BioData.Height=6.2);

// Deleting email
console.log(delete BioData.Email);


console.log(BioData);