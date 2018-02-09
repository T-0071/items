/* 
* @Author: Marte
* @Date:   2018-02-09 00:39:44
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 16:43:15
*/

/* 
* @Author: Marte
* @Date:   2018-02-09 00:37:32
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 00:39:17
*/
document.addEventListener('DOMContentLoaded', function() {

    // 获取传过来的参数
    var res = location.search;

    res = res.slice(1);
    res = res.split('&');
    // 将传过来的参数写进对象
    var date = {};
    res.forEach(function(item) {
        // 以等号拆分数组
        var arr = item.split('=');
        //把内容写进对象里
        date[arr[0]] = decodeURI(arr[1]);
    })
    console.log(date)
    //获取页面上的元素
    var Bimg = document.getElementById('Bimg');
    //把从列表页转过来的参数图片写入 id为Bimg的img中
    var Bi = document.getElementById('Bi');
    Bimg.src = date.img;
    Bi.src = date.img;
    var jq = document.getElementById('name');
    var pp = document.getElementById('price');

  
    jq.innerHTML = date.name;
    pp.innerHTML = date.price;
   
    var toCar = document.getElementById('toCar');
    console.log(toCar);
    var gdDate;
    if(!gdDate) {
        gdDate = {};
    } else {
        gdDate = JSON.parse(gdDate);
    }
   
    toCar.onclick = function() {
        Cookie.set('gdDate', JSON.stringify(date));
       
    }

})