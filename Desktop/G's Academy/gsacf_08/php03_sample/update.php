<?php
// 関数ファイル読み込み


//入力チェック(受信確認処理追加)
if () {
    exit('ParamError');
}

//POSTデータ取得


//DB接続します(エラー処理追加)


//データ登録SQL作成
$sql = '';
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':a1', $task, PDO::PARAM_STR);
$stmt->bindValue(':a2', $deadline, PDO::PARAM_STR);
$stmt->bindValue(':a3', $comment, PDO::PARAM_STR);
$stmt->bindValue(':id', $id, PDO::PARAM_INT);
$status = $stmt->execute();

//4．データ登録処理後
if ($status==false) {
    errorMsg($stmt);
} else {
    header();
    exit;
}
