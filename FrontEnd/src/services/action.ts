import * as superagent from "superagent";

import { typeOfFields } from "../components/tableView/TableView";

export const types = {
    REQUEST_DATA: 'REQUEST_DATA',
    RECEIVE_DATA: 'RECEIVE_DATA'
};

function requestData() {
    return {
        type: types.REQUEST_DATA,
    };
}

function receiveData(data: typeOfFields) {
    return {
        type: types.RECEIVE_DATA,
        data,
    };
}

export function fetchData() {
    const endpoint = "http://localhost:3001";
    return (dispatch) => {
      dispatch(requestData());
        return superagent.get(endpoint).end((err, res) => {
            dispatch(receiveData(JSON.parse(res.text)));
        });
    }
    
  }