// --------------------------------------------------------------------------
// ✅ Figma → SVG 패스 애니메이션
// --------------------------------------------------------------------------
// - [x] Figma를 사용해 SVG 패스 애니메이션을 적용할 아이콘 또는 다이어그램을 그립니다.
// - [x] 드로잉 시, 고려할 점
//   - [x] Stroke 속성으로 그립니다.
// - [x] 애니메이션을 적용하기 위해 고려할 점
//   - [x] strokeDasharray
//   - [x] strokeDashoffset
//   - [x] visibility
//   - [x] pathLength
// --------------------------------------------------------------------------
import { string } from 'prop-types';
import S from './PracticeSVGPathAnimation.module.css';
import { useRef } from 'react';
import { timeline } from 'motion';

PracticeSVGPathAnimation.propTypes = {
  color: string,
};

function PracticeSVGPathAnimation({ color = '#4729B4 ' }) {
  const circle1Ref = useRef(null);
  const barRef = useRef(null);
  const circle2Ref = useRef(null);

  const handleOnclick = () => {
    const circle1Element = circle1Ref.current;
    const barElement = barRef.current;
    const circle2Element = circle2Ref.current;

    const sequence = [
      [
        circle1Element,
        { strokeDashoffset: [1, 0], visibility: 'visible' },
        { duration: 1, easing: 'ease-out' },
      ],
      [
        barElement,
        { strokeDashoffset: [1, 0], visibility: 'visible' },
        { duration: 0.6, easing: 'ease-in-out', at: '-0.2' },
      ],
      [
        circle2Element,
        { strokeDashoffset: [1, 0], visibility: 'visible' },
        { duration: 1, easing: 'ease-out' },
      ],
    ];

    timeline(sequence);
  };
  return (
    <div className={S.component} onClick={handleOnclick}>
      <svg width={210} height={41} viewBox="0 0 210 41" fill="none">
        <circle
          cx="20.5"
          cy="20.5"
          r="17.5"
          stroke={color}
          strokeDasharray={1}
          strokeDashoffset={0}
          strokeWidth={6}
          pathLength={1}
          ref={circle1Ref}
        />
        <line
          x1={35}
          y1={20}
          x2={173}
          y2={20}
          stroke={color}
          strokeDasharray={1}
          strokeDashoffset={0}
          strokeWidth={6}
          pathLength={1}
          ref={barRef}
        />
        <circle
          cx="189.5"
          cy="20.5"
          r="17.5"
          stroke={color}
          strokeDasharray={1}
          strokeDashoffset={0}
          strokeWidth={6}
          pathLength={1}
          ref={circle2Ref}
        />
      </svg>
    </div>
  );
}

export default PracticeSVGPathAnimation;
