import { Link } from 'react-router-dom';
import S from './style.module.css';

function GlobalNav() {
  return (
    <nav className={S.component}>
      <h2>학습 주제</h2>
      <ul>
        <li>
          <Link to={'/'}>문서 제목 동기화</Link>
        </li>
        <li>
          <Link to={'/sync-web-storage'}>웹 스토리지 동기화</Link>
        </li>
        <li>
          <Link to={'/effect-sync-and-cleanup'}>
            마우스 위치 (이벤트 연결 &amp; 클린업)
          </Link>
        </li>
        <li>
          <Link to={'/scroll-trigger-effect'}>
            스크롤 트리거(Scroll Trigger) 이펙트
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GlobalNav;
