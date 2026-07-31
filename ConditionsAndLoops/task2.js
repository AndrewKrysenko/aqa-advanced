const averageGrade2 =85.9
console.log("Your average grade is: " + averageGrade2);

switch (true) {
    case (averageGrade2 > 100):
        console.log("Чітер!");
        break;
    case (averageGrade2 > 90):
        console.log("Відмінно");
        break;
    case (averageGrade2 > 80):
        console.log("Дуже добре");
        break;
    case (averageGrade2 > 70):
        console.log("Добре");
        break;
    case (averageGrade2 >= 60):
        console.log("Задовільно");
        break;
    default:
        console.log("Незадовільно");
}