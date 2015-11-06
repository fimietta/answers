# Answers
A **search engine** for answers.

The idea behind is to create a web app that gives the user the following options:

- to create new answers
- to search for an answer
- to make comments
- to list all answers
- to list an answer
- to upload files

You can see an online version here: http://www.fimietta.it/answers/index.html


This app is a single page application, it has been developed using Backbone.js as framework.

## Dashboard

The app has a main **dashboard**.

This contains:

- a search box
- a list showing the most recent answers inserted into the system
- a list showing the most searched answers by any given user

Under search box, under the search input contains two links:

- show all answers
- create new answer

API structure:

- search response: [{title, description, uri}, {}, ....]
- most searched: [{title, description, uri}, {}, ....]
- newest answers: [{title, description, uri}, {}, ....]

## Search

When a user **starts typing** into the search input, *suggestions* will be presented.

When the user types into the search input a request is made to the server and the servers via API returns a response. The response contains a list of answers each answer having at least a title, brief description and URI.

Once the suggestions are made available, the user *can click* on any title and by doing so, **load the content** of an answer.

## Answer Detail Page

The answer detail page has the following components:

- Answer's title
- Answer's content (the answer to the question)
- A list of all attachments.
- Who created the answer.
- When the answer was created
- All comments made

The comments section has the following structure:

- comment text
- created by
- created at
- list of attachments

The comment itself is a RESTful resource.

What else the page has is:

- a create comment (with the option to upload files) form
- a link which on click will load the create comment form inside a modal

API response structure:
{title, content, createdBy, createdAt, files: [{fileName, fileURI}, {}, ....], comments:[{text, createdBy, createdAt, files:
[{fileName, fileURI}, {}, ....]}, {}, ....]}


## Create a new answer

To create a new answer the user should click on the create answer link. Once this happens, a create answer form is opened inside a modal.

The form has the following components:

- title
- content
- the option to upload files

When the user click on the save button, the modal will offer the following options:

- create new question
- close modal
- go the the just created answer

## Create a new comment

The link for adding a new comment to an answer is located on the right side where the comments section starts inside the answer page.

When the user clicks on that link a modal is opened asking the following informations: 

- content of the comment
- list of the files to upload


## Show all answers page

The previous page shows the list of all answers.
It uses jQuery DataTables.

The table has for columns:

- title
- created by
- created ad
- total number of comments


## In the project directory, launch to install dependencies:

    npm install
    bower install
    

### Test
You have to install also the dependencies in the test folder

cd test
bower install

## Run

grunt server

## Test

grunt serve:test
