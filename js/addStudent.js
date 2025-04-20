import {studentManager} from './studentManger.js'

const newStudent = new studentManager(); // globle class object

document.getElementById('stdForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    
    // get form data
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const bday = document.getElementById('bday').value;
    const nationalty = document.getElementById('nationalty').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const addline1 = document.getElementById('addressLine1').value;
    const addline2 = document.getElementById('addressLine2').value;
    const addline3 = document.getElementById('addressLine3').value;
    const subject1 = document.getElementById('subject1').value;
    const subject2 = document.getElementById('subject2').value;
    const subject3 = document.getElementById('subject3').value;

    // address object
    const address = {
        addline1: addline1,
        addline2: addline2,
        addline3: addline3
    }

    // subject object 
    const subjects ={
        subject1: subject1,
        subject2: subject2,
        subject3: subject3
    }
    // data object
    const student = {
        fname,lname,bday,nationalty,phone,email,address,subjects
    }

    //call addStudent method
    newStudent.addStudents(student);
    console.log(newStudent.showStudents());


})
