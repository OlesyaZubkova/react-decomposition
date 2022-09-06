import "./App.css";
import { nanoid } from "nanoid";
import Banner from "./components/Banner";
import Currency from "./components/Currency";
import News from "./components/News";
import Search from "./components/Search";
import Widget from "./components/Widget";
import Widgets from "./components/Widgets";
import * as data from "./data/data";

function App() {
  const titleNews = ["Сейчас в СМИ", "В Германии", "Рекомендуем"];
  const news = [
    {
      titleList: "Сейчас в СМИ",
      link: "https://yandex.ru/news/story/IG_vzyalo_nasebya_otvetstvennost_zaterakt_uposolstva_Rossii_vKabule--b7a9590b852ee7f44202d6fc1e218c7a?lang=ru&from=main_portal&fan=1&stid=dV8zX-CCcdMXijNpGqUJ&t=1662403160&persistent_id=221606096&story=a1a9e4a8-c23e-549a-9a8c-04a04493fd41&lr=10746&msid=1662403581890208-239975525601901954-vla1-4641-vla-l7-balancer-8080-BAL-371&mlid=1662403160.glob_225.b7a9590b&utm_source=morda_desktop&utm_medium=topnews_news",
      description: "РБК",
      id: nanoid(),
      text: "ИГ взяло на себя ответственность за теракт у посольства России в Кабуле",
    },
    {
      titleList: "В Германии",
      link: "https://yandex.ru/news/story/Rossiya_vyshla_izsoglasheniya_sYAponiej_ob_oblegchennom_poseshhenii_Kuril_yaponcami--ef3886f9b229afb4b681cbaa1443f161?lang=ru&from=main_portal&fan=1&stid=PVQSnyySegXY8sZs8dQi&t=1662403160&persistent_id=221766574&story=c5c8d685-4724-5209-b9f4-c3d69148d35d&lr=10746&msid=1662403581890208-239975525601901954-vla1-4641-vla-l7-balancer-8080-BAL-371&mlid=1662403160.glob_225.ef3886f9&utm_source=morda_desktop&utm_medium=topnews_news",
      description: "Газета.Ru",
      id: nanoid(),
      text: "Россия вышла из соглашения с Японией об облегченном посещении Курил японцами",
    },
    {
      titleList: "Сейчас в СМИ",
      link: "https://yandex.ru/news/story/Novym_premerom_Velikobritanii_i_liderom_konservatorov_izbrali_glavu_MID_Liz_Trass--0bfea1b782fd0b8e25d39f0402d5e62a?lang=ru&from=main_portal&fan=1&stid=Krc1tItijFDHZLs4Eakd&t=1662403160&persistent_id=221544508&story=35d85b5d-c30e-5ccc-a50b-86464b5d417f&lr=10746&msid=1662403581890208-239975525601901954-vla1-4641-vla-l7-balancer-8080-BAL-371&mlid=1662403160.glob_225.0bfea1b7&utm_source=morda_desktop&utm_medium=topnews_news",
      description: "Lenta.ru",
      id: nanoid(),
      text: "Новым премьером Великобритании и лидером консерваторов избрали главу МИД Лиз Трасс",
    },
    {
      titleList: "В Германии",
      link: "https://yandex.ru/news/story/Mosgorsud_prigovoril_Ivana_Safronova_k22_godam_vkolonii_strogogo_rezhima--437f8f4dda0dbe192a008cd6fc269ed6?lang=ru&from=main_portal&fan=1&stid=Cyc4mDosTkaJVK-J_4et&t=1662403160&persistent_id=221708140&story=eb96d1be-8bd8-543e-9cba-2b30191fa61f&lr=10746&msid=1662403581890208-239975525601901954-vla1-4641-vla-l7-balancer-8080-BAL-371&mlid=1662403160.glob_225.437f8f4d&utm_source=morda_desktop&utm_medium=topnews_news",
      description: "РБК",
      id: nanoid(),
      text: "Мосгорсуд приговорил Ивана Сафронова к 22 годам в колонии строгого режима",
    },
    {
      titleList: "Сейчас в СМИ",
      link: "https://yandex.ru/news/story/Press-sekretar_Borrelya_nazval_slova_glavy_diplomatii_ES_oRossii_oshibkoj_perevoda--4c4ee7e38f9ef6f5822be4a602d9b8eb?lang=ru&from=main_portal&fan=1&stid=EF43axLDHbq9pdZVZxgR&t=1662403160&persistent_id=221760097&story=3ad59b13-830e-5616-a0fc-171da1114364&lr=10746&msid=1662403581890208-239975525601901954-vla1-4641-vla-l7-balancer-8080-BAL-371&mlid=1662403160.glob_225.4c4ee7e3&utm_source=morda_desktop&utm_medium=topnews_news",
      description: "ТАСС",
      id: nanoid(),
      text: "Пресс-секретарь Борреля назвал слова главы дипломатии ЕС о России ошибкой перевода",
    },
  ];

  return (
    <div className="container">
      <div className="container2">
        <News listTitle={titleNews} listNews={news} />
        <Widget
          widget={{
            widgetName: "Работа над ошибками",
            widgetBody: [
              {
                id: nanoid(),
                img: "/",
                describe: "Смотрите на Яндексе и запоминайте",
              },
            ],
          }}
        />
      </div>
      <Currency currency={data.currency} />
      <Search titles={data.searchTitles} />
      <Banner />
      <Widgets items={data.widgetsItems} />
    </div>
  );
}

export default App;
