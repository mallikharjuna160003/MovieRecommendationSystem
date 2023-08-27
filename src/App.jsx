import { useState,useEffect } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'

import { fetchDataFromAPI} from "./utils/api";
import { useSelector,useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeslice';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/pageNotFound";

function App() {

  const dispatch = useDispatch();
  /*
  useSelector():
  It will fetch the state of the component store.
  state: is the initial state of the store component.
  url: we are destructuring the state data.
  */
  const { url }  = useSelector((state)=>
  state.home);
  console.log(url);

  /*
  useEffect():
  this hook is called after the rendering the page.
  API calls related funtions present in this mostly
  fetApiConfig: for fetching api configuration
  */
  useEffect(() => {
    fetApiConfig();
  }, []);
  /*
    For dispatching the actions we are using the dispatch function.
    Here the action is the getApiConfiguration
    argument: res is the response object we get from the fetchDataFromAPI() function.
    */
  const fetApiConfig = () => {
    fetchDataFromAPI("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url));
    });
  };

  
  return (
   <BrowserRouter>
   <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App
