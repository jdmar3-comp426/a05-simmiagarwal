[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6487941&assignment_repo_type=AssignmentRepo)

# a05

For this assignment, you will want to copy your code from a04 into this new repository.
The completed a04 code is the starting point.

This is an optional/informational assignment intended to help you integrate some of the work from previous assignments in support of your final project. This assignment is ungraded.

The instructions are pretty simple.

The starter repo intentional has nothing in it. You should copy your completed a04 code into the new repo for a05.

## Forms and requests

The purpose of this assignment is to create an HTML form to add a user to your database. The form itself is simple. The actual interaction will happen in JS behind the scene.

The objectives are as follows:

1.  Create a form with the following fields:
    - user
    - pass
    - email
2.  Use XMLHttpRequest() or fetch() to send the information that a user inputs into that form to your database
3. Update your database script to handle email in records.

Everything you need to be able to do this is in the following MDN tutorial.

[Sending forms through JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript)

These may also be useful:

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [Fetch API and Form Data](https://arunrajeevan.medium.com/fetch-api-and-formdata-in-html-world-6b0322273260)
- [Fetching data from the server](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)

## Setup

There are some things that we have to do to be able to make all of this work. First, we need to gather some of our other files and put them in our new repository.

After you clone the a05 repo, initialize it as a Node package:

```
$ npm init
```

Once you have done that, take a look at the dependencies for a01 and a04. Then install them here.

```
$ npm install browser-sync better-sqlite3 express md5
```

In addition, we need another package to make our client and server run concurrently. It is called “concurrently.”

```
$ npm install concurrently
```

Once you have done that, add the following lines under “scripts” in `package.json`. You will also need a “proxy” link so that that your html can talk to the server backend without running into cross-origin resource sharing errors. There are other ways to make this work, but for the purposes of this demo, this should do the trick.

```
  "scripts": {
    "client": "npx browser-sync start -sw",
    "server": "node server.js",
    "start": "concurrently --kill-others 'npm run client' 'npm run server'"
  },
  "proxy": "http://localhost:8080",
```

Now we’re ready to make some changes to our existing files and write some new ones.

## Add a form script

You can use any technique you like to build a form and point it toward your API. There are several listed in the MDN tutorial listed above: [Sending forms through JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript).

The example for this assignment uses the FormData method with XMLHttpRequest.

## Update your index.html file

You will need to add a form and call the `form.js` script you’ve just written in order to make it work with the form.

Add a script tag in the `<head>` section and then put a form in the body somewhere.

There are other ways you can accomplish this as well.

You can also put the entire `form.js` script in the `<head>` section. Either way accomplishes the same thing.

## Update your database and server scripts to include email

You will finally need to update `database.js` so that when it sets up the database, it includes an email field as well as the others that are already built in.

## Test it

You should now be able to run your start script and it will start the backend server and also serve your website with the new form in it as the frontend. They should be able to talk to one another at this point.

```
npm run start
```
