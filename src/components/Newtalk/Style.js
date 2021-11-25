import styled from 'styled-components';
import { clearFix } from '../../styles/Mixin';
import { colors, mediaQuery, fontSizesMobile } from '../../styles/Variable';

const { slate, blueLight, brandLight, midnightLight, teal } = colors;
const { mediaTablet, mediaMobile } = mediaQuery;
const { h3M, h6M, fontBaseM } = fontSizesMobile;

export const Newtalks = styled.section`
    padding: 120px 0;

    .newtalk-tit {
        margin-bottom: 48px;
        text-align: center;
        color: ${slate};
    }
    
    .newtalk-con {
        display: flex;
    }    

    .newtalk-img {
        max-width: 400px;
        flex-shrink: 0;
        animation: ani-newtalk-img 2s ease-in-out infinite alternate;
    }

    @keyframes ani-newtalk-img {
        0% {transform: translateY(-10px);}
        100% {transform: translateY(10px);}
    }

    .newtalk-txt {
        max-width: calc(100% - 400px - 48px);
        margin-top: 5px;
        margin-left: 48px;
        flex-grow: 1;
    }

    .newtalk-list {
        ${clearFix}

        li {
            float: left;
            width: 300px;
            margin-right: 32px;
            margin-top: 32px;

            &:nth-of-type(even) {
                margin-right: 0;
            }

            &:nth-of-type(-n+2) {
                margin-top: 0;
            }
        }
    }

    .newtalk-list-num {
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 16px;
        border-radius: 50%;
        text-align: center;
        color: ${brandLight};
        background: ${blueLight};
    }

    .newtalk-list-tit {
        margin-bottom: 16px;
        color: ${slate};
    }

    .newtalk-list-desc {
        display: block;
        color: ${midnightLight};
    }

    .newtalk-list-ps {
        display: block;
        margin-top: 8px;
        color: ${teal};
    }

    ${mediaTablet} {
        .newtalk-con {
            display: block;
        }    
    
        .newtalk-img {
            margin: 0 auto;
        }
    
        .newtalk-txt {
            max-width: 680px;
            margin: 48px auto 0;
        }
    
        .newtalk-list {
            max-width: 680px;
            margin: 0 auto;

            li {
                width: calc(50% - 16px);
            }
        }
    }

    ${mediaMobile} {
        padding: 48px 0;

        .newtalk-tit {
            margin-bottom: 0;
            font-size: ${h3M};
        }
        
        .newtalk-con {
            display: block;
        }    
    
        .newtalk-img {
            margin: 0 auto;
        }

        .newtalk-txt {
            max-width: 100%;
            margin: 0;
        }
    
        .newtalk-list {
            display: block;
            max-width: 320px;
            margin: 0 auto;

            li {
                float: none;
                width: 100%;
                margin-right: 0;

                &:nth-of-type(-n+2) {
                    margin-top: 32px;
                }

                &:first-of-type {
                    margin-top: 0;
                }
            }
        }
    
        .newtalk-list-num {
            margin-bottom: 8px;
        }
    
        .newtalk-list-tit {
            margin-bottom: 8px;
            font-size: ${h6M};
        }
    
        .newtalk-list-desc {
            font-size: ${fontBaseM};
        }
    }
`;