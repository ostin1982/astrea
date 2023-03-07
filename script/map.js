ymaps.ready(() => {
    const myMap = new ymaps.Map("map", {
        center: [55.738363, 37.661563],
        zoom: 16,
        controls: []
    });

    const myPlacemark = new ymaps.Placemark([55.738363, 37.661563], {}, {
        preset: 'islands#bluePocketCircleIcon'
    });
    
    myMap.controls.add('zoomControl');
    myMap.behaviors.disable(['scrollZoom', 'searchControl']);
    myMap.geoObjects.add(myPlacemark); 
});