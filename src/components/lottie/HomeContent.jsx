import { useEffect } from 'react';
import HomeContent from '../../assets/lottie/homecontent.lottie';

const App = () => {
  useEffect(() => {
    import('@dotlottie/player-component')
  }, [])
  return (
  <div className="App">
    <dotlottie-player
      src={HomeContent}
      autoplay
      loop
      style={{ height: '100%', width: '100%' }}
  />
  </div>
)
  };
  
  export default App;
