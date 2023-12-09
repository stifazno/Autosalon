var carsData = [
    {
        model: 'Audi A6',
        price: '$45,000',
        image: 'img2/audiA6.jpg',
        color: 'black',
        brand: 'audi',
        characteristics: [
            { name: 'Год выпуска', value: 2022 },
            { name: 'Тип кузова', value: 'Седан' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Полный' },
            { name: 'Максимальная скорость', value: '240 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '5.0 сек' },
        ],
        description: 'Превосходный седан с улучшенными характеристиками.',
    },
    {
        model: 'Shelby Mustang',
        price: '$55,000',
        image: 'img2/ShelbyMustang.jpg',
        color: 'black',
        brand: 'mustang',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Купе' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Задний' },
            { name: 'Максимальная скорость', value: '270 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '4.5 сек' },
        ],
        description: 'Мощный спортивный купе от Shelby с потрясающей динамикой.',
    },
    {
        model: 'Bugatti Chiron',
        price: '$3,000,000',
        
        image: 'img2/Bugati.jpg',
        color: 'black',
        brand: 'bugatti',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Суперкар' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Полный' },
            { name: 'Максимальная скорость', value: '420 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '2.5 сек' },
        ],
        description: 'Легендарный суперкар с потрясающей динамикой и роскошным дизайном.',
    },
    {
        model: 'Nissan GTR',
        price: '$30,000',
        image: 'img2/NissanGTR.jpg',
        color: 'white',
        brand: 'audi',
        characteristics: [
            { name: 'Год выпуска', value: 2022 },
            { name: 'Тип кузова', value: 'Седан' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Передний' },
            { name: 'Максимальная скорость', value: '250 км/ч'},
            { name: 'Разгон до 100 км/ч', value: '4.0 сек' }, 
        ],
        description: 'Прекрасный седан для городской жизни.',
    },
    {
        model: 'Porsche 911 Turbo',
        price: '$150,000',
        image: 'img2/Porshe911.jpg',
        color: 'black',
        brand: 'porsche',
        characteristics: [
            { name: 'Год выпуска', value: 2022 },
            { name: 'Тип кузова', value: 'Купе' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Полный' },
            { name: 'Максимальная скорость', value: '330 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '2.7 сек' },
        ],
        description: 'Суперкар с легендарной динамикой и стильным дизайном от Porsche.',
    },
    {
        model: 'Jaguar F-Type',
        price: '$80,000',
        image: 'img2/jaguarF.jpg',
        color: 'green',
        brand: 'jaguar',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Купе' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Задний' },
            { name: 'Максимальная скорость', value: '300 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '3.5 сек' },
        ],
        description: 'Спортивное купе от Jaguar с элегантным дизайном и мощным двигателем.',
    },
    {
        model: 'Bentley Continental GT',
        price: '$200,000',
        image: 'img2/BentleyGT.jpg',
        color: 'silver',
        brand: 'bentley',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Купе' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Полный' },
            { name: 'Максимальная скорость', value: '333 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '3.7 сек' },
        ],
        description: 'Роскошное купе от Bentley с выдающейся производительностью и изысканным дизайном.',
    },
    {
        model: 'Audi A7',
        price: '$70,000',
        image: 'img2/audiA7.jpg',
        color: 'black',
        brand: 'audi',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Хэтчбек' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Полный' },
            { name: 'Максимальная скорость', value: '280 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '4.8 сек' },
        ],
        description: 'Стильный хэтчбек от Audi с высоким уровнем комфорта и динамичной характеристикой.',
    },
    {
        model: 'Chevrolet Camaro',
        price: '$35,000',
        image: 'img2/Chevrolet.jpg',
        color: 'red',
        brand: 'chevrolet',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Купе' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Задний' },
            { name: 'Максимальная скорость', value: '290 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '5.0 сек' },
        ],
        description: 'Легендарный мускульный купе от Chevrolet с ярким дизайном и мощным двигателем.',
    },
    {
        model: 'Tesla Model S',
        price: '$80,000',
        image: 'img2/TeslaS.jpg',
        color: 'blue',
        brand: 'tesla',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Седан' },
            { name: 'Двигатель', value: 'Электрический' },
            { name: 'Привод', value: 'Полный' },
            { name: 'Максимальная скорость', value: '250 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '2.4 сек' },
        ],
        description: 'Инновационный седан от Tesla с электрическим двигателем и автономной системой вождения.',
    },
    {
        model: 'Rolls-Royce Phantom',
        price: '$500,000',
        image: 'img2/RollsRoyce.jpg',
        color: 'black',
        brand: 'rolls-royce',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Седан' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Задний' },
            { name: 'Максимальная скорость', value: '250 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '5.1 сек' },
        ],
        description: 'Элитный седан от Rolls-Royce с роскошным дизайном и высочайшим уровнем комфорта.',
    },
    {
        model: 'Lamborghini Aventador',
        price: '$400,000',
        image: 'img2/LamborginiRed.jpg',
        color: 'yellow',
        brand: 'lamborghini',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Суперкар' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Полный' },
            { name: 'Максимальная скорость', value: '350 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '2.8 сек' },
        ],
        description: 'Итальянский суперкар от Lamborghini с захватывающим дизайном и выдающейся динамикой.',
    },
    {
        model: 'Audi A5',
        price: '$50,000',
        image: 'img2/audiA5.jpg',
        color: 'gray',
        brand: 'audi',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Купе' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Полный' },
            { name: 'Максимальная скорость', value: '240 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '5.5 сек' },
        ],
        description: 'Спортивное купе от Audi с элегантным дизайном и отличной управляемостью.',
    },
    {
        model: 'McLaren P1',
        price: '$1,500,000',
        image: 'img2/McLaren.jpg',
        color: 'orange',
        brand: 'mclaren',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Суперкар' },
            { name: 'Двигатель', value: 'Гибридный' },
            { name: 'Привод', value: 'Задний' },
            { name: 'Максимальная скорость', value: '350 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '2.8 сек' },
        ],
        description: 'Ультрасовременный суперкар от McLaren с передовой технологией и экстремальной производительностью.',
    },
    {
        model: 'Porsche Cayman',
        price: '$65,000',
        image: 'img2/PorsheYellow.jpg',
        color: 'blue',
        brand: 'porsche',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Купе' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Задний' },
            { name: 'Максимальная скорость', value: '280 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '4.5 сек' },
        ],
        description: 'Спортивный купе от Porsche с выдающейся управляемостью и динамикой.',
    },
    {
        model: 'BMW M6',
        price: '$90,000',
        image: 'img2/BmwM6.jpg',
        color: 'silver',
        brand: 'bmw',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Купе' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Задний' },
            { name: 'Максимальная скорость', value: '305 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '3.8 сек' },
        ],
        description: 'Спортивное купе от BMW с высокой производительностью и элегантным дизайном.',
    },
    {
        model: 'BMW F30',
        price: '$40,000',
        image: 'img2/BmwF30.jpg',
        color: 'black',
        brand: 'bmw',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Седан' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Задний' },
            { name: 'Максимальная скорость', value: '250 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '6.2 сек' },
        ],
        description: 'Седан BMW 3 Series (F30) с элегантным дизайном и комбинацией динамичной производительности и комфорта.',
    },
    {
        model: 'Lamborghini Huracan',
        price: '$300,000',
        image: 'img2/LamborginiYellow.jpg',
        color: 'yellow',
        brand: 'lamborghini',
        characteristics: [
            { name: 'Год выпуска', value: 2023 },
            { name: 'Тип кузова', value: 'Купе' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Полный' },
            { name: 'Максимальная скорость', value: '325 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '3.2 сек' },
        ],
        description: 'Суперкар Lamborghini Huracan с уникальным дизайном и выдающейся динамикой.',
    },
    {
        model: 'Mercedes-Benz C-класс (W205)',
        price: '$35,000',
        image: 'img2/Mercedes-Benz.jpg',
        color: 'silver',
        brand: 'mercedes-benz',
        characteristics: [
            { name: 'Год выпуска', value: 2014 },
            { name: 'Тип кузова', value: 'Седан' },
            { name: 'Двигатель', value: 'Бензиновый' },
            { name: 'Привод', value: 'Задний' },
            { name: 'Максимальная скорость', value: '240 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '6.7 сек' },
        ],
        description: 'Седан Mercedes-Benz C-класс (W205) 2014 года с элегантным дизайном и комфортабельным интерьером.',
    },

    {
        model: 'Ferrari SF90 Stradale',
        price: '$600,000',
        image: 'img2/BugattiChiron.jpg',
        color: 'red',
        brand: 'ferrari',
        characteristics: [
            { name: 'Год выпуска', value: 2022 },
            { name: 'Тип кузова', value: 'Суперкар' },
            { name: 'Двигатель', value: 'Гибридный' },
            { name: 'Привод', value: 'Полный' },
            { name: 'Максимальная скорость', value: '340 км/ч' },
            { name: 'Разгон до 100 км/ч', value: '2.5 сек' },
        ],
        description: 'Элитный суперкар с передовой технологией и невероятной производительностью.',
    },
    
    
    
    // Добавьте данные для других машин
];



// characteristics.js
function openCarDetails(index) {
    var car = carsData[index];
    var characteristicsString = car.characteristics.map(function (char) {
        return char.name + ': ' + char.value;
    }).join('<br>');

    const price = car.price;
    const yearOfRelease = car.characteristics[0].name;
    const yearOfReleaseVal = car.characteristics[0].value;
    const bodyType = car.characteristics[1].name;
    const bodyTypeVal = car.characteristics[1].value;
    const engineType = car.characteristics[2].name;
    const engineTypeVal = car.characteristics[2].value;
    const driveType = car.characteristics[3].name;
    const driveTypeVal = car.characteristics[3].value;

    const maxSpeed = car.characteristics[4].name;
    const maxSpeedVal = car.characteristics[4].value;
    const razgon = car.characteristics[5].name;
    const razgonVal = car.characteristics[5].value;

    // Открываем новое окно и загружаем в него characteristic.html
    var detailsWindow = window.open('characteristic.html', '_self');

    // Вставляем информацию о машине сразу после открытия окна
    detailsWindow.document.write(`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="kursov.css">
       
        <link rel="stylesheet" href="characteristic.css">

       
        
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    
        
    
        
        <title>Document2</title>
    </head>
    
    <body>
        <header>
            <button class="burger-button" onclick="toggleNav()">☰</button>
    
            <nav class="nav">
                <ul class="navLi">
                    <li class="li li8"><a href="kursov.html" target="_self">Главная</a></li>
                    <li class="li li8"><a href="CarsFilt.html" target="_self">Автомобили</a></li>
                    <li class="li li2"><a href="profitableOffer.html" target="_self">Предложение</a></li>
                    <li class="li li3"><a href="garant.html">Гарантия</a></li>
                   
                </ul>
            </nav>
        </header>
        <body>
            <div class="details-container">
                <div class="charac_image">
                    <img src="${car.image}" alt="${car.model} image">
                </div>
                <div class = "GridCont">
                    <div class ="CarModel"> 
                        <h1>${car.model}</h1>
                    </div>
                    <div class="characteristics">
                        <p>Цена : </p>
                        <p>${price}</p>
                        <p>${yearOfRelease} :</p>
                        <p>${yearOfReleaseVal}</p>
                        <p>${bodyType} : </p>
                        <p>${bodyTypeVal}</p>
                        <p>${engineType} : </p>
                        <p> ${engineTypeVal}</p>
                        <p>${driveType} :</p>
                        <p> ${driveTypeVal}</p>
                        <p>${maxSpeed} : </p>
                        <p> ${maxSpeedVal}</p>

                        <p>${razgon} : </p>
                        <p>${razgonVal}</p>
                    </div>
                </div>
                
                
               
            </div>
            
        </body>

        
        <footer class="footer">
        <div class="containner">
         <div class="row">
           <div class="footer-col">
             <h4>О нас</h4>
             <ul>
               <li><a href="#id1">Хиты продаж</a></li>
               <li><a href="#id2">Каталог Автомобилей</a></li>
               <li><a href="#id3">Наши преимущества</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>Услуги</h4>
             <ul>
               <li><a href="CarsFilt.html">Автомобили</a></li>
               <li><a href="profitableOffer.html">Предложение</a></li>
               <li><a href="garant.html">Гарантия</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>Контактная информация</h4>
             <ul>
               <li><a href="#none"><p>Телефон: <strong>+7 977 111-0133</strong></p></a></li>
               <li><a href="#"><strong><a href="mailto:info@example.com">auto.Imperiya@gmail.com</a></strong></a></li>
              
             </ul>
           </div>
           <div class="footer-col">
             <h4>Социальные сети</h4>
             <div class="social-links">
               <a href="#"><i class="fab fa-facebook-f"></i></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-linkedin-in"></i></a>
             </div>
           </div>
         </div>
        </div>
     </footer>
        </html>
    `);
}

