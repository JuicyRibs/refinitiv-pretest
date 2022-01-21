import { useEffect, useState } from 'react';

export const Second = () => {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async () => {
      fetch('https://api.publicapis.org/categories')
        .then((res) => res.json())
        .then((res) => setCategory(res));
    })();
  });

  return (
    <div>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}></input>
      {category
        .filter((e) => e.includes(search))
        .map((cat) => (
          <div style={{ border: '1px solid black', padding: '0.25rem' }}>
            {cat}
          </div>
        ))}
    </div>
  );
};
