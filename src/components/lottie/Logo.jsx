import { useEffect } from 'react';
import Logo from '../../assets/lottie/logo.lottie';

const App = () => {
  useEffect(() => {
    import('@dotlottie/player-component')
  }, [])
  return (
  <div className="App">
    <dotlottie-player
      src={Logo}
      autoplay
      style={{ height: '100%', width: '100%' }}
  />
  </div>
)
  };
  
  export default App;
