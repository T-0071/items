// jQuery(function($){
//             $('.baner').xCarousel({
//                 imgs:['../img/a1.jpg','../img/a2.jpg','../img/a3.jpg','../img/a4.jpg','../img/a6.jpg','../img/a7','../img/a8.jpg'],
//                 index:2,
//                 type:'fade'
//             })
//         });var photo = document.getElementById('photo');
document.addEventListener('DOMContentLoaded',()=>{
        var box = document.getElementById('box');
        var sp = document.getElementById('sp');
        // spArr是一个类数组，索引值对应每一个span标签
        var spArr = sp.getElementsByTagName('span');
        console.log(spArr);
        var i=0;
        showTu();
        // 显示图片与圆圈的函数（）
        function showTu(){
            i++;
            // 定义对应图片的小圆圈的索引，图片从1开始，spArr数组的索引值从0开始
            var j=i-1;
            if(j<=0){
                // 当小圆圈在第一张时，清除最后一个小圆圈的背景颜色
                j=8;
            }
            // 清除上一个小圆圈的背景颜色，不然全部小圆圈的背景颜色都会改变
            spArr[j-1].style.background = '#000';
            if(i>8){
                // 图片是最后一张的时候返回第一张
                i=1;
            }
            photo.src = 'img/a' +i + '.jpg';
            console.log(photo)
            // 同时显示对应的小圆圈
            spArr[i-1].style.background = '#EC2F20';
        }
        // 定时轮播时间
        var timer = setInterval(showTu,2000);
        // 鼠标移上去暂停
        photo.onmouseover = function(){
            clearInterval(timer);
        }
        // 鼠标移走，轮播继续
        photo.onmouseout = function(){
            timer = setInterval(showTu,2000);//一定要赋值给timer，不然清除不了这里的定时器
        }
        // 给每个span标签绑定点击事件
        for(var j=0;j<spArr.length;j++){
            spArr[j].onclick = getClk;
        }
        // 点击函数
        function getClk(){
            // 点击的时候吧定时器关了，因为不关定时器会一直跑，图片一直会变化
            clearInterval(timer);
            // 把定时器走动时的当前圆圈背景颜色去掉
            spArr[i-1].style.background = '##000';
            // 添加点击的圆圈的背景颜色
            this.style.background = '#EC2F20';
            // 并获取当前点击小圆圈的位置
            var _number = this.className;
            _number = _number.charAt(1);
            console.log('this.className:',_number,typeof(_number));
            photo.src = 'img/a' +_number + '.jpg';
            // 把当前点击的位置重新赋值给轮播开始的位置，相当于重新定义了开始的位置
            i = _number;
            timer = setInterval(showTu,2000);
            // console.log('i:',i);
            // timer = setInterval(showTu,2000);
        }
    });