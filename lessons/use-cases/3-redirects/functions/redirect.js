exports.handler = async (event, context) => {
  /* Step 4. In this_file, set `headers` key of the function response object.

      Set the `statusCode` to `302`.

      Set the `headers['Location']` value to your redirect url.

      Set the `headers['Cache-Control']` to `no-cache`. This will disable caching if we are using dynamic querystrings/paths to send people to different locations.
  */
  return {
    statusCode: 302,
    headers: {
      Location: 'https://www.slashdot.org',
      'Cache-Control': 'no-cache'
    },
    body: JSON.stringify({})
  }
}
