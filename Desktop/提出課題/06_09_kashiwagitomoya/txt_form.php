
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>todo登録</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <style>
        div{
            padding: 10px;
            font-size:16px;
            }
    </style>
<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase-auth.js"></script>

<script>
var config = {
    apiKey: "AIzaSyAj2u9nEOE1B81PUCNu5wtcm-i4Ya44ams",
    authDomain: "phpkadai.firebaseapp.com",
  };
  firebase.initializeApp(config);

// 現在ログインしているユーザーを取得する
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      alert ("ログインしてます。");
      // User is signed in.
    } else {
      alert ("ログインできませんでした。");
      // No user is signed in.
      location.href = "login.php";
    }
  });

</script>

</head>

<body>

    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">データ登録練習</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="txt_form.php">登録ページ</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="txt_read.php">一覧ページ</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <form action="txt_write.php" method="post">
        <div class="form-group">
            <label for="name">名前</label>
            <input type="text" class="form-control" id="name" name="name">
        </div>
        <div class="form-group">
            <label for="indate">知り合った日</label>
            <input type="date" class="form-control" id="indate" name="indate">
        </div>
        <div class="form-group">
            <label for="comment">特徴</label>
            <textarea class="form-control" id="comment" rows="3" name="comment"></textarea>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>

</body>

</html>