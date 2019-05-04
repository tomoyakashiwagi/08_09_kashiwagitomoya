<?php
// 関数ファイルの読み込み


//1. GETデータ取得
$id   = $_GET['id'];

//2. DB接続します(エラー処理追加)


//3．データ登録SQL作成
$sql = '';
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id', $id, PDO::PARAM_INT);
$status = $stmt->execute();

//4．データ登録処理後
if ($status==false) {
    errorMsg($stmt);
} else {
    //select.phpへリダイレクト
    header();
    exit;
}
