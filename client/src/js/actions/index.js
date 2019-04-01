import { LOAD_BUS_SCHEDULE } from  "../constants/action-types";

export function getBusSchedule() {
    return function(dispatch) {
        const uri = "http://localhost:5000/getService/83139";

        return fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch({ type: LOAD_BUS_SCHEDULE, payload: json})
            });
        }
}

export function getData() {
    const uri = "http://localhost:5000/getService/83139";
    fetch(uri)
        .then(response => console.log(response));
        
}
