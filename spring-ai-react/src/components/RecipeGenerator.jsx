import React,{useState} from "react";

function RecipeGenerator(){

    const [ingredients,setIngredients] = useState('');
    const [cusuine,setcuisine]=useState('any');
    const [recipe,setRecipe] = useState('');


    const generateRecipe = async () => {
        try {
            const response = await fetch(`http://localhost:8080/recipe-creator?ingredients=${ingredients}&cusuine=${cusuine}`)
            const data = response.text;
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
            value={cusuine} 
            onChange={(e)=>setcuisine(e.target.value)} 
            placeholder="Enter a ingredients for recipe"/>


            <button onClick={generateRecipe}>AskAI</button>

            <div className="output">
                <p>{recipe}</p>
            </div>


        </div>
    );

}

export default RecipeGenerator;