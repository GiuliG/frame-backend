## Description
MET Museum art app that allows visitors to discover exhibitions and get more information by scanning artwork.

## User Stories
-  **404:** As a visitor I want to know when the page for the artwork I’m looking for doesn’t exist so that I can go somewhere else.
-**Homepage** As a user I want to check the exhibitions from the MET so that I can know more about them. 
-  **Signup:** As a visitor I want to sign up so that I can see what the MET app has to offer.
-  **Login:** As a visitor I want to log in so that I can check out artworks and add favourites.
-  **Logout:** As a visitor I want to logout so that no one else can use my account.
- **Menu** As a user, I want a menu so that I can have the option to log out, see my favs and go back to the homepage all in the same place. 
- **Navbar** As a user I want to be able to log out if I am logged in, check my favourites and go back to homepage. 
- **Exhibition Detail Page** as a user I want to see more paintings from the exhibition I chose so that I can add them to my favourites. 
- **Create favourites** As a registered user I want to be able to add paintings to my favourites so that I can check them out later.
-  **List favourites** As a user I want to list my favorite paintings so I can see all of them in one place.
- **Delete favourites** As a user I want to delete my favourites so that I can just see the paintings I still like.
- **Painting Details** As a user I want to click on a listed painting so that I can see a more detailed view of it and listen to an audio description.


## Backlog
- **Scan** As a visitor I want to learn more about the artwork in front of me by scanning it and getting its description.
- **Recs** As a user I want to see recommendations based on my favourites.
- **Collections** As a user I want to group my favourites into folders (collections), so I can classify and find them more easily.
- **Desktop version** As a user I want to access the app from a desktop so that I can see my favourites wherever I am.

# Client
## Routes
- `/`
  - HomePageComponent
  - Public
  - Displays current exhibitions
- `/me/paintings/:department`
- ExhibitionListComponent
- user is logged in
- Displays the list of paintings belonging to that exhibition.
- `/signup`
  - SignupPageComponent
  - anon only
  - signup form
   - link to login
  - navigate to homepage after signup
- `/login`
  - LoginPageComponent
  - anon only
  - login form
  - link to signup
  - navigate to homepage after login
- `/me/favs`
  - FavList Component
  - user only
  - shows all favs
- `*`
  - NotFoundPageComponent


## Components
- Login:
  - userForm component(email: email, password: password, button: button, onSubmit: function)
- Sign up:
  - userForm component(username: string, email: email, password: password, button: button, onSubmit: function)
- Navbar component (conditional render depending on logged in or anonymous user)
- Menu component
- ExhibitionList component (mapped array of exhibitions {image: string, artist: string, date: string, department: string}, button: button, onSubmit: function)
- favourites list:
  - FavList component (mapped array of favs {image: string, artist: string, date: string, department: string}, button: button, onSubmit: function)
  - PaintingCard component
  - HeartButton component

## Services
- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Paintings service
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
favs - Array [paintingId]

```
Paintings model
```
image - String
artist - String
date - String
department - String
country - String
description - String
audio - String
```

## Routes

| Method | Path | Description |
|--------|------|-------------|
| `get`  | `/auth/me` | check if i'm logged |
| `post` | `/auth/login` | login |
| `post` | `/auth/signup` | signup |
| `post` | `/auth/logut` | logout |
| `post`  | `/api/paintings/favs/:id` | private route for logged in user |
| `delete`  | `/api/paintings/favs/:id` | private route for logged in user |
| `get`  | `/api/paintings/favs` | private route for logged in user |
| `get`  | `/api/paintings` | private route for logged in user |


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
- PUT /api/paintings/favs/:id
 - user logged in check
  - body:
    - paintingId
  - validation
    - id is valid (404)
    - id exists (404)
  - add to favs if not there yet
  - updates user in session
- DELETE /api/paintings/favs/:id
-  user logged in check
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
  - remove from favs
  - updates user in session
- GET /api/paintings/favs
- user logged in check
  - get list
- GET /api/paintings
 - user logged in check
- get list of paintings belonging to that exhibition



## Links
[The Metropolitan Museum of Art Collection API] (https://metmuseum.github.io/)
[Google Vision API] (https://cloud.google.com/vision/)

## Kanban Board

## GitHub
[Frontend repo] (https://github.com/MarloMorgan/frame-frontend )
[Backend repo] (https://github.com/MarloMorgan/frame-backend)
[Try the deployed app] (https://frame-project-8946c.firebaseapp.com/)

## Slides
[Google Slides Presentation](https://docs.google.com/presentation/d/1-BbRsB9EjJGMANPDtiqsqX7PpIYiJnE2XuCOiiN72FE/edit?usp=sharing)







