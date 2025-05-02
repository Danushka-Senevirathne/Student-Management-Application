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
        clone.querySelector('#tdLname').textContent = std.lname;
        // get subjects for 1 array
        const subjects = [std.subjects.subject1, std.subjects.subject2, std.subjects.subject3];
        clone.querySelector('#subject1').textContent = subjects[0];
        clone.querySelector('#subject2').textContent = subjects[1];
        clone.querySelector('#subject3').textContent = subjects[2];
      
        tbody.appendChild(clone);
    });
