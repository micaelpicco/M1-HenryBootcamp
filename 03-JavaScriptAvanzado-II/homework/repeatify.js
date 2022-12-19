String.prototype.repeatify = function (n) {
  let cont = "";
  if (n <= 0) return "";
  else {
    for (let i = 0; i < n; i++) {
      cont += this;
    }
    return cont;
  }
};

console.log("zoolander ".repeatify(4));

console.log("milanga ".repeat(5));


