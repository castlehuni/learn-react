import { func, node } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
  onPlay: func,
};

function Square({ children, onPlay }) {
  // [파생된 상태]
  const isDisabled = !!children;

  return (
    <button className={S.component} onClick={onPlay} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Square;
