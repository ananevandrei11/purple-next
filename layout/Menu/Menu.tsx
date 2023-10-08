import { useContext } from 'react';
import { AppContext } from '@/context/app.context';

export const Menu = () => {
  const { menu } = useContext(AppContext);
  return (
    <ul>
      {menu.map((i) => (
        <li key={i._id.secondCategory}>
          <p>{i._id.secondCategory}</p>
        </li>
      ))}
    </ul>
  );
};
