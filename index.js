//banner部分效果
{
	$(".banner_content").mouseenter(function(){
		$(".banner_imgbox").show();
	});
    $(".banner_content").mouseleave(function(){
        $(".banner_imgbox").hide();
    });
	let btns=document.querySelectorAll(".banner_content span");
	let boxs=document.querySelectorAll(".xuanzhong_box");
    let imgs=document.querySelectorAll(".banner_imgbox li");
	btns.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<btns.length;i++){
				btns[i].classList.remove("active");
				boxs[i].classList.remove("xuanzhong_box2");
                imgs[i].classList.remove("active");
			}
			this.classList.add("active");
			boxs[index].classList.add("xuanzhong_box2");
            imgs[index].classList.add("active");
		}
		
	});

}
// 首页案例展示效果
{
    let prev=document.querySelector(".anli_bottom_left_jiantou1");
    let next=document.querySelector(".anli_bottom_left_jiantou2");
    let inner=document.querySelector(".anli_bottom_inner");
    let n=1;
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all 1s";
            inner.style.marginLeft=-455*n+"px";
        }
    };
    prev.onclick=function(){
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 1s";
            inner.style.marginLeft=-455*n+"px";
        }
    };
    inner.addEventListener("transitionend", function(){
        flag=true;
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-455px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1365px";
            n=3;
        }
    })
}
//首页团队介绍部分效果
{

    let items=document.querySelectorAll(".tuandui_bottom_item");
    items.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<items.length;i++){
                items[i].classList.remove("active");
            }
            this.classList.add("active");
        }
    });

}
