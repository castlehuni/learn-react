/**@type {(n: number) => string} */
function numberWithComma(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default numberWithComma;
