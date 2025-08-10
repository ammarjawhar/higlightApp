import React from 'react';
/* import Highlightinp from './Components/Highlightinp';*/
import Highlightinp from './components/Highlightinp';

const App = () => {
  // you can pass any pattern as aprop to the higlight component
  const pattern = /(@\w+)|(#\w+)|(https?:\/\/[^\s]+)|({{[^}]+}})/g;

  return (
    <div className="flex  justify-center items-center h-screen w-full">
      <Highlightinp pattern={pattern} />
    </div>
  );
};

export default App;
