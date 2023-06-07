console.log("HelloWorld!");

window.addEventListener("load", () => {
  let n = 0;
  let countnum, plusbutton;
  plusbutton = document.getElementById("plus-button");
  minusbutton = document.getElementById("minus-button");

  countnum = document.getElementById("count-num");
  function addCount() {
    n++;
    countnum.innerHTML = n;
  }
  function minusCount() {
    n--;
    countnum.innerHTML = n;
  }
  minusbutton.addEventListener("click", minusCount);
  plusbutton.addEventListener("click", addCount);
});
