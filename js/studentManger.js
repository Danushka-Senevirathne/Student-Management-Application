export class studentManager{
    constructor(){
        // convert JSON to object
        this.studentsArray = JSON.parse(localStorage.getItem('studentArray')) || [] // array for student object
    }
    
    addStudents(student){
        this.studentsArray.push(student); // push student object to students array
        localStorage.setItem('studentArray', JSON.stringify(this.studentsArray));
    }
    showStudents(){
        return this.studentsArray; 
    }
}




