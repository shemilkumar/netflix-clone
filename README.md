# **Netflix clone Using ReactJS**

## Step 1 : Generate API Key

We are using [TMDB](https://www.themoviedb.org/) service for API integration. So create a account in
[TMDB](https://www.themoviedb.org/).

After creating account, go to your profile and click settings. \
There you can see API. You can generate your own API key by clicking 'generate API'.

[click here](https://www.themoviedb.org/signup) for create an account in [TMDB](https://www.themoviedb.org/).


<br />

## Step 2 : Create constants.js file

Create a folder **Constants** in **src** and create **constants.js** file on it.<br /> <br />
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


#### To install nodejs use the following command in your terminal

### `sudo apt install nodejs`


#### To install npm use the following command

### `sudo apt install npm`

<br/>


<br />

## Step 4 : Run the Application

After opening the code folder in your development environment,<br/> open your terminal on your environment and run this command

### `npm start`
