import React from 'react';
import {useHistory} from "react-router-dom";


function HomepageScreen() {
    let history = useHistory();

    return (
        <div className={"container mt-5"}>
                <div className={"row w-25 p-5 mx-auto text-center"}>
                    <button className={"btn btn-primary"} onClick={() => {
                        history.push("/create-new-record/")
                    }}>Create New Record
                    </button>
                </div>
                <div className={"row w-25 p-5 mx-auto text-center"}>
                    <button className={"btn btn-primary"} onClick={() => {
                        history.push("/search-record/")
                    }}>Search Record
                    </button>
                </div>
        </div>
    );
}


export default HomepageScreen;