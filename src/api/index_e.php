<?php
    include 'connect.php';
    
    $sql = "select * from list where category='bai' ";
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    // 释放查询内存(销毁)
    //$result->free();

    //关闭连接
    $conn->close();
?>