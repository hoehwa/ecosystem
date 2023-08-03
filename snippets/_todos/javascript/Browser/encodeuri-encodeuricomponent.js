const partOfURL = 'my-page#with,speci@l&/"characters"?';
const fullURL = 'https://my-website.com/my-page?query="a%b"&user=1';

encodeURIComponent(partOfURL); // Good, escapes special characters
// 'my-page%23with%2Cspeci%40l%26%2F%22characters%22%3F'

encodeURIComponent(fullURL);  // Bad, encoded URL is not valid
// 'https%3A%2F%2Fmy-website.com%2Fmy-page%3Fquery%3D%22a%25b%22%26user%3D1'

const partOfURL = 'my-page#with,speci@l&/"characters"?';
const fullURL = 'https://my-website.com/my-page?query="a%b"&user=1';

encodeURI(partOfURL); // Bad, does not escape all special characters
// 'my-page#with,speci@l&/%22characters%22?'

encodeURI(fullURL);  // Good, encoded URL is valid
// 'https://my-website.com/my-page?query=%22this%25thing%22&user=1'
