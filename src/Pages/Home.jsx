import { useState, useEffect } from 'react';
import { getAllCategories } from '../API';
import { Preloader } from '../components/Preloader/Preloader';
import { CategoryList } from '../components/Category/CategoryList';

function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
}

export { Home };