import styled from 'styled-components';
import { colors, mediaQuery, fontSizes } from '../../styles/Variable';
import { clearFix } from '../../styles/Mixin';

const { white, brand, tealLight } = colors;
const { mediaTablet, mediaMobile } = mediaQuery;
const { fontBase } = fontSizes;

export const Heros = styled.section`
    padding: 194px 0 170px;
    background: linear-gradient(135deg, #7E6CF5 0%, #6CA3F5 100%);

    .hero-con {
        ${clearFix}
    }

    .hero-txt {
        z-index: 2;
        position: relative;
        // max-width: 416px;
        max-width: 430px;

        p {
            color: ${white};
        }
    }

    .hero-tit {
        margin-bottom: 16px;
        color: ${white};
    }

    .hero-tit-top {
        display: flex;
    }

    .hero-tit-list {
        position: relative;
        display: inline-block;
        height: 51px;
        margin: 0 8px;

        &::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            display: block;
            width: 100%;
            height: 4px;
            background: ${tealLight};
        }
    }

    .hero-tit-list-con {
        width: 100%;
        height: 100%;

        .swiper-wrapper {
            display: block; // for ie11
        }
    }

    .hero-tit-list-txt {
        color: ${tealLight};
    }

    .hero-btn {
        display: inline-block;
        min-width: 200px;
        margin-top: 32px;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
        color: ${brand};
        background: ${white};
        transition: color 0.3s, background 0.3s, transform 0.3s;

        &:hover {
            color: ${white};
            background: ${brand};
            transform: translateY(3px);
        }        
    }

    .hero-img {
        z-index: 1;
        position: absolute;
        right: 64px;
        top: 50%;
        transform: translateY(-50%);
        max-width: 480px;
        animation: ani-hero-img 2s ease-in-out infinite alternate;
    }

    @keyframes ani-hero-img {
        0% {transform: translateY(calc(-50% - 15px));}
        100% {transform: translateY(calc(-50% + 15px));}
    }

    ${mediaTablet} {
        .hero-img {
            right: -124px;
        }
    }

    ${mediaMobile} {
        padding: 96px 0 37px;

        .hero-tit {
            margin-bottom: 8px;
        }
    
        .hero-tit-list {
            height: 38px;

            &::after {
                bottom: -2px;
            }
        }

        .hero-btn {
            margin-top: 24px;
            font-size: ${fontBase};
        }

        .hero-img {
            position: static;
            transform: none;
            margin: 0 auto;
        }

        @keyframes ani-hero-img {
            0% {transform: translateY(-10px);}
            100% {transform: translateY(10px);}
        }
    }
`;