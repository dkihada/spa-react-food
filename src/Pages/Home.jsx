import { useState, useEffect } from 'react';
import { getAllCategories } from '../API';
import { Preloader } from '../components/Preloader/Preloader';
import { CategoryList } from '../components/Category/CategoryList';
import { Search } from '../components/Search/Search';
import { useHistory, useLocation } from 'react-router';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLocaleLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search searchCategory={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export { Home };
