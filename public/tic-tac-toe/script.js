var yourPlayer,
	num,
	cell = document.querySelectorAll('.cell'),
	wrapper = document.querySelector('.wrapper'),
	span = document.querySelector('.doc span'),
	winingCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

cell.forEach(cellItem => {
	cellItem.addEventListener('click', handleClick)
})

cell.forEach(item => {
	item.addEventListener('mouseenter', () => {
		if (!(item.classList.contains('x') || item.classList.contains('o'))) {
			item.innerHTML = isYou(true)
			item.classList.add('h')
		}
	})
})

cell.forEach(item => {
	item.addEventListener('mouseout', () => {
		if (!(item.classList.contains('x') || item.classList.contains('o'))) {
			item.innerHTML = ''
			item.classList.remove('h')
		}
	})
})

function restart() {
	wrapper.style.display = 'grid'
	cell.forEach(c => {
		c.innerHTML = ''
		c.classList.remove('x')
		c.classList.remove('o')
		c.disabled = false
	})
}

function chooseYourPlayer(c) {
	yourPlayer = c
	wrapper.style.display = 'none'
	span.innerHTML = isYou(true)
}

function isYou(boo) {
	if (boo) {
		return yourPlayer
	} else {
		if (yourPlayer == 'x') {
			return 'o'
		} else {
			return 'x'
		}
	}
}

function handleClick() {
	if (!(this.classList.contains('x') || this.classList.contains('o'))) {
		var item = this
		item.disabled = true
		item.innerHTML = isYou(true)
		item.classList.add(isYou(true))
		item.classList.remove('h')
		if (isFinish(isYou(false))) {
			alert(`You lose against ${isYou(false)}`)
			resetCells()
			restart()
		} else if (isFinish(isYou(true))) {
			alert(`You win against ${isYou(false)}`)
			resetCells()
			restart()
		} else if (isDraw()) {
			alert(`It was a draw`)
			resetCells()
			restart()
		} else {
			botTurn()
		}
	}
}

function isDraw() {
	return [...cell].every(item => {
		return item.classList.contains(isYou(true)) || item.classList.contains(isYou(false))
	})
}

function resetCells() {
	cell.forEach(item => {
		item.innerHTML = ''
		item.disabled = false
	})
}

function botTurn() {
	cell.forEach(item => {
		item.disabled = true
	})
	span.innerHTML = isYou(false)
	setTimeout(() => {
		botChoice()
		cell.forEach(item => {
			item.disabled = false
		})
		span.innerHTML = isYou(true)
	}, 1500)
}

function botChoice() {
	num = GenerateRandom()
	if (!(cell[num].classList.contains('x') || cell[num].classList.contains('o'))) {
		cell[num].innerHTML = isYou(false)
		cell[num].classList.add(isYou(false))
	} else {
		botChoice()
	}
}

function GenerateRandom() {
	return Math.floor(Math.random() * 9)
}

function isFinish(player) {
	return winingCombos.some(combo => {
		return combo.every(itemNum => {
			return cell[itemNum].classList.contains(player)
		})
	})
}

//ANCHOR: well done, keep working
