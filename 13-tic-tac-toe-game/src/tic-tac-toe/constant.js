// 게임에서 사용되는 말(플레이어)를 상수로 정의합니다.
// const CONSTANT = VALUE
export const PLAYER = {
  ONE: '🐶',
  TWO: '🐱',
};

export const PLAYER_COUNT = Object.keys(PLAYER).length;

// 스퀘어 집합: 초기 상태 값
export const INITIAL_SQUARES = Array(9).fill(null);

// 게임 승리 조건
export const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = () => {};
