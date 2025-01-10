import { useState } from 'react'
import './App.css'
import ImageGenerator from './components/ImageGenerator';
import RecipeGenerator from './components/RecipeGenerator';
import ChatComponent from './components/ChatComponent';


function App() {

  const [activeTab,setActiveTab] = useState('image-generator');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className='App'>
      <button className={activeTab==='image-generator'? 'active':''} onClick={()=>handleTabChange('image-generator')}>
        Image generator
      </button>
      <button className={activeTab==='chat'? 'active':''} onClick={()=>handleTabChange('chat')}>
        Chat
      </button>
      <button className={activeTab==='recipe'? 'active':''} onClick={()=>handleTabChange('recipe')}>
        Recipe generator
      </button>

      <div>
        {activeTab === 'image-generator' && <ImageGenerator/>}
        {activeTab === 'chat' && <ChatComponent/>}
        {activeTab === 'recipe' && <RecipeGenerator/>}

      </div>

    </div>
  )
}

export default App
