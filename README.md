**Design**
This app is the front end for pushing and popping values to a backend in memory database. Both applications have to be running in order to work locally.

**Run app locally**
`npm i`
`npm run dev`

**Run app in a docker container**
`docker build -t <image_name> .`
`docker run -dp <host_port>:5174 <image_name>`
