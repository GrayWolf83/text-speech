// Инициализация нового объекта SpeechSynthesisUtterance
let speech = new SpeechSynthesisUtterance()

// Установка языка речи
speech.lang = 'ru'

let voices = [] // глобальный массив доступных голосов

window.speechSynthesis.onvoiceschanged = () => {
	// Получение списка голосов
	voices = window.speechSynthesis.getVoices()

	// Первоначальная установка первого голоса в массиве
	speech.voice = voices[0]

	// Установка списка выбора голосов (задаем индекс в качестве значения, который в дальнейшем потребуется при обновлении пользователем голоса посредством меню Select)
	let voiceSelect = document.querySelector('#voices')
	voices.forEach(
		(voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)),
	)
}

document.querySelector('#rate').addEventListener('input', () => {
	// Получение значения rate из input
	const rate = document.querySelector('#rate').value

	// Установка свойства rate экземпляра SpeechSynthesisUtterance
	speech.rate = rate

	// Обновление метки rate
	document.querySelector('#rate-label').innerHTML = rate
})

document.querySelector('#volume').addEventListener('input', () => {
	// Получение значения volume из input
	const volume = document.querySelector('#volume').value

	// Установка свойства volume экземпляра SpeechSynthesisUtterance
	speech.volume = volume

	// Обновление метки volume
	document.querySelector('#volume-label').innerHTML = volume
})

document.querySelector('#pitch').addEventListener('input', () => {
	// Получение значения pitch из input
	const pitch = document.querySelector('#pitch').value

	// Установка свойства pitch экземпляра SpeechSynthesisUtterance
	speech.pitch = pitch

	// Обновление метки pitch
	document.querySelector('#pitch-label').innerHTML = pitch
})

document.querySelector('#voices').addEventListener('change', () => {
	// При изменении голоса используется значение меню выбора (которое является индексом голоса в глобальном массиве голосов)
	speech.voice = voices[document.querySelector('#voices').value]
})

document.querySelector('#start').addEventListener('click', () => {
	// Установка свойства text со значением textarea
	speech.text = document.querySelector('textarea').value

	// Запуск озвучки
	window.speechSynthesis.speak(speech)
})

document.querySelector('#pause').addEventListener('click', () => {
	// Приостановка экземпляра speechSynthesis
	window.speechSynthesis.pause()
})

document.querySelector('#resume').addEventListener('click', () => {
	// Возобновление приостановленного экземпляра speechSynthesis
	window.speechSynthesis.resume()
})

document.querySelector('#cancel').addEventListener('click', () => {
	// Отмена экземпляра speechSynthesis
	window.speechSynthesis.cancel()
})
