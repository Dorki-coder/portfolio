import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./List.module.scss";
const List = () => {
  const [isHovering, setHovering] = useState(-1);
  const { t } = useTranslation();
  return (
    <div className={s.list}>
      {/* EmojoReact */}
      <div className={s.card}>
        <div
          className={s.img__wrapper}
          onMouseEnter={() => setHovering(1)}
          onMouseLeave={() => setHovering(-1)}
        >
          <a href="https://dorki-coder.github.io/emojiReact/">
            <img
              className={s.img}
              src={require("../Assets/EmojiReact.png")}
              alt="EmojiFinder"
            ></img>
          </a>
          <div
            className={`${s.hover__card} ${isHovering === 1 ? null : "hidden"}`}
          >
            <div className={s.card__description}>
              {t("Emoji react description")}
            </div>
            <div className={s.links}>
              <a
                className={s.github__link}
                href="https://github.com/Dorki-coder/emojiReact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                GitHub
              </a>
              <a
                className={s.liveSite__link}
                href="https://dorki-coder.github.io/emojiReact/"
              >
                Live site
              </a>
              {">"}
            </div>
          </div>
        </div>
      </div>
      {/* Weather */}
      <div className={s.card}>
        <div
          className={s.img__wrapper}
          onMouseEnter={() => setHovering(6)}
          onMouseLeave={() => setHovering(-1)}
        >
          <a href="https://dorki-coder.github.io/weather/">
            <img
              className={s.img}
              src={require("../Assets/Weather.png")}
              alt="Weather"
            ></img>
          </a>
          <div
            className={`${s.hover__card} ${isHovering === 6 ? null : "hidden"}`}
          >
            <div className={s.card__description}>
              {t("Weather description")}
            </div>
            <div className={s.links}>
              <a
                className={s.github__link}
                href="https://github.com/Dorki-coder/weather"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                GitHub
              </a>
              <a
                className={s.liveSite__link}
                href="https://dorki-coder.github.io/weather/"
              >
                Live site
              </a>
              {">"}
            </div>
          </div>
        </div>
      </div>
      {/* RPS */}
      <div className={s.card}>
        <div
          className={s.img__wrapper}
          onMouseEnter={() => setHovering(3)}
          onMouseLeave={() => setHovering(-1)}
        >
          <a href="https://dorki-coder.github.io/rock-paper-scissors-game/">
            <img
              className={s.img}
              src={require("../Assets/Rock-papper.jpg")}
              alt="EmojiFinder"
            ></img>
          </a>
          <div
            className={`${s.hover__card} ${isHovering === 3 ? null : "hidden"}`}
          >
            <div className={s.card__description}>{t("RPS description")}</div>
            <div className={s.links}>
              <a
                className={s.github__link}
                href="https://github.com/Dorki-coder/rock-paper-scissors-game"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                GitHub
              </a>
              <a
                className={s.liveSite__link}
                href="https://dorki-coder.github.io/rock-paper-scissors-game/"
              >
                Live site
              </a>
              {">"}
            </div>
          </div>
        </div>
      </div>
      {/* Github search */}
      <div className={s.card}>
        <div
          className={s.img__wrapper}
          onMouseEnter={() => setHovering(2)}
          onMouseLeave={() => setHovering(-1)}
        >
          <a href="https://dorki-coder.github.io/github-user-search-app/">
            <img
              className={s.img}
              src={require("../Assets/Github-search.jpg")}
              alt="EmojiFinder"
            ></img>
          </a>
          <div
            className={`${s.hover__card} ${isHovering === 2 ? null : "hidden"}`}
          >
            <div className={s.card__description}>
              {t("Github search description")}
            </div>
            <div className={s.links}>
              <a
                className={s.github__link}
                href="https://github.com/Dorki-coder/github-user-search-app"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                GitHub
              </a>
              <a
                className={s.liveSite__link}
                href="https://dorki-coder.github.io/github-user-search-app/"
              >
                Live site
              </a>
              {">"}
            </div>
          </div>
        </div>
      </div>
      {/* Job filter */}
      <div className={s.card}>
        <div
          className={s.img__wrapper}
          onMouseEnter={() => setHovering(4)}
          onMouseLeave={() => setHovering(-1)}
        >
          <a href="https://dorki-coder.github.io/job-listings/">
            <img
              className={s.img}
              src={require("../Assets/Job-filter.jpg")}
              alt="EmojiFinder"
            ></img>
          </a>
          <div
            className={`${s.hover__card} ${isHovering === 4 ? null : "hidden"}`}
          >
            <div className={s.card__description}>
              {t("Job filter description")}
            </div>
            <div className={s.links}>
              <a
                className={s.github__link}
                href="https://github.com/Dorki-coder/job-listings"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                GitHub
              </a>
              <a
                className={s.liveSite__link}
                href="https://dorki-coder.github.io/job-listings/"
              >
                Live site
              </a>
              {">"}
            </div>
          </div>
        </div>
      </div>
      {/* tip calculator */}
      <div className={s.card}>
        <div
          className={s.img__wrapper}
          onMouseEnter={() => setHovering(5)}
          onMouseLeave={() => setHovering(-1)}
        >
          <a href="https://dorki-coder.github.io/tip-calculator-app/">
            <img
              className={s.img}
              src={require("../Assets/Tip-calculator.jpg")}
              alt="EmojiFinder"
            ></img>
          </a>
          <div
            className={`${s.hover__card} ${isHovering === 5 ? null : "hidden"}`}
          >
            <div className={s.card__description}>
              {t("Tip calculator description")}
            </div>
            <div className={s.links}>
              <a
                className={s.github__link}
                href="https://github.com/Dorki-coder/tip-calculator-app"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                GitHub
              </a>
              <a
                className={s.liveSite__link}
                href="https://dorki-coder.github.io/tip-calculator-app/"
              >
                Live site
              </a>
              {">"}
            </div>
          </div>
        </div>
      </div>
      {/* todo */}
      <div className={s.card}>
        <div
          className={s.img__wrapper}
          onMouseEnter={() => setHovering(6)}
          onMouseLeave={() => setHovering(-1)}
        >
          <a href="https://dorki-coder.github.io/todo-app/">
            <img
              className={s.img}
              src={require("../Assets/todo.png")}
              alt="todo"
            ></img>
          </a>
          <div
            className={`${s.hover__card} ${isHovering === 6 ? null : "hidden"}`}
          >
            <div className={s.card__description}>{t("Todo description")}</div>
            <div className={s.links}>
              <a
                className={s.github__link}
                href="https://github.com/Dorki-coder/todo-app"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                GitHub
              </a>
              <a
                className={s.liveSite__link}
                href="https://dorki-coder.github.io/todo-app/"
              >
                Live site
              </a>
              {">"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
