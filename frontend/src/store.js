import {createStore, combineReducers, applyMiddleware} from "redux";
import {staffLoginReducer, showStaffsReducer, createStaffReducer, deleteStaffReducer} from "./reducers/staffReducers";
import {
    getCustomersReducer,
    createRecordReducer,
    getRecordsReducer,
    getRecordReducer,
    getCustomerReducer,
    getAnimalReducer,
    editCustomerReducer,
    editAnimalReducer,
} from "./reducers/clinicReducers";
import thunk from "redux-thunk";


const reducer = combineReducers({
    staffLogin: staffLoginReducer,
    showStaffs: showStaffsReducer,
    createStaff: createStaffReducer,
    deleteStaff: deleteStaffReducer,
    getCustomers: getCustomersReducer,
    createRecord: createRecordReducer,
    getRecords: getRecordsReducer,
    getRecord: getRecordReducer,
    getCustomer: getCustomerReducer,
    getAnimal: getAnimalReducer,
    editCustomer: editCustomerReducer,
    editAnimal: editAnimalReducer,
});

const staffInfoFromStorage = localStorage.getItem("staffInfo") ?
    JSON.parse(localStorage.getItem("staffInfo")) : null;

const initialState = {
    staffLogin: {staffInfo: staffInfoFromStorage},
};

const middleWare = [thunk];

const store = createStore(reducer, initialState, applyMiddleware(...middleWare));

export default store;