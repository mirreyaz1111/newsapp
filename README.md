# Running the News App with Docker

## Install docker from docker website

https://docs.docker.com/desktop/
Mac: https://docs.docker.com/desktop/setup/install/mac-install/
Windows: https://docs.docker.com/desktop/setup/install/windows-install/


### make sure the docker is up and running

## Steps to Run

### 1. Clone the github repo

`git clone https://github.com/mirreyaz1111/newsapp.git`

### 2. Build the Container

`docker build -t react-app:dev .`

### 3. Run the container

`docker run -p 3000:3000 react-app:dev`

### Once the container is running, open your browser and go to:

`http://localhost:3000`


### Live Demo url

`https://mirreyaz1111.github.io/newsapp/`