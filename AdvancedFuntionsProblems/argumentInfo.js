function argumentInfo() {
  let data = {};
  let stringCounter = 0;
  let numberCounter = 0;
  let functionsCounter = 0;
  Array.from(arguments).forEach((el) => {
    let type = typeof el;
    console.log(`${type}: ${el}`);

    if (!data[type]) {
      data[type] = 0;
    }
    data[type]++;
  });
  Object.keys(data)
    .sort((a, b) => data[b] - data[a])
    .forEach((key) => console.log(`${key} = ${data[key]}`));
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
