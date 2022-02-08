import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/Loader";
import {Button, Form} from "react-bootstrap";
import {getAnimalAction, editAnimalAction} from "../actions/clinicActions";
import FormContainer from "../components/FormContainer";

function AnimalDetailScreen() {
    const [animal_name, setAnimal_name] = useState("");
    const [animal_species, setAnimal_species] = useState("");
    const [animal_genus, setAnimal_genus] = useState("");
    const [animal_age, setAnimal_age] = useState("");
    const [animal_comment, setAnimal_comment] = useState("");

    const dispatch = useDispatch()

    const animal = useSelector(state => state.getAnimal);
    const {error, loading, animalData} = animal;

    const edit = useSelector(state => state.editAnimal);
    const {editLoading, editMessage} = edit;

    const pk = window.location.pathname.split("/")[2];
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getAnimalAction(pk));
    }, [])

    useEffect(() => {
        if (animalData) {
            setAnimal_name(animalData.name);
            setAnimal_species(animalData.species);
            setAnimal_genus(animalData.genus);
            setAnimal_age(animalData.age);
            setAnimal_comment(animalData.comment);
        }
    }, [animalData])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editAnimalAction(pk, animal_name, animal_species, animal_genus, animal_age, animal_comment))
    }
    return (
        <FormContainer>
            {loading && <Loader/>}
            {editLoading && <Loader/>}
            {error && <h5 className={"text-danger"}>{error}</h5>}
            <h1>Animal Details</h1>
            <hr/>
            {editMessage && <h3 className={"text-info"}>{editMessage.message}</h3>}
            <Form onSubmit={submitHandler}>
                <div className={"row"}>
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
                </div>
                <div className={"row"}>
                    <Button type={"submit"} variant={"primary"} className={"w-25 mx-auto mt-2"}>Submit</Button>
                </div>
            </Form>
        </FormContainer>
    );
}


export default AnimalDetailScreen;