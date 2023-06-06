#  Alumni Job Status Tracker

## About The Project

The Alumni Job Status Tracker is an application designed to showcase the professional progress of alumni to new cohort members, offering them insights and expectations regarding job placements.

[![GitHub Pull Request](https://img.shields.io/github/issues-pr-closed/ggar46/alumnitracker)](https://github.com/ggar46/alumnitracker/pulls)
[![GitHub repo size](https://img.shields.io/github/repo-size/ggar46/alumnitracker)](https://github.com/ggar46/alumnitracker/)
[![GitHub contributors](https://img.shields.io/github/contributors/ggar46/alumnitracker)](https://github.com/ggar46/alumnitracker/)

## Table of Contents

- [Built With](#Built-With)
- [Installation](#installation)
- [User Flow](#User-Flow)
- [Contact Information](#Contact-Information)
- [Acknowledgements](#acknowledgements)

## Built With 

- **Front-end**: The front-end of the application is built using HTML, CSS, and JavaScript.

- **Back-end**: The back-end is developed using Node.js to handle form submissions, data storage, and retrieval. PostreSQL is utilized to store alumni information securely.

- **Frameworks and Libraries**: The application leverages frameworks and libraries such as React, Express, and Bootstrap to enhance development efficiency and improve user experience.

<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
    <td align="center" width="96">
        <img src="https://pbs.twimg.com/profile_images/1337188620222906368/oNKK_fVe_400x400.jpg" width="48" height="48" alt="Render" />
      <br>Render
    </td>
  </tr>
</table>


## Installation

```bash
git clone https://github.com/ggar46/alumnitracker.git
```
Access project repo

```bash
cd alumnitracker
```
Remove owner git from the main directory using

```bash
rm -rf .git
```

While still within the main directory in your terminal, run the command git init to start your own git 

```bash
git init
```

Access server.js file and install dependencies.

```bash
cd server
npm install
```
Create a `.env` file in your server file and enter your Auth0 credential.

```bash
cd server
touch .env
```
Restore the Postgres Database file in the project by running the following command to restore the database file the project already contains

```bash
psql -d alumnitracker -f db.sql
```

Open another terminal then cd into the client, install dependencies

```bash
cd client
npm install
```

Start the browser

```bash
npm start
```
Note:
Server runs on http://localhost:8080 and client on http://localhost:5173 


## User Flow

1. Navigate to "New Alumni Job Status" form

2. Fill out the provided form with the following information

3. Click "submit" to save job status information

4. If an edit is needed, navigate to the "edit" icon in each card and click

5. The form should display saved alumni information. Make changes and click "Update" to save changes


