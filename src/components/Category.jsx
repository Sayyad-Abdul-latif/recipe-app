import {FaPizzaSlice , FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react'

function Category() {
  return (
    <List>
        <SLink to = {'/cuisine/italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
         <SLink to = {'/cuisine/american'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
         <SLink to = {'/cuisine/thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
         <SLink to = {'/cuisine/japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>

    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg , #494949 , #313131);
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    transform: scale(0.8);
    @media (max-width:1000px) {
        width: 3.5rem;
        height: 3.5rem;
        margin: 0rem 0.7rem;
    }
    h4{
        color:white;
        font-size: 0.7rem;
        @media (max-width:1000px){
            font-size: 0.4rem;
        }
    }
    svg{
        color: white;
        font-size: 1.4rem;
    }
    &.active{
        background: linear-gradient(to right , #f27121,#e94057);
        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`
export default Category