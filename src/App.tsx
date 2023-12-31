import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const OKButton = styled.button`
    font-size: 2vw !important;
    user-select: none;
`;

const LanguageContainer = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    column-gap: 16px;
    z-index: 4;

    > button {
        padding: 4px 4px;
        background-color: transparent;
        color: #a8a8a8;
        cursor: pointer;

        &.active {
            font-weight: bold;
        }
    }
`;

const Copyright = styled.p`
    position: fixed;
    bottom: 10px;
    z-index: 5;
    color: rgb(191, 191, 191);

    > a {
        color: inherit;
    }
`;

const BlurBackground = styled.div`
    width: 100%;
    height: 100%;
    z-index: 10;
    backdrop-filter: blur(2.5px);
    position: absolute;
`;

const ProgressModal = styled.div`
    width: 450px;
    border: 10px solid #b2b2b2;
    background-color: #e8e8e8;
    text-align: center;
    position: absolute;
    border-radius: 20px;
    padding: 10px 30px 20px 30px;
    z-index: 11;

    > p {
        margin-bottom: 20px;
    }

    > div {
        width: 100%;
        height: 10px;
        background-color: #b8b8b8;

        > div {
            width: 0%;
            height: 100%;
            background-color: #2bcf18;
            animation: progress-bar 10s ease-in;
        }
    }

    @media screen and (max-width: 460px) {
        transform: scale(0.5);
    }
`;

const AnswerModal = styled.div`
    width: 450px;
    border: 10px solid #025200;
    background-color: #167519;
    position: absolute;
    z-index: 11;
    border-radius: 20px;
    text-align: center;
    padding: 26px 0px 20px 0px;
    color: #fff;
    box-shadow: 1px 1px 4px #051f00;

    > h4 {
        font-size: 32px;

        margin-bottom: 20px;
    }

    > p {
        font-size: 18px;
        line-height: 1.2em;
        margin-bottom: 15px;
        white-space: pre-line;
    }

    > button {
        padding: 5px 50px;
        border: 0px solid #903;
        border-radius: 15px;
        box-shadow: 1px 1px 4px #051f00;
        background-color: rgba(255, 255, 255, 0.7);
        color: #189900;
        cursor: pointer;

        &:hover {
            background-color: rgba(255, 255, 255, 1);
        }
    }

    @media screen and (max-width: 460px) {
        transform: scale(0.5);
    }
`;

function App() {
    const [runInterval, setRunInterval] = useState<number | null>(null);
    const [isRunning, setRunning] = useState(false);
    const [isProgressing, setIsProgressing] = useState(false);

    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);
    const langs = ["en", "ko"];

    function handleChangeLanguage(language: string) {
        setLang(language);
        i18n.changeLanguage(language);
    }

    useEffect(() => {
        if (isProgressing) {
            setTimeout(() => {
                setIsProgressing(false);
            }, 10000);
        }
    }, [isProgressing]);

    // 1초 뒤 모달 띄워주기
    function handleRun() {
        if (runInterval === null) {
            setRunInterval(
                setTimeout(() => {
                    setRunning(true);
                    setIsProgressing(true);

                    setRunInterval(null);
                }, 1000),
            );
        }
    }

    return (
        <>
            {isRunning ? (
                <>
                    <BlurBackground />
                    {isProgressing ? (
                        <ProgressModal>
                            <p>{t("progressText")}</p>
                            <div>
                                <div></div>
                            </div>
                        </ProgressModal>
                    ) : (
                        <AnswerModal>
                            <h4>{t("answerTitle")}</h4>
                            <p>{t("answerText")}</p>
                            <button onClick={() => setRunning(false)}>
                                {t("answerButtonText")}
                            </button>
                        </AnswerModal>
                    )}
                </>
            ) : (
                <OKButton className="kbc-button" onClick={handleRun}>
                    {t("okButtonText")}
                </OKButton>
            )}

            <LanguageContainer>
                {langs.map((item) => (
                    <button
                        key={item}
                        className={item === lang ? "active" : ""}
                        onClick={() => handleChangeLanguage(item)}
                    >
                        {item}
                    </button>
                ))}
            </LanguageContainer>

            <Copyright>
                Copyright{" "}
                <a href="http://make-everything-ok.com/" target="_blank">
                    The magic button
                </a>
            </Copyright>
        </>
    );
}

export default App;
