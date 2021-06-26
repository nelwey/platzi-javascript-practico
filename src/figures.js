// Square
const perimeterSquare = (sideSquare) => {
  return sideSquare * 4;
}
const areaSquare = (sideSquare) => {
  return sideSquare ** 2;
}
// Triangle

const trianglePerimeter = (sideA, sideB, base) => {
  return sideA + sideB + base;
}

const triangleArea = (base, height) => {
  return (base * height) / 2;
}

// Circle
const circleDiameter = (radius) => {
  return radius * 2;
}
const circlePerimeter = (radius) => {
  const diameter = circleDiameter(radius);
  return diameter * Math.PI;
}

const circleArea = (radius) => {
  return radius * radius * Math.PI;
}
