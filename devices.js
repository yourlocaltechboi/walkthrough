function loadiPhones(page){
    if (page == 'home'){
        new tableButton('initial')
        header.innerText = 'Pick your iPhone:'
        content.innerHTML = '<div include=\'pages/pageContents/phones.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        includeHTML()
    }
}
function loadiPads(page){
    if (page == 'home'){
        new tableButton('initial')
        header.innerText = 'Pick your iPad:'
        content.innerHTML = '<div include=\'pages/pageContents/tablets.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        includeHTML()
    }
}