console.log("HelloWorld!");

window.addEventListener("load", () => {
  let n = 0;
  let countnum, plusbutton;
  plusbutton = document.getElementById("plus-button");
  countnum = document.getElementById("count-num");
  function addCount() {
    n++;
    countnum.innerHTML = n;
  }
  plusbutton.addEventListener("click", addCount);
});
