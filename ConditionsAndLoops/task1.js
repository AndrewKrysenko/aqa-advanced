const averageGrade =99.9
console.log("Your average grade is: " + averageGrade);

if (averageGrade > 100) {
    console.log("Чітер!");
} else if (averageGrade > 90) {
    console.log("Відмінно");
}else if (averageGrade > 80) {
    console.log("Дуже добре");
} else if (averageGrade > 70) {
    console.log("Добре");
} else if (averageGrade >= 60) {
    console.log("Задовільно");
} else {
    console.log("Незадовільно");
}