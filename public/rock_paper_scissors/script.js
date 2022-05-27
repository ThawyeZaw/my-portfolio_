var mark = 0
const correct = new Audio("./sounds/correct.mp3"),
  wrong = new Audio("./sounds/wrong.mp3"),
  markshow = document.querySelector(".title h5"),
  me = document.querySelector(".me img"),
  bot = document.querySelector(".bot img"),
  choose = document.querySelectorAll(".btns div"),
  res = document.querySelector(".play button"),
  rock = document.querySelector(".rock img"),
  paper = document.querySelector(".paper img"),
  scissors = document.querySelector(".scissors img"),
  links = ["images/rock.png", "images/scissors.png", "images/paper.png"]

//all variables above

//function for play button
function start() {
  markshow.innerHTML = `Your mark is ${mark}`
  res.classList.add("restart")
  res.innerHTML = "Restart"
}

//event listeners for buttons

rock.addEventListener("click", function () {
  me.setAttribute("src", "images/rock.png")
  randomChoice()
  MarkCalculation()
})
paper.addEventListener("click", function () {
  me.setAttribute("src", "images/scissors.png")
  randomChoice()
  MarkCalculation()
})
scissors.addEventListener("click", function () {
  me.setAttribute("src", "images/paper.png")
  randomChoice()
  MarkCalculation()
})

res.addEventListener("click", function () {
  me.setAttribute("src", "images/question-mark.png")
  bot.setAttribute("src", "images/question-mark.png")
  mark = 0
  markshow.innerHTML = ""
})

//function for bot's choice
function randomChoice() {
  item = links[Math.floor(Math.random() * links.length)]
  bot.setAttribute("src", `${item}`)
}

//Mark Calculation systems
function MarkCalculation() {
  myattri = me.getAttribute("src")
  botattri = bot.getAttribute("src")
  if (myattri == "images/rock.png") {
    if (botattri == "images/scissors.png") {
      correct.play()
      mark += 1
      markshow.innerHTML = `Your mark is ${mark}`
    } else if (botattri == "images/paper.png") {
      wrong.play()
      mark -= 1
      markshow.innerHTML = `Your mark is ${mark}`
    } else if (botattri == "images/rock.png") {
      wrong.play()
      mark += 0
      markshow.innerHTML = `Your mark is ${mark}`
    } else {
      alert("Error")
    }
  } else if (myattri == "images/paper.png") {
    if (botattri == "images/scissors.png") {
      wrong.play()
      mark -= 1
      markshow.innerHTML = `Your mark is ${mark}`
    } else if (botattri == "images/paper.png") {
      wrong.play()
      mark += 0
      markshow.innerHTML = `Your mark is ${mark}`
    } else if (botattri == "images/rock.png") {
      correct.play()
      mark += 1
      markshow.innerHTML = `Your mark is ${mark}`
    } else {
      alert("Error")
    }
  } else if (myattri == "images/scissors.png") {
    if (botattri == "images/scissors.png") {
      wrong.play()
      mark += 0
      markshow.innerHTML = `Your mark is ${mark}`
    } else if (botattri == "images/paper.png") {
      correct.play()
      mark += 1
      markshow.innerHTML = `Your mark is ${mark}`
    } else if (botattri == "images/rock.png") {
      wrong.play()
      mark -= 1
      markshow.innerHTML = `Your mark is ${mark}`
    } else {
      alert("Error")
    }
  } else {
    alert("something went wrong!")
  }
}
