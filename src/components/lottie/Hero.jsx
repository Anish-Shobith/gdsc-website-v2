import React from 'react';
import { useLottie } from 'lottie-react';
import Hero from '../../assets/lottie/hero.json';

const App = () => {
    const options = {
      animationData: Hero,
      loop: true
    };
  
    const { View } = useLottie(options);
  
    return <>{View}</>;
  };
  
  export default App;
