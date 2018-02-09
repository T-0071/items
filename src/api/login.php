<?php
    include './connect.php';
    
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    
    //查看用户名是否已经存在
    $sql = "select * from user where username='$username' and password='$password'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        echo "ok";
    }else {   
            echo "fail";
        }

    // 释放查询内存(销毁)
    //$result->free();

    //关闭连接
    $conn->close();
?>