// Обработчик события для изменения значения цвета
document.getElementById('colorFilter').addEventListener('change', function() {
    filterElements();
});

// Обработчик события для изменения значения бренда
document.getElementById('brandFilter').addEventListener('change', function() {
    filterElements();
});

function filterElements() {
    // Получаем выбранные значения цвета и бренда
    var filterColor = document.getElementById('colorFilter').value;
    var filterBrand = document.getElementById('brandFilter').value;

    // Получаем все элементы с классом container*
    var containers = document.querySelectorAll('[class^="container"]');

    // Перебираем элементы и скрываем/показываем их в соответствии с выбранным цветом и брендом
    containers.forEach(function(container) {
        var containerColor = container.getAttribute('data-color');
        var containerBrand = container.getAttribute('data-brand');

        // Проверяем соответствие и цвета, и бренда
        if (
            (filterColor === 'all' || containerColor === filterColor) &&
            (filterBrand === 'All' || containerBrand === filterBrand)
        ) {
            // Показываем элемент, если выбран "All Colors" или цвет и бренд совпадают
            container.style.display = 'block';
        } else {
            // Скрываем элемент, если цвет или бренд не совпадают
            container.style.display = 'none';
        }
    });
}
