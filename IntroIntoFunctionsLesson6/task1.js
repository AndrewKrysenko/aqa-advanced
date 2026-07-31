function squareArea(a, b) {
    let area = a * b;
    area = Math.round(area * 100) / 100;
    return area;
}

const squareArea2 = function (x, y) {
    let area2 = x * y;
    area2 = Math.round(area2 * 100) / 100;
    return area2;
}

const squareArea3 = (m, n) => {
    let area3 = m * n;
    area3 = Math.round(area3 * 100) / 100;
    return area3;
}

console.log("The area of the rectangle with length " + 6 + " and width " + 5 + " is: " + squareArea(6, 5));
console.log("The area of the rectangle with length " + 18 + " and width " + 8 + " is: " + squareArea2(18, 8));
console.log("The area of the rectangle with length " + 2 + " and width " + 3 + " is: " + squareArea3(2, 3));