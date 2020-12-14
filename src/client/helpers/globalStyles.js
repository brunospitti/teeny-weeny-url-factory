import { createGlobalStyle } from 'styled-components';

export const colors = {
  light: {
    primary: '#7bccea',
    primaryContrast: '#4a4c4e',
    secondary: '#e0e03e',
    secondaryContrast: '#4a4c4e',
    tertiary: 'whitesmoke',
    tertiaryContrast: '#4a4c4e',
    success: '#3ef13e',
    error: '#ff6b6b',
  },
  dark: {
    primary: '#b2e4f7',
    primaryContrast: '#192125',
    secondary: '#e4e484',
    secondaryContrast: '#192125',
    tertiary: '#192125',
    tertiaryContrast: '#b6c2c7',
    success: '#3ef13e',
    error: '#ff6b6b',
  },
};

export const fontFamily = "'Roboto', monospace";

export const fontFamilyTitle = `'Amita', ${fontFamily}`;

export const breakpoints = {
  desktop: `(min-width: 1260px)`,
  tablet: `(max-width: 1023px)`,
  mobile: `(max-width: 767px)`,
  mobileSmall: `(max-width: 400px)`,
};

export const mainContainer = `
	height: 100%;
	width: 100%;
	max-width: 1360px;
	padding: 0 80px;
	margin: 0 auto;
	position: relative;
	@media ${breakpoints.tablet} {
		padding: 0 40px;
	}
	@media ${breakpoints.mobile} {
		padding: 0 20px;
	}
`;

export const outerContainer = `
	height: 100%;
	width: 100%;
	max-width: 1920px;
	margin: 0 auto;
	position: relative;
`;

export const GlobalStyles = createGlobalStyle`
    // css reset

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
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
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        box-sizing: border-box;
        :focus{
            outline: none;
        }
    }

    // global styles
    html,
		body {
        overflow-x: hidden;
    }

    * {
				touch-action: auto;
        font-family: ${fontFamily};
        font-size: 22px;
        line-height: 30px;
        color: inherit;
        font-weight: 300;
				@media ${breakpoints.mobile} {
					font-size: 18px;
    			line-height: 26px;
				}
				@media ${breakpoints.mobileSmall} {
					font-size: 16px;
					line-height: 24px;
				}
    }
`;
