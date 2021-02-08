$(document).ready(function () {
    $.get('https://danepubliczne.imgw.pl/api/data/synop/')
        .done(data => {
            let body = $('body');
            let container = $('<div></div>');
            $(container).attr('class', 'container');
            $(body).append(container);

            for (city of data) {
                let box = $('<div></div>');
                $(box).attr('class', 'weather-box');
                $(container).append(box);
                $(box).html(`<h2>${city.stacja}</h2><p>${city.temperatura} °C</p><p>${city.cisnienie} hPa</p>`);
            };

            const input = document.querySelector('input');
            $(input).on("keyup", function () {
                let value = $(this).val().toLowerCase();
                $('.weather-box').filter(function () {
                    $(this).toggle($(this).find('h2').text().toLowerCase().indexOf(value) > -1);
                });
            });
        })

        .fail(error => {
            console.error(error);
        });
});