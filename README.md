# Api

## Getting started
Clone the repo with
```git clone https://github.com/flb31/be-ret```

Install dependencies with
```npm i```

Run dev mode with
```npm run dev```

## How to use

Now you can use Postman and use the next `http://localhost:5000/api/`
* Create Provider [POST] `http://localhost:5000/api/providers` (jwt auth)
* Read Provider [GET] `http://localhost:5000/api/providers/<provider-id>`
* Update Provider [PUT] `http://localhost:5000/api/providers/<provider-id>` (jwt auth)
* Delete Provider [DELETE] `http://localhost:5000/api/providers/<provider-id>` (jwt auth)
* List Providers [GET] `http://localhost:5000/api/providers/page/<number-pagination>`

* Create Specialty [POST] `http://localhost:5000/api/specialties` (jwt auth)
* Read Specialty [GET] `http://localhost:5000/api/specialties/<specialty-id>`
* Update Specialty [PUT] `http://localhost:5000/api/specialties/<specialty-id>` (jwt auth)
* Delete Specialty [DELETE] `http://localhost:5000/api/specialties/<specialty-id>` (jwt auth)
* List Specialties [GET] `http://localhost:5000/api/specialties/page/<number-pagination>`

### A few notes
For some endpoints is necessary create a JWT Authorization, You can use theses url `https://jwt.io/` (generate JSW online) and `https://www.epochconverter.com/` (generate timestamp for ```iat``` and ```exp``` fields)
