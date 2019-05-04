
// 開始時間
var startTime;
// 経過秒数用 タイマーID
var timer;


$(function () {
    const hand_img = ['<img src="../hakkason/img/RD_gu.png" alt=”グーの画像です”>', '<img src="../hakkason/img/RD_cho.png" alt=”チョキの画像です”>', '<img src="../hakkason/img/RD_pa.png" alt=”パーの画像です”>'];

    //スタートボタンを押したら、全フィールドに札の画像をランダムに配置                  
    $("#start_btn").on("click", function () {
        // 開始時刻を取得
        startTime = new Date();
        // タイマー開始

        function startTimer() {
            timer = setInterval(showSecond, 1000);
        }
        // 秒数表示
        function showSecond() {
            var nowTime = new Date();
            var elapsedTime = Math.floor((nowTime - startTime) / 1000);
            var str = '経過秒数: ' + elapsedTime + '秒';
            var re = document.getElementById('result');
            re.innerHTML = str;
        };



        var rand_m0 = Math.floor(Math.random() * 3);
        $("#my_field0").html(hand_img[rand_m0]);
        var rand_m1 = Math.floor(Math.random() * 3);
        $("#my_field1").html(hand_img[rand_m1]);
        var rand_m2 = Math.floor(Math.random() * 3);
        $("#my_field2").html(hand_img[rand_m2]);
        var rand_c0 = Math.floor(Math.random() * 3);
        $("#com_field0").html(hand_img[rand_c0]);
        var rand_c1 = Math.floor(Math.random() * 3);
        $("#com_field1").html(hand_img[rand_c1]);
        var rand_c2 = Math.floor(Math.random() * 3);
        $("#com_field2").html(hand_img[rand_c2]);

        var rand_center = Math.floor(Math.random() * 3);
        $("#c_field").html(hand_img[rand_center]);


        // let rand = Math.floor(Math.random() * 3);
        // $("#my_field1").html(hand_img[rand]);
        // rand = Math.floor(Math.random() * 3);
        // $("#my_field2").html(hand_img[rand]);
        // rand = Math.floor(Math.random() * 3);
        // $("#my_field3").html(hand_img[rand]);
        // rand = Math.floor(Math.random() * 3);
        // $("#com_field1").html(hand_img[rand]);
        // rand = Math.floor(Math.random() * 3);
        // $("#com_field2").html(hand_img[rand]);
        // rand = Math.floor(Math.random() * 3);
        // $("#com_field3").html(hand_img[rand]);

        // rand = Math.floor(Math.random() * 3);
        // $("#c_field").html(hand_img[rand]);


        //field1の処理
        $("#my_field1").on("click", function () {
            if (rand_m0 == 0 && rand_center == 0) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m0 == 0 && rand_center == 1) {
                $("#c_field").html(hand_img[rand_m0]);
            }
            else if (rand_m0 == 0 && rand_center == 2) {
                $("#c_field").text("勝つ手を出して");
            }

            else if (rand_m0 == 1 && rand_center == 0) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m0 == 1 && rand_center == 1) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m0 == 1 && rand_center == 2) {
                $("#c_field").html(hand_img[rand_m2]);
            }

            else if (rand_m0 == 2 && rand_center == 0) {
                $("#c_field").html(hand_img[rand_m2]);
            }
            else if (rand_m0 == 2 && rand_center == 1) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m0 == 2 && rand_center == 2) {
                $("#c_field").text("勝つ手を出して");
            }
        });



        //field2の処理
        $("#my_field2").on("click", function () {
            if (rand_m1 == 0 && rand_center == 0) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m1 == 0 && rand_center == 1) {
                $("#c_field").html(hand_img[rand_m0]);
            }
            else if (rand_m1 == 0 && rand_center == 2) {
                $("#c_field").text("勝つ手を出して");
            }

            else if (rand_m1 == 1 && rand_center == 0) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m1 == 1 && rand_center == 1) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m1 == 1 && rand_center == 2) {
                $("#c_field").html(hand_img[rand_m1]);
            }

            else if (rand_m1 == 2 && rand_center == 0) {
                $("#c_field").html(hand_img[rand_m2]);
            }
            else if (rand_m1 == 2 && rand_center == 1) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m1 == 2 && rand_center == 2) {
                $("#c_field").text("勝つ手を出して");
            }
        });


        //field3の処理
        $("#my_field3").on("click", function () {
            if (rand_m2 == 0 && rand_center == 0) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m2 == 0 && rand_center == 1) {
                $("#c_field").html(hand_img[rand_m0]);
            }
            else if (rand_m2 == 0 && rand_center == 2) {
                $("#c_field").text("勝つ手を出して");
            }

            else if (rand_m2 == 1 && rand_center == 0) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m2 == 1 && rand_center == 1) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m2 == 1 && rand_center == 2) {
                $("#c_field").html(hand_img[rand_m1]);
            }

            else if (rand_m2 == 2 && rand_center == 0) {
                $("#c_field").html(hand_img[rand_m2]);
            }
            else if (rand_m2 == 2 && rand_center == 1) {
                $("#c_field").text("勝つ手を出して");
            }
            else if (rand_m2 == 2 && rand_center == 2) {
                $("#c_field").text("勝つ手を出して");
            }

        });

    });






});









/////////////////////////////////////////////////////////////////////////////////////////