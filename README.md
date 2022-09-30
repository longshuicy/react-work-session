# React Work Session

## Beginner
### Install Node and NPM
Download the installer based on your platform here: https://nodejs.org/en/. Note that ideally you install **Node V14**
and **NPM >= V5.6**

To see if your installation has succeeded, in your terminal run `node -v` and `npm -v`

### Install NPM
NPM is the world's largest software registry. Open source developers from every continent use npm to share and borrow 
packages, and many organizations use npm to manage private development as well. Go to https://www.npmjs.com/ to 
explore all the available packages

NPM comes with the Node installer. If you would like to **upgrade to the latest version** of npm, on the command line, 
run the following command: `npm install -g npm`

### Install NVM (OPTIONAL)
NVM allows you to quickly install and use different versions of node via the command line. For example:
```
$ nvm use 16
Now using node v16.9.1 (npm v7.21.1)

$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)
```

To install NVM, please follow the instruction here: https://github.com/nvm-sh/nvm#install--update-script

### Create React App
Create React App is a comfortable environment for learning React, and is the best way to start building a new 
single-page application in React. It sets up your development environment so that you can use the latest JavaScript 
features, provides a nice developer experience, and optimizes your app for production. You’ll need to have 
Node >= 14.0.0 and npm >= 5.6 on your machine. 

To create a project, run:
1. `npx create-react-app beginner` Note: you can change your project name by replacing the 
   `beginner` in the command. This will create a folder named `beginner` with all the needed content.
2. In your command line, enter that directory `cd beginner`
3. Start the app `npm start`. This will open a tab on your default browser at port 3000 http://localhost:3000.

![image](docs/create-react-app.png)

*If you are curious about what's npx: NPX stands for Node Package eXecute. It is an NPM package runner. 
It allows developers to execute any Javascript Package available on the NPM registry without even installing it. 
NPX is installed automatically with NPM version 5.2.0 and above.*

### Set Development Environment
