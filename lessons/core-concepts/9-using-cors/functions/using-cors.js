/* Step 1. In this_file, set `headers` key of the function response object.

    Set the `"Access-Control-Allow-Origin"` & `"Access-Control-Allow-Credentials"` headers.
*/
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": 'https://www.youtube.com',
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify({
      message: 'Hi ⊂◉‿◉つ',
      event: event,
    })
  }
}
