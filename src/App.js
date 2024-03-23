import './App.scss';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import { useState } from 'react';

function App() {
  const [selectedCategory, SetSelectedCategory]=useState("all")
  const categorychange=(kategori)=>{
    SetSelectedCategory(kategori)
  }
  return (
    <div>
      <Header clickChange={categorychange} />
      <ProductCard kategori={selectedCategory}/>
    </div>
  );
}

export default App;
