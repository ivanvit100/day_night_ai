var rus = ["Приветствую!", "На данной странице Вы можете ознакомиться с примером использования искусственного интеллекта, обученного методом Q-learning, в браузере.", "Автор: <a href='https://ivanvit.ru>Иванущенко Виталий</a>", "", "", "", "", "", "Изображение", "Выбрать фото", "Предсказать", "Теория", "2021-2022 Иванущенко Виталий", "Нажмите, чтобы продолжить!", "Узнать результат!", "Теория и исходный код модели!", "Гайд", "Далее", "Назад", "Готово"];
var en = ["Greetings!", "On this page you can see an example of using Q-learning artificial intelligence in a browser.", "Author: <a href='https://ivanvit.ru>Ivanushenko Vitaliy</a>", "", "", "", "", "", "Image", "Select image", "Predict", "Theory", "2021-2022 Ivanushenko Vitaliy", "Click to continue!", "Find out the result!", "Theory and source code of the model!", "Guide", "Next", "Back", "Done"];
var state_r = ["Ожидание", "Обработка...", "Невозможно прочесть файл", "День", "Ночь", "Произошла ошибка", "Загрузите Фото"];
var state_n = ["Waiting", "Processing...", "Unable to read file", "Day", "Night", "An error has occurred", "Upload image"];
var intro_r = ["Приветствую! Эта страница демонстрирует реализацию ИИ в браузере.", "Здесь Вы можете загрузить в модель своё изображение.", "Вы можете кликнуть на изображение, чтобы приблизить его.", "Нажмите на эту кнопку, чтобы запустить процесс распознавания времени суток на фотографии.", "Здесь Вы можете найти исходный код страницы."];
var intro_n = ["Greetings! This page demonstrates the implementation of AI in the browser.", "You can load your image here.", "You can click on the image to enlarge it.", "Click this button to start the process of recognizing the time of day in the photo.", "Here you can find the source code of the page."];
var state = 0;
var lang = 1
intro1 = intro_r[0];
intro2 = intro_r[1];
intro3 = intro_r[2];
intro4 = intro_r[3];
intro5 = intro_r[4];
function lang_intro(n){
    if(lang == 1){
        return intro_r[n];
    }
    else{
        return intro_n[n];
    }
}
function lang_change(n){
    if(lang == 1){
        return rus[n];
    }
    else{
        return en[n];
    }
}
function lang_click(w){
    lang = w;
    instructions.message = lang_change(0);
    first.message = lang_change(1);
    second.message = lang_change(2);
    i.message = lang_change(8);
    l1.message = lang_change(9);
    predict_button.message = lang_change(10);
    theory.message = lang_change(11);
    f.message = lang_change(12);
    next.next = lang_change(13);
    predict_button.text = lang_change(14);
    theory.text = lang_change(15);
    final.message = lang_state(state);
    intro.message = lang_change(16);
    next.message = lang_change(17);
    back.message = lang_change(18);
}
function lang_state(n){
    if(lang == 1){
        return state_r[n];
    }
    else{
        return state_n[n];
    }
}
var instructions = new Vue({
    el: '#hello',
    data:{
        message: lang_change(0),
    }
});
var first = new Vue({
    el: '#first',
    data:{
        message: lang_change(1),
    }
});
var second = new Vue({
    el: '#second',
    data:{
        message: lang_change(2),
    }
});
var i = new Vue({
    el: '#i',
    data:{
        message: lang_change(8),
    }
});
var l1 = new Vue({
    el: '#l1',
    data:{
        message: lang_change(9),
    }
});
var f = new Vue({
    el: '#f',
    data:{
        message: lang_change(12),
    }
});

var predict_button = new Vue({
    el: '#predict-button',
    data:{
        text: lang_change(14),
        message: lang_change(10),
    }
});
var theory = new Vue({
    el: '#theory',
    data:{
        text: lang_change(15),
        message: lang_change(11),
    }
});
var hide = new Vue({
    el: '#hide',
    data:{
        seen: true,
        message: lang_change(4),
    }
});
var final = new Vue({
    el: '#final',
    data:{
        message: lang_state(state),
    }
});
var preloader = new Vue({
    el: '#preloader',
    data:{
        seen: true,
    }
});
var dark = new Vue({
    el: '#dark',
    data: {
        seen: false,
    },
    methods: {
        close: function(e){
            close();
        }
    }
});
var intro = new Vue({
    el: '#intro',
    data:{
        message: lang_change(16),
    }
});
var next = new Vue({
    el: '.introjs-nextbutton',
    data:{
        message: lang_change(17),
    }
});
var prev = new Vue({
    el: '.introjs-prevbutton',
    data:{
        message: lang_change(18),
    }
});