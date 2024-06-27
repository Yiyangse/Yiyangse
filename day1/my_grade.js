var student = /** @class */ (function () {
    function student(major, studentCode, grade) {
        this.major = major;
        this.studentCode = studentCode;
        this.grade = grade;
    }
    student.prototype.print = function () {
        console.log("".concat(this.studentCode, "\uD559\uBC88"));
        console.log("\uB098\uC758 \uC804\uACF5\uC740 ".concat(this.major, "\uC785\uB2C8\uB2E4."));
        console.log("\uC131\uC801\uC740 ".concat(this.grade, "\uC785\uB2C8\uB2E4."));
    };
    return student;
}());
var hyung = new student('체육학', 2005, 'C');
hyung.print();
console.log(hyung);
