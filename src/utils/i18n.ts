import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            okButtonText: "Make everything OK",
            progressText: "Making everything OK is in progress",
            answerTitle: "Everything is OK now",
            answerText: `If everything is still not OK,
            try checking your settings of perception
            of objective reality.`,
            answerButtonText: "CONTINUE",
        },
    },
    ko: {
        translation: {
            okButtonText: "모든 것을 괜찮게",
            progressText: "모든 것을 괜찮게 만드는 중이야",
            answerTitle: "지금 모든 것이 괜찮아졌어",
            answerText: `만약 아직 괜찮지 않다면,
            너가 바라보는 세상의 시각이나
            관점을 조금 바꿔보는 건 어때?`,
            answerButtonText: "계속",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
});

export default i18n;
