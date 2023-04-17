let time = document.querySelectorAll('.time>ul>li')
let thing = document.querySelectorAll('.thing>.thing_left')
let thing_right = document.querySelectorAll('.thing>.thing_right')
for(let i = 0; i<time.length; i++){
    time[i].onclick=function(){
        for(let j =0; j<time.length;j++){
            time[j].className='';
            thing[j].style.display='none'
        }
        this.className='active'
        thing[i].style.display='block'
        if(i == 1){
            thing_right[0].style.backgroundImage='url(./img/1950-1957/1950/0106.jpg)'
        }else if(i == 2){
            thing_right[0].style.backgroundImage='url(./img/1950-1957/1951/0523.jpg)'
        }else if(i == 3){
            thing_right[0].style.backgroundImage='url(./img/1950-1957/1952/1952.jpg)'
        }else if(i == 4){
            thing_right[0].style.backgroundImage='url(./img/1950-1957/1953/0515.jpg)'
        }else if(i == 5){
            thing_right[0].style.backgroundImage='url(./img/1950-1957/1954/4月26日－7月21日.jpg)'
        }else if(i == 6){
            thing_right[0].style.backgroundImage='url(./img/1950-1957/1955/人民解放军解放一江山岛.jpg)'
        }else if(i == 7){
            thing_right[0].style.backgroundImage='url(./img/1950-1957/1956/天安门20万人.jpg)'
        }else if(i == 8){
            thing_right[0].style.backgroundImage='url(./img/1950-1957/1957/5月15日－25日.jpg)'
        }else{
            thing_right[0].style.backgroundImage=''
        }

    }
}

