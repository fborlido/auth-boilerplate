# Auth App

This fully functional, unstyled web application with authentication, using the MERN stack. 

## 1. Purpose
This auth app is fully functional and completely unstyled and featureless (apart from the authentication mechanism).
It is supposed to be used as a boilerplate for other apps, without the need to worry about auth.

## 2. Stack
- MongoDB
- NodeJS API
- ReactJS
- React Query

## 3. Database
This app uses a MongoDB Database, with a _Users_ collection, following the schema: 
```
{
  name: String,
  email: String,
  password: String,
}
```

## 4. API

### 4.1. Endpoints

The main API entry point is `http://localhost:<PORT>/api/v1/auth`, with the following specified endpoints:

- `POST /login`

Receives *email* and *password*, validates all the fields, and authenticates the user by creating a session. 
A token is generated using *JWT* and set in a *HTTPOnly cookie*. The userId is encoded on the token.

- `POST /register`

Receives *name*, *email* and *password*, validates all the fields, and creates a new user on the database. 
The user's password is hashed using `bcrypt`.

- `GET /logout`

Removes the token from the cookies and clears the user session.

- `GET /user`

A protected route, which simply returns the user stored in the session.
All protected routes require a valid token that must be present in the cookies.
The decoded value is then verified in the database to see if it exists.

### 4.2. Error handling

There is an `AppError` class that extends the JavaScript `Error` class, specifying a status code and a message.

- *Operational Errors*:
  - 400 - Bad Request
  - 401 - Unauthorized
  - 404 - Not found
  - 500 - Database Error

- *Server Errors*
The server exits with a status code 500. The error is logged on the console.

## Client

The client side of the app uses `ReactJS` set up with `Vite`.

### API communication
The App comunicates with the server using `axios`, which is set up under `src/api`.
