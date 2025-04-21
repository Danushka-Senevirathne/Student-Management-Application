import {studentManager} from './studentManger.js'

    const newStudent = new studentManager();
// display data in view student table

    const data = newStudent.showStudents();
    const template = document.querySelector('template');
    const tbody = document.getElementById('tbody');

    // clear the row
    tbody.innerHTML = '';

  
    data.forEach(std => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('#tdFname').textContent = std.fname;
        console.log("Fname is : ",std.fname);
        
        clone.querySelector('#tdLname').textContent = std.lname;
        clone.querySelector('#tdBday').textContent = std.bday;
        clone.querySelector('#tdNationalty').textContent = std.nationalty;
        clone.querySelector('#tdPhone').textContent = std.phone;
        clone.querySelector('#tdEmail').textContent = std.email;
        // combine address lines into one cell
        const fullAddress = [std.address.addline1, std.address.addline2, std.address.addline3].filter(line=>line.trim() !=='').join(', ');
        clone.querySelector('#tdAddress').textContent = fullAddress;
        // combine subjects lines into one call
        const allSubjects = [std.subjects.subject1, std.subjects.subject2, std.subjects.subject3].filter(line=>line.trim() !=='').join(', ');
        clone.querySelector('#tdSubjects').textContent = allSubjects;
        tbody.appendChild(clone);
    });
