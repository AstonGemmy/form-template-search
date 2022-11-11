# Form Template Search Interface

# Overview

This project is a simple React Js app that provides access to a large amount of form template data from a remote RESTful API.

##  Sample Template Data

```
[
  {
    "name": "Blood donation form template",
    "created": "2020-11-04T16:26:44.666569",
    "category": [‘Health’],
    "description": "Testing template",
    "link": "",
   },
  {
    "name": "Scholarship form template",
    "created": "2020-12-04T16:26:44.666569",
    "category": [‘Education’],
    "description": "Sample scholarship template",
    "link": "https://formpl.us",
   }
]
```

When the app is loaded initially, templates are fetched and stored for later use. This is necessary since having to fetch such large amount of data repeatedly would affect performance of the app.

##  Features

The app provides features that includes searching through retrieved form templates, filtering templates by category `[ All | Health | Education | E-commerce ]` and also sorting templates by `name` or `created` fields, existing on the template object in either `ascending` or `descending` order.

This app is designed to display a maximum of 12 templates per page. This feature addresses performance issues of having to render the large set of templates returned by the API.

##  Interactions

By default, a user will interact with templates belonging to `All` category. This means templates where the category field contains any of `[ Health | Education | E-commerce ]`.
Once category input field is set to value other than `All`, only templates from selected category will be available on display.

### Searching

Searching and sorting functionality is also performed across templates belonging to currently active category. Typing into the search input field will result in the following:
  1.  Filtering through currently active category templates objects to return templates whose `name` field matches entered search term or keyword.
  2.  Regeneration of template pages from resulting search results.
  3.  Re-rendering of search results.

### Filtering

Selecting a new category will result in the following actions:
  1.  Filtering through initially fetched templates to include those belonging to newly set category.
  2.  Regeneration of template pages from total template count of newly set actegory.
  3.  Re-rendering of filtered templates.

### Sorting

Note: Sorting is done by either using template name using `name` field or date using `created` field from the template object.

Selecting a new sort value will result in the following actions:
  1.  Reset of sort input field value other than the one selected.
  2.  If, the search field has a value, templates are filtered to accomodate existing search term and then the resulting list of templates is sorted in the order `ascending` or `descending` which was selected by the user. If there is no search value in search input field, a direct sorting is performed.
  3.  Regeneration of template pages to accomodate new sorting order.
  4.  Re-rendering of filtered templates.

# Tests

A total of 2 tests have been written to ensure the following:
  1.  That the title of the active category is displayed as the template card header.
  2.  That selecting a new category clears all other filters.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.