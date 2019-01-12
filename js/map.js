var sedonaMap = document.querySelector('.sedona-map');

// Карта
function initMap() {
  var map = new google.maps.Map(sedonaMap, {
    zoom: 9,
    center: {lat: 34.76, lng: -111.74},
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.roadmap
  });

  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {lat: 34.88, lng: -111.76}
  });
}
