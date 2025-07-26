import React,{useState} from "react";

function RecipeGenerator(){

    const [ingredients,setIngredients] = useState('');
    const [cuisine,setCuisine]=useState('any');
    const [recipe,setRecipe] = useState('');


    const generateRecipe = async () => {
        try {
            const response = await fetch(`http://localhost:8080/recipe-creatorr?ingredients=${ingredients}&cuisine=${cuisine}`)
            const data = await response.text();
            setRecipe(data);
        } catch (error) {
            console.error("Error Generating recipe",error)
        }
    };

    return (
        <div>
             <input type="text" 
            value={ingredients} 
            onChange={(e)=>setIngredients(e.target.value)} 
            placeholder="Enter a ingredients for recipe"/>

             <input type="text"
             value={cuisine}
             onChange={(e)=>setCuisine(e.target.value)}
            placeholder="Enter a ingredients for recipe"/>


            <button onClick={generateRecipe}>AskAI</button>

            <div className="output">
                <p>{recipe}</p>
            </div>


        </div>
    );

}

export default RecipeGenerator;