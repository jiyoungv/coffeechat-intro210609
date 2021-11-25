import styled from 'styled-components';
import { colors, mediaQuery, fontSizesMobile } from '../../styles/Variable';
import { inputHidden } from '../../styles/Mixin';

const { bgLight, midnight, brand, slateLight3 } = colors;
const { mediaTablet, mediaMobile } = mediaQuery;
const { h3M } = fontSizesMobile;

export const Faqs = styled.section`
    padding: 120px 0;
    background: ${bgLight};

    .faq-con {
        display: flex;
        justify-content: space-between;
    }

    .faq-tit-img {
        width: 80px;
        margin-bottom: 24px;
    }

    .faq-tit-tit {
        color: ${midnight};
    }

    .faq-list {
        max-width: 632px;
        flex-shrink: 0;

        li {
            overflow: hidden;
            border-bottom: 1px solid ${slateLight3};

            &:last-of-type {
                border-bottom: 0;
            }
        }
    }

    .faq-list-tit {
        label {
            position: relative;
            display: block;
            width: 100%;
            padding: 19px 0;
            padding-right: 25px;
            cursor: pointer;
        }
    }

    .faq-list-tit-mark {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;

        &::before, &::after {
            content: '';
            position: absolute;
            display: block;
            border-radius: 2px;
            background: ${brand};
        }

        &::before {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 2px;
        }

        &::after {
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 100%;
            transition: transform 0.2s;
        }
    }

    .faq-list-check {
        ${inputHidden}
    }

    .faq-list-desc {
        max-height: 0;
    }

    .faq-list-desc-txt {
        padding-bottom: 24px;

        p {
            margin-bottom: 0;
        }
    }

    // on
    .faq-list li.on {
        .faq-list-tit-mark::after {
            transform: translateX(-50%) rotate(90deg);
        }
        .faq-list-desc {
            max-height: 100vh;
        }
    }

    ${mediaTablet} {
        .faq-con {
            display: block;
        }
    
        .faq-tit {
            margin-bottom: 48px;
        }
    
        .faq-list {
            max-width: 680px;
        }
    }

    ${mediaMobile} {
        padding: 48px 0;

        .faq-con {
            display: block;
        }
             
        .faq-tit {
            margin-bottom: 32px;
        }
        
        .faq-tit-img {
            max-width: 48px;
            margin-bottom: 16px;
        }

        .faq-tit-tit {
            font-size: ${h3M};
        }

        .faq-list {
            max-width: 680px;
        }
    
        .faq-list-tit {
            label {
                padding-top: 21px;
                padding-bottom: 21px;
            }
        }
    }
`;