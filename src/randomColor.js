export default function randomColor() {
  let getColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return getColor;
}
