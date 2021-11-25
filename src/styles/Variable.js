export const fontFamily = {
    notoSans: 'Noto Sans KR',
};

export const fontSizes = {  // 16px 기준 계산 
	h1: '2rem', // 32px
	h3: '1.5rem', // 24px
	h6: '1.125rem', // 18px
    fontBase: '16px',
    fontSmall: '0.875rem', // 14px
    fontXSmall: '0.813rem', // 13px
};

export const fontSizesTablet = { // 16px 기준 계산 
	h1T: '1.875rem', // 30px
	h3T: '1.5rem', // 24px
	h6T: '1.125rem', // 18px
    fontBaseT: '16px',
    fontSmallT: '0.875rem', // 14px
    fontXSmallT: '0.813rem', // 13px
};

export const fontSizesMobile = { // 16px 기준 계산
	h1M: '1.5rem', // 24px
	h3M: '1.125rem', // 18px
	h6M: '1rem', // 16px
    fontBaseM: '14px',
    fontSmallM: '0.813rem', // 13px
    fontXSmallM: '0.813rem', // 13px
};

export const colors = {
    black: '#000',
    white: '#fff',
    brand: '#5E67EB',
    brandLight: '#7687F5',
    brandGradient: 'linear-gradient(135deg, #7E6CF5 0%, #6CA3F5 100%)',
	teal: '#25AEB8',
    tealLight: '#C5E8EB',
    slate: '#16263D',
	slateLight: '#40577A',
    slateLight2: '#F5F7FA',
    slateLight3: '#E1E9F5',
    midnight: 'rgba(28, 31, 41, 0.8)',
	midnightLight: 'rgba(42, 47, 61, 0.64)',
    blueLight: '#DAE7FB',
    bg: '#F5F7FD',
    bgLight: '#FAFAFA',
};

export const breakPoints = {
    tablet: 1175, // 이하
    mobile: 599, // 이하
};

export const mediaQuery = {
    mediaTablet: `@media (max-width: ${breakPoints.tablet}px) and (min-width: ${breakPoints.mobile + 1}px)`,
    mediaMobile: `@media (max-width: ${breakPoints.mobile}px)`,
};