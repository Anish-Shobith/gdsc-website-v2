import { useEffect } from 'react';
import Hero from '../../assets/lottie/hero.lottie';

const App = () => {
  useEffect(() => {
    import('@dotlottie/player-component')
  }, [])

  return (<div className="App">
  <dotlottie-player
    src={Hero}
    autoplay
    loop
    style={{ height: '100%', width: '100%' }}
  />
</div>)
  };
  
  export default App;
