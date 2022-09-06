import { nanoid } from "nanoid";

export const currency = [
  { currencyOrName: "USD MOEX", rate: "63,52", growth: "+0,09" },
  { currencyOrName: "EUR MOEX", rate: "70,86", growth: "+0,14" },
  { currencyOrName: "НЕФТЬ", rate: "64,90", growth: "+1,63%" },
];

export const searchTitles = [
  {
    link: "https://yandex.ru/video/search?utm_source=main_stripe_big&text=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE",
    title: "Видео",
  },
  {
    link: "https://yandex.ru/images/?utm_source=main_stripe_big",
    title: "Картинки",
  },
  {
    link: "https://yandex.ru/news/?utm_source=main_stripe_big",
    title: "Новости",
  },
  {
    link: "https://yandex.ru/maps/10746/pavlovskiy-posad/?ll=38.651318%2C55.779393&utm_source=main_stripe_big&z=14",
    title: "Карты",
  },

  {
    link: "https://market.yandex.ru/?clid=505&utm_source=main_stripe_big&src_pof=505&icookie=wG2XFQ74A9G06ajIgpqzMLOoriwB4r014WNqFc1umK7HvTjOxhiuxmMB0xn7TEuXDvRWwSBBFXnCvVW9wQhEoVZGAbA%3D&utm_source_service=morda",
    title: "Маркет",
  },
  {
    link: "https://translate.yandex.ru/?utm_source=main_stripe_big",
    title: "Переводчик",
  },

  {
    link: "https://yastatic.net/s3/zen-misc/ether/ether.html",
    title: "Эфир",
  },
];

export const widgetsItems = [
  {
    widgetName: "Погода",
    widgetBody: [{ id: nanoid(), now: "17°", morning: "+17°", day: "+20°" }],
  },
  {
    widgetName: "Карта Германии",
    widgetBody: [{ id: nanoid(), map: "Расписания" }],
  },
  {
    widgetName: "Эфир",
    widgetBody: [
      {
        id: nanoid(),
        imgContext: "/",
        title: "Управление как искусство",
        description: "Успех",
      },
      {
        id: nanoid(),
        imgContext: "/",
        title: "Ночь. Мир в это время",
        description: "earthTV",
      },
      {
        id: nanoid(),
        imgContext: "/",
        title: "Андрей Возн...",
        description: "Совершенно секретно",
      },
    ],
  },
  {
    widgetName: "Телепрограмма",
    widgetBody: [
      {
        id: nanoid(),
        imgContext: "/",
        title: "ТНТ.Best",
        description: "THT International",
      },
      {
        id: nanoid(),
        imgContext: "/",
        title: "Джинглики",
        description: "Карусель INT",
      },
      {
        id: nanoid(),
        imgContext: "/",
        title: "Наедине со всеми",
        description: "Первый",
      },
    ],
  },
  {
    widgetName: "Посещаемое",
    widgetBody: [
      {
        id: nanoid(),
        imgContext: "/",
        title: <b>"Недвижимость"</b>,
        description: "- о сталинках",
      },
      {
        id: nanoid(),
        imgContext: "/",
        title: <b>"Маркет"</b>,
        description: "- люстры и светильники",
      },
      {
        id: nanoid(),
        imgContext: "/",
        title: <b>"Авто.ру"</b>,
        description: "- привод 4х4 до 500 000",
      },
    ],
  },
];
