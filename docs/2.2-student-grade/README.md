# Grades Control API

## Install and Run
1. Go to project folder
2. Run command on terminal to install packages`npm install`
3. Run application `npm start`

## Objectives
Create a backend application for students control grades a course.

## To exercise some concepts as:
* Node.js and
* Express
* Create endpoints

## Featured required

  

## Attributes

| Grade  | 
| ------------------- | 
|Id(integer)
|student (string)
|subject (string)
|type (string):
|value (float)  
|timestamp (string) 

## Methods and functions

* **Create (POST /grades):**` http://localhost:3000/grades`
  * Send 'student', 'subject', 'type' and 'value' on body request.
  * The POST method must create unique ID and timestamp before saving in to JSON database file.
  * The object created will return a response.
```
{
"student": "Roberto Achar",
"subject": "01 - JavaScript",
"type": "Desafio",
"value": 56
}
```

* **Update (PUT /grades/:id):**  ` http://localhost:3000/grades`
  * Give 'id' grade on request body, if 'id' grade exists, It will update and show data grade. If not, an error must be returned (404).
  * Send 'id, 'student', 'subject', 'type' and 'value' on body request.
```
{
"id": 52,
"student": "Roberto Achar",
"subject": "01 - JavaScript",
"type": "Desafio",
"value": 56
}
```
* **Delete (DELETE /grades/:id):**  `http://localhost:3000/gradesControl/40`
  * Give 'id' grade in URL, if 'id' grade exists, delete from JSON database file. If not exists, an error must be returned (404).

* **Read (GET /grades/:id)**: ` http://localhost:3000/grades/42`
  * Give 'id' grade in URL, if 'id' grade exists, return grade information on response. if not exists, an error must be returned (404).

* **Read (GET /student):**  `localhost:3000/student/`
  * Give 'student' and 'subject' on body request, if exists, return a sum of all activities. If not exist, an error must be returned (404).

* **Read (GET /subject/average):**  `localhost:3000/subject/average`
  * Give 'subject' and 'type' grade on body request, if exists, return a average grade on response. If not exist, an error must be returned (404).

* **Read (GET /subject/top3):**  `localhost:3000/subject/top3`
  * Give 'subject' and 'type' on body request, if exists, return array with top 3 best grades. If not exist, an error must be returned (404).

## Development Tips

* **Date format class :**
 ```javascript
new Date().toISOString
```