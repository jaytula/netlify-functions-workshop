/* Step 6. Create a function to use queryStringParameters params to dynamically render back HTML

    Inside this_file function, read the `event.queryStringParameters` value and grab the sub path to render back HTML.

    Set the response body with the dynamic HTML. Below is a helper function. Any type of templating engine can be used.

    ```js
    const generateHtml = (name = 'there') => {
      return `
      <html lang="en">
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1>Hi ${name}</h1>
        </body>
      </html>`
    }
    ```

    Finally remember to set the headers of the response as `'Content-Type': 'text/html'` to return HTML instead of the default `json`
 */

const generateHtml = (name = 'there') => {
  return `
  <html lang="en">
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>Hi ${name}</h1>
    </body>
  </html>`
}

exports.handler = async (event, context) => {
  console.log('event.queryStringParameters', event.queryStringParameters)
  const name = 'name' in event.queryStringParameters ? event.queryStringParameters.name : 'friend';
  return {
    statusCode: 200,
    headers: {'Content-Type': 'text/html'},
    body: generateHtml(name)
  }
}
