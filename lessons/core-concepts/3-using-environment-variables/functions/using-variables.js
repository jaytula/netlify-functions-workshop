/* Step 5. In this_file, access the newly created environment variables

    Lambda environment variables are accessible on the `process.env` object in node.

    `process.env.[YourEnvKeyName]`

    Return the environment variable in the `foo` function response
*/
exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: process.env.MY_ENV_VAR
    }),
  }
  return response;
}
