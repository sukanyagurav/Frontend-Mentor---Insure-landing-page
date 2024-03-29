const toggleBtn = document.querySelector('.hamburger')
const header = document.querySelector('.header__content')
console.log(toggleBtn)
const backdrop = document.querySelector('.backdrop')
toggleBtn.addEventListener('click',function(e){
    console.log(toggleBtn)
    if(header.classList.contains('open')){
        header.classList.remove('open')
        backdrop.classList.remove('expand')
    }else{
        header.classList.add('open') 
        backdrop.classList.add('expand')
    }
})