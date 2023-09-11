import logo from './logo.svg';
import './App.css';
// import { Table } from './Table/table';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Products } from './Table/product';
import { ProductDetails } from './Table/table';
import { Menu } from './Table/menu';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      {/* <ProductDetails/>
      <Products />
      <Menu /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Menu/>,<Products />]}></Route>
                    <Route path='/table/:id' element={[<Menu/>,<ProductDetails />]}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
