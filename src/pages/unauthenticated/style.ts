import styled from 'styled-components';
import logo from '../../assets/img/logo.svg';
import leftImg from '../../assets/img/left.svg';
import rightImg from '../../assets/img/right.svg';
import { Card } from 'antd';

export const XZunauthWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    header {
        width: 100%;
        padding: 5rem 0;
        background: rgba(0, 0, 0, 0) url(${logo}) no-repeat scroll center center / 8rem;
    }
`;

export const XZbackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left bottom, right bottom;
    background-size: calc(-23.2rem + 50vw), calc(-23.2rem + 50vw), cover;
    background-image: url(${leftImg}), url(${rightImg});
`;

export const XZshadowCard = styled(Card)`
    width: 40rem;
    min-height: 56rem;
    padding: 3.2rem 4rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1rem;
    text-align: center;
    h2 {
        margin-bottom: 2.4rem;
        color: rgba(94, 108, 132);
    }
    .changeText {
        color: #0052cc;
        cursor: pointer;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
    }
`;
