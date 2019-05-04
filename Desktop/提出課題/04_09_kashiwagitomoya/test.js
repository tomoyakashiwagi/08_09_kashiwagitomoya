let map, infobox, currentPushpin;

// 現在地を取得するときのオプション
// const set = {

//     enableHighAccuracy: true,   //より高精度な位置を求める
//     maximumAge: 20000,          //最後の現在地情報取得が20秒以内であればその情報を再利用する設定
//     timeout: 10000              //10秒以内に現在地情報を取得できなければ、処理を終了
// };

// // 現在地を中心にして地図を表示する関数
// function mapsInit(position) {
//     // console.log(position); //確認用

//     // 座標を変数に入れる処理
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
//     console.log(lat, lng);

//     // 変数を中心にして地図を表示する処理
//     map = new Microsoft.Maps.Map('#mymap', {
//         center: {
//             latitude: lat,
//             longitude: lng
//         },

//         mapTypeId: Microsoft.Maps.MapTypeId.load,
//         zoom: 15,
//         disableZooming: true


//     });
//     //     //ピン立てのコード

//     pushpin(lat, lng, map);
// }


// // // 現在位置の取得に失敗したときに実行する関数
// function mapsError(error) {
//     let e = "";
//     if (error.code == 1) {
//         e = "位置情報が許可されてません";
//     }
//     if (error.code == 2) {
//         e = "現在位置を特定できません";
//     }
//     if (error.code == 3) {
//         e = "位置情報を取得する前にタイムアウトになりました";
//     }
//     alert("error：" + e);
// }

// // 現在地を取得し，成功したら地図を表示する関数
// function GetMap() {
//     // 位置情報を取得する処理と，成功時と失敗時の関数を記述
//     navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);
// }


// function pushpin(lat, lng, now) {
//     let location = new Microsoft.Maps.Location(lat, lng);
//     let pin = new Microsoft.Maps.Pushpin(location, {
//         // text: "test",
//         color: 'navy',
//         roundClickableArea: true,
//         cursor: "pointer",
//         visible: true
//     });
//     now.entities.push(pin);
//     map.entities.push(pin);
// };



function GetMap() {
    map = new Microsoft.Maps.Map('#myMap', {});

    Microsoft.Maps.Events.addHandler(map, 'click', mapClicked);

    infobox = new Microsoft.Maps.Infobox(map.getCenter(), { visible: false });
    infobox.setMap(map);

    Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', function () {
        var manager = new Microsoft.Maps.AutosuggestManager({ map: map });
        manager.attachAutosuggest('#searchBox', '#searchBoxContainer', selectedSuggestion);
    });
}

function selectedSuggestion(result) {
    //Remove previously selected suggestions from the map.
    map.entities.clear();
    //Show the suggestion as a pushpin and center map over it.
    var pin = new Microsoft.Maps.Pushpin(result.location, {
        icon: 's_tarosan.png'
    });
    map.entities.push(pin);
    map.setView({ bounds: result.bestView });
}

document.getElementById("clear").onclick = function () {
    document.getElementById("searchBox").value = "";
}


function mapClicked(e) {

    console.log(e);
    currentPushpin = new Microsoft.Maps.Pushpin(e.location, {
        // color: 'red',
        icon: 's_tarosan.png'
    });

    Microsoft.Maps.Events.addHandler(currentPushpin, 'click', pushpinClicked);

    map.entities.push(currentPushpin);

    document.getElementById('inputForm').style.display = '';


}


function saveData() {

    currentPushpin.metadata = {
        title: document.getElementById('titleTbx').value,
        description: document.getElementById('descriptionTbx').value
    };
    document.getElementById('titleTbx').value = '';
    document.getElementById('descriptionTbx').value = '';
    document.getElementById('inputForm').style.display = 'none';

}

function pushpinClicked(e) {
    if (e.target.metadata) {
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }

}


newPostRef.push({
    //newPostRefが送信先 //オブジェクトの形でデータを送る
    name: $('#name').val(), time: ymd(),
    text: $('#text').val()
});
