import styled from 'styled-components';
import { colors, mediaQuery, fontSizesMobile } from '../../styles/Variable';
import ic_qoute from '../../assets/images/ic_qoute.svg';

const { slate, slateLight, slateLight2, midnightLight } = colors;
const { mediaTablet, mediaMobile } = mediaQuery;
const { h3M } = fontSizesMobile;

export const Reviews = styled.section`
    padding: 96px 0 120px;
    overflow: hidden;

    .review-tit {
        margin-bottom: 48px;
        text-align: center;
    }

    .review-tit-img {
        max-width: 80px;
        margin: 0 auto;
    }

    .review-tit-tit {
        margin-top: 24px;
        color: ${slate};
    }

    .review-list {
        overflow: visible;
        width: 100%;
        height: 100%;

        .swiper-slide {
            width: 420px;
            height: auto;
        }
    }

    .review-list-con {
        height: 100%;
        padding: 36px 32px 32px;
        border-radius: 16px;
        background: ${slateLight2};
    }

    .review-list-txt {
        &::before {
            content: '';
            display: block;
            width: 32px;
            height: 32px;
            margin-bottom: 12px;
            background: url(${ic_qoute}) center / 100% no-repeat;
        }

        p {
            color: ${midnightLight};
        }
    }

    .review-list-profile{
        display: flex;
        align-items: center;
        margin-top: 16px;

        figure {
            width: 32px;
            height: 32px;
            margin-right: 16px;
        }

        small {
            color: ${slateLight};
        }
    }

    ${mediaTablet} { 
    }

    ${mediaMobile} {
        padding: 48px 0;

        .review-tit {
            margin-bottom: 32px;
        }
        
        .review-tit-img {
            max-width: 48px;
        }

        .review-tit-tit {
            margin-top: 16px;
            font-size: ${h3M};
        }
    
        .review-list {
            .swiper-slide {
                width: 280px;
            }
        }
    
        .review-list-con {
            padding: 24px;
        }
    
        .review-list-txt {
            &::before {
                margin-bottom: 8px;
            }
        }
    
        .review-list-profile{
            margin-top: 8px;
        }
    }
`;