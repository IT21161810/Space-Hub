import axios from 'axios'

class APIService {

    API_KEY = "3jQMjnxVQV8vaH1wlg3e2mtM13v7dAebMA4aekZd"

    getEarthImageryData(lon,lat,date,dim) {
        return axios.get('https://api.nasa.gov/planetary/earth/imagery' +
        `?lon=${lon}` +
        `&lat=${lat}` +
        `&date=${date}` +
        `&dim=${dim}` +
        `&api_key=${this.API_KEY}`)
    }

     getDailyMarsRoverData(earthDate){
        return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}&api_key=${this.API_KEY}`)
    }
    
    getAPOD() {
        return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`)
    }
}

export default new APIService()