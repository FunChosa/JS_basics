export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/*
export function getRandomColor() {
  const colors =['#ff00bf','#ff004c','#ff0000','#ff9100','#33ff00'];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
*/