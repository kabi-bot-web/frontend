import { useState } from 'react';
import Top_navigation from './components/top_nav';
import Button from '@mui/material/Button';
import Left_navigation from './components/left_nav';
import Content from './components/content';

function App() {
  const [navFull, setNavFull] = useState(true);

  return (
    <div className="w-full h-full">
      <Top_navigation full={navFull} />
      <Left_navigation
        navFull={navFull}
        setNavFull={setNavFull}
      />
      <Content navFull={navFull}/>
    </div>
  )
}

export default App
