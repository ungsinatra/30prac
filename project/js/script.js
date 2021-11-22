/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const adv = document.querySelectorAll(".promo__adv img");
adv.forEach(item => {

    item.remove();

});



const cont = document.querySelector(".promo__content"),
    genre = document.querySelector(".promo__genre"),
    content = document.querySelectorAll(".promo__bg");
genre.textContent = "Драма";





const text1 = document.querySelector(".promo__interactive-list");

text1.innerHTML = "";
// text.forEach(element => {
//     element.remove();
// });

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    text1.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} ${film}
        <div class="delete"></div>
    </li>
    
    `;


});