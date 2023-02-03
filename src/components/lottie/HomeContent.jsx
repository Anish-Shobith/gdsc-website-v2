import React from 'react';
import { useLottie } from 'lottie-react';
import HomeContent from '../../assets/lottie/homecontent.json';

const App = () => {
    const options = {
      animationData: HomeContent,
      loop: true
    };
  
    const { View } = useLottie(options);
  
    return <>{View}</>;
  };
  
  export default App;
