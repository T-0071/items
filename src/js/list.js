
document.addEventListener('DOMContentLoaded',()=>{
let list = document.querySelector('.list');

            let arr_status = [200,304];

            // ajax请求
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && arr_status.indexOf(xhr.status)>=0){
                    let data = JSON.parse(xhr.responseText);
                    
                    // 根据数据生成html结构
                    let ul = document.createElement('ul');
                    ul.innerHTML = data.map(item=>{
                        return `<li data-id="${item.id}">
                                
                        
                        <h4 class="imgR"><img  src="${item.img}"></h4>
                    
                                <p>${item.name}</p>
                                <span>${item.price}</span>
                                <h3>${item.comment}</h3>
                                </a>
                                <button id="btn">加入购物车</button>
                              
                                
                        </li>`
                    }).join('');

                    // 把ul写入页面
                    list.appendChild(ul);

            imgR = document.getElementsByClassName('imgR');
            function add() {

                for(let i = 0; i < imgR.length; i++) {

                    imgR[i].onclick = function() {
                        console.log(i);
                        chuanCan(i, data);
                    }
                }
            }
            add();

            // 页面传参
            function chuanCan(idx, data) {
                var str = '';
                for(var arr in data[idx]) {
                    str += arr + '=' + encodeURI(data[idx][arr]) + '&';
                }
                //去除多余的&
                str = str.slice(0, -1);
                // 跳转页面
                console.log(str);
                location.href = 'goods.html?' + str;
            }

                       }
            }
            xhr.open('get','../api/list.php');
            xhr.send();

var cc = document.querySelector('.cc');

    ajax.get({
       
        url: `http://localhost:1708/src/api/cc.php`,
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
                    cc.appendChild(ul);
        }
    })

   });