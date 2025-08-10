import React from 'react';
/* import Highlightinp from './Components/Highlightinp';*/
import Highlightinp from 'input-highlight-react2';


const App = () => {
  // you can pass any pattern as aprop to the higlight component
  const pattern = /(@\w+)|(#\w+)|(https?:\/\/[^\s]+)|({{[^}]+}})/g;

  return (
    <div>
      <Highlightinp pattern={pattern} />
    </div>
  );
};

export default App;
