import Header from './components/Header.tsx';
import Shop from './components/Shop.tsx';
import Product from './components/Product.tsx';
import { store } from './store/store.ts';
import { DUMMY_PRODUCTS } from './dummy-products.ts';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}> 
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </Provider>
  );
}

export default App;
