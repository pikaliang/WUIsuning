{
	let imgs=document.querySelectorAll(".banner_img1 li");
	let pagers=document.querySelectorAll(".banner_dian li");
	let banner=document.querySelector(".banner_img1");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("banner_1");
			}
				this.classList.add("banner_1");
				imgs[index].classList.add("active");
				n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);
		function move(){
			n++;
			if(n===imgs.length){
				n=0;
		    }
		    if(n<0){
		    	n=imgs.length-1;
		    }
			for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
				pagers[i].classList.remove("banner_1");
			}
			imgs[n].classList.add("active");
			pagers[n].classList.add("banner_1");
		
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};
	next.onclick=function(){
		move();
	};
	prev.onclick=function(){
		n-=2;
		move();
	};
}
//回到顶部
{
	let totop=document.querySelector(".totop");
    let totop1=document.querySelector(".totop1");
	totop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);

			}
			document.documentElement.scrollTop=st;
		},25);
	};
    totop1.onclick=function(){
        let st=document.documentElement.scrollTop;
        let t=setInterval(function(){
            st-=200;
            if(st<0){
                st=0;
                clearInterval(t);

            }
            document.documentElement.scrollTop=st;
        },25);
    };
	//onscroll 元素或者浏览器窗口发生滚动的时候触发的事件
	let topBar=document.querySelector(".topbar");
	let leftBar=document.querySelector(".leftbar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>768){
			topBar.style.display="block";
		}else{
			topBar.style.display="none";
		}
		if(st>2660){
			leftBar.style.display="block";
		}else{
			leftBar.style.display="none";
		}
	}
}

{
	let tips=document.querySelectorAll(".leftbar li");
	let container=document.querySelectorAll(".shouji_box");
	let flag=true;
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			flag=false;
			let ot=container[index].offsetTop;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/10;
			let time=0;
			let t=setInterval(function(){
				time+=30;
				now+=speed;
				if(time===300){
					clearInterval(t);
					flag=true;
				}
				document.documentElement.scrollTop=now;
			},30);
		}
	});
	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		for(let i=0;i<container.length;i++){
			if(st>=container[i].offsetTop-300){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
				}
				tips[i].classList.add("active");
			}
		}
	})
}
//排行榜
{
	let next=document.querySelector(".haohuo_next");
	let prev=document.querySelector(".haohuo_prev");
	let inner=document.querySelector(".haohuo_inner");
	let items=document.querySelectorAll(".haohuo_bottom_main");
	let pages=document.querySelectorAll(".paihang_dian1");
	let n=0;
	let obj=pages[0];
	const l=pages.length;
	next.onclick=function( ){
		n++;
		if(n===l){
			n=0;
			inner.style.marginLeft=0;
			pages[l-1].classList.remove("paihang_dian2");
			pages[n].classList.add("paihang_dian2");
		}else{
			inner.style.marginLeft=-n*370+"px";
			pages[n-1].classList.remove("paihang_dian2");
			pages[n].classList.add("paihang_dian2");
			obj=pages[n];
		}	
	}
	prev.onclick=function( ){
		n--;
		if(n===-1){
			n=l-1;
			inner.style.marginLeft=-n*370+"px";
			pages[0].classList.remove("paihang_dian2");
			pages[n].classList.add("paihang_dian2");
		}else{
			inner.style.marginLeft=-n*370+"px";
			pages[n+1].classList.remove("paihang_dian2");
			pages[n].classList.add("paihang_dian2");
			obj=pages[n];
		}
	}	
	pages.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.classList.remove("paihang_dian2");
			ele.classList.add("paihang_dian2");
			obj=ele;
			inner.style.marginLeft=-index*370+"px";
			n=index;
		}	
	})
}
//大聚惠
{
    // let inner = $(".juhui_abox");
    // $(".juhui_dbox").mouseenter(function () {
    //     $("#prev,#next").fadeIn(500);
    // })
    //     .mouseleave(function () {
    //         $("#prev,#next").fadeOut(500);
    //     });
    // let n = 1;
    // let flag = true;
    // $("#next").click(function () {
    //     if (flag) {
    //         flag = false;
    //         n++;
    //         inner.animate({marginLeft: -n * 1000}, 500, function () {
    //             flag = true;
    //             if (n === 4) {
    //                 inner.css("marginLeft",-1000);
    //                 n = 1;
    //             }
    //         })
    //     }
    // });
    // $("#prev").click(function () {
    //     if (flag) {
    //         flag = false;
    //         n--;
    //         inner.animate({marginLeft: -n * 1000}, 500, function () {
    //             flag = true;
    //             if (n === 0) {
    //                 inner.css("marginLeft", -3000);
    //                 n = 3;
    //             }
    //         })
    //     }
    // });
    let container=document.querySelector(".juhui_dbox");
	let prev=document.querySelector("#prev");
	let next=document.querySelector("#next");
	let inner=document.querySelector(".juhui_abox");
	container.onmouseenter=function(){
		prev.style.display="block";
		next.style.display="block";
	}
	container.onmouseleave=function(){
		prev.style.display="none";
		next.style.display="none";
	}
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 0.5s";
			inner.style.marginLeft=-1000*n+"px";
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all 0.5s";
			inner.style.marginLeft=-1000*n+"px";
		}
	}
    //监测过渡结束
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			inner.style.transition="none";
			inner.style.marginLeft="-1000px";
			n=1;
		}
		if(n===0){
			inner.style.transition="none";
			inner.style.marginLeft="-3000px";
			n=3;
		}
	})
}
//乐拼购
{
		const prev=document.querySelector(".qingdan_prev");
		const next=document.querySelector(".qingdan_next");
		const inner=document.querySelector(".qigdan_inner");
		let n=0;
		next.onclick=function(){
			n++;
			prev.classList.remove("disable");
			if (n===2) {
				this.classList.add("disable");
			}
			if (n===3) {
				n=2;
				return;
			}
			inner.style.marginLeft=-555*n+"px";
		}
		prev.onclick=function(){
			n--;
			next.classList.remove("disable");
			if(n===0){
				this.classList.add("disable");
			}
			if (n===-1) {
				n=0;
				return;
			}
			inner.style.marginLeft=-555*n+"px";
		}
	
}