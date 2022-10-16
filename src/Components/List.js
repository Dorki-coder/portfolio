import { useTranslation } from "react-i18next";
import s from "./List.module.scss";
import Product from "./Product";
const List = () => {
  const { t } = useTranslation();
  return (
    <div className={s.list}>
      <Product
        img={require("../Assets/EmojiReact.png")}
        description={t("Emoji react description")}
        siteLink="https://dorki-coder.github.io/emojiReact/"
        githubLink="https://github.com/Dorki-coder/emojiReact"
      />
      <Product
        img={require("../Assets/Weather.png")}
        description={t("Weather description")}
        siteLink="https://dorki-coder.github.io/weather/"
        githubLink="https://github.com/Dorki-coder/weather"
      />
      <Product
        img={require("../Assets/Rock-papper.jpg")}
        description={t("RPS description")}
        siteLink="https://dorki-coder.github.io/rock-paper-scissors-game/"
        githubLink="https://github.com/Dorki-coder/rock-paper-scissors-game"
      />
      <Product
        img={require("../Assets/Github-search.jpg")}
        description={t("Github search description")}
        siteLink="https://dorki-coder.github.io/github-user-search-app/"
        githubLink="https://github.com/Dorki-coder/github-user-search-app"
      />
      <Product
        img={require("../Assets/Job-filter.jpg")}
        description={t("Job filter description")}
        siteLink="https://dorki-coder.github.io/job-listings/"
        githubLink="https://github.com/Dorki-coder/job-listings"
      />
      <Product
        img={require("../Assets/Tip-calculator.jpg")}
        description={t("Tip calculator description")}
        siteLink="https://dorki-coder.github.io/tip-calculator-app/"
        githubLink="https://github.com/Dorki-coder/tip-calculator-app"
      />
      <Product
        img={require("../Assets/todo.png")}
        description={t("Todo description")}
        siteLink="https://dorki-coder.github.io/todo-app/"
        githubLink="https://github.com/Dorki-coder/todo-app"
      />
      <Product
        img={require("../Assets/portfolio.png")}
        description={t("Portfolio description")}
        siteLink="https://dorki-coder.github.io/minimalist-portfolio-website"
        githubLink="https://github.com/Dorki-coder/minimalist-portfolio-website"
      />
      <Product
        img={require("../Assets/PasswrodGenerator.jpg")}
        description={t("Pasword description")}
        siteLink="https://dorki-coder.github.io/password-generator"
        githubLink="https://github.com/Dorki-coder/password-generator"
      />
    </div>
  );
};

export default List;
