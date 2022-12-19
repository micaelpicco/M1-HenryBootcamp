function Shape() {
  Type = "";
}

Shape.prototype.getType = function () {
  return this.type;
};

Shape.prototype.getPerimeter = function () {
  if (this.type === "Triangle") return (this.a + this.b + this.c);
  if (this.type === "Circle") return (2 * Math.PI * this.a);
};

function Triangle(a, b, c) {
  this.type = "Triangle";
  this.a = a;
  this.b = b;
  this.c = c;
  //this.getPerimeter = function () {
  //  return a + b + c;
  //};
}

Triangle.prototype = Object.create(Shape.prototype);

//Triangle.prototype = new Shape();

var t = new Triangle(1, 2, 3);
console.log(t instanceof Triangle);
// true
console.log(Shape.prototype.isPrototypeOf(t));
// true
console.log(t.getPerimeter());
// 6
console.log(t.getType());
// "Triangle"

function Circle(a) {
  this.type = "Circle";
  this.a = a;
  //this.getPerimeter = function () {
  //  return 2 * Math.PI * a;
  //};
}

Circle.prototype = Object.create(Shape.prototype);

//Circle.prototype = new Shape();

var c = new Circle(2);
console.log(c instanceof Circle);
// true
console.log(Shape.prototype.isPrototypeOf(c));
// true
console.log(c.getPerimeter());
// 12.566370614359172
console.log(c.getType());
// "Circle"
