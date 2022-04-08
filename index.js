// 地標座標
var list = [
  [25.061339, 121.518562, "pointer/red.png", "<h2>成淵高中</h2>\n測試用"],
  [25.063732, 121.513858, "pointer/red.png", "<h2>民權國中</h2>\n測試用"],
  [25.060850, 121.515918, "pointer/red.png", "<h2>雙連國小</h2>\n測試用"],

  [25.063278, 121.513590, "pointer/blue.png", "<h2>大橋頭站</h2>\n測試用"],
  [25.062917, 121.520162, "pointer/blue.png", "<h2>民權西路站</h2>\n測試用"],

  [25.062850, 121.518676, "pointer/yellow.png", "<h2>公車站_1</h2>\n測試用"],
  [25.062926, 121.516451, "pointer/yellow.png", "<h2>公車站_2</h2>\n測試用"],
]

function initMap(){
  var location = {lat: 25.061339, lng: 121.518562}; // lat: 經度, lng: 緯度
  function addmarker(lat, lng, icon, content){ // 增加地標
    let p = {lat: lat, lng: lng}
    let marker = new google.maps.Marker({
      position: p,
      map: map,
      icon: icon
    });
  
    let infoWindow = new google.maps.InfoWindow({
      content: content,
    });
  
    marker.addListener("click", function(){
      infoWindow.open(map, marker)
    })
  };

  var map = new google.maps.Map(document.getElementById("map"), { // 地圖初始化
    zoom: 16,
    center: location,
    mapTypeControl: false, // 不能調整成衛星圖
    streetViewControl: false, // 不能調整成街景模式
    fullscreenControl: false // 不能用成全螢幕
  });

  // 輸出畫面
  for (var i=0 ; i<list.length ; i++){
    addmarker(list[i][0], list[i][1], list[i][2], list[i][3])
  }
}

