/* 
* @Author: Marte
* @Date:   2018-02-09 01:18:42
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 11:44:32
*/
document.addEventListener('DOMContentLoaded', function() {
    
//获取COOKIE;
   if(document.cookie) {
        var date = JSON.parse(Cookie.get('gdDate'));
        console.log(date)
    }
    var jq = document.getElementById('name'); 
    var pp = document.getElementById('price');
    // var cc = document.getElementById('st');

     var Bimg = document.getElementById('Bimg');
    //把从列表页转过来的参数图片写入 id为Bimg的img中
    // var Bi = document.getElementById('Bi');
    Bimg.src = date.img;
    // Bi.src = date.img;
    // cc.innerHTML=date.st;
    // cc.innerHTML=date.Bimg;
    jq.innerHTML=date.name;
     pp.innerHTML=date.price;
        




         var new_c = document.querySelector('.new_c');

    ajax.get({
       
        url: `http://localhost:1708/src/api/car.php`,
        success: function(data) {
            console.log(data)

            // 创建一个ul
            //  根据数据生成html结构
                    let ul = document.createElement('ul');
                    ul.innerHTML = data.map(item=>{
                        return `<li data-id="${item.id}">
                                <a href="../html/list.html">
                                <img  src="${item.img}">
                                <p>${item.name}</p>
                                <span>${item.price}</span>
                                </a>
                        </li>`
                    }).join('');

                    // 把ul写入页面
                    new_c.appendChild(ul);




        }
    })


        



})


   
