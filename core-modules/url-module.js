const url = require('url');

const myUrl = new url.URL('http://mywebsite.com/catalog?category=books&author=jkrowling');

console.log(myUrl.href);
console.log(myUrl.host);
console.log(myUrl.searchParams);
console.log(myUrl.search);
console.log(myUrl.searchParams.get('author'));