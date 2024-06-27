class student {
  major: string;
  studentCode: number;
  grade: string;
  constructor(major, studentCode, grade) {
    this.major = major;
    this.studentCode = studentCode;
    this.grade = grade;
  }

  print() {
    console.log(`${this.studentCode}학번`);
    console.log(`나의 전공은 ${this.major}입니다.`);
    console.log(`성적은 ${this.grade}입니다.`);
  }
}

const hyung = new student('체육학', 2005, 'C');
hyung.print();
console.log(hyung);
