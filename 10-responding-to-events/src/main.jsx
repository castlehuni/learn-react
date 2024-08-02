// --------------------------------------------------------------------------
// ✅ 수동 화면 업데이트
// --------------------------------------------------------------------------
// - [ ] 렌더 함수 작성
// - [ ] 반응성 상태 구현 (with Proxy)
// - [ ] 반응성 상태를 사용해 수동 화면 업데이트
// --------------------------------------------------------------------------

import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Learn from './learn';

const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <Learn />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}

/* -------------------------------------------------------------------------- */
/*                               re-rendering 하기                            */
/* -------------------------------------------------------------------------- */

// import './styles/globals.css';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import Learn from './learn';

// const container = document.getElementById('react-app');

// if (!container) {
//   throw new Error('문서에 "#react-app" 요소가 존재하지 않습니다.');
// }

// const reactDOMRoot = createRoot(container);

// function render(){
//   reactDOMRoot.render(
//     <StrictMode>
//       <Learn />
//     </StrictMode>
//   );
// }

// // Reactivity (Proxy)
// export function update(){
//   // update state
//   // re-render
//   render();
// }

// // first render
// render();
