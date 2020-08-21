import { types } from './action';
import { typeOfFields } from '../components/tableView/TableView';

type ReceiveDataState = {
    isLoadingData: boolean;
    receivedData: Array<typeOfFields>;
  }
  
  const initialState: ReceiveDataState = {
    isLoadingData: false,
    receivedData: [],
  };

function ReceiveDataReducer(state: ReceiveDataState = initialState, action) {
    switch (action.type) {
        case types.REQUEST_DATA:
        return {
            ...state,
            isLoadingData: true,
            receivedData: [],
        };
        case types.RECEIVE_DATA:
        return {
            ...state,
            isLoadingData: false,
            receivedData: action.data,
        };
        default:
        return state;
    }
}

export default ReceiveDataReducer;