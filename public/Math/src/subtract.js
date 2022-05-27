const correct = new Audio("../sounds/correct.mp3"),
  wrong = new Audio("../sounds/wrong.mp3"),
  one = document.getElementById("one"),
  two = document.getElementById("two")
var num1, num2, value, ans

window.addEventListener("load", () => {
  Generate()
})

function Generate() {
  num1 = Math.floor(Math.random() * 100)
  num2 = Math.floor(Math.random() * 50)
  if (num1 > num2) {
     ans = num1 - num2
     one.innerHTML = num1
     two.innerHTML = num2
  } else {
   ans = num2 - num1
   one.innerHTML = num2
   two.innerHTML = num1
  }
  document.getElementById('ans').value = ""
}

function answer() {
  value = document.getElementById("ans").value
  if (value == ans) {
    correct.play()
    alert("correct")
  }
  else if(value == ''){
     alert("answer can't be empty")
  }
  else{
     wrong.play()
     alert("wrong")
  }
}

function writeNum(number) {
   document.getElementById('ans').value += number
}