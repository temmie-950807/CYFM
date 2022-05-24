// 選項
var color = ["#FF776B", "#FFED5C", "#BCE3FF", "#BFC0C0"];
var now_color = [true, true, true];
function change_color(x){
  now_color[x] = !now_color[x];
  initMap();

  if (now_color[x] == 0){
    if (x == 0){
      document.getElementById(`c${x+1}`).style = `background-color: #BFC0C0;`;
    }else{
      document.getElementById(`c${x+1}`).style = `background-color: #BFC0C0;`;
    }
  }else{
    if (x == 0){
      document.getElementById(`c${x+1}`).style = `background-color: ${color[x]};`;
    }else{
      document.getElementById(`c${x+1}`).style = `background-color: ${color[x]};`;
    }
  }
}

// 地圖
var list = [
  [25.061339, 121.518562, "pointer/red.png", "<h2>成淵高中</h2>\n測試用"],
  [25.063732, 121.513858, "pointer/red.png", "<h2>民權國中</h2>\n測試用"],
  [25.060850, 121.515918, "pointer/red.png", "<h2>雙連國小</h2>\n測試用"],

  [25.062850, 121.518676, "pointer/yellow.png", "<h2>公車站_1</h2>\n測試用"],
  [25.062926, 121.516451, "pointer/yellow.png", "<h2>公車站_2</h2>\n測試用"],

  [25.063278, 121.513590, "pointer/blue.png", "<h2>大橋頭站</h2>\n測試用\n<img src=\"img\\temmie.png\""],
  [25.062917, 121.520162, "pointer/blue.png", "<h2>民權西路站</h2>\n測試用\n<img src=\"img\\station_1.jpg\""],
];
function initMap(){
  var location = {lat: 25.061339, lng: 121.518562}; // lat: 經度, lng: 緯度
  function addmarker(i, lat, lng, icon, content){ // 增加地標
    let p = {lat: lat, lng: lng}
    let marker = new google.maps.Marker({
      position: p,
      map: map,
      icon: icon
    });
  
    let infoWindow = new google.maps.InfoWindow({
      content: content,
    });
  
    // info
    marker.addListener("dblclick", function(){
      infoWindow.open(map, marker);
    });
    marker.addListener("mouseout", function(){ 
      marker.setAnimation(null);
    });
    marker.addListener("mouseover", function(){
      marker.setAnimation(google.maps.Animation.BOUNCE);
    });
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
    if (now_color[0] == true && list[i][2] == "pointer/red.png"){
      addmarker(i, list[i][0], list[i][1], list[i][2], list[i][3]);
    }if (now_color[1] == true && list[i][2] == "pointer/yellow.png"){
      addmarker(i, list[i][0], list[i][1], list[i][2], list[i][3]);
    }if (now_color[2] == true && list[i][2] == "pointer/blue.png"){
      addmarker(i, list[i][0], list[i][1], list[i][2], list[i][3]);
    }
  }
};