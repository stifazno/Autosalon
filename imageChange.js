document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы изображений по их идентификаторам
    var productImage = document.getElementById('productImage');
    var productImage1 = document.getElementById('productImage1');
    var productImage2 = document.getElementById('productImage2');

    // Добавляем слушателя события наведения курсора на первое изображение
    productImage.addEventListener('mouseover', function() {
        // При наведении меняем путь к изображению
        productImage.src = 'img/card5_2.png';
    });

    // Добавляем слушателя события ухода курсора с первого изображения
    productImage.addEventListener('mouseout', function() {
        // При уходе возвращаем изображению исходный путь
        productImage.src = 'img/card5.png';
    });

    // Аналогичные слушатели для второго изображения
    productImage1.addEventListener('mouseover', function() {
        productImage1.src = 'img/card7_2.png';
    });

    productImage1.addEventListener('mouseout', function() {
        productImage1.src = 'img/card7.png';
    });

    productImage2.addEventListener('mouseover', function() {
        // При наведении меняем путь к изображению
        productImage2.src = 'img/card8_2.png';
    });

    // Добавляем слушателя события ухода курсора с первого изображения
    productImage2.addEventListener('mouseout', function() {
        // При уходе возвращаем изображению исходный путь
        productImage2.src = 'img/card8.png';
    });









});