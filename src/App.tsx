import styled from "@emotion/styled";

const OKButton = styled.button`
    font-size: 2vw !important;
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

    > h4 {
        font-size: 32px;

        margin-bottom: 20px;
    }

    > p {
        font-size: 18px;
        line-height: 1.2em;
        margin-bottom: 15px;
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
`;

function App() {
    return (
        <>
            <OKButton className="kbc-button">Make everything OK</OKButton>
            <BlurBackground />
            <ProgressModal>
                <p>Making everything OK is in progress</p>
                <div>
                    <div></div>
                </div>
            </ProgressModal>
            <AnswerModal>
                <h4>Everything is OK now</h4>
                <p>
                    If everything is still not OK, <br />
                    try checking your settings of perception <br />
                    of objective reality.
                </p>
                <button>CONTINUE</button>
            </AnswerModal>
        </>
    );
}

export default App;
