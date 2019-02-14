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
		font-family: ${p => p.theme.defaultFontFamily};
        font-size: ${p => p.theme.defaultFontSize};
		color: ${p => p.theme.colors.c8};
		background-color: ${p => p.theme.colors.c4};
	}

	#root {
		margin: 0 auto;
		background-color: ${p => p.theme.colors.c6};
	}
`;

export default GlobalStyle;
