ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.751574, 37.573856],
        zoom: 10
    });

    var myPlacemark = new ymaps.Placemark([55.751574, 37.573856], {
        balloonContent: 'Магазин Лакзан'
    });

    myMap.geoObjects.add(myPlacemark);


    myPlacemark.events.add('click', function (e) {

        alert('Спасибо за клики! Здесь можно добавить маршрут.');
    });
}