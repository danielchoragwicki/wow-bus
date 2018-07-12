$(document).ready(function () {
    
    // CITIES

    let fromCity = [
        'Wrocław',
        'Kraków',
        'Warszawa',
        'Berlin'
    ];
    let destCity = [
        'Wrocław',
        'Kraków',
        'Warszawa',
        'Berlin'
    ];

    $( "#from-city" ).autocomplete({
        source: fromCity
    });
    $( "#dest-city" ).autocomplete({
        source: destCity
    });

    // DATES

    $(function() {
        $(".datepicker").datepicker({
            showOn: "button",
            buttonImage: "../img/search-calendar.png",
            buttonImageOnly: true,
            buttonText: "Wybierz datę"
        });
    });

    $(".search__add-button").click(function() {
        $(".return").removeClass('hide');
        $(".return-button").addClass('hide');
    })

    // PERSONS 

    $("#persons-count-slider").slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: function(event, ui) {
        $( "#persons-count" ).val(ui.value);
        }
    });
    $("#persons-count").val($("#persons-count-slider").slider("value"));

    $(".search__persons-button").click(function() {
        $(".search__slider").toggleClass('hide');
    })

    // ANIMATIONS

    window.sr = ScrollReveal();
    sr.reveal('.anim');

});
