const container = document.querySelector('.container')
const biggerContainer = document.querySelector('.bigger-container')
const activate = document.querySelector('.activate')
const click = new Audio('detonate.m4a')
const tada = new Audio('tada.mp3')

activate.addEventListener('click',()=>{
	click.play()
	setTimeout(()=>activate.style.display = 'none', 100)
	setTimeout(()=>{
		biggerContainer.style.display = 'block'
		setTimeout(()=>interval(),250)
	},400)
})

var count = 0;
var smallScreen = document.querySelector('body').offsetWidth >480? false: true
var part = smallScreen? 100 / 62: 100 / 125

const interval = ()=>setInterval(()=>{

	const text = document.createTextNode('HappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthday');
	container.appendChild(text)
	container.appendChild(document.createElement('br'))
	biggerContainer.style.backgroundImage = `linear-gradient(to bottom, #F39C9C 0%, #F39C9C ${Math.ceil(count*part)}%, #fff ${Math.ceil(count*part)}%, #fff 100%)`
	count++
	switch (smallScreen){
		case false:
			if (count == 125){
				clearInterval(interval)
				tada.play()
			}
			break
		case true:
			if (count == 63){
				tada.play()
				clearInterval(interval)
			}
	}
		

},24)

function appendLine(parent,textElement){
	parent.appendChild(textElement)
	parent.appendChild(document.createElement('br'))
}