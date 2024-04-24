import axios from 'axios'

class APIService {

    getMarsRoverData() {
        return axios.get('https://api.nasa.gov/neo/rest/v1/feed' +
         `?start_date=2015-09-07` +
         '&end_date=2015-09-08'+
         '&api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd')
    }

    getAPOD(){
        return axios.get('https://api.nasa.gov/planetary/apod?api_key=3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd')
    }
}

export default new APIService()