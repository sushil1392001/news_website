import React from 'react';
import Side_menu from "./componet/Side_menu"
import Top_story from "./componet/Top_story"
import './App.css';
import Post_story from './componet/Post_story'
import Side_post from './componet/Side_post';
function App() {
  return (
   <>
   <Side_menu/>
   <Top_story/>
   <Post_story/>
   <Side_post/>
   </>
  );
}
export default App;
