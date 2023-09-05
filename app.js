const input = document.querySelector('.input-search')

function changeWeatherUI(weather) {
	const city = document.querySelector('.name .city')
	const country = document.querySelector('.name .country')
	const time = document.querySelector('.time')
	const temperature = document.querySelector('.temperature .value')
	const shortDesc = document.querySelector('.short-desc')

	const visibility = document.querySelector('.visibility span')
	const wind = document.querySelector('.wind span')
	const cloud = document.querySelector('.cloud span')

	city.innerHTML = weather.name
	country.innerHTML = weather.sys.country
	time.innerHTML = new Date().toLocaleString()
	shortDesc.innerHTML = weather.weather[0].main

	const temp = Math.round(weather.main.temp)
	temperature.innerHTML = temp

	temp >= 18
		? (document.body.className = 'hot')
		: (document.body.className = 'cold')

	visibility.innerHTML = weather.visibility + ' (m)'
	wind.innerHTML = weather.wind.speed + ' (m/s)'
	cloud.innerHTML = weather.clouds.all + ' (%)'
}

input.addEventListener('keyup', event => {

	
})

async function getWeather(input) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=c7e2cbd2a4ac69d1f5c7de44cd349dcc
	`
	const res = await fetch(url)
	const weather = await res.json()
	changeWeatherUI(weather)
}

getWeather('nam dinh')
