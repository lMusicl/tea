$(document).ready(function () {
    // галерея
    $('.single-item').slick({
        arrows:true, // показать стрелки
        dots:false, // не показывать точки
        autoplay:true, // автоматическое проигрывание слайдов
    });
    let wow = new WOW({
        boxClass:     'wow',
        animateClass: 'animate__animated',
        offset:       200,
        mobile:       true,
        live:         true
    })
    wow.init();
    // аккордеон
    $(function () {
        $("#accordion").accordion({
            active: true
        });
    });
    // скрываем "Спасибо за заказ"
    let complete = $('.complete').hide()
    // валидация формы
    $("#basic-form").validate({
        // правила валидации
        rules: {
            name: {
                required: true
            },
            surname: {
                required: true
            },
            tel: {
                required: true,
                digits: true
            },
            country: {
                required: true
            },
            index: {
                required: true,
                digits: true,
                minlength: 6
            },
            address: {
                required: true
            }
        },
        // сообщения об ошибках
        messages: {
            name: {
                required: "Введите имя"
            },
            surname: {
                required: "Введите фамилию"
            },
            tel: {
                required: "Введите номер телефона",
                digits: "Нужно вводить только цифры"
            },
            country: {
                required: "Введите страну"
            },
            index: {
                required: "Введите индекс",
                digits: "Нужно вводить только цифры",
                minlength: "Индекс должен содержать минимум 6 символов"
            },
            address: {
                required: "Введите адрес"
            }
        },
        // функция при отправке правильной формы
        submitHandler: function () {
            // показываем "Спасибо за заказ"
            complete.show();
            // скрываем форму и заголовок
            $('.oder').hide();
            $('form').hide();
            // никуда ничего не отправляем
            return false
        }
    });
});