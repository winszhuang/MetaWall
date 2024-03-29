const numberList = (
  function () {
    const numberObj = {};

    for (let i = 1; i <= 30; i += 0.5) {
      if (i.toString().includes('.')) {
        const [prev, last] = i.toString().split('.');
        numberObj[`${prev}\\.${last}`] = `${i}px`;
      } else {
        numberObj[i] = `${i}px`;
      }
    }

    return numberObj;
  }()
);

module.exports = function () {
  return function ghost({ addUtilities }) {
    const classListObj = {};
    const directions = ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'];

    const hasTop = (value) => value.includes('t');
    const hasBottom = (value) => value.includes('b'); 
    const hasLeft = (value) => value.includes('l'); 
    const hasRight = (value) => value.includes('r'); 

    const checkHorizontalValue = (direction, value) => {
      if (hasLeft(direction)) return `-${value}`;
      if (hasRight(direction)) return value;
      return 0;
    };

    const checkVerticalValue = (direction, value) => {
      if (hasTop(direction)) return `-${value}`;
      if (hasBottom(direction)) return value;
      return 0;
    };

    directions.forEach(direction => {
      Object.entries(numberList).forEach(([key, value]) => {
        classListObj[`.ghost-${direction}-${key}`] = {
          position: 'relative',
          isolation: 'isolate',
          '&::after': {
            content: '',
            left: checkHorizontalValue(direction, value),
            top: checkVerticalValue(direction, value),
            'z-index': -1,
            position: 'absolute',
            width: '100%',
            height: '100%'
          }
        };
      });
    })
    
    addUtilities(classListObj);
  }
}
