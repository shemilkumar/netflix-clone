# **Netflix clone Using ReactJS**

## Step 1 : Generate API Key

We are using [TMDB](https://www.themoviedb.org/) service for API integration. So create a account in
[TMDB](https://www.themoviedb.org/).

After creating account, go to your profile and click settings. \
There you can see API. You can generate your own API key by clicking 'generate API'.

<br> 
Fill the form with random details
<br>  
[click here](https://www.themoviedb.org/signup) to create an account in [TMDB](https://www.themoviedb.org/).


<br />

## Step 2 : Create constants.js file

Create a folder **Constants** in **src** folder and create **constants.js** file in it.<br /> <br />
Place these 3 lines of code in **constants.js**

```javascript
export const API_KEY = "<<Your API_KEY>>";
export const baseUrl = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/original";
```

Put your API_KEY instead of `"<<Your API_KEY>>"`

<br />


<br />

## Step 3 : Installing Node

_If you have already installed node ignore this step_

#### To install curl use the following command (if you have curl already, ignore this) 

### `sudo apt install curl`

#### To install nodejs LTS(v16.x) use the following two commands in your terminal

### `curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -`
### `sudo apt-get install -y nodejs`

<br/>


<br />

## Step 4 : Run the Application

After opening the downloaded source code folder in your development environment(VS code, Atom, etc),<br/> open your development environment's terminal and run this command for installing node modules

### `npm install`

#### For running the Application, run this command
### `npm start`
