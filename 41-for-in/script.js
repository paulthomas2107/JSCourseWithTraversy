const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'green',
  color4: 'purple',
};

// Get key and object based on key
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}
