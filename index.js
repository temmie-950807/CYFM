window.alert = function(){};

// 選項
var color = ["#FF776B", "#FFED5C", "#BCE3FF"];
var now_color = [true, true, true];
function change_color(x){
  now_color[x] = !now_color[x];
  initMap();

  if (now_color[x] == 0){
    if (x == 0){
      document.getElementById(`c${x+1}`).style = `background-color: rgb(200, 200, 200);`;
    }else{
      document.getElementById(`c${x+1}`).style = `background-color: rgb(200, 200, 200);`;
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
  // 熱食
  [25.061339, 121.518562, "pointer/red.png", "成淵高中", "測試用", "0000000000"],
  [25.063732, 121.513858, "pointer/red.png", "民權國中", "測試用", "0000000000"],
  [25.060850, 121.515918, "pointer/red.png", "雙連國小", "測試用", "0000000000"],

  // 便當
  [25.060957, 121.521837, "pointer/yellow.png", "8-1 便當外送", "104台北市中山區錦西街8-1號", "0225310920"],
  [25.064254, 121.515899, "pointer/yellow.png", "好味珍精緻便當", "No. 18大龍街大同區台北市103", "0225994152"],
  [25.062448, 121.520834, "pointer/yellow.png", "童家小吃店 (便當，炒飯，炒麵)", "10491台北市中山區天祥路40號", "0225221941"],
  [25.063629, 121.521383, "pointer/yellow.png", "新九龍燒臘", "10491台北市中山區民權西路19號1樓", "0225991178"],
  [25.062526, 121.521092, "pointer/yellow.png", "MissEnergy能量小姐", "10491台北市中山區錦西街4-3號", "0225622212"],
  [25.062000, 121.515880, "pointer/yellow.png", "惠發燒臘小吃店", "103台北市大同區民權西路144巷15號號", "0225530269"],
  [25.063222, 121.521099, "pointer/yellow.png", "鬍鬚張魯肉飯", "10491台北市中山區民權西路43號", "0225930196"],
  [25.063309, 121.520942, "pointer/yellow.png", "民權台菜自助餐", "10491台北市大同區民權西路47號", "0225997080"],

  // 飲料
  [25.057686, 121.517616, "pointer/blue.png", "CoCo都可(台北民生店)", "103台北市大同區民生西路159號", " 0225531569"],
  [25.066121, 121.516110, "pointer/blue.png", "CoCo都可(昌吉店)", "103台北市大同區昌吉街53號", "0225857669"],
  [25.064633, 121.524460, "pointer/blue.png", "可不可熟成紅茶 台北晴光店", "10491台北市中山區雙城街15-5號", "0225851515"]
];

function initMap(){
  var location = {lat: 25.061339, lng: 121.518562}; // lat: 經度, lng: 緯度
  let infoWindow = new google.maps.InfoWindow();

  function addmarker(ip){ // 增加地標
    lat=ip[0];
    lng=ip[1];
    icon=ip[2];

    let p = {lat: lat, lng: lng};
    let marker = new google.maps.Marker({ // 地標指標
      position: p,
      map: map,
      icon: {
        url: icon,
        scaledSize: new google.maps.Size(30, 51)
      }
    });
  
    marker.addListener("dblclick", function(){ // 詳細視窗
      title=ip[3];
      address=ip[4];
      number=ip[5];
      content=`<div class="detail"><h2>${title}</h2>\n<h3>地址: </h3>${address}\n<h3>電話: </h3>${number}</div>`;
      infoWindow.setContent(content);
      infoWindow.setZIndex(10);
      infoWindow.open(map, marker);
    });
    
    marker.addListener("mouseout", function(){  // 動畫
      marker.setAnimation(null);
    });
    marker.addListener("mouseover", function(){
      marker.setAnimation(google.maps.Animation.BOUNCE);
    });
  };

  var map = new google.maps.Map(document.getElementById("map"), { // 地圖初始化
    zoom: 17,
    center: location,
    mapTypeControl: false, // 不能調整成衛星圖
    streetViewControl: false, // 不能調整成街景模式
    fullscreenControl: false // 不能用成全螢幕
  });
  map.setOptions({minZoom: 16, maxZoom: 18}) // limit zoom

  // 輸出畫面
  for (var i=0 ; i<list.length ; i++){
    if (now_color[0] == true && list[i][2] == "pointer/red.png"){
      addmarker(list[i]);
    }if (now_color[1] == true && list[i][2] == "pointer/yellow.png"){
      addmarker(list[i]);
    }if (now_color[2] == true && list[i][2] == "pointer/blue.png"){
      addmarker(list[i]);
    }
  }
};