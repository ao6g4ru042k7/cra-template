import { useState } from 'react';

const useTable = () => {
  const [table, setTable] = useState('test');
  return { table, setTable };
};
export default useTable;
