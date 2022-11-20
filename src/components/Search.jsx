import React from 'react'
import styled from "styled-components"
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
function Search() {
    const [input , setinput] = useState('');
    const navigate = useNavigate()

    const sumbitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/' + input)
    }
  return (
    <FormStyle onSubmit={sumbitHandler}>
        <div>
            <FaSearch/>
        <input type="text" 
        value={input}
         onChange = {(e)=> setinput(e.target.value)}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    @media (max-width:1000px){
    margin: 0rem 2rem;
  }
    div{
         position: relative;
         width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg , #494949 , #313131);
        font-size: 1rem;
        color: white;
        padding:1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
        color: white;
    }
`
export default Search