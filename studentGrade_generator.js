const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function gradeStudents() {
  let students = {};

  const getStudentName = () => {
    rl.question("Enter student's name (type 'done' to finish): ", (studentName) => {
      if (studentName.toLowerCase() === 'done') {
        console.log("Student Grades:");
        for (let student in students) {
          console.log(`Name: ${student}, Marks: ${students[student].mark}, Grade: ${students[student].grade}`);
        }
        rl.close();
      } else {
        getStudentMark(studentName);
      }
    });
  };

  const getStudentMark = (studentName) => {
    rl.question(`Enter marks for ${studentName}, between 0 and 100: `, (mark) => {
      mark = parseInt(mark);
      if (mark >= 0 && mark <= 100) {
        let grade;
        switch (true) {
          case (mark > 79):
            grade = "A";
            break;
          case (mark >= 60):
            grade = "B";
            break;
          case (mark >= 50):
            grade = "C";
            break;
          case (mark >= 40):
            grade = "D";
            break;
          default:
            grade = "E";
        }
        students[studentName] = { mark, grade };
        getStudentName();
      } else {
        console.log("Invalid mark. Please enter mark between 0 and 100.");
        getStudentMark(studentName);
      }
    });
  };

  getStudentName();
}

gradeStudents();

