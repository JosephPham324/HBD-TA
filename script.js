const container = document.querySelector('.container')
const biggerContainer = document.querySelector('.bigger-container')
var count = 0;
var height = container.offsetHeight
var part = height == 600? 100 / 125: 100 / 62

const interval = setInterval(()=>{

	const text = document.createTextNode('HappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthdayHappyBirthday');
	appendLine(container,text)
	console.log(`linear-gradient:to bottom, #F39C9C 0%, #F39C9C ${Math.ceil(count*part)}%`)
	biggerContainer.style.backgroundImage = `linear-gradient(to bottom, #F39C9C 0%, #F39C9C ${Math.ceil(count*part)}%, #fff ${Math.ceil(count*part)}%, #fff 100%)`
	count++
	switch (height){
		case 600:
			if (count == 125){
				clearInterval(interval)
			}
			break
		case 300:
			if (count == 63){
				clearInterval(interval)
			}
	}
		

},24)
interval

function appendLine(parent,textElement){
	parent.appendChild(textElement)
	parent.appendChild(document.createElement('br'))
}