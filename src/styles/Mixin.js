import { css } from 'styled-components';

export const clearFix = css`
    &::after {
        content: '';
        display: block;
        clear: both;
    }
`;

export const inputHidden = css`
    position: absolute;
    z-index: 1;
    opacity: 0;
    width: 1px;
    height: 1px;
`;