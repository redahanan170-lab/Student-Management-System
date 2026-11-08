
// =====================================
// 1. Student Class
// =====================================

class Student {

    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate Average using reduce
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // Calculate Grade using if / else
    calculateGrade(average) {

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Calculate Final Result using &&
    calculateResult(average) {

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}


// =====================================
// 2. Create Students Objects Array
// =====================================

let studentsList = [

    new Student(1, "Ahmed", [80, 90, 85], 90),

    new Student(2, "Mohamed", [45, 40, 48], 80),

    new Student(3, "Sara", [90, 85, 95], 95),

    new Student(4, "Mona", [42, 45, 48], 90)

];


// =====================================
// 3. Print Students Reports
// =====================================

console.log("===== Students Reports =====");

studentsList.forEach(student => {

    let average = student.calculateAverage();

    let grade = student.calculateGrade(average);

    let result = student.calculateResult(average);

    console.log("Student Name:", student.name);
    console.log("Average:", average.toFixed(2));
    console.log("Grade:", grade);
    console.log("Result:", result);

    console.log("-------------------------");

});


// =====================================
// 4. Filter Students (40 - 49)
// =====================================

let strugglingStudents = studentsList.filter(student => {

    let average = student.calculateAverage();

    return average >= 40 && average <= 49;

});


// =====================================
// 5. Add 5 Grace Marks using map
// =====================================

let graceStudents = strugglingStudents.map(student => {

    return {
        name: student.name,
        oldAverage: student.calculateAverage(),
        newAverage: student.calculateAverage() + 5
    };

});


// =====================================
// 6. Calculate New Averages using reduce
// =====================================

let totalNewAverages = graceStudents.reduce((sum, student) => {

    return sum + student.newAverage;

}, 0);


// =====================================
// 7. Calculate General Grace Average
// =====================================

let graceAverage = 0;

if (graceStudents.length > 0) {

    graceAverage = totalNewAverages / graceStudents.length;

}


// =====================================
// 8. Print Grace Committee Results
// =====================================

console.log("===== Grace Committee =====");

console.log("Struggling Students:", graceStudents);

console.log("Average After Grace Marks:", graceAverage.toFixed(2));
