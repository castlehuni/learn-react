import { PLAYER } from '@/tic-tac-toe/constant';
import Square from '../Square/Square';

function Squares() {
  return (
    <div className="Squares">
      <Square></Square>
      <Square>{PLAYER.ONE}</Square>
      <Square>{PLAYER.TWO}</Square>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default Squares;
