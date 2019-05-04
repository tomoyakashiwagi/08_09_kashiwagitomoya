<?php
include('functions.php');
if (
    !isset($_POST['task']) || $_POST['task']=='' ||
    !isset($_POST['deadline']) || $_POST['deadline']==''
) {
    exit('ParamError');
}
$task = $_POST['task'];
$deadline = $_POST['deadline'];
$comment = $_POST['comment'];
$pdo = db_conn();
$sql ='INSERT INTO php02_table(id, task, deadline, comment, indate)
VALUES(NULL, :a1, :a2, :a3, sysdate())';
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':a1', $task, PDO::PARAM_STR);
$stmt->bindValue(':a2', $deadline, PDO::PARAM_STR);
$stmt->bindValue(':a3', $comment, PDO::PARAM_STR);
$status = $stmt->execute();
if ($status==false) {
    $error = $stmt->errorInfo();
    exit('sqlError:'.$error[2]);
} else {
    header('Location: index.php');
}
