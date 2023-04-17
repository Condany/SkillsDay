var w=700;
var i=0;
var oimgbox=document.querySelector(".imgbox");
var oImgList=document.querySelector(".imgList");
var oImgs=oImgList.querySelectorAll("li");
var oDots=document.querySelectorAll("ul.dots>div>li");
var len=oImgs.length;
var oSpan=document.querySelectorAll("div.btns>span");
var oDiv=document.querySelectorAll("div.btns");
let oSpan_dots = document.querySelector('.dots>span')
var isLock=false;
var timer=null;
auto();
dotsClick();
oSpan[0].onclick=leftbtn;
oSpan[1].onclick=rightbtn;

oimgbox.onmouseenter=function(){
    off();
    oSpan[0].style.display = "block";
    oSpan[1].style.display = "block";
}
oimgbox.onmouseleave=function(){
    auto();
    oSpan[0].style.display = "none";
    oSpan[1].style.display = "none";
}
function auto(){
    timer=setInterval(function(){
        rightbtn();                
    },2000);
}
function off(){
    clearInterval(timer);
}
function dotActive(x){
    for(var k=0;k<len;k++){
        oDots[k].className="";
    }
    oDots[x].className="active";
}

function dotClick(x){
    oDots[x].onclick=function(){
        moveRun(oImgList,{"left":-x*w},"linear");
        dotActive(x);
        i=x;
        spanView()
    }
}

function dotsClick(){
    for(var m=0;m<len;m++){
        dotClick(m)
    }
}

function spanView(){
    if(i == 0){
        oSpan_dots.innerHTML='习近平在中国共产党第二十次全国代表大会上的报告'
    }else if(i == 1){
        oSpan_dots.innerHTML='中共中央举行新闻发布会 介绍解读党的二十大报告'
    }else if(i == 2){
        oSpan_dots.innerHTML='中国共产党第二十次全国代表大会闭幕会在京举行 习近平主持'
    }else if(i == 3){
        oSpan_dots.innerHTML='习近平出席军队领导干部会议并发表重要讲话'
    }else if(i == 4){
        oSpan_dots.innerHTML='二十大新闻中心第二场集体采访'
    }
}

function leftbtn(){
    if(isLock) return;
    isLock = true;
    i--;
    if(i==-1){
        oImgs[len-1].style.position="relative";
        oImgs[len-1].style.left=-(len)*w+"px";
        moveRun(oImgList,{"left":-i*w},"linear",function(){
            oImgs[len-1].style.position="static";
            this.style.left=-(len-1)*w+"px";
            i=len-1;
            isLock=false;
            dotActive(i);
            spanView()
        });
    }else{
        moveRun(oImgList,{"left":-i*w},"linear",function(){
            isLock=false;
            dotActive(i);
            spanView()
        });
    }
}
function rightbtn(){
    if(isLock) return;
    isLock = true
    i++;
    if(i==len){
        oImgs[0].style.position="relative";
        oImgs[0].style.left=(len)*w+"px";
        moveRun(oImgList,{"left":-i*w},"linear",function(){
            oImgs[0].style.position="static";
            this.style.left=0+"px";
            i=0;
            isLock=false;
            dotActive(i);
            spanView()
        });
    }else{
        moveRun(oImgList,{"left":-i*w},"linear",function(){
            isLock=false;
            dotActive(i);
            spanView()
        });
    }
    
}

var oSpan2_left=document.getElementsByClassName("left")[0]
var oSpan2_right=document.getElementsByClassName("right")[1]
var top_list=document.getElementsByClassName("top_list")[0]
var top_imgs=document.querySelectorAll("ul.top_list>li")
var top_imgs_len=top_imgs.length;
var img_number = 0
// var aaa=1
oSpan2_left.onclick=function(){
    img_number--;
    if(img_number==-1){
        top_imgs[top_imgs_len-1].style.position="relative";
        top_imgs[top_imgs_len-1].style.left=-(top_imgs_len)*378+"px";
        moveRun(top_list,{"left":-img_number*378},"linear",function(){
            top_imgs[top_imgs_len-1].style.position="static";
            this.style.left=-(top_imgs_len-3)*378+"px";
            img_number=top_imgs_len-3
            isLock=false;
        });
    }else{
        moveRun(top_list,{"left":-img_number*378},"linear",function(){
            // top_imgs[top_imgs_len-1].style.position="static";
            // this.style.left=-(top_imgs_len-1)*378+"px";
            // top_imgs_len=top_imgs_len-1;
        });
    }
    console.log(img_number)
}
oSpan2_right.onclick=function(){
    img_number++;
    if(img_number==top_imgs_len-2){
        top_imgs[0].style.position="relative";
        top_imgs[0].style.left=(top_imgs_len)*378+"px";
        moveRun(top_list,{"left":-img_number*378},"linear",function(){
            top_imgs[0].style.position="static";
            this.style.left=0+"px";
            img_number=0
            isLock=false;
        });
    }else{
        moveRun(top_list,{"left":-img_number*378},"linear",function(){
            // top_imgs[top_imgs_len-1].style.position="static";
            // this.style.left=-(top_imgs_len-1)*378+"px";
            // top_imgs_len=top_imgs_len-1;
        });
    }
    console.log(img_number)
}

var span_change = document.querySelectorAll("div.menu>span")
var pratical_list = document.querySelectorAll(".center_middle>ul>div")
span_change[0].onclick=function(){
    pratical_list[0].style.display='block'
    pratical_list[1].style.display='none'
    pratical_list[2].style.display='none'
    span_change[0].className="active"
    span_change[1].className=""
    span_change[2].className=""
}
span_change[1].onclick=function(){
    pratical_list[0].style.display='none'
    pratical_list[1].style.display='block'
    pratical_list[2].style.display='none'
    span_change[0].className=""
    span_change[1].className="active"
    span_change[2].className=""
}

span_change[2].onclick=function(){
    pratical_list[0].style.display='none'
    pratical_list[1].style.display='none'
    pratical_list[2].style.display='block'
    span_change[0].className=""
    span_change[1].className=""
    span_change[2].className="active"
}














