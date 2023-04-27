import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;

    margin-top: 16px;
    margin-bottom: 16;
    padding: 0;

    list-style: none;
    margin-left: auto;
    margin-right: auto;
  `,
};