const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile(`./indext.html`, generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log(`Portfolio complete! Checkout out index.html to see the output!`);
});