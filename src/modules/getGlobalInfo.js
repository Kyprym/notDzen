let city = "Москва"
const cityList = [
    { ru: "Москва", en: "Moscow" },
    { ru: "Санкт-Петербург", en: "Saint Petersburg" },
    { ru: "Новосибирск", en: "Novosibirsk" },
    { ru: "Екатеринбург", en: "Ekaterinburg" },
    { ru: "Казань", en: "Kazan" },
    { ru: "Красноярск", en: "Krasnoyarsk" },
    { ru: "Нижний Новгород", en: "Nizhny Novgorod" },
    { ru: "Уфа", en: "Ufa" },
    { ru: "Самара", en: "Samara" },
    { ru: "Ростов-на-Дону", en: "Rostov-on-Don" },
    { ru: "Омск", en: "Omsk" },
    { ru: "Воронеж", en: "Voronezh" },
]

const searchHistoryArr = [
    { text: "в чем секрет кота бориса", link: 'https://dzen.ru/' },
    { text: "уроки по рекакт для чайников памагити", link: 'https://dzen.ru/' },
    { text: "уроки по рекакт для приматов с картинками и видео много идео", link: 'https://dzen.ru/' },
    { text: "что будет, если собрать атомный реактор в гараже, фото в цвете", link: 'https://dzen.ru/' },
    { text: "заходит как то сталкер в бар и прячет консервные банки от сидоровича", link: 'https://dzen.ru/' },
    { text: "очередной тестовый запрос очередной тестовый запрос очередной тестовый запрос", link: 'https://dzen.ru/' },
    { text: "Инструкция: как быстро найти пульт от телевизора", link: 'https://dzen.ru/' },
    { text: "Сколько калорий сжигается при поиске зарядки для телефона?", link: 'https://dzen.ru/' },
    { text: "Как перестать откладывать сон на потом... завтра?", link: 'https://dzen.ru/' },
    { text: "Почему мой тост всегда падает маслом вниз, и как это предотвратить?", link: 'https://dzen.ru/' },
    { text: "Почему коты смотрят на тебя, когда ты ешь?", link: 'https://dzen.ru/' },
];

function getTime() {
    const date = new Date();
    let hours = date.getHours()
    return hours;
}

function getTemp(city) {
    const KEY = '0ab73f215b19065113a36946822bf48c';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`;

    fetch(URL)
        .then(res => res.json())
        .then(data => data.main.temp)
        .then(num => {
            document.getElementById("temp").innerHTML = `${Math.ceil(num)}°`
        })
        .catch(err => console.log(err));

};

function getMoney() {
    const URL = "https://www.cbr-xml-daily.ru/daily_json.js"
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            document.getElementById("USD").innerHTML = `${data.Valute.USD.Value.toFixed(2)}`
            document.getElementById("EUR").innerHTML = `${data.Valute.EUR.Value.toFixed(2)}`
        })
        .catch(err => console.log(err))
}

function getGas() {
    const URL = "https://www.cbr-xml-daily.ru/daily_json.js"
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            document.getElementById("gas").innerHTML = `${Number(data.Valute.USD.Value.toFixed(0)) + 2} `
        })
        .catch(err => console.log(err))
}

function applyCity(e) {
    const city = e.target.textContent;
    for (let i = 0; i < cityList.length; i++) {
        if (city === cityList[i].ru) {
            const pushCity = document.getElementById('city')
            pushCity.innerHTML = `${cityList[i].ru}`
            getTemp(cityList[i].en)
        }
    }
}

export { getTime, getTemp, getMoney, getGas, applyCity, city, cityList, searchHistoryArr }