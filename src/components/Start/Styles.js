import styled from 'styled-components';
import { colors, mediaQuery, fontSizesMobile } from '../../styles/Variable';

const { white, brandGradient, slate, midnightLight, brandLight } = colors;
const { mediaTablet, mediaMobile } = mediaQuery;
const { h6M } = fontSizesMobile;

export const Starts = styled.section`
    padding: 96px 0;

    .start-con {
        text-align: center;
    }

    .start-tit {
        margin-bottom: 16px;
    }

    .start-tit-img {
        max-width: 80px;
        margin: 0 auto 24px;
        animation: ani-start-tit-img 2s ease-in-out infinite;
    }
    @keyframes ani-start-tit-img {
        0% {transform: scale(1);}
        10% {transform: scale(1.1);}
        20% {transform: scale(1);}
        30% {transform: scale(1.1);}
        40% {transform: scale(1);}
        100% {transform: scale(1);}
    }

    .start-tit-tit {
        color: ${slate};
    }

    .start-txt {
        color: ${midnightLight};
    }

    .start-txt-list {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;

        li {
            position: relative;
            padding-right: 11px;

            &::after {
                content: '';
                position: absolute;
                right: 4px;
                top: 50%;
                transform: translateY(-50%);
                display: block;
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background: ${brandLight};
            }

            &:last-of-type {
                padding-right: 0;

                &::after {
                    display: none;
                }
            }
        }
    }

    .start-btn {
        display: inline-block;
        min-width: 200px;
        margin-top: 24px;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
        color: ${white};
        box-shadow: 0px 2px 16px rgba(108, 163, 245, 0.48);
        background: ${brandGradient};
        transition: box-shadow 0.3s, transform 0.3s;

        &:hover {
            box-shadow: none;
            transform: translateY(3px);
        }
    }

    ${mediaTablet} {
    }

    ${mediaMobile} {
        padding: 48px 0;

        .start-tit-img {
            max-width: 48px;
        }

        .start-btn {
            font-size: ${h6M};
        }
    }

    // 예외
    @media (max-width: 840px) {
        .start-txt-list {
            display: block;
            margin-bottom: 16px;

            li {
                padding-right: 0;
                padding-bottom: 11px;

                &::after {
                    top: auto;
                    right: auto;
                    bottom: 4px;
                    left: 50%;
                    transform: translateX(-50%);
                }

                &:last-of-type {
                    padding-bottom: 0;
                }
            }
        }
    }
`;