const header = document.querySelector('#pageTitle')
const content = document.querySelector('#pageContent')
const navBlock = document.querySelector('#navOptions')
const menuBar = document.querySelector('#menuBar')
const deviceMenu = document.querySelector('#deviceMenu')
const versionMenu = document.querySelector('#versionMenu')

var lastPage

class navButton{
    constructor(text, location){
        const buttonHTML = `<div class='button' onclick='${location}'><p><b>${text}</b></p></div>`
        navBlock.innerHTML = buttonHTML
        navBlock.querySelector('.button').style.display = ''
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
    content.innerHTML = '<div include=\'pages/pageContents/tableofcontents.html\'></div>'
    new navButton(`Close (Back to \'${lastPage[1]}\')`, `load${lastPage[0]}()`)
    refreshNavBlock()
    includeHTML()
}

function loadIntro(){
    new tableButton('initial')
    header.innerText = 'Free. Your. Device.'
    content.innerHTML = '<div include=\'pages/pageContents/introPages/intro.html\'></div>'
    new navButton('Get Started!', 'loadAboutJB()')
    refreshNavBlock()
    lastPage = ['Intro', 'Intro']
    document.cookie = 'page=Intro'
    includeHTML()
}
function loadAboutJB(){
    new tableButton('initial')
    header.innerText = 'What is Jailbreaking?'
    content.innerHTML = '<div include=\'pages/pageContents/introPages/aboutJB.html\'></div>'
    new navButton('What\'s the point?', 'loadReasonsToJB()')
    refreshNavBlock()
    lastPage = ['AboutJB', 'About jailbreaking']
    document.cookie = 'page=AboutJB'
    includeHTML()
}
function loadReasonsToJB(){
    new tableButton('initial')
    header.innerText = 'Why should you Jailbreak?'
    content.innerHTML = '<div include=\'pages/pageContents/introPages/whyJB.html\'></div>'
    new navButton('What are the caveats?', 'loadCaveats()')
    refreshNavBlock()
    lastPage = ['ReasonsToJB', 'What\'s the point of jailbreaking?']
    includeHTML()
}
function loadCaveats(){
    new tableButton('initial')
    header.innerText = 'Caveats of Jailbreaking'
    content.innerHTML = '<div include=\'pages/pageContents/introPages/JBCaveats.html\'></div>'
    new navButton('Ready to Start', 'loadDisclaimer()')
    refreshNavBlock()
    lastPage = ['Caveats', 'What are the caveats?']
    includeHTML()
}
function loadDisclaimer(){
    new tableButton('initial')
    header.innerText = 'DISCLAIMER'
    content.innerHTML = '<div include=\'pages/pageContents/introPages/disclaimer.html\'></div>'
    new navButton('Accept and Continue', 'loadDevicePicker()')
    refreshNavBlock()
    lastPage = ['Disclaimer', 'Disclaimer']
    includeHTML()
}
function loadDevicePicker(){
    new tableButton('initial')
    header.innerText = 'Pick your device:'
    content.innerHTML = '<div include=\'pages/pageContents/devices/devicePicker.html\'></div>'
    navBlock.querySelector('.button').style.display = 'none'
    refreshNavBlock()
    lastPage = ['DevicePicker', 'Which device do you have?']
    includeHTML()
}

function refreshNavBlock(){
    if (navBlock.querySelector('.button').style.display == 'none'){
        navBlock.style.height = '20px'
    }
    else if (navBlock.querySelector('.button').style.display == ''){
        navBlock.style.height = '70px'
    }
}
