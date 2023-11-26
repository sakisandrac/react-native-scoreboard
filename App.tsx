import { Store } from './src/redux/store';
import Home from './src/components/Home';
import { Provider } from 'react-redux'

export default function App() {

  return (
    <Provider store={Store} >
      <Home />
    </Provider>
  );
}