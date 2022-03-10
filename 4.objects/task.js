function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let grisha = new Student('Grisha', 'male', 18);
let nikita = new Student('Nikita', 'male', 20);
let sonya = new Student('Sonya', 'female', 19);

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if( !this.marks ) this.marks = marks; 
  else this.marks = this.marks.concat(marks);
}

Student.prototype.getAverage = function () {
  if (!this.marks === undefined){
    return 'нет оценок';
  } else {
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  const lenght = this.marks.length;
  return sum / lenght;
  };
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;

};

// ваш код для остальных методов