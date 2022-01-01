var chkrn
var unthr
var deviceType

function loadiPhones(page){
    deviceType = ['iPhone', page]
    if (page == 1){
        new tableButton('initial')
        header.innerText = 'Pick your iPhone:'
        content.innerHTML = '<div include=\'pages/pageContents/devices/phones.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "DevicePicker()")
        refreshNavBlock()
        includeHTML()
    }
    if (page == 15){
        new tableButton('initial')
        header.innerText = 'Versions Available for A15 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a15.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPhones(1)")
        refreshNavBlock()
        chkrn = false
        unthr = false
        includeHTML()
    }
    if (page == 14){
        new tableButton('initial')
        header.innerText = 'Versions Available for A14 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a14.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPhones(1)")
        refreshNavBlock()
        chkrn = false
        unthr = true
        includeHTML()
    }
    if (page == 13){
        new tableButton('initial')
        header.innerText = 'Versions Available for A13 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a13.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPhones(1)")
        refreshNavBlock()
        chkrn = false
        unthr = true
        includeHTML()
    }
    if (page == 12){
        new tableButton('initial')
        header.innerText = 'Versions Available for A12 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a12.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPhones(1)")
        refreshNavBlock()
        chkrn = false
        unthr = true
        includeHTML()
    }
    if (page == 11){
        new tableButton('initial')
        header.innerText = 'Versions Available for A11 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a11.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPhones(1)")
        refreshNavBlock()
        chkrn = true
        unthr = false
        includeHTML()
    }
    if (page == 10){
        new tableButton('initial')
        header.innerText = 'Versions Available for A10 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a10.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPhones(1)")
        refreshNavBlock()
        chkrn = true
        unthr = false
        includeHTML()
    }
    if (page == 9){
        new tableButton('initial')
        header.innerText = 'Versions Available for A9 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a9.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPhones(1)")
        refreshNavBlock()
        chkrn = true
        unthr = false
        includeHTML()
    }
    if (page == 0){
        new tableButton('initial')
        header.innerText = 'Legacy Devices/Versions'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/legacy.html\'></div>'
        navBlock.querySelector('.button').style.display = ''
        new backButton(true, "iPhones(1)")
        refreshNavBlock()
        includeHTML()
    }
}
function loadiPads(page){
    deviceType = ['iPad', page]
    if (page == 1){
        new tableButton('initial')
        header.innerText = 'Pick your iPad:'
        content.innerHTML = '<div include=\'pages/pageContents/devices/tablets.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "DevicePicker()")
        refreshNavBlock()
        includeHTML()
    }
    if (page == -1){
        new tableButton('initial')
        header.innerText = 'Versions Available for M1 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/m1.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPads(1)")
        refreshNavBlock()
        chkrn = false
        unthr = false
        includeHTML()
    }
    if (page == 15){
        new tableButton('initial')
        header.innerText = 'Versions Available for A15 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a15.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPads(1)")
        refreshNavBlock()
        chkrn = false
        unthr = false
        includeHTML()
    }
    if (page == 14){
        new tableButton('initial')
        header.innerText = 'Versions Available for A14 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a14.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPads(1)")
        refreshNavBlock()
        chkrn = false
        unthr = true
        includeHTML()
    }
    if (page == 13){
        new tableButton('initial')
        header.innerText = 'Versions Available for A13 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a13.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPads(1)")
        refreshNavBlock()
        chkrn = false
        unthr = true
        includeHTML()
    }
    if (page == 12){
        new tableButton('initial')
        header.innerText = 'Versions Available for A12 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a12.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPads(1)")
        refreshNavBlock()
        chkrn = false
        unthr = true
        includeHTML()
    }
    if (page == 11){
        new tableButton('initial')
        header.innerText = 'Versions Available for A11 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a11.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPads(1)")
        refreshNavBlock()
        chkrn = true
        unthr = false
        includeHTML()
    }
    if (page == 10){
        new tableButton('initial')
        header.innerText = 'Versions Available for A10 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a10.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPads(1)")
        refreshNavBlock()
        chkrn = true
        unthr = false
        includeHTML()
    }
    if (page == 9){
        new tableButton('initial')
        header.innerText = 'Versions Available for A9 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a9.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPads(1)")
        refreshNavBlock()
        chkrn = true
        unthr = false
        includeHTML()
    }
    if (page == 8){
        new tableButton('initial')
        header.innerText = 'Versions Available for A8 Devices'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/a8.html\'></div>'
        navBlock.querySelector('.button').style.display = 'none'
        new backButton(true, "iPads(1)")
        refreshNavBlock()
        chkrn = true
        unthr = false
        includeHTML()
    }
    if (page == 0){
        new tableButton('initial')
        header.innerText = 'Legacy Devices/Versions'
        content.innerHTML = '<div include=\'pages/pageContents/hardwares/legacy.html\'></div>'
        navBlock.querySelector('.button').style.display = ''
        new backButton(true, "iPads(1)")
        refreshNavBlock()
        includeHTML()
    }
}
function loadiOS(version){
    if (version == '15.0' || version == '15.0.1' || version == '15.0.2' || version == '15.1' || version == '15.1.1'){
        new tableButton('initial')
        header.innerText = "Version or device not supported"
        content.innerHTML = '<div include=\'pages/pageContents/jbs/toonew.html\'></div>'
        navBlock.querySelector('.button').style.display = ''
        new backButton(true, `${deviceType[0]}s(${deviceType[1]})`)
        refreshNavBlock()
        new navButton('Back to versions', `load${deviceType[0]}s(${deviceType[1]})`)
        includeHTML()
    }
    else if (version == '14.8' || version == '14.7.1' || version == '14.7' || version == '14.6'){
        if (chkrn == true){
            new tableButton('initial')
            header.innerText = "You have a jailbreak available!"
            content.innerHTML = '<div include=\'pages/pageContents/jbs/jbsupported-chkrnonly.html\'></div>'
            navBlock.querySelector('.button').style.display = ''
            new backButton(true, `${deviceType[0]}s(${deviceType[1]})`)
            refreshNavBlock()
            new navButton('Jailbreak with checkra1n', 'loadJB(142)')
            includeHTML()
        }
        else{
            new tableButton('initial')
            header.innerText = "Version or device not supported"
            content.innerHTML = '<div include=\'pages/pageContents/jbs/toonew.html\'></div>'
            navBlock.querySelector('.button').style.display = ''
            new backButton(true, `${deviceType[0]}s(${deviceType[1]})`)
            refreshNavBlock()
            new navButton('Back to start', 'loadIntro()')
            includeHTML()
        }
    }
    else if (version == '14.5.1' || version == 14.5 || version == '14.4.2' || version == '14.4.1' || version == '14.4'){
        new tableButton('initial')
        header.innerText = "You have a jailbreak available!"
        if (chkrn == true){
            content.innerHTML = '<div include=\'pages/pageContents/jbs/jbsupported-chkrnonly.html\'></div>'
            navBlock.querySelector('.button').style.display = ''
            new backButton(true, `${deviceType[0]}s(${deviceType[1]})`)
            refreshNavBlock()
            new navButton('Jailbreak with checkra1n', 'loadJB(142)')
            includeHTML()
        }
        else if (unthr == true){
            content.innerHTML = '<div include=\'pages/pageContents/jbs/jbsupported-untonly.html\'></div>'
            navBlock.querySelector('.button').style.display = ''
            new backButton(true, `${deviceType[0]}s(${deviceType[1]})`)
            refreshNavBlock()
            new navButton('Jailbreak with unc0ver', 'loadJB(144)')
            includeHTML()
        }
        else{
            new tableButton('initial')
            header.innerText = "Version or device not supported"
            content.innerHTML = '<div include=\'pages/pageContents/jbs/toonew.html\'></div>'
            navBlock.querySelector('.button').style.display = ''
            new backButton(true, `${deviceType[0]}s(${deviceType[1]})`)
            refreshNavBlock()
            new navButton('Back to versions', `load${deviceType[0]}s(${deviceType[1]})`)
            includeHTML()
        }
    }
    else if (version == '14.3' || version == '14.2.1' || version == '14.2' || version == '14.1' || version == '14.0'){
        new tableButton('initial')
        header.innerText = "You have multiple jailbreaks available!"
        if (chkrn == true){
            content.innerHTML = '<div include=\'pages/pageContents/jbs/jbsupported-all14.html\'></div>'
            navBlock.querySelector('.button').style.display = 'none'
            new backButton(true, `${deviceType[0]}s(${deviceType[1]})`)
            refreshNavBlock()
            includeHTML()
        }
        else{
            content.innerHTML = '<div include=\'pages/pageContents/jbs/jbsupported-semiuntethered14.html\'></div>'
            navBlock.querySelector('.button').style.display = 'none'
            new backButton(true, `${deviceType[0]}s(${deviceType[1]})`)
            refreshNavBlock()
            includeHTML()
        }
    }
    else if (version == '13.x'){
        new tableButton('initial')
        header.innerText = "You have multiple jailbreaks available!"
        if (chkrn == true){
            content.innerHTML = '<div include=\'pages/pageContents/jbs/jbsupported-all13.html\'></div>'
            navBlock.querySelector('.button').style.display = 'none'
            new backButton(true, `${deviceType[0]}s(${deviceType[1]})`)
            refreshNavBlock()
            includeHTML()
        }
        else{
            content.innerHTML = '<div include=\'pages/pageContents/jbs/jbsupported-semiuntethered13.html\'></div>'
            navBlock.querySelector('.button').style.display = 'none'
            new backButton(true, `${deviceType[0]}s[(${deviceType[1]})`)
            refreshNavBlock()
            includeHTML()
        }
    }
}