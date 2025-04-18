const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').textContent;
const bday = document.getElementById('bday').textContent;
const nationalty = document.getElementById('nationalty').textContent;
const phone = document.getElementById('phone').textContent;
const email = document.getElementById('email').textContent;
const addline1 = document.getElementById('addressLine1').textContent;
const addline2 = document.getElementById('addressLine2').textContent;
const addline3 = document.getElementById('addressLine3').textContent;
const subject1 = document.getElementById('subject1').textContent;
const subject2 = document.getElementById('subject2').textContent;
const subject3 = document.getElementById('subject3').textContent;

class Students {
    constructor(fname) {
        this.fname = fname;
    }

    studentData() {
        name: this.fname
    }

}


function getData (){
    const newStudent = new Students(fname);
    console.log("Done!");
    console.log(newStudent);
    
}