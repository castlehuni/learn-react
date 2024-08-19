import { Outlet } from 'react-router-dom';
import { GlobalNav } from '..';
import S from './style.module.css';

function RootLayout() {
  return (
    <div className={S.component}>
      <GlobalNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
