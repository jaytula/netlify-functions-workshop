const test = require('ava');
const fetch = require('node-fetch');

/* Step 7. In this_file, use `node-fetch` to call into your live URL to verify the response */
test('return valid response', async t => {
  const response = await fetch('http://localhost:8888/.netlify/functions/foobar');
  const data = await response.json();
  console.log(data);
  t.assert(data.success, true);
})
