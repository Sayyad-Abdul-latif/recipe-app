import React from 'react'
import {useEffect , useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
function Recipe() {
  let params = useParams();
  const [details,setdetails] = useState({})
  const [activetab , setactivetab] = useState('instructions')
const fetchdetails = async () =>{
  const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
  const detaildata = await data.json();
  console.log(detaildata.title)
   setdetails(detaildata);
}
  useEffect(() => {
    fetchdetails()
  },[params])


  return (
    <DetailWrapper>
<div>
  <h2>{details.title}</h2>
  <img src={details.image} alt="" />
</div>
<Info>
  <Button className={activetab === 'instructions' ? 'active' : ''} 
  onClick={()=> setactivetab('instructions')}>Instructions</Button>
  <Button className={activetab === 'ingredients' ? 'active' : ''} 
  onClick={()=> setactivetab('ingredients')}>Ingredients</Button>
</Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
/* border: 1px solid black; */
  margin-top: 7rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg , #494949 , #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  .li{
    font-size: 1rem;
    line-height: 2rem;
  }
  ul{
    margin-top: 2rem;
  }
  img{
    height: 20rem;
    width: 25rem;
  }
`
const Button = styled.button`
  padding:1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1.5rem;
  font-weight: 600;
`

const Info = styled.div`
  margin-left: 10rem;

`

export default Recipe