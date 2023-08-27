/*
 It will fetch all the data from the API TMDB token and return that data
*/
import axios from "axios";

/*
It is the base url for the tbdm database
*/
const BASE_URL = "https://api.themoviedb.org/3";
/*
getting the token from the .env file
*/
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN; 

/*
 creating the headers object and assing authorization the token
*/
const headers = {
    Authorization: "bearer "+
    TMDB_TOKEN,
};

/* 
(url --> is the url of the page we are getting from the app.js
params --> the optional parameters to be passed to the API
It is an async function that will not block other 
functions to execute as the fetching data from API is 
high cost

axios is a async function that will return Promise objects.

*/

export const fetchDataFromAPI = async (url,params) =>{
   try{
       const {data} = await axios.get(BASE_URL + url , {
        headers,
        params
       });
       return data;
   }
   catch (err){
        console.log(err);
    return err;
   }
}

