const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://adventofcode.com/2022/day/' + process.argv[2])
.then(async response => {
  const html = response.data;

  const $ = cheerio.load(html);
  const scrapedata = $('pre').text().trim();
  console.log(scrapedata);
})
.catch( error => {
  console.log(error);
}); 
