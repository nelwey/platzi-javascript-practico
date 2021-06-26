// Square
const perimeterSquare = (sideSquare) => {
  return sideSquare * 4;
}
const areaSquare = (sideSquare) => {
  return sideSquare ** 2;
}
// Triangle

const trianglePerimeter = (sideA, sideB, base) => {
  return Number(sideA) + Number(sideB) + Number(base);
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


const squarePerimeterCalc = () => {
  const input = document.getElementById("squareInput").value;
  const res = perimeterSquare(input);
  alert(res);
}

const squareAreaCalc = () => {
  const input = document.getElementById("squareInput").value;
  const res = areaSquare(input);
  alert(res);
}

const trianglePerimeterCalc = () => {
  const sideA = document.getElementById("sideATriangle").value;
  const sideB = document.getElementById("sideBTriangle").value;
  const base = document.getElementById("baseTriangle").value;
  const res = trianglePerimeter(sideA, sideB, base);
  alert(res);
}
const triangleAreaCalc = () => {
  const base = document.getElementById("baseTriangle").value;
  const height = document.getElementById("heightTriangle").value;
  const res = triangleArea(base, height);
  alert(res);
}

const circlePerimeterCalc = () => {
  const input = document.getElementById("circleRadius").value;
  const res = circlePerimeter(input);
  alert(res);
}
const circleAreaCalc = () => {
  const input = document.getElementById("circleRadius").value;
  const res = circleArea(input);
  alert(res);
}
const circleDiameterCalc = () => {
  const input = document.getElementById("circleRadius").value;
  const res = circleDiameter(input);
  alert(res);
}