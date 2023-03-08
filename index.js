import './style.css';
const boxes = document.querySelectorAll('.square');

const find = (r, c) => {
  return boxes[r * 3 + c];
};

const changeColor = (r, c, color) => {
  const targetBox = find(r, c);
  targetBox.style.backgroundColor = color;
};

const shiftDown = (r, c) => {
  const box1 = find(r, c);
  const box2 = find(r + 1, c);
  const colorBox2 = box2.style.backgroundColor;
  const colorBox1 = box1.style.backgroundColor;

  changeColor(r + 1, c, colorBox1);
  changeColor(r, c, colorBox2);
};

changeColor(2, 2, 'rgb(80, 50, 160)');
shiftDown(0, 2);
