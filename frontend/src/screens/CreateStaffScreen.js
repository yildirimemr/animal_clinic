import React, {useEffect, useState} from 'react';
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {createStaffAction} from "../actions/staffActions";

function CreateStaffScreen() {
    const [first_name, set_first_name] = useState("");
    const [last_name, set_last_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");

    const dispatch = useDispatch()

    const staff = useSelector(state => state.createStaff);
    const {error, loading, data} = staff;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordMessage("Passwords do not match.")
        } else {
            dispatch(createStaffAction(first_name, last_name, email, password));
        }
    }

    return (
        <FormContainer>
            <h1>Create Staff</h1>
            <hr/>
            {error && <h5 className={"text-danger"}>{error}</h5>}
            {passwordMessage && <h5 className={"text-danger"}>{passwordMessage}</h5>}
            {loading && <Loader/>}
            {data && <h3 className={"text-center"}>{data.message}</h3>}

            <Form onSubmit={submitHandler}>

                <Form.Group controlId={"first_name"}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        required={true}
                        type={"name"}
                        placeholder={"Enter First Name"}
                        value={first_name}
                        onChange={(e) => set_first_name(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId={"last_name"} className={"mt-3"}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        required={true}
                        type={"name"}
                        placeholder={"Enter Last Name"}
                        value={last_name}
                        onChange={(e) => set_last_name(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId={"email"} className={"mt-3"}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required={true}
                        type={"email"}
                        placeholder={"Enter Email Address"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId={"password"} className={"mt-3"}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required={true}
                        type={"password"}
                        placeholder={"Enter Password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId={"passwordConfirm"} className={"mt-3"}>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required={true}
                        type={"password"}
                        placeholder={"Enter Confirm Password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type={"submit"} variant={"primary"} className={"mt-3"}>Submit</Button>
            </Form>
        </FormContainer>
    );
}


export default CreateStaffScreen;