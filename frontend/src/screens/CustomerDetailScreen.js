import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/Loader";
import {Button, Form} from "react-bootstrap";
import {getCustomerAction, editCustomerAction} from "../actions/clinicActions";
import FormContainer from "../components/FormContainer";


function CustomerDetailScreen() {
    const [customer_firstName, setCustomer_fistName] = useState("");
    const [customer_lastName, setCustomer_lastName] = useState("");
    const [customer_email, setCustomer_email] = useState("");
    const [customer_contactInformation, setCustomer_contactInformation] = useState("");
    const [customer_phoneNumber, setCustomer_phoneNumber] = useState("");

    const dispatch = useDispatch()

    const customer = useSelector(state => state.getCustomer);
    const {error, loading, customerData} = customer;

    const edit = useSelector(state => state.editCustomer);
    const {editLoading, editMessage} = edit;

    const pk = window.location.pathname.split("/")[2];
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getCustomerAction(pk));
    }, [])

    useEffect(() => {
        if (customerData) {
            setCustomer_fistName(customerData.first_name);
            setCustomer_lastName(customerData.last_name);
            setCustomer_email(customerData.email);
            setCustomer_contactInformation(customerData.contactInformation);
            setCustomer_phoneNumber(customerData.phoneNumber);
        }
    }, [customerData])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editCustomerAction(pk, customer_firstName, customer_lastName,
            customer_email, customer_contactInformation, customer_phoneNumber))
    }

    return (
        <FormContainer>
            {loading && <Loader/>}
            {editLoading && <Loader/>}
            {error && <h5 className={"text-danger"}>{error}</h5>}
            <h1>Customer Details</h1>
            <hr/>
            {editMessage && <h3 className={"text-info"}>{editMessage.message}</h3>}
            <Form onSubmit={submitHandler}>
                <div className={"row"}>
                    <Form.Group controlId={"customer_firstName"}>
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control
                            required={true}
                            type={"name"}
                            placeholder={"Enter Custumer First Name"}
                            value={customer_firstName}
                            onChange={(e) => setCustomer_fistName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId={"customer_lastName"} className={"mt-2"}>
                        <Form.Label>Last Name*</Form.Label>
                        <Form.Control
                            required={true}
                            type={"name"}
                            placeholder={"Customer Last Name"}
                            value={customer_lastName}
                            onChange={(e) => setCustomer_lastName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId={"customer_email"} className={"mt-2"}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required={false}
                            type={"name"}
                            placeholder={"Enter Animal Genus"}
                            value={customer_email}
                            onChange={(e) => setCustomer_email(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId={"customer_contactInformation"} className={"mt-2"}>
                        <Form.Label>Contact Information</Form.Label>
                        <Form.Control
                            required={false}
                            type={"name"}
                            placeholder={"Enter Customer Contact Information"}
                            value={customer_contactInformation}
                            onChange={(e) => setCustomer_contactInformation(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId={"customer_phoneNumber"} className={"mt-2"}>
                        <Form.Label>Phone Number*</Form.Label>
                        <Form.Control
                            required={true}
                            type={"name"}
                            placeholder={"Enter Customer Phone Number"}
                            value={customer_phoneNumber}
                            onChange={(e) => setCustomer_phoneNumber(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </div>
                <div className={"row"}>
                    <Button type={"submit"} variant={"primary"} className={"w-25 mx-auto mt-2"}>Submit</Button>
                </div>
            </Form>
        </FormContainer>
    );
}


export default CustomerDetailScreen;