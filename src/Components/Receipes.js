import React,{useState} from 'react';
import '../App.css'
import RecipeDetails from "./RecipeDetails" ; 
const Receipes =  ({receipe}) => {
    const [show, setShow] = useState(false);
    const { label, image, url, ingredients } = receipe.recipe;
    return(
        <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
    )
}
export default Receipes