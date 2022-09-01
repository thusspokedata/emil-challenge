<p align="left">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a>
</p>

# Emil Challenge

<h2>This is my technicall challenge for Emil Group</h2>

<h4>The task was to built an app using <b>Typescript</b> and <b>Nestjs</b>, which was a real challenge as I didn't have experience with either of the two. My first impulse was to create the app in Typescript and Expressjs but I after some failed attempts I decided to start learning Nestjs and I loved it! Unfortunately there is not enough time to study the topic in depth, so my app is quite simple.
 Because of a lack of time I dind't have the chance of incorporating Logging and Authentication.</h4>
<h4>For this challenge I decided to use a <b>postgreSQL</b> docker image as a database.</h4> 
<br>
<hr>
<br>

<h3>To test the app, please follow the next steps:</h3>
<br>

1. Clone Project
2. install packages:

```bash
yarn install
```

3. rename ".env.template" file to ".env"

4. activate postgreSQL docker image:

```bash
docker-compose up -d
```

5. start the app:

```bash
yarn start:dev
```

<br>
<hr>
<br>

<h3>About the app</h3>
<br>
<p>This app is prepared to get and store data from a GPS Device.</p>
<p>It was made using Typescript, Nestjs, Docker-compose, and PostgreSQL</p>
<p>The app stores data as "uuid", "latitude", "longitude" and a "timestamp" in a PostgreSQL database. </p>

<br>
<hr>
<br>

<h3>You can use Postman or Insomnia to test the app</h3>
<br>

on postman, make a POST request to: <br>
<b>http://127.0.0.1:3000/api/geoservice</b>

```js
// Example:
{
    "latitude": 33.589886,
    "longitude": -7.603869
}
```

to see the stored data, make a GET request to the same link:<br>
<b>http://127.0.0.1:3000/api/geoservice</b>

<br>
<hr>
<br>

<h3>How I would continue having more time:</h3>
<br>
<p>- My understanding of docker was not enough to create the containerization of the app. I'm going to focus on solving this lack of knowledge</p>
<p>- I would do some testing. I was learning Vitest to perform testing. Now I need to start thinking about how to apply tests using Typescript.</p>
<br>
<p>What I can say is that this coding challenge changed the way of my future projects. I will start coding in Typescript and Nest will be my framework of choice for the next time. I think it is amazing!</p>
