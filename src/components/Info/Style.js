import styled from 'styled-components';
import { colors, mediaQuery } from '../../styles/Variable';

const { bgLight, slate, midnightLight } = colors;
const { mediaTablet, mediaMobile } = mediaQuery;

export const Infos = styled.section`
    padding: 96px 0;
    background: ${bgLight};

    .info-con {
        display: flex;
        align-items: center;
    }

    .info-img {
        max-width: 320px;
        margin-left: 116px;
    }

    .info-txt { 
        max-width: 480px;
        margin-left: 48px;

        p {
            color: ${midnightLight};
        }
    }

    .info-tit {
        margin-bottom: 16px;
        color: ${slate};
    }

    
    ${mediaTablet} {
        .info-con {
            justify-content: center;
        }

        .info-img {
            margin-left: 0;

            img {
                width: 100%; // for ie11
            }
        }
    }

    ${mediaMobile} {
        padding: 48px 0;
         
        .info-con {
            display: block;
        }
    
        .info-img {
            margin: 0 auto;
        }

        .info-txt {
            max-width: 100%;
            margin-left: 0;
        }
    }
`;