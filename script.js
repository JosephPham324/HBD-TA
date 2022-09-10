const container = document.querySelector('.container')
const biggerContainer = document.querySelector('.bigger-container')
const activate = document.querySelector('.activate')
const click = new Audio('detonate.m4a')
const tada = new Audio('tada.mp3')
var count = 0;
var smallScreen = document.querySelector('body').offsetWidth >480? false: true
var part = smallScreen? 100 / 62: 100 / 125

activate.addEventListener('click',()=>{
	click.play()
	setTimeout(()=>activate.style.display = 'none', 100)
	setTimeout(()=>{
		biggerContainer.style.display = 'block'
		setTimeout(()=>interval(),250)
	},400)
})

//Interval for adding text (content) to container
const interval = ()=>{
	const thisInterval = setInterval(()=>{
		const text = document.createTextNode('HappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthday');
		appendLine(container, text)
		biggerContainer.style.backgroundImage = `linear-gradient(to bottom, #F39C9C 0%, #F39C9C ${Math.ceil(count*part)}%, #00FFFF ${Math.ceil(count*part)}%, #00FFFF 100%)`
		count++
		if (smallScreen && count == 63){
					tada.play()
					clearInterval(thisInterval)
					container.style.boxShadow = '0px 2px 10px #C70C0C'
		} else if (count == 125){
					tada.play()
					container.style.boxShadow = '0px 2px 10px #C70C0C'
					clearInterval(thisInterval)
		}
	},smallScreen? 24: 12)
}

function appendLine(parent,textElement){
	parent.appendChild(textElement)
	parent.appendChild(document.createElement('br'))
}
