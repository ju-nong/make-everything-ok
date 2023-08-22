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

function App() {
    return (
        <>
            <OKButton className="kbc-button">Make everything OK</OKButton>
            <BlurBackground />
        </>
    );
}

export default App;
