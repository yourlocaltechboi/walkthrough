function loadiPhones(page){
    if (page == 'home'){
        new tableButton('initial')
        header.innerText = 'Pick your iPhone:'
        content.innerHTML = '<div include=\'pages/pageContents/tableofcontents.html\'></div>'
        new navButton(`Close (Back to \'${lastPage[1]}\')`, `load${lastPage[0]}()`)
        includeHTML()
    }
}