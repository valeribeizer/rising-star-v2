import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        about: "About Us",
        locations: "Locations",
        prices: "Prices",
        member: "Become a Member",
        member1: "BECOME A MEMBER",
        contact: "Contact",
        club: "GYMNASTICS CLUB",
        description1: `Gymnastics club "Rising Star" was founded in 2022. Club has the task
          of providing gymnastics for children, youth and adults, men and women.
          Our idea is to play, train and compete. With the sport we want to
          provide physical, mental, social and cultural development.`,
        description2: `Our values are the guiding principle for members, leaders and everyone
          else who represents GK Rising Star. We create community and security
          for the gymnasts and everyone else involved in relation to each other,
          the sport and the outside world. In this way, all our activities
          develop into a community that creates joy and well-being.`,
        click: "Click here",
        statue: `to read the club's statute.`,
        talk: `Contact us`,
        letter: "Drop us a letter!",
        btn_text: "Send",
        btn_success_text: "We got it!",
        btn_error_text: "Check your fields!",
        fname: "First name*",
        lname: "Last name",
        phone: "Phone No.*",
        msg: "Message*",
        agree: "By clicking you agree to our",
        terms: "Terms and Conditions",
        validation: "These prices are valid for the term",
        price_info: `Also, there is a membership fee: 250 sek. It should be paid once a year. Sign * means opportunity to visit more than 3 classes a week without additional fees. Also, you get a 10% discount for every additional membership in our club.`,
        one_time: "1 time per week",
        twice: "2 times per week",
        three: "3 times per week",
        class: "class",
      },
    },
    sv: {
      translation: {
        about: "Om Oss",
        locations: "Plats",
        prices: "Pris",
        member: "Bli medlem",
        member1: "BLI MEDLEM",
        contact: "Kontakta oss",
        club: "GYMNASTIKKLUBB",
        description1: `Vår gymnastikklubb "Rising Star" grundades 2022 och vi lär ut gymnastik för alla - framförallt barn, men vi har klasser även för ungdomar och vuxna, oavsett kön. Vår tanke är att gymnastiken kan vara det du vill just för dig -  en lekfull form av träning eller tävlingsinriktad sport. Oavsett dina eller ditt barns mål ger sporten fysisk, mental, social och kulturell utveckling.`,
        description2: `Våra värderingar är ledstjärnan för medlemmar, ledare och alla andra som representerar GK Rising Star. Vi strävar efter att skapa gemenskap och trygghet för gymnasterna och alla andra som är involverade i förhållande till varandra, sporten och omvärlden. Alla våra aktiviteter inom gemenskapen syftar till att bidra till glädje och välbefinnande.`,
        click: "Klicka här",
        statue: `för att läsa klubbens stadgar.`,
        talk: `Kontakta oss!`,
        letter: `Mejla oss!`,
        btn_text: "Skicka",
        btn_success_text: "Vi fick det!",
        btn_error_text: "Kontrollera dina fält!",
        fname: "Namn*",
        lname: "Efternamn",
        phone: "Telefon Nr.*",
        msg: "Meddelande*",
        agree: "Genom att klicka godkänner du vår",
        terms: "Villkor",
        validation: "Dessa priser gäller för termin",
        price_info: `Dessutom tillkommer en medlemsavgift: 250 kr. Den ska betalas en gång om året. Tecken * nedan innebär möjlighet att besöka mer än 3 klasser i veckan utan extra avgifter. Dessutom får du 10% rabatt för varje extra medlemskap i vår klubb.`,
        one_time: "1 gång per vecka",
        twice: "2 gånger per vecka",
        three: "3 gånger per vecka",
        class: "pass",
      },
    },
    ru: {
      translation: {
        about: "О нас",
        locations: "Залы",
        prices: "Цены",
        member: "Стать участником",
        member1: "СТАТЬ УЧАСТНИКОМ",
        contact: "Контакты",
        club: "КЛУБ ГИМНАСТИКИ",
        description1: `Гимнастический клуб "Rising Star" был основан в 2022 году. Перед клубом стоит задача
обеспечить гимнастику для детей, молодежи и взрослых, мужчин и женщин.
Наша идея состоит в том, чтобы играть, тренироваться и соревноваться. С помощью спорта мы хотим
обеспечить физическое, умственное, социальное и культурное развитие.`,
        description2: `Наши ценности являются руководящим принципом для членов, лидеров и всех
остальных, кто представляет GK Rising Star. Мы создаем сообщество и безопасность
для гимнастов и всех остальных, кто вовлечен в отношения друг к другу,
спорту и внешнему миру. Таким образом, вся наша деятельность
превращается в сообщество, которое создает радость и благополучие.`,
        click: "Нажмите здесь",
        statue: `чтобы прочитать наш устав.`,
        talk: "Поболтаем?",
        letter: "Напиши нам письмо!",
        btn_text: "Отправить",
        btn_success_text: "Получили!",
        btn_error_text: "Проверь поля!",
        fname: "Имя*",
        lname: "Фамилия",
        phone: "Номер телефона*",
        msg: "Сообщение*",
        agree: "Нажимая Вы соглашаетесь на наши",
        terms: "Положения и Условия",
        validation: "Данные цены действительны в течение термина",
        price_info: `Членский взнос: 250 шведских крон. Он оплачиватся один раз в год. Знак * означает возможность посещения более 3 занятий в неделю без дополнительной платы. Кроме того, вы получаете скидку 10% на каждое дополнительное членство в нашем клубе.`,
        one_time: "1 раз в неделю",
        twice: "2 раза в неделю",
        three: "3 раза в неделю",
        class: "занятие",
      },
    },
  },
});

export default i18n;
