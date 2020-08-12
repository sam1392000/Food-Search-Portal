import React,{useState} from 'react';
import '../App.css'
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import Receipes from './Receipes';
const Receipe = () => {
    const [query, setquery] = useState("");
     const [receipe, setreceipe] = useState([]);

    const APP_ID="83543839";
    const APP_KEY="61e3dda8ee7f9ae47295d81b9c4833c4";
    const URL=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const getData =async() => {
        if(query !== ""){
            const result = await axios.get(URL);
            console.log(result);
            setreceipe(result.data.hits);
            setquery("");
        }
    
    }
   
    const ChangeOnValue = (e) => {
        setquery(e.target.value);
    }
    const SubmitOnValue = (e) =>{
        e.preventDefault();
        getData();
        
    }
    return(
        <div className="App">
            <h1>Food Search portal</h1>
            <form onSubmit={SubmitOnValue} className="search-form">
                <input
                type="text" 
                className="search" 
                name="query"
                value={query}
                onChange={ChangeOnValue}
                />
                <input
                type="submit"
                value="Search"/>
            </form>
            <div className="recipes">
                {receipe!==[] && receipe.map(receipe => <Receipes key={uuidv4()}receipe={receipe}/>)}
            </div>
        </div>
    )
}
export default Receipe;