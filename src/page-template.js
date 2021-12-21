//obtain user input. With template literals, we can wrap the string in backticks and interpolate the variables with the ${<variable>} syntax.

//ABOUT THIS FUNCTION - this function can receive input and displays the answers in the command line and HTML
const generatePage = (name, github) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};


module.exports = generatePage;