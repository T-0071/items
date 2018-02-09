
document.addEventListener('DOMContentLoaded',()=>{
        var box = document.getElementById('box');
        var page = document.getElementById('page');
        // spArr是一个类数组，索引值对应每一个span标签
        var sp = page.getElementsByTagName('span');
        console.log(sp);
        var i=0;
        showTu();
        // 显示图片与圆圈的函数（）
        function showTu(){
            i++;
           
            var j=i-1;
            if(j<=0){
             
                j=8;
            }
            
            sp[j-1].style.background = '#000';
            if(i>8){
              
                i=1;
            }
            tupian.src = '../img/a' +i + '.jpg';
            console.log(tupian)
            // 同时显示对应的小圆圈
            sp[i-1].style.background = '#EC2F20';
        }
        // 定时轮播时间
        var timer = setInterval(showTu,2000);
        // 鼠标移上去暂停
        tupian.onmouseover = function(){
            clearInterval(timer);
        }
        // 鼠标移走，轮播继续
        tupian.onmouseout = function(){
            timer = setInterval(showTu,2000);//一定要赋值给timer，不然清除不了这里的定时器
        }
        // 给每个span标签绑定点击事件
        for(var j=0;j<sp.length;j++){
            sp[j].onclick = getClk;
        }
        // 点击函数
        function getClk(){
            
            clearInterval(timer);
            // 把定时器走动时的当前圆圈背景颜色去掉
            sp[i-1].style.background = '##000';
            // 添加点击的圆圈的背景颜色
            this.style.background = '#EC2F20';
            // 并获取当前点击小圆圈的位置
            var _number = this.className;
            _number = _number.charAt(1);
            console.log('this.className:',_number,typeof(_number));
            tupian.src = '../img/a' +_number + '.jpg';
         
            i = _number;
            timer = setInterval(showTu,2000);
            
        }


//获取页面subject container盒子上元素
    var box1 = document.querySelector('.box1');

    ajax.get({
       
        url: `http://localhost:1708/src/api/index.php`,
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
                    box1.appendChild(ul);
        }
    })


    var box4 = document.querySelector('.box4');

    ajax.get({
       
        url: `http://localhost:1708/src/api/index_c.php`,
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
                    box4.appendChild(ul);




        }
    })




//获取页面subject container盒子上元素
    var box5 = document.querySelector('.box5');

    ajax.get({
       
        url: `http://localhost:1708/src/api/index_e.php`,
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
                    box5.appendChild(ul);




        }
    })


     var box6 = document.querySelector('.box6');

    ajax.get({
       
        url: `http://localhost:1708/src/api/index_f.php`,
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
                    box6.appendChild(ul);




        }
    })

     var box7 = document.querySelector('.box7');

    ajax.get({
       
        url: `http://localhost:1708/src/api/index_g.php`,
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
                    box7.appendChild(ul);




        }
    })



     var main_u = document.querySelector('.main_u');

    ajax.get({
       
        url: `http://localhost:1708/src/api/index_h.php`,
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
                    main_u.appendChild(ul);




        }
    })



     var main_b = document.querySelector('.main_b');

    ajax.get({
       
        url: `http://localhost:1708/src/api/index_r.php`,
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
                    main_b.appendChild(ul);




        }
    })



     var main_k = document.querySelector('.main_k');

    ajax.get({
       
        url: `http://localhost:1708/src/api/index_s.php`,
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
                    main_k.appendChild(ul);




        }
    })






    });