import React from 'react';

const Console = ({cD}) => {
  return (
    <div className="console-container">
      <div className="console">
        <div className="console-header">
          <span className="console-title">Libercus Management Console</span>
          <div className="console-controls">
            <span className="control-dot minimize"></span>
            <span className="control-dot maximize"></span>
            <span className="control-dot close"></span>
          </div>
        </div>
        <div className="console-body">
          <pre className="console-text">
            LIBERCUS&gt;<span className="cursor">_</span><span>{cD}</span>
            <span>Adding new change</span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Console;