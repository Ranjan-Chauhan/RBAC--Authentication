I have made the Project RBAC(Role-Based Access Control) using technologies node js , Jsvascript, Express js, MongoDB and JWT(json-web-token).

It is complete backend for RBAC authentication. i have define three roles admin, user and moderator as instructed. 

Admin can access all the routes of "admin", "moderator" and "user", as well as Moderator can access only the routes of "moderator" and "user" and user can access only the routes of the "user". 

The authentication part is done by using JWT and the user can only the routes according to the role he selected during the registeration time.

To run this project use command - "npm run dev" 
