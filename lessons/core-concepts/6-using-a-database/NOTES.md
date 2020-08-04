# Using a Database

For testing, provide environment variables in file `.env` in project root

## AirTable

```
AIRTABLE_API_KEY=[API Key: found at airtable.com/account]
AIRTABLE_BASE=[Find in AirTable API documentation]
AIRTABLE_TABLE=[Table name]
```

## Fauna

Environment variables:

```
FAUNADB_SERVER_SECRET=[Fauna Server Secret]
```

- Create collection `todos` in associated fauna db
- Send JSON POST to `/.netlify/functions/fauna`

## Firebase

Environment variables:

```
FIREBASE_DATABASE_URL
FIREBASE_PROJECT_ID
FIREBASE_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY
```

This uses the FireStore and not the Real Time database.

## Google Sheets

- Create a Service Account
- Share the Spreadsheet with the service account email
- Base64-encode the service account credentials to store in env var:

```js
// Encoding
Buffer.from(JSON.stringify(require('./credentials.json'))).toString('base64')

// Decoding
JSON.parse(Buffer.from(base64String, 'base64').toString('ascii'))
```

## Mongo (Mongodb Atlas)

- Ensure Whitelist has IP
- Specify `MONGODB_URI` environment variable
- Set database with `client.db`

## Postgres (ElephantSQL)

- Create an account at ElephantSQL
- Provide env variables

```
PGUSER
PGPASSWORD
PGHOST
PGDATABASE
PGPORT
```

- Manually create `notes` table with `id`, `title`, and `created_at`