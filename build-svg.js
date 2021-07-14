let fs = require("fs");

fs.readFile("template.svg", "utf-8", (error, data) => {
  if (error) {
    return;
  }
  
  data = data.replace('{name}', 'kykim88')

  data = fs.writeFile("chat.svg", data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
