import React from 'react';
import { useLottie, LottieOptions } from 'lottie-react';
import Logo from '../../assets/lottie/logo.json';

const App = () => {
    const options: LottieOptions = {
      animationData: Logo,
      loop: false
    };
  
    const { View } = useLottie(options);
  
    return <>{View}</>;
  };
  
  export default App;
