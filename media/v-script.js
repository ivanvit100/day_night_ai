var rus = ["Инструкция", "Приветствую! На данной странице Вы можете ознакомиться с примером использования искусственного интеллекта, обученного методом Q-learning, в браузере.", "Автор: Иванущенко Виталий (ivanvit.ru)", "Для успешного взаимодействия с системой ознакомтесь со следующей инструкцией:", "Нажмите на кнопку 'Понятно'", "Загрузите изображение", "Нажмите на кнопку 'Предсказать'", "Понятно", "Изображение", "Выбрать фото", "Предсказать", "Теория", "2021-2022 Иванущенко Виталий", "Нажмите, чтобы продолжить!", "Узнать результат!", "Теория и исходный код модели!"];
var en = ["Instructions", "Greetings! On this page you can see an example of using Q-learning artificial intelligence in a browser.", "Author: Ivanushenko Vitaliy (ivanvit.ru)", "For successful interaction with the system, read the following instructions:", "Click on the 'Got it' button", "Upload image", "Click on the 'Predict' button", "Got it", "Image", "Select image", "Predict", "Theory", "2021-2022 Ivanushenko Vitaliy", "Click to continue!", "Find out the result!", "Theory and source code of the model!"];
var state_r = ["Ожидание", "Обработка...", "Невозможно прочесть файл", "День", "Ночь", "Произошла ошибка", "Загрузите Фото"];
var state_n = ["Waiting", "Processing...", "Unable to read file", "Day", "Night", "An error has occurred", "Upload image"];
var state = 0;
var lang = 1;

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
    third.message = lang_change(3);
    hide.message = lang_change(4);
    li_2.message = lang_change(5);
    li_3.message = lang_change(6);
    next.message = lang_change(7);
    i.message = lang_change(8);
    l1.message = lang_change(9);
    predict_button.message = lang_change(10);
    theory.message = lang_change(11);
    f.message = lang_change(12);
    next.next = lang_change(13);
    predict_button.text = lang_change(14);
    theory.text = lang_change(15);
    final.message = lang_state(state);
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
        seen: true,
        message: lang_change(2),
    }
});
var third = new Vue({
    el: '#third',
    data:{
        message: lang_change(3),
    }
});
var li_2 = new Vue({
    el: '#li_2',
    data:{
        message: lang_change(5),
    }
});
var li_3 = new Vue({
    el: '#li_3',
    data:{
        message: lang_change(6),
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

var next = new Vue({
    el: '#next',
    data:{
        seen: true,
        next: lang_change(13),
        message: lang_change(7),
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