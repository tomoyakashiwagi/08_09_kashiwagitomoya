
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>todo登録</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">



<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase-auth.js"></script>
<script src="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.js"></script>
<link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css" />
<script>
  // Firebaseの初期化
  // TODO: プロジェクトに合わせて各値を置き換えてください。
  var config = {
    apiKey: "AIzaSyAj2u9nEOE1B81PUCNu5wtcm-i4Ya44ams",
    authDomain: "phpkadai.firebaseapp.com",
  };
  firebase.initializeApp(config);

  //   サインイン成功時のコールバックや成功時のリダイレクト先URL等の設定を行います。
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
    callbacks: {
      signInSuccess: function (currentUser, credential, redirectUrl) {
        // サインイン成功時のコールバック関数
        // 戻り値で自動的にリダイレクトするかどうかを指定
        return true;
      },
      uiShown: function () {
        // FirebaseUIウィジェット描画完了時のコールバック関数
        // 読込中で表示しているローダー要素を消す
        document.getElementById('loader').style.display = 'none';
      }
    },
    // リダイレクトではなく、ポップアップでサインインフローを表示
    signInFlow: 'popup',
    signInSuccessUrl: 'txt_form.php',
    signInOptions: [
      // サポートするプロバイダ(メールアドレス)を指定
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  };

  // 描画先の要素と、先ほど作成した設定情報を start 関数に渡すと、FirebaseUIが描画されます。
  ui.start('#firebaseui-auth-container', uiConfig);


</script>



<body>
  <!-- FirebaseUIが描画されるHTML要素をあらかじめおいておきます。 -->
  <div id="firebaseui-auth-container"></div>
  <div id="loader">Loading...</div>
</body>

</html>