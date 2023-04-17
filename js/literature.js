let ospan = document.querySelector('span.active')
let oul = document.querySelector('.literature_left>ul')
let flog = 0;
ospan.onclick=function(){
    if(!flog){
        oul.style.display='block'
        flog = 1;
    }else{
        oul.style.display='none'
        flog = 0;
    }
}
let Oli = document.querySelectorAll('.literature_left>ul>li')
for(let i = 0;i<Oli.length;i++){
    Oli[i].onclick=function(){
        for(let j=0;j<Oli.length;j++){
            Oli[j].className=''
        }
        this.className='active'
    }
}