import React from 'react';
import Highlightinp from './Components/Highlightinp';

const App = () => {
  // you can pass any pattern as aprop to the higlight component
  const pattern = /(@\w+)|(#\w+)|(https?:\/\/[^\s]+)|({{[^}]+}})/g;

  return (
    <div>
      <Highlightinp
        pattern={pattern}
        style={{ color: 'red', fontWeight: 'bold' }}
      />
    </div>
  );
};

export default App;
