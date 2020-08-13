# Handing OAuth Flows

Using functions to handle OAuth login flows.

https://www.youtube.com/watch?v=zErvY08uNM0

## Examples

- [Intercom OAuth](https://github.com/netlify-labs/intercom-netlify-oauth)
- [Netlify OAuth](https://github.com/netlify-labs/oauth-example)

## Notes

- Create Intercom account at intercom.io or similar
- Create new app and somewhere in app  oauth settings set the callback url to your `your-site.com/.netlify/functions/auth-callback`
- Grab App CLIENT_ID and CLIENT_SECRET which are to be provided as environment variables to the netlify function
- Create function `/functions/auth.js` that redirects to Auth URL
- Create function `/functions/auth-callback.js` that is called by Intercom and exchanges
the received Auth Code for Access Token.  
- Install `npm install simple-oauth2`