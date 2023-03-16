let closeList=document.getElementById('down')
let openList=document.getElementById('right')
let arrowRight=document.getElementById('2')
let arrowDown=document.getElementById('3')
let ardown=document.getElementById('3.1')
let arright=document.getElementById('2.1')
let openModernList=document.getElementById('modernlist')
let openModernList2=document.getElementById('modernlist2')
let openModernList3=document.getElementById('modernlist3')
let ButtonToMain=document.querySelector('.bottom')
function close(){
    let second=arrowRight.classList
    second.add('fa-arrow-right')
    let secondOpen=arrowDown.classList
    secondOpen.add('hide')
    let list=openModernList2.classList
    list.add('hide')
}
arrowDown.addEventListener('click',close)
function closing(){
    let deletefromelem=closeList.classList
    deletefromelem.add('hide')
    let addtoelem=openList.classList
    addtoelem.add('fa-arrow-right')
    let ModernList=openModernList.classList
    ModernList.add('hide') 
}
closeList.addEventListener('click',closing)
function clos(){
    let deletefromelem=ardown.classList
    deletefromelem.add('hide')
    let addtoelem=arright.classList
    addtoelem.add('fa-arrow-right')
    let ModernList=openModernList3.classList
    ModernList.add('hide') 
}
ardown.addEventListener('click',clos)
let TypeData=document.getElementById('firstbutton')
function datanew(){
    let deletefromelem=closeList.classList
    deletefromelem.remove('hide')   
    // стрелка вниз смотрит
    let addtoelem=openList.classList
    addtoelem.remove('fa-arrow-right')
    //стрелка верх убрать
    let ModernList=openModernList.classList
    ModernList.remove('hide')
    //открывается лист 
    let NewRaper=document.querySelector('.info')
    let Newpaper=NewRaper.classList
    Newpaper.add('hide')
    Newpaper.remove('info')
    //главная исчезает
    let secondLabel=document.getElementById('gype')
    let secondLabels=secondLabel.classList
    secondLabels.add('hide')
    secondLabels.remove('info')
    // условия исчезают
    let paper=document.getElementById('secondpaper')
    papua=paper.classList
    papua.remove('hide')
    papua.add('info')
    //ввод данный появляется
    let sink=document.getElementById('sick')
    sinc=sink.classList
    sinc.add('hide')
    // циклы исчезают
    let task=document.getElementById('tasks')
    tasks=task.classList
    tasks.add('hide')
    tasks.add('info')
    
}
//при нажатии на кнопку ввод происходит это
TypeData.addEventListener('click',datanew)
let kull=document.getElementById('second')
function waste(){
    let second=arrowRight.classList
    second.remove('fa-arrow-right')
    //стрелка закрывается в листе 2
    let secondOpen=arrowDown.classList
    secondOpen.remove('hide')
    //стрелка в листе 2
    let list=openModernList2.classList
    list.remove('hide')
    //2 лист появляется
    let sink=document.getElementById('sick')
    sinc=sink.classList
    sinc.add('hide')
    // циклы исчезают
    let NewRaper=document.querySelector('.info')
    let Newpaper=NewRaper.classList
    Newpaper.add('hide')
    //главная исчезает
    let paper=document.getElementById('secondpaper')
    vvod=paper.classList
    vvod.add('hide')
    //окно с вводом исчезает
    let secondLabel=document.getElementById('gype')
    let secondLabels=secondLabel.classList
    secondLabels.remove('hide')
    secondLabels.add('info')
    //окно с условиями появляется
    let task=document.getElementById('tasks')
    tasks=task.classList
    tasks.add('hide')
    tasks.add('info')

}
kull.addEventListener('click',waste)
let gettomuny=document.getElementById('bottom')
function back(){
    let paper=document.getElementById('secondpaper')
    vvod=paper.classList
    vvod.add('hide')
    //исчезает ввод
    let secondLabel=document.getElementById('gype')
    let secondLabels=secondLabel.classList
    secondLabels.add('hide')
    //исчезает условия
    let NewRaper=document.getElementById('main')
    let Newpaper=NewRaper.classList
    Newpaper.add('info')
    Newpaper.remove('hide')
    //появляется мейн
    let sink=document.getElementById('sick')
    sinc=sink.classList
    sinc.add('hide')
    // циклы исчезают
    let task=document.getElementById('tasks')
    tasks=task.classList
    tasks.add('hide')
    tasks.add('info')
    
}
gettomuny.addEventListener('click',back)
let third=document.getElementById('third')
function sikl(){
    let paper=document.getElementById('secondpaper')
    vvod=paper.classList
    vvod.add('hide')
    //исчезает ввод
    let secondLabel=document.getElementById('gype')
    let secondLabels=secondLabel.classList
    secondLabels.add('hide')
    //исчезает условия
    let NewRaper=document.getElementById('main')
    let Newpaper=NewRaper.classList
    Newpaper.add('info')
    Newpaper.add('hide')
    //исчезает мейн
    let sink=document.getElementById('sick')
    sinc=sink.classList
    sinc.remove('hide')
    sinc.add('info')
    // циклы появляются
    let second=arright.classList
    second.remove('fa-arrow-right')
    //стрелка закрывается в листе 3
    let secondOpen=ardown.classList
    secondOpen.remove('hide')
    //стрелка в листе 3
    let list3=openModernList3.classList
    list3.remove('hide')
    //3 лист появляется
    let task=document.getElementById('tasks')
    tasks=task.classList
    tasks.add('hide')
    tasks.add('info')
    
}
third.addEventListener('click',sikl)
let tasking=document.getElementById('tasking')
function task(){
    let paper=document.getElementById('secondpaper')
    vvod=paper.classList
    vvod.add('hide')
    //исчезает ввод
    let secondLabel=document.getElementById('gype')
    let secondLabels=secondLabel.classList
    secondLabels.add('hide')
    //исчезает условия
    let NewRaper=document.getElementById('main')
    let Newpaper=NewRaper.classList
    Newpaper.add('info')
    Newpaper.add('hide')
    //исчезает мейн
    let sink=document.getElementById('sick')
    sinc=sink.classList
    sinc.add('hide')
    sinc.add('info')
    // циклы появляются
    let task=document.getElementById('tasks')
    tasks=task.classList
    tasks.remove('hide')
    tasks.add('info')
    let testing=document.getElementById('test1')
    let test1=testing.classList
    test1.add('hide')
    let testing1=document.getElementById('test2')
    let test2=testing1.classList
    test2.add('hide')
    let testing2=document.getElementById('test3')
    let test3=testing2.classList
    test3.add('hide')

}
tasking.addEventListener('click',task)
let task1=document.getElementById('taskinging')
function taskik(){
    let testing=document.getElementById('test1')
    let test1=testing.classList
    test1.remove('hide')
}
task1.addEventListener('click',taskik)
let task2=document.getElementById('taskinging1')
function taskik1(){
    let testing=document.getElementById('test2')
    let test1=testing.classList
    test1.remove('hide')
}
task2.addEventListener('click',taskik1)
let task3=document.getElementById('taskinging2')
function taskik2(){
    let testing=document.getElementById('test3')
    let test1=testing.classList
    test1.remove('hide')
}
task3.addEventListener('click',taskik2)