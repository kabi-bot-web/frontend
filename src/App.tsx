import React, { useState, useEffect } from 'react';
import TopNavigation from './components/top_nav';
import LeftNavigation from './components/left_nav';
import Content from './components/content';
import { navList } from './util/nav';
import { Author } from './data/author';

function App() {
  const [navFull, setNavFull] = useState(false);
  const [author, setAuthor] = useState<Author>({ login: false });

  useEffect(() => {
    // desktop open nav
    if (document.body.clientWidth > 640) setNavFull(true);
    // get author info data
    setAuthor({ avatar: 'https://cdn.discordapp.com/avatars/458988300418416640/c3dd597ba056c3552f3c19453b71007e.jpg?size=1024', login: true });
  }, []);

  return (
    <div className="w-full h-full">
      <TopNavigation full={navFull} author={author} />
      <LeftNavigation
        navFull={navFull}
        setNavFull={setNavFull}
        navList={navList}
      />
      <Content navFull={navFull}/>
    </div>
  );
}

export default App;
