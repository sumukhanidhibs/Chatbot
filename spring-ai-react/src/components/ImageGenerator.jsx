import React,{useState} from "react";

function ImageGenerator(){
    const [prompt,setPrompt] = useState('');
    const [imageUrl,setImageUrl]=useState([]);
    
    const generateImage = async () => {
            try {
                const response = await fetch(`http://localhost:8080/generate-image?prompt=${prompt}`)
                const urls = response.json();
                setImageUrl(urls);
            } catch (error) {
                console.error("Error Generating image",error)
            }
    }

    return (
        <div className="tab-content">
            <h2>Generate Image</h2>
            <input type="text" value={prompt}
            onChange={(e)=>setPrompt(e.target.value)}
            placeholder="Enter prompt for image" />
            <button onClick={generateImage}>Generate Image</button>

            <div className="image-grid">
                {imageUrl.map((url,index) => (
                    <img key={index} src={url} alt={`Generated ${index}`} />)
                )
                }


                {
                    [...Array(4-imageUrl.length)].map(
                        (_,index) =>(
                            <img key={index+imageUrl.length} className="empty-image-slot" />

                    ))
                }
                
            </div>


        </div>
    )
}

export default ImageGenerator;