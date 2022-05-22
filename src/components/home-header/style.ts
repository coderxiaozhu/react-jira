import styled from 'styled-components';

import leftImg from '../../assets/img/software-logo.svg';

export const HomeheaderWapper = styled.div`
    width: 100%;
    padding: 3rem;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        display: flex;
        .leftLogo {
            width: 18rem;
            background: url(${leftImg}), no-repeat;
            background-size: 100% 100%;
        }
        .project,
        .projectCrew {
            cursor: pointer;
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
        }
        .project {
            margin-right: 2rem;
        }
    }
    .right {
        margin-right: 2.2rem;
        color: #0052cc;
        cursor: pointer;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
    }
`;
