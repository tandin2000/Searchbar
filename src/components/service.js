import axios from 'axios';

const API_URL = "http://54.254.80.25/api/";

const search = (query, num_results, model_type) => {
    const data = axios.post(API_URL + "getsearchresults", {
        query,
        num_results,
        model_type
    });
    return data;
};

export default{
    search,
}