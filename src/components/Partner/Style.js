import styled from 'styled-components';
import { colors, mediaQuery, fontSizesMobile } from '../../styles/Variable';
import chevron_right from '../../assets/images/chevron_right.svg';

const { bg, slate, midnightLight, brand } = colors;
const { mediaTablet, mediaMobile } = mediaQuery;
const { h6M } = fontSizesMobile;

export const Partners = styled.section`
    padding: 96px 0;
    background: ${bg};

    .partner-top {
        max-width: 720px;
        margin: 0 auto 48px;
        text-align: center;

        p {
            color: ${midnightLight};
        }
    }

    .partner-top-img {
        max-width: 80px;
        margin: 0 auto 24px;
    }

    .partner-tit {
        margin-bottom: 16px;
        color: ${slate};
    }

    .partner-logo-img {
        margin-bottom: 48px;
    }

    .partner-bottom {
        text-align: center;

        p {
            margin-bottom: 16px;
            color: ${midnightLight};
        }
    }

    .partner-info-btn {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: ${brand};

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 24px;
            background: url(${chevron_right}) center no-repeat;
            transition: transform 0.2s;
        }

        &:hover {
            &::after {
                transform: translateX(4px);
            }
        }
    }

    ${mediaTablet} {
        .partner-top-img {
            margin-bottom: 32px;
        }
    }

    ${mediaMobile} {
        padding: 48px 0;

        .partner-top {
            margin-boottom: 32px;
        }
    
        .partner-top-img {
            max-width: 48px;
            margin-bottom: 16px;
        }
    
        .partner-logo-img {
            margin-bottom: 32px;
        }
    
        .partner-info-btn {
            font-size: ${h6M};
        }        
    }
`;