$(function() {

    var html = $("info").html();

    var data =[ {
        name: "Иващенко Денис Константинович",
        photo: "img/IMG_2377.JPG",
        myInfo: "Студент Одесской Национальной Академии Связи им. Попова",
        whyFrontEnd: "Хочу учить фронтенд, потому что:",
        reason: {
            first: "высокие зарплаты",
            second: "интерес к фронтенду",
            third: "построить свое будущее"
        },
        contacts: {
            top: "Мой контактный телефон:",
            number: "+380934913705"
        },
        social_link: {
            top: "Мой профиль на фейсбуке",
            link: "Денис Иващенко",
            href: "https://www.facebook.com/xfixedx"
        },
        footer: {
            top: "Мой фидбек",
            text: "Обращайтесь!"
        }
    }, ];
    var content = tmpl(html, {
        data: data
    });
    $("body").append(content);

});
