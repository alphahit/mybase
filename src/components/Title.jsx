import React from 'react';

function Title({ text, className }) {
    return (
        <div className="-rotate-6 flex flex-col items-center mt-4">
          <div>
            <h1 className="text-2xl font-bold hover:text-green-400 transition-all">
                {text}
            </h1>
            </div>
            <div>
            <div className="w-24 h-2 rounded-full" style={{backgroundColor: '#3B0C4B'}}></div>
            <div className="w-24 h-2 rounded-full translate-x-3" style={{backgroundColor: '#153664'}}></div>
            </div>
        </div>
    );
}

export default Title;
