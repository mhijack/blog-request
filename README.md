### A mock blog post website

The project simulates the process of making 'GET', 'POST', 'DELETE' request to real API endpoint utilizing the Axios library.

- App initially fetches **"GET"** dummy blog data from <a href="https://jsonplaceholder.typicode.com">Json placeholder</a>
- Clicking on one of the blog post will fetch details about that blog post from api
- Each post's detail view will have a button that sends **"DELETE"** request upon clicking
- A **"POST"** request is sent once input field has been filled out

Note: "POST", "DELETE" requests are only demonstrations, the JSON placeholder accepts those requests but do not actually create or delete any posts in their data base.

****

"axios" functionality used:
- interceptors
- defaults configurations
- instances
- different request methods
- local error handling

****

Usage:

You must have npm installed on your local machine.

Create an empty directory and cd into it. Then execute the following commands in terminal:

`git clone https://github.com/mhijack/blog-request.git`

`cd blog-request`

`npm install`

`npm start`