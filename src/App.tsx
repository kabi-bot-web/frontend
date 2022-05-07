import { useState } from 'react';
import Top_navigation from './components/top_nav';
import Left_navigation from './components/left_nav';
import Content from './components/content';
import { Author } from './data/author';

function App() {
  const [navFull, setNavFull] = useState(true);
  const [author, setAuthor] = useState<Author>({});

  return (
    <div className="w-full h-full">
      <Top_navigation full={navFull} author={author} />
      <Left_navigation
        navFull={navFull}
        setNavFull={setNavFull}
      />
      <Content navFull={navFull}/>
    </div>
  )
}

export default App;
