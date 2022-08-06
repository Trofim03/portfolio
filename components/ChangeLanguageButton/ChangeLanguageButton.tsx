import { useTranslation } from "react-i18next";
import { enUS, ruRU } from "../../i18n/langs";

export const ChangeLanguageButton = (): JSX.Element => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const onLanguageChange = () => {
    const newLanguage = language === ruRU ? enUS : ruRU;
    changeLanguage(newLanguage);
  };

  return (
    <button onClick={onLanguageChange}>
      {t("current_lang")}
    </button>
  );
};
