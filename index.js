let array = [];
let expressionString;

const changeHeading = (value) => {
  if (array.length < 23) {
    expressionString = "";
    document.getElementById("heading").value += value;
    array.push(value);
    expressionString = array.join("");
    document.getElementById("heading").innerHTML = expressionString;
  }
};

const calculate = () => {
  let expression = eval(expressionString);
  document.getElementById("heading").innerHTML = expression;
};

const reset = () => {
  array = [];
  expressionString = "0";
  document.getElementById("heading").innerHTML = expressionString;
};

const del = () => {
  array.pop();
  expressionString = array.join("");
  document.getElementById("heading").innerHTML = expressionString;
};
