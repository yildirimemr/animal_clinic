import React, {useState, useEffect} from 'react';
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions/staffActions";

function StaffLoginScreen({location, history}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split("=")[1] : "/";

    const staffLogin = useSelector(state => state.staffLogin);
    const {error, loading, staffInfo} = staffLogin;

    useEffect(() => {
        if (staffInfo) {
            history.push(redirect);
        }
    }, [history, staffInfo, redirect])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <hr/>
            {error && <h5 className={"text-danger"}>{error}</h5>}
            {loading && <Loader/>}

            <Form onSubmit={submitHandler}>

                <Form.Group controlId={"email"}>
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
                <Button type={"submit"} variant={"primary"} className={"mt-3"}>Sign In</Button>
            </Form>

        </FormContainer>
    );
}


export default StaffLoginScreen;