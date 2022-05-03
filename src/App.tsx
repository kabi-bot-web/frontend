import { useState } from 'react';
import Top_navigation from './components/top_nav';
import Button from '@mui/material/Button';
import Left_navigation from './components/left_nav';
import Content from './components/content';

function App() {
  const [topNavFull, setTopNavFull] = useState(false);

  return (
    <div className="w-full h-full">
      <Top_navigation full={topNavFull} />
      <Left_navigation topNavFull={topNavFull} setTopNavFull={setTopNavFull} />
      <Content />
    </div>
  )
}

export default App
