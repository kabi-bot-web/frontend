import React, { FC } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './settings/dashboard';

interface Content {
  navFull: boolean;
}

const Content: FC<Content> = ({ navFull }) => {
  return (
    <div className={`w-full transition-all duration-500 h-full relative overflow-auto ${navFull ? 'sm:pl-72 pl-8' : 'sm:pl-28 pl-8'} pr-8 pt-8`}>
      {/* config page */}
      <Routes>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
    </div>
  );
};

export default Content;
