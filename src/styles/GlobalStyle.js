import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { fontFamily, fontSizes, fontSizesTablet, fontSizesMobile, colors, mediaQuery } from './Variable';

const { notoSans } = fontFamily;
const { h1, h3, h6, fontBase, fontSmall, fontXSmall } = fontSizes;
const { h1T, h3T, h6T, fontBaseT, fontSmallT, fontXSmallT } = fontSizesTablet;
const { h1M, h3M, h6M, fontBaseM, fontSmallM, fontXSmallM } = fontSizesMobile;
const { black, white, brand } = colors;
const { mediaTablet, mediaMobile } = mediaQuery;

const GlobalStyle = createGlobalStyle`
	${reset}

	* {
		box-sizing: border-box;
	}

	#root {
		overflow-x: hidden;
	}
	
	::selection {
		color: ${white};
		background: ${brand};
	}

	body {
		font-size: ${fontBase};
		font-family: ${notoSans}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;		
		font-weight: 400;
		line-height: 1.6;
		letter-spacing: -0.02em;
		color: ${black};
		word-break: keep-all;
	}

	article, section, div, figure {
		position: relative;
	}
	
	figure {
		margin: 0;
	}

	button {
		background: transparent;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: inherit;
		font-weight: inherit;
		font-family: inherit;
		font-style: inherit;
		letter-spacing: inherit;
		line-height: inherit;
		text-align: inherit;
		color: inherit;
		cursor: pointer;

		&:focus {
			outline: none;
		}
	}

	p {
		margin-bottom: 8px;

		&:last-of-type {
			margin-bottom: 0;
		}
	}

	a {
		text-decoration: none;
		&, &:active, &:visited {
			color: ${black};
		}
	}

	strong, b {
		font-weight: 700;

		&.bolder {
			font-weight: 900;
		}
	}

	img {
		max-width: 100%;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 700;
		letter-spacing: -0.03em;
	}

	h1 {
		font-size: ${h1};
	}

	h3 {
		font-size: ${h3};
	}

	h6 {
		font-size: ${h6};
	}

	small {
		font-size: ${fontSmall};
		
		&.xsmall {
			font-size: ${fontXSmall};
		}
	}

	${mediaTablet} {
		body {
			font-size: ${fontBaseT};
		}

		h1 {
			font-size: ${h1T};
		}
	
		h3 {
			font-size: ${h3T};
		}
	
		h6 {
			font-size: ${h6T};
		}
	
		small {
			font-size: ${fontSmallT};
			
			&.xsmall {
				font-size: ${fontXSmallT};
			}
		}
	}

	${mediaMobile} {
		body {
			font-size: ${fontBaseM};
		}

		h1 {
			font-size: ${h1M};
		}
	
		h3 {
			font-size: ${h3M};
		}
	
		h6 {
			font-size: ${h6M};
		}
	
		small {
			font-size: ${fontSmallM};
			
			&.xsmall {
				font-size: ${fontXSmallM};
			}
		}
	}
`;

export default GlobalStyle;