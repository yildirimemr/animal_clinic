import React, {useEffect, useState} from 'react';
import FormContainer from "../components/FormContainer";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getCustomersAction, createRecordAction} from "../actions/clinicActions";


import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Loader from "../components/Loader";


function CreateRecordScreen() {
    const [customer_firstName, setCustomer_fistName] = useState("");
    const [customer_lastName, setCustomer_lastName] = useState("");
    const [customer_email, setCustomer_email] = useState("");
    const [customer_contactInformation, setCustomer_contactInformation] = useState("");
    const [customer_phoneNumber, setCustomer_phoneNumber] = useState("");

    const [animal_name, setAnimal_name] = useState("");
    const [animal_species, setAnimal_species] = useState("");
    const [animal_genus, setAnimal_genus] = useState("");
    const [animal_age, setAnimal_age] = useState("");
    const [animal_comment, setAnimal_comment] = useState("");

    const [customerSelected, setCustomerSelected] = useState("");

    const dispatch = useDispatch()

    const customers = useSelector(state => state.getCustomers);
    const {error, loading, customersData} = customers;

    const record = useSelector(state => state.createRecord);
    const {recordLoading, recordMessage, recordError} = record;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getCustomersAction())
    }, [])


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createRecordAction(animal_name, animal_species, animal_genus, animal_age, animal_comment,
            customer_firstName, customer_lastName, customer_email, customer_contactInformation, customer_phoneNumber))
    }


    const customersName = () => {
        const customers = customersData;
        const customersName_list = []
        if (customers) {
            for (let i = 0; i < customers.length; i++) {
                const customer_fullName = customers[i].first_name + " " + customers[i].last_name
                customersName_list.push(customer_fullName)
            }
        }
        return customersName_list
    }

    const customerFormHandler = (customer) => {
        let first_name,last_name;
        try{
            first_name = customer.split(" ")[0];
            last_name = customer.split(" ")[1];
        }catch(e){
            return;
        }
        try{
            if (customersData) {
            const find_customer = customersData.find((element) => {
                if (element.first_name === first_name && element.last_name === last_name) return true;
            })
            setCustomer_fistName(find_customer.first_name);
            setCustomer_lastName(find_customer.last_name);
            setCustomer_email(find_customer.email);
            setCustomer_contactInformation(find_customer.contactInformation);
            setCustomer_phoneNumber(find_customer.phoneNumber);
        }
        }catch(e){
            return;
        }

    }

    useEffect(() => {
        customerFormHandler(customerSelected);
    }, [customerSelected])

    return (
        <div className={"container mt-5"}>
            {loading && <Loader/>}
            {recordLoading && <Loader/>}
            {error && <h5 className={"text-danger"}>{error}</h5>}
            {recordError && <h5 className={"text-danger"}>{recordError}</h5>}
            {recordMessage && <h3 className={"text-info"}>{recordMessage.message}</h3>}

            <Form onSubmit={submitHandler}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <h1>Create Animal Record</h1>
                        <hr/>

                        <Form.Group controlId={"animal_name"}>
                            <Form.Label>Animal Name*</Form.Label>
                            <Form.Control
                                required={true}
                                type={"name"}
                                placeholder={"Enter Animal Name"}
                                value={animal_name}
                                onChange={(e) => setAnimal_name(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId={"animal_species"} className={"mt-2"}>
                            <Form.Label>Animal Species</Form.Label>
                            <Form.Control
                                required={false}
                                type={"name"}
                                placeholder={"Enter Animal Species"}
                                value={animal_species}
                                onChange={(e) => setAnimal_species(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId={"animal_genus"} className={"mt-2"}>
                            <Form.Label>Animal Genus</Form.Label>
                            <Form.Control
                                required={false}
                                type={"name"}
                                placeholder={"Enter Animal Genus"}
                                value={animal_genus}
                                onChange={(e) => setAnimal_genus(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId={"animal_age"} className={"mt-2"}>
                            <Form.Label>Animal Age</Form.Label>
                            <Form.Control
                                required={false}
                                type={"name"}
                                placeholder={"Enter Animal Age"}
                                value={animal_age}
                                onChange={(e) => setAnimal_age(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId={"animal_comment"} className={"mt-2"}>
                            <Form.Label>Animal Comment</Form.Label>
                            <Form.Control
                                required={false}
                                type={"name"}
                                placeholder={"Enter Animal Comment"}
                                value={animal_comment}
                                onChange={(e) => setAnimal_comment(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId={"customer"} className={"mt-2"}>
                            <Form.Label>Customer</Form.Label>
                            <Typeahead
                                required={false}
                                type={"name"}
                                onChange={(selected) => {
                                    setCustomerSelected(selected[0]);
                                }}
                                options={customersName()}
                            />
                        </Form.Group>


                    </div>
                    <div className={"col-6"}>
                        <h1>Customer</h1>
                        <hr/>

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
                    {/*{customerSelected && customerForm()}*/}

                </div>
                <div className={"row"}>
                    <Button type={"submit"} variant={"primary"} className={"w-25 mx-auto mt-2"}>Submit</Button>
                </div>

            </Form>
        </div>
    )
        ;
}


export default CreateRecordScreen;