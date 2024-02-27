class BioData {
    constructor(fistName, lastName, Email, Height, Location) {
        this.fistName = fistName;
        this.lastName = lastName;
        this.Email = Email;
        this.Height = Height;
        this.Location = Location
    }

    // function for adding fistName and lastName

    fullName() {
        return this.fistName + " " + this.lastName;
    }
}

const MDBioData = new BioData('Md sahil', 'Achanoor', '****@gmail.com', 6, 'Karnataka');
console.log(MDBioData);

// Reading fullName
console.log(MDBioData.fullName());

// Reading fistName
console.log(MDBioData.fistName);

