import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { lightTheme, theme } from "./theme";
import { useState } from "react";

const GLobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

:focus {
	outline: 0;
}

ins {
	text-decoration: none;
}
del {
	text-decoration: line-through;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
    box-sizing: border-box;
}
body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
}
a {
    text-decoration: none;
    color: inherit;
}
`;

const ModeBtn = styled.button`
    border: none;
    position: absolute;
    top: 5vh;
    left: 370px;
    right: 0;
    margin: 0 auto;
    font-size: 25px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${props => props.theme.textColor};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`;

function App() {
    const [mode, setMode] = useState<boolean>(true);
    const onClick = () => {
        setMode(prev => !prev);
    };
    return (
        <>
            <ThemeProvider theme={mode ? theme : lightTheme}>
                <ModeBtn onClick={onClick}>{mode ? "🌞" : "🌙"}</ModeBtn>
                <GLobalStyle />
                <Router mode={mode} />
                <ReactQueryDevtools initialIsOpen={false} />
            </ThemeProvider>
        </>
    );
}

export default App;
