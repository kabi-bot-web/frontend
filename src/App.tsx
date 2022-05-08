import { useState, useEffect } from 'react';
import Top_navigation from './components/top_nav';
import Left_navigation from './components/left_nav';
import Content from './components/content';
import { Author } from './data/author';

function App() {
  const [navFull, setNavFull] = useState(false);
  const [author, setAuthor] = useState<Author>({});

  useEffect(() => {
    // desktop open nav
    if (document.body.clientWidth > 640) setNavFull(true);
    // get author info data
    setAuthor({ avatar: 'https://cdn.discordapp.com/avatars/458988300418416640/c3dd597ba056c3552f3c19453b71007e.jpg?size=1024' });
  }, []);

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
