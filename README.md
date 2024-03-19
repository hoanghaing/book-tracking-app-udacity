# Udacity: MyReads - A Book tracking app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
Which also a part of Udacity React Nano Degree.
This project contain 2 page: 
* Main page which listed all user's book, categorized by 4 shelf: Currently Reading, Want To Read, Read and None.
* Search page for searching new book to add into your shelf.
## Setting and running project.
In the project directory, you can run:
### `npm install`
To install all necessary package to run this project
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### What You're Getting
```bash
├── README.md - Project desciption and guiline.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    │   └── check.svg
    ├── components # Helpful component that break your project into smaller piece
    │   ├── MainPage.js
    │   ├── ...
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    └── BooksAPI.js # Contains API for this project.
```
## Backend Server
To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
To learn Tailwind, check out the [Tailwind Documentation](https://tailwindcss.com/).
To learn more about Udacity React Nano degree: [See Udacity Course](https://www.udacity.com/enrollment/nd019/8.0.4).
To find useful boilerplate for this project: [Sample](https://github.com/udacity/nd0191-c1-myreads/).
## Contributing
This repository is the student's exercise project code. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](https://github.com/udacity/nd0191-c1-myreads/blob/main/README.md).

