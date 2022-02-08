import React from 'react';
import {Spinner} from "react-bootstrap";
import '../components_css/Loader.css';

function Loader() {
    return (
        <div className={"container"}>
            <div className={"row"} style={{height: "80vh"}}>
                <div className={"col d-flex align-items-center justify-content-center"}>
                    <Spinner animation="grow"/>
                </div>
            </div>
        </div>
    );
}


export default Loader;