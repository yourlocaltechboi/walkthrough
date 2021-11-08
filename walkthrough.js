const header = document.querySelector('#pageTitle')
const content = document.querySelector('#pageContent')
const navBlock = document.querySelector('#navOptions')

class navButton{
    constructor(text, location){
        this.text = text
        this.location = location
        const buttonHTML = `<div class='button' onclick='${this.location}'><p><b>${this.text}</b></p></div>`
        navBlock.innerHTML = buttonHTML
    }
}

function loadIntro(){
    header.innerText = 'Free. Your. Device.'
    content.innerHTML = '<div include=\'pages/intro.html\'></div>'
    new navButton('Get Started!', 'loadAboutJB()')
    includeHTML()
}
function loadAboutJB(){
    alert('Please make sure you\'ve bookmarked this site if this is the device to be jailbroken!')
    header.innerText = 'What is Jailbreaking?'
    content.innerText = 'Jailbreaking is the process of bypassing the security measures on a device (in this case an iPhone or iPad) in order to execute third-party code.\n\nThe process does come with a few security drawbacks, however the iOS jailbreak community is usually very good at mitigating these issues.\n\nJailbreaks are created using security vulnerabilities found in-the-wild by iOS security researchers, which are then exploited to gain root access on a device.'
    new navButton('What\'s the point?', 'loadReasonsToJB()')
    includeHTML()
}