var t,
	h,
	m,
	s,
	hour = document.querySelector('.hour'),
	minute = document.querySelector('.minute'),
	second = document.querySelector('.second'),
	M = document.querySelector('.M')

function Generate() {
	t = new Date()
	h = t.getHours()
	m = t.getMinutes()
	s = t.getSeconds()

	MakeSure()

	hour.innerHTML = h
	minute.innerHTML = m
	second.innerHTML = s
}

setInterval(() => {
	Generate()
}, 1000)

function MakeSure() {
	if (h > 12) {
		M.innerHTML = 'PM'
	} else {
		M.innerHTML = 'AM'
	}

	if (h > 12) {
		h -= 12
		if (h >= 10) {
			h = h
		} else {
			h = '0' + h
		}
	} else if (h <= 9) {
		h = '0' + h
	} else {
		h = h
	}

	if (m < 10) {
		m = '0' + m
	} else {
		m = m
	}

	if (s < 10) {
		s = '0' + s
	} else {
		s = s
	}
}
