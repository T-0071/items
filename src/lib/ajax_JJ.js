/**
 *  
 * @param  {Object} options [请求的参数]
 */

function ajax(options){
    //默认值
    var defaults = {
        type:'get',
        jsonCallbackName:'callback',
    }

    //遍历参数(对象)，有传则覆盖默认
    for(var attr in options){
        defaults[attr] = options[attr];
    }
    var opt = defaults;

    //重置大小写
    opt.type = opt.type.toLowerCase();

    //if传入data参数，则拼接参数
    
    if(opt.data){

        var params = '';
        for(var attr in opt.data){
            params += attr + '=' +opt.data[attr] +'&';
        }
        params = params.slice(0,-1);
    }

    //jsonp请求
    if(opt.type === 'jsonp'){
        //Date.now()毫秒数拼接回调函数名
        var fnName = 'getData' + Date.now();
        window[fnName] = function(data){
            typeof opt.success === 'function' && opt.success(data);
            // 移除script标签
            document.body.removeChild(script);
        }

        // 创建script标签
        var script = document.createElement('script');
        //拼接url
        opt.url += opt.url.indexOf('?')>=0 ? params :'?' + params;
        script.src = opt.url + '&' + opt.jsonCallbackName + '=' +fnName;
        document.body.appendCHild(script);
        return;
    }

    // ajax兼容
    var xhr = null;
    try{
        xhr = new XMLHttpRequest();
    }catch(error){
        try{
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(err){
            try{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e){
                 alert('你的浏览器太low了，这个世界不适合你');
            }
        }
    }

    //返回数据
    var status = [200,304];
    xhr.onreadystatechange = function(){
        if(xhr.readyState ===4 && status.indexOf(xhr.status)>=0){
            var res = xhr.responseText;
            //处理返回数据，json和非json的处理
            // console.log(res);
            try{
                res = JSON.parse(res);

            }catch(err){
                res = res; 
            }

            // if(typeof opt.success === 'function'){
            //  opt.success(res);
            // }
            console.log('autheor=>lhj from laoxie')
            typeof opt.success === 'function' && opt.success(res);
        }
    }

    // get和post判断
    if(opt.type === 'get'){
        // console.log(params);
        opt.url += opt.url.indexOf('?')>=0 ? params :'?'+params;
        // console.log(opt.url);
        params = null;
        xhr.open(opt.type,opt.url);
        xhr.send();
    }else if(opt.type ==='post'){
        xhr.open(opt.type,opt.url);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(params);
    }
    
    
    
}

ajax.get = function(options){
    // console.log('get')
    options.type = 'get';
    this(options);
}

ajax.post = function(options){
    // console.log('post')
    options.type = 'post';
    this(options);
}

ajax.jsonp = function(options){
    options.type = 'jsonp';
    this(options);
}


// ajax({
// type:'get',
// url:'http://localhost/api/football.php?pageNo=1',
// data:{qty:10};
// jsonCallbackName:'cb',
// success:function(){}
// })