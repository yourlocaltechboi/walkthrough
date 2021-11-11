const header = document.querySelector('#pageTitle')
const content = document.querySelector('#pageContent')
const navBlock = document.querySelector('#navOptions')
const menuBar = document.querySelector('#menuBar')

var lastPage

class navButton{
    constructor(text, location){
        this.text = text
        this.location = location
        const buttonHTML = `<div class='button' onclick='${this.location}'><p><b>${this.text}</b></p></div>`
        navBlock.innerHTML = buttonHTML
    }
}
class tableButton{
    constructor(state){
        menuBar.querySelector('div').style.display = state
    }
}

function tableOfContents(){
    new tableButton('none')
    header.innerText = 'Table of Contents'
    content.innerHTML = '<div include=\'pages/tableofcontents.html\'></div>'
    new navButton(`Close (Back to ${lastPage[1]})`, `load${lastPage[0]}()`)
    includeHTML()
}

function loadIntro(){
    new tableButton('initial')
    header.innerText = 'Free. Your. Device.'
    content.innerHTML = '<div include=\'pages/intro.html\'></div>'
    new navButton('Get Started!', 'loadAboutJB()')
    lastPage = ['Intro', 'Intro']
    includeHTML()
}
function loadAboutJB(){
    new tableButton('initial')
    header.innerText = 'What is Jailbreaking?'
    content.innerHTML = '<div include=\'pages/aboutJB.html\'></div>'
    new navButton('What\'s the point?', 'loadReasonsToJB()')
    lastPage = ['AboutJB', 'About Jailbreaking']
    includeHTML()
}