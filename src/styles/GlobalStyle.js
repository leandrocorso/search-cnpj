import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css?family=Roboto');

    * {
        margin: 0;
        padding: 0;
		border: 0;
		box-sizing: border-box;
		outline: none;
    }

    html, body, #root {
		height: 100%;
		width: 100%;
	}

    body {
		font-family: ${p => p.theme.themeDefault.defaultFontFamily};
        font-size: ${p => p.theme.themeDefault.defaultFontSize};
		color: ${p => p.theme.themeDefault.colors.c8};
		background-color: ${p => p.theme.themeDefault.colors.c4};
	}

	#root {
		max-width: 420px;
		margin: 0 auto;
		background-color: ${p => p.theme.themeDefault.colors.c6};
	}
`;

export default GlobalStyle;
