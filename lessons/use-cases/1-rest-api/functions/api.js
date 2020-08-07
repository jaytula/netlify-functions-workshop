const api = require("./methods");
/* Step 5. In this_file, we are going to setup our API router

    Use the `event.path` & `event.httpMethod` to determine how to handle the request
*/

exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, "");
  const segments = path.split("/").filter(e => e);

  switch (event.httpMethod) {
    case "GET":
      // GET /.netlify/functions/api
      if (segments.length === 0) {
        return api.readAll(event, context);
      }
      // GET /.netlify/functions/api/123456
      if (segments.length === 1) {
        event.id = segments[0];
        return api.read(event, context);
      } else {
        return {
          statusCode: 500,
          body: "too many segments in GET request",
        };
      }
    // POST /.netlify/functions/api
    case "POST":
      if (segments.length === 0) {
        return api.create(event, context);
      }

      // Front-End only does POSTs so cannot distinguish between Update or Delete

      // Update
      if (segments.length === 1) {
        event.id = segments[0];
        return api.update(event, context);
      } else {
        return {
          statusCode: 500,
          body:
            "invalid segments in POST request, must be /.netlify/functions/api/123456",
        };
      }

      // Deletion
      if (segments.length === 1) {
        event.id = segments[0];
        return api.delete(event, context);
      } else {
        return {
          statusCode: 500,
          body:
            "invalid segments in DELETE request, must be /.netlify/functions/api/123456",
        };
      }

    

    // Fallthrough case
    default:
      return {
        statusCode: 500,
        body: "unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE",
      };
  }
};
