
window.onload = function() {
    /*获取页面的元素*/
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var btn = document.querySelector('#btn');
    btn.onclick = function() {
        var _username = username.value;
        var _password = password.value;
        if(_username !== '') {
            ajax.get({
                data: {
                    username: _username,
                    password: _password,
                },
                url: `http://localhost:1708/api/login.php`,
                success: function(data) {
                    console.log(data)
                    if(data=='fail'){
                        alert('用户名或密码错误');
                    } else {
                        location.href = "../html/index.html";
                    }
                }
            })
        }
    }

}