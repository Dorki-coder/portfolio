import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import "./App.scss";
import telegramIco from "./Assets/icons8-telegram.svg";
import vkIco from "./Assets/vk.svg";
import whatappIco from "./Assets/whatsappIco.svg";
import List from "./Components/List";
import useLocalStorage from "./hooks/use-localstorage";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useLocalStorage("language", "ru");
  const handleLanguageChange = (language) => {
    if (language === "en") {
      i18n.changeLanguage("en");
      setLanguage("en");
    } else if (language === "ru") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    }
  };
  // const imgNumber = Math.floor(Math.random() * 10);
  return (
    <div className="App">
      <div className="container">
        <section className="aboutMe">
          <div className="aboutMe__img-wrapper">
            <img src={require("./Assets/var1.jpg")} alt="myPhoto"></img>
          </div>
          <div className="aboutMe__description">
            <p>
              {t("Hello I'm")}
              <span>
                {" "}
                <Typewriter
                  options={{
                    strings: [t("Name"), t("Front-end")],
                    autoStart: true,
                    loop: true,
                  }}
                  className="typewriter"
                />
              </span>
            </p>
            <p>{t("This my website")}</p>
            <p>{t("My stack")}</p>
            <div className="skills__wrapper">
              <img
                align="left"
                alt="HTML5"
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              />
              <img
                align="left"
                alt="CSS"
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
              />
              <img
                align="left"
                alt="SASS"
                src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
              />
              <img
                align="left"
                alt="JS"
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              />
              <img
                align="left"
                alt="REACT"
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />
              <img
                align="left"
                alt="TS"
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              />
              <img
                align="left"
                alt="GULP"
                src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
              />
              <img
                align="left"
                alt="WP"
                src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black"
              />
            </div>
            <div className="myLinks__wrapper">
              <p>
                {t("My CV")}{" "}
                <span className="download-btn">
                  {language === "ru" ? (
                    <a
                      href="https://drive.google.com/file/d/1Za16nmffGuxdemEjARyik3zK5Gx4O-Ws/view?usp=sharing"
                      target="_blank"
                      className="download-btn"
                      rel="noreferrer"
                    >
                      Скачать
                    </a>
                  ) : (
                    <a
                      href="https://drive.google.com/file/d/1qbqkI9US8hY0dxPosbKXmiBJlYGJMpfC/view"
                      target="_blank"
                      className="download-btn"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  )}
                  {" >"}
                </span>
              </p>
              <p>
                {t("My Github")}{" "}
                <span className="download-btn">
                  {language === "ru" ? (
                    <a
                      href="https://github.com/Dorki-coder"
                      download
                      className="download-btn"
                    >
                      Перейти
                    </a>
                  ) : (
                    <a
                      href="https://github.com/Dorki-coder"
                      download
                      className="download-btn"
                    >
                      Link
                    </a>
                  )}
                  {" >"}
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="myWork">
        <h2>{t("My work title")}</h2>
        <List></List>
      </section>
      <section className="contact">
        <div className="container">
          <h2>{t("Contact")}</h2>
          <p>{t("Contact description")}</p>
          <div className="contacts__wrapper">
            <a href="https://t.me/dorkitg" className="ico">
              <img src={telegramIco} alt="myPhoto" />
            </a>
            <a href="https://wa.link/00imga" className="ico">
              <img src={whatappIco} alt="whatappIco" />
            </a>
            <a href="https://vk.com/dorki" className="ico">
              <img src={vkIco} alt="myPhoto" />
            </a>
            <a href="mailto: bartdane@yandex.ru" className="ico">
              <img
                src={require("./Assets/icons8-circled-envelope-48.png")}
                alt="myPhoto"
              />
            </a>
          </div>
        </div>
      </section>
      <div className="changeLanguage__wrapper">
        🇷🇺
        <button
          className="button_changeLanguage"
          onClick={() => {
            handleLanguageChange("ru");
          }}
        >
          Русский
        </button>
        🇺🇸
        <button
          className="button_changeLanguage"
          onClick={() => {
            handleLanguageChange("en");
          }}
        >
          English
        </button>
      </div>
    </div>
  );
}

export default App;
