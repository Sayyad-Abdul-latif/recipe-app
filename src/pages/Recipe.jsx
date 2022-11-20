import React from 'react'
import {useEffect , useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
function Recipe() {
  let params = useParams();
  const [details,setdetails] = useState({})
  const [activetab , setactivetab] = useState('instructions')

  useEffect(() => {
    const fetchdetails = async () =>{
  const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
  const detaildata = await data.json();
  console.log(detaildata)
   setdetails(detaildata);
}
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
{activetab === "instructions" && (
<div>
    <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
    <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
  </div>
)}
  {activetab === "ingredients" && (
<ul>
    {details.extendedIngredients.map((ingredient) =>{
      return <li key = {ingredient.id}>{ingredient.original}</li>
    })}
  </ul>
  )}
  
</Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
/* border: 1px solid black; */
  margin-top: 7rem;
  margin-bottom: 5rem;
  display: flex;
  @media (max-width:1000px){
    text-align: left;
    margin-top: 4rem;
    flex-direction: column;
  }
  .active{
    background: linear-gradient(35deg , #494949 , #313131);
    color: white;
  }
  h2,h3{
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (max-width:1000px){
      margin-top: 0.4rem;
    }
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
    border-radius: 2rem;
    @media (max-width:1000px){
      height: 15rem;
      width: 20rem;
    }
  }
`
const Button = styled.button`
  padding:1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1.5rem;
  font-weight: 600;
  @media (max-width:1000px){
    margin-top: 2rem;
    padding: 0.6rem 1rem;
    margin-right: 0.4rem;
  }
`

const Info = styled.div`
  margin-left: 10rem;
  @media (max-width:1000px){
    margin-left: 1rem;
  }

`

export default Recipe