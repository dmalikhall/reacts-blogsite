// https://my-reacts-blog-api.herokuapp.com/blogs
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import { blogs_url as url } from './api/reacts-blog-api';
import axios from 'axios'


const AppContext = React.createContext();

const initialState = {
    allBlogs: [],
    // filteredBlogs: [],
    architectureBlogs: [],
    designBlogs: [],
    urbanismBlogs: [],
    ecobuildingBlogs: [],

    products_loading: false,
    products_error: false,

}

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchBlogs = async (url) => {
        dispatch({ type: 'GET_PRODUCTS_BEGIN' })
        try {
            const response = await axios.get(url)
            const blogs = response.data

            dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: blogs })
        } catch (error) {
            dispatch({ type: 'GET_PRODUCTS_ERROR' })

        }
    }

    useEffect(() => {
        fetchBlogs(url)
    }, [])


    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}