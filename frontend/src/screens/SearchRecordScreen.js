import React, {useEffect, useState} from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {getRecordsAction, getRecordAction} from "../actions/clinicActions";
import {Form} from "react-bootstrap";
import RecordTable from "../components/RecordTable";
import {SEARCH_RECORD_RESET} from "../constants/clinicConstants";


function SearchRecordScreen() {
    const [animalsAndCustomers, setAnimalsAndCustomers] = useState([]);
    const [typeOfRecord, setTypeOfRecord] = useState("");

    const records = useSelector(state => state.getRecords);
    const {loading, recordsData, error} = records;

    const record = useSelector(state => state.getRecord);
    const {recordLoading, recordData, recordError} = record;


    const searchBarList = () => {
        const allRecors = recordsData;
        if (allRecors) {
            let searchList = [];
            for (let i = 0; i < allRecors.length; i++) {
                const animal_name = "Animal -> " + allRecors[i].name;
                const customer_name = "Customer -> " + allRecors[i].customer.first_name + " " + allRecors[i].customer.last_name
                searchList.push(animal_name);
                searchList.push(customer_name);
            }
            searchList = searchList.filter((item, index) => searchList.indexOf(item) === index);
            setAnimalsAndCustomers(searchList);
        }
    }

    const selectedRecordHandler = (selectedRecord) => {
        const splitedRecord = selectedRecord.split(" -> ");
        setTypeOfRecord(splitedRecord[0]);
        dispatch(getRecordAction(splitedRecord[1]));
    }

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({type: SEARCH_RECORD_RESET})
        dispatch(getRecordsAction());
    }, [])

    useEffect(() => {
        searchBarList();
    }, [recordsData])

    const formHandler = () => {
        let data;

        if (typeOfRecord === "Customer") {
            data = recordData[0];
        } else {
            data = recordData;
        }
        const customer = data[0].customer;
        try {
            return (
                <RecordTable data={data} customer={customer}/>
            );
        }catch(e){
            return;
        }
    }

    return (
        <div className={"container mt-5"}>
            {loading && <Loader/>}
            {recordLoading && <Loader/>}
            {error && <h5 className={"text-danger"}>{error}</h5>}
            {recordError && <h5 className={"text-danger"}>{recordError}</h5>}
            <h1>Search Animal or Customer Record</h1>
            <hr/>
            <div className={"row"}>
                <Form.Group controlId={"customer"} className={"mt-2"}>
                    <Form.Label>Search for Animal or Customer Name:</Form.Label>
                    <Typeahead
                        onChange={(selected) => {
                            if (selected[0] !== undefined) {
                                selectedRecordHandler(selected[0]);
                            }
                        }}
                        options={animalsAndCustomers}
                    />
                </Form.Group>
            </div>
            <div className={"row"}>
                {recordData && formHandler()}
            </div>
        </div>
    );
}


export default SearchRecordScreen;