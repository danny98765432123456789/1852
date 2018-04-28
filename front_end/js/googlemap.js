

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(25.063891, 121.522627),
    mapTypeId: 'terrain'
  });
  var latLng = new google.maps.LatLng(25.063891, 121.522627);
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });

  var infowindow = new google.maps.InfoWindow();
  let contentString =
    '<div id="bodyContent >' +
    '<div id="content">' +
    '<div id="siteNotice" style="font-size:30px" >' + "1213" +
    '</div>' +
    '<div style="font-size:20px" >' + '<p ><b>剩餘車位: </b>' + "results[i].remain_car" +
    '</p>' + '</div>' +
    '<div style="font-size:20px" >' + '<p ><b>計費方式: </b>' + "results[i].park_payex" +
    '</p>' + '</div>' +
    '<div style="font-size:20px" >' + '<p ><b>營業時間: </b>' + "results[i].park_servicetime" +
    '</p>' + '</div>' +
    '<div style="font-size:20px" >' + '<p ><b>地址資訊: </b>' + "results[i].park_address" +
    '</p>' + '</div>' +
    '</div>'
  google.maps.event.addListener(marker, 'click', (function(marker) {
    return function() {
      infowindow.setContent(contentString);
      infowindow.open(map, marker);
    }
  })(marker));
}
