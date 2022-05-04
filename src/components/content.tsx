import { FC } from 'react';

interface Content {
  leftNavFull: boolean;
}

const Content: FC<Content> = ({ leftNavFull }) => {
  return (
    <div className={`h-full w-full transition-all duration-500 ${leftNavFull ? 'pl-72' : 'pl-28'} pr-8 pt-8`}>
      {/* config page */}
    </div>
  );
};

export default Content;