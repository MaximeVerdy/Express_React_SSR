import React from 'react'

const BasicComponent = ({ title, description }) => {
     return (
       <div>
         <h1>{title}</h1>
         <p>{description}</p>
       </div>
     );
   };

const SmallCompo = () => {
  return (
    <div>
      <BasicComponent 
        title="React SSR test without Next" 
        description="As I embark on my SSR journey, I set up a React project with Express. Rendering my component server-side, I ensure client-side hydration. With webpack, I configure client code. Running the server, I witness my React app come alive at http://localhost:3000." 
      />
    </div>
  );
};

export { SmallCompo };
