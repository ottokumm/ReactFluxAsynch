import 'whatwg-fetch';
import AirportActionCreators from '../actions/AirportActionCreators';

let AirCheapAPI = {
    fetchAirports() {
        fetch('airports.json').then((response) => response.json()).then((responseData) => {
            AirportActionCreators.fetchAirportsSuccess(responseData);
        }).catch((error) => {
            AirportActionCreators.fetchAirportsError(responseData);
        });
    }
};

export default AirCheapAPI;