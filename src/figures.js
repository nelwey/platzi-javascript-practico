// Square
const sideSquare = 5;
const perimeterSquare = sideSquare * 4;
const areaSquare = sideSquare ** 2;

console.group("Square");
console.log(`The square side are ${sideSquare}cm`);
console.log(`The square perimeter is ${perimeterSquare}cm`);
console.log(`The square area is ${areaSquare}cm^2`);
console.groupEnd();

// Triangle
const triangleSides = [6, 6, 4];
const triangleBase = triangleSides[2];
const triangleHeight = 5.5;
const trianglePerimeter =
  triangleSides[0] + triangleSides[1] + triangleSides[2];
const triangleArea = (triangleBase * triangleHeight) / 2;

console.group("Triangle");
console.log(`The triangle sides are ${triangleSides}cm`);
console.log(`The triangle height is ${triangleHeight}cm`);
console.log(`The triangle perimeter is ${trianglePerimeter}cm`);
console.log(`The triangle area is ${triangleArea}cm^2`);
console.groupEnd();

// Circle
const circleRadius = 4;
const circleDiameter = circleRadius + circleRadius;
const PI = Math.PI;
const circlePerimeter = circleDiameter * PI;
const circleArea = circleRadius * circleRadius * PI;

console.group("Circle");
console.log(`The circle radius is ${circleRadius}`);
console.log(`The circle diameter is ${circleDiameter}`);
console.log(`PI is ${PI}`);
console.log(`The circle perimeter is ${circlePerimeter}`);
console.log(`The circle area is ${circleArea}`);
console.groupEnd();
