
window.onload = function() {
    //获取页面上的元素
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var pad = document.getElementById('pad');
    var btnReg = document.getElementById('btnReg');
    var output = document.querySelector('.output');
    var yzm = document.querySelector('#yzm');
    var huoqu = document.querySelector('.huoqu');
    var y_zm = document.querySelector('#y_zm');
  
    username.onblur = function() {
        var _username = username.value;
        var reg = /^1[34578]\d{9}$/i;
        if(!reg.test(_username)) {
            output.innerHTML = '手机号不合法';
            return false;
        }
        if(_username !== '') {

            ajax.get({
                data: {
                    username: _username
                },
                url: `http://localhost:1708/src/api/reg.php`,
                success: function(res) {
                    console.log(res)
                    if(res == 'fail') {

                        tip.innerHTML = "已注册！";
                        tip.style.color = "red";
                        btnReg.disabled = true;
                    } else {
                        tip.innerHTML = "正确";
                        tip.style.color = "green";
                        btnReg.disabled = false;
                    }
                }
            })

        }
    }

    //用户注册的密码 格式要求
  
            // 密码  
            //     长度小于20 
            //     不能包含空格

    //输入密码
    var _password;
    password.onblur = function() {
        _password = password.value;
        var reg = /^\S{6,20}$/
        if(!reg.test(_password)) {
            output.innerHTML = '密码长度不少于6不大于20';
            return false;
        }
    }

    //再次输入密码
    pad.onblur = function() {
        var _pad = pad.value;
        if(password != _pad) {
            output.innerHTML = '两次密码输入不一致';
        }
    }

    //生成验证码
 
    var str='abcdefghijklmnopqrstuvwxyz0123456789';
              btnReg.onclick=function(){
                       vs();
               }
                     vs();
                      function vs(){                        var _code='';
                  for(var i=0;i<4;i++){
                    var index=parseInt(Math.random()*str.length);
                          _code+=str[index];
                        }
                             yzm.innerHTML=_code.toUpperCase();
                       }
                  

    //判断是否注册成功
   btnReg.onclick = function() {
        var _username = username.value;
        var _password = password.value;
        if(_username !== '') {

            // 发起ajax请求
            ajax.get({
                // hardcode
                url: `http://localhost:1708/src/api/reg.php`,
                data: {
                    username: _username,
                    password: _password
                },
                success: function(data) {
                    console.log(data)
                    if(data == 'ok') {
                        output.innerHTML = "注册失败，请稍后再试"
                    } else {
                        alert('注册成功请登录');
                        location.href = "../html/login.html";
                    }
                }
            })

        }

    }

}