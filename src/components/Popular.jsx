
import {useEffect , useState} from 'react';
import styled from 'styled-components';
import {Splide , SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom'
function Popular() {

    const [popular , setPopular] = useState([]);

   useEffect(() => {
      getPopular();
   }, [])

    const getPopular = async  () =>{
      const check = localStorage.getItem('popular') 
      if (check){
        setPopular(JSON.parse(check));
      }
      else{
     const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
     const data = await api.json();
     localStorage.setItem('popular' , JSON.stringify(data.recipes))
     console.log(data.recipes)
     setPopular(data.recipes)
     }
    };


  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide options={{
        perPage:3,
        arrows:false,
        pagination:false,
        drag:"free",
        gap:'15rem', 
      }}>
      {popular.map((recipe) =>{
        return(
          <SplideSlide key = {recipe.id}>
          <Card>
            <Link to = {'/recipe/' + recipe.id}>
            <p>
              {recipe.title}
            </p>
            <img src={recipe.image} alt={recipe.title} />
            <Gradient/>
            </Link>
          </Card>
          </SplideSlide>
        );
    })}
    </Splide>
    
    </Wrapper>
  )
}
const Wrapper = styled.div`
margin: 2rem 0rem;
text-align: center;
`;
const Card = styled.div`
min-height:15rem;
border-radius:2rem;
/* width: 10rem; */
overflow:hidden;
position: relative;
@media (max-width:1000px){
  width: 10rem;
  margin-right: 5rem;
  
}
img{
  border-radius: 2rem;
  position: absolute;
  left: 0; 
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%,0%);
  color:white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 0.8rem;
  height: 40%;
  display:flex;
  justify-content: center;
  align-items: center;
  @media (max-width:1000px){
    font-size: 0.6rem;
  }
}
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.5));

  :hover{
    background: linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,10));
  }
`
export default Popular