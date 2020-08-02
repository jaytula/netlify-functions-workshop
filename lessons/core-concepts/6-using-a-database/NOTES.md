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