**Design**

This app is the frontend for pushing and popping values to a backend in memory database. Both applications have to be running in order to work locally.

**Versions**

Recommended you use nvm to get the appropriate versions

- node == 18.14.0
- npm == 9.6.1

**Run app locally**

`npm i` \
`npm run dev`

**Run app in a docker container**

`docker build -t <image_name> .` \
`docker run -dp <host_port>:5173 <image_name>`
