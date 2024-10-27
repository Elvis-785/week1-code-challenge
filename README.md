# week1-code-challenge
Toy problems
`Challenge 1; Student grade generator`
 Add interactive student grading system using node.js

features:
- Prompts user for student names and marks.
- Validates marks to ensure they fall within the 0-100 range.
- Assigns grades based on the marks entered.
- Displays the final list of students with their respective marks and grades.
- Utilizes the `readline` module for seamless user interaction.
- Implements a continuous loop to add multiple students until user types 'done'.
- Ensures proper input validation and error handling for marks.

This functionality streamlines the process of grading students in an interactive manner, making it user-friendly and efficient.

`Challenge 2: Speed Detector`
The constants of speed limit and points:
- The speedlimit is set to 70km/h.
- For every 5km/h above the limit, a points per 5km of 1 is added.
- The maximum allowed maxPoints is 12.
Checking the speed:
    If the speed is less than or equal to the speed limit, we console.log("Ok");printing.
    else, the number of points is calculated using Math.floor((speed-speedlimit)/5)*pointsPer5km.
Checking whether the lisence is suspended.
    If calculated points is more than the maxPoints, with console.log("License suspended") will be printed.
    else, the number of points is printed.

`Challenge 3: Net Salary Calculator.`
It calculates an individual net salary by considering the basic salary and benefits.
The program takes inputs of basic salary and benefits, apply deductions for PAYE(Tax), NHIF, and NSSF based on Kenyan rates.
The logic of calculating gross salary, net salary and other deductions is included.


