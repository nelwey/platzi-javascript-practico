const printName = (name, lastName, nickname) => {
  const fullName = `${name} ${lastName}`;
  return `Mi nombre es ${fullName}, pero prefiero que me digas ${nickname}.`;
};

console.log(printName("Juan David", "Castro Gallego", "juandc"));
