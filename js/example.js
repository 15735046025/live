//案例展示>完成案例部分效果
{
    let types=document.querySelectorAll(".finish_daohang span");
    let goods=document.querySelectorAll(".finish_bottom_inner");
    let pageNum=document.querySelectorAll(".finish_pageNum");
    types.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<types.length;i++){
                types[i].classList.remove("active");
                goods[i].classList.remove("active");
                pageNum[i].classList.remove("active");
            }
            this.classList.add("active");
            goods[index].classList.add("active");
            pageNum[index].classList.add("active");
        }
    })
    pageNum.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<types.length;i++){
                types[i].classList.remove("active");
                goods[i].classList.remove("active");
                pageNum[i].classList.remove("active");
            }
            this.classList.add("active");
            goods[index].classList.add("active");
            types[index].classList.add("active");
        }
    })

}