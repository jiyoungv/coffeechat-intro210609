import styled from 'styled-components';
import { colors, fontSizesMobile, mediaQuery } from '../../styles/Variable';

const { bg, midnightLight, brand, midnight, brandLight } = colors;
const { mediaTablet, mediaMobile } = mediaQuery;
const { h3M, fontBaseM } = fontSizesMobile;

export const Usages = styled.section`
    padding: 64px 0;
    background: ${bg};

    .usage-con {
        display: flex;
        justify-content: space-between;
    }

    .usage-txt {
        margin-top: 160px;
    }

    .usage-tit {
        margin-bottom: 24px;
    }

    .usage-tab-control {
        display: flex;
        align-items: center;
        margin-bottom: 32px;

        li {
            margin-right: 32px;
            color: ${midnightLight};
            transition: color 0.3s;

            &:last-of-type {
                margin-right: 0;    
            }

            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 3px;
                background: ${brand};
                transform: scaleX(0);
                transform-origin: left center;
                transition: transform 0.3s;
            }

            &.on {
                color: ${brand};

                &::after{
                    transform: scaleX(1); 
                }
            }

            h6 {
                button {
                    padding: 8px 0;
                }
            }
        }
    }

    .usage-tab-txt {
        position: relative;
        max-width: 480px;
        color: ${midnight};
    }

    .usage-tab-txt-con {
        z-index: -1;
        opaicy: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        &.long {
            position: relative;
        }

        &.on {
            z-index: 1;
            opaicy: 1;
        }

        small {
            position: relative;
            display: block;
            margin-bottom: 8px;
            padding-left: 7px;

            &:first-of-type {
                margin-top: 16px;
            }

            &:last-of-type {
                margin-bottom: 0;
            }

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 8px;
                display: block;
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background: ${brandLight};
            }
        }
    }

    .usage-tab-img {
        max-width: 480px;
        margin-right: -48px;

        img {
            display: none;
            
            &.on {
                display: block;
            }
        }
    }

    // 예외
    .usage-tab-txt-con4 p {
        margin-bottom: 0;
    }

    ${mediaTablet} {
        padding: 96px 0;

        .usage-con {
            display: block;
        }
    
        .usage-txt {
            margin-top: 0;
        }
    
        .usage-tit {
            text-align: center;
        }

        .usage-tab {
            max-width: 680px;
            margin: 0 auto 50px;
        }
    
        .usage-tab-control {
            justify-content: space-between;

            li {
                margin-right: 0;
            }
        }
        
        .usage-tab-txt {
            margin: 0 auto;
        }
    
        .usage-tab-img {
            margin: 0 auto;
        }
    }

    ${mediaMobile} {
        padding: 48px 0;

        .usage-con {
            display: block;
        }
    
        .usage-txt {
            margin-top: 0;
        }
    
        .usage-tit {
            margin-bottom: 8px;
            text-align: center;
            font-size: ${h3M};
        }

        .usage-tab {
            margin-bottom: 35px;
        }
    
        .usage-tab-control {
            justify-content: space-between;
            margin-bottom: 24px;
    
            li {
                margin-right: 0;

                h6 {
                    font-size: ${fontBaseM};
                }
            }
        }
    
        .usage-tab-txt {
            margin: 0 auto;
        }
    
        .usage-tab-img {
            margin: 0 auto;
        }
    }
`;