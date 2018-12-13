## Description
MET Museum art app that allows visitors to discover exhibitions and get more information by scanning artwork.

## User Stories
-  **404:** As a visitor I want to know when the page for the artwork I’m looking for doesn’t exist so that I can go somewhere else.
-**Homepage** As a user I want to check the exhibitions from the MET so that I can know more about them. 
-  **Signup:** As a visitor I want to sign up so that I can see what the MET app has to offer.
-  **Login:** As a visitor I want to log in so that I can check out artworks and add favorites.
-  **Logout:** As a visitor I want to logout so that no one else can use my account.
-**Menu* As a user, I want a menu so that I can have the option to log out, see my favs and go back to the homepage all in the same place. 
-**Navbar** As a user I want to be able to log out if I am logged in, check my favourites and go back to homepage. 
-**Exhibition Detail Page** as a user I want to see more paintings from the exhibition I chose so that I can add them to my favourites. 
- **Create favourites** As a registered user I want to be able to add paintings to my favorites so that I can check them out later.
-  **List favourites** As a user I want to list my favorite paintings so I can see all of them in one place.
- **Delete favourites** As a user I want to delete my favourites so that I can just see the paintings I still like.


## Backlog
**Scan** As a visitor I want to learn more about the artwork in front of me by scanning it and getting its description.
**Recs** As a user I want to see recommendations based on my favorites.
**Collections** As a user I want to group my favorites into folders (collections), so I can classify and find them more easily.
**Desktop version** As a user I want to access the app from a desktop so that I can see my favorites wherever I am.

# Client
## Routes
- `/`
  - HomePageComponent
  - Public
  - Displays current exhibitions
-/user/exhibition/department
- ExhibitionListComponent
- user is login
- Displays the list of paintings belonging to that exhibition.
- `/auth/signup`
  - SignupPageComponent
  - anon only
  - signup form
   - link to login
  - navigate to homepage after signup
- `/auth/login`
  - LoginPageComponent
  - anon only
  - login form
  - link to signup
  - navigate to homepage after login
- `user/me/faves`
  - UserFaveComponent
  - user only
  - shows all favorites
- `/whateveryouwritethatsnotaroute`
  - NotFoundPageComponent


## Components
- Login:
  - userFormComponent(email: email, password: password, button: button, onSubmit: function)
- Sign up:
  - userFormComponent(username: string, email: email, password: password, button: button, onSubmit: function)
- Favorites list:
- FaveListComponent (mapped array of fave objects {image: string, artist: string, date: string, department: string}, button: button, onSubmit: function)
-ExhibitionListComponent (mapped array of exhibitions {image: string, artist: string, date: string, department: string}, button: button, onSubmit: function)

## Services
- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Exhibition service
 - get all()
  - fav.list()
  - fav.create({user})
- fav.delete({user})


# Server
## Models
User model
```
username - string // required
email - Email // required & unique
password - Password // required
favoritesId - Array [id]

```
Exhibitions model
```
ownerId - ObjectId (backlog)
image - String
artist - String
date - String
department - String
```

## Routes

| Method | Path | Description |
|--------|------|-------------|
| `get`  | `/auth/me` | check if i'm logged |
| `post` | `/auth/login` | login |
| `post` | `/auth/signup` | signup |
| `post` | `/auth/logut` | logout |
| `post`  | `/api/exhibitions/favorites/:id` | private route for logged in user |
| `delete`  | `/api/exhibitions/favorites/:id` | private route for logged in user |
| `get`  | `/api/exhibitions/favorites` | private route for logged in user |
| `get`  | `/api/exhibitions` | private route for logged in user |


## API Endpoints (backend routes)
- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user does not exist (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - email
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - password matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - user logged in check
  - body: (empty)
  - 204
- POST /api/exhibitions/favorites/:id
 - user logged in check
  - body:
    - fav.id
  - validation
    - id is valid (404)
    - id exists (404)
  - add to favorites if not there yet
  - updates user in session
- DELETE /api/exhibitions/favorites/:id
-  user logged in check
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
  - remove from favorites
  - updates user in session
- GET /api/exhibitions/favorites
- user logged in check
  - get list
- GET /api/exhibitions
 - user logged in check
- get list of paintings belonging to that exhibition



## Links
[The Metropolitan Museum of Art Collection API] (https://metmuseum.github.io/)
[Google Vision API] (https://cloud.google.com/vision/)

## Kanban Board

## GitHub
[Frontend repo] (https://github.com/MarloMorgan/frame-frontend )
[Backend repo] (https://github.com/MarloMorgan/frame-backend)
[Try the deployed app] ()

## Slides
[Google Slides Presentation] ()







