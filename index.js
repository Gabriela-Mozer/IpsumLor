//const extraClass = document.createElement('class');
const socials = document.createElement('socials');

socials.style.background ='url(imgs/github.svg) no-repeat';
let smallSize = 840 + 'px';

const appearElement =function(){
    if(window.innerWidth < smallSize){
        socials.style.display ='none';
    }
}
