import React, {useState} from 'react';
import {LinkContainer} from "react-router-bootstrap";
import {deleteCustomerAction, deleteAnimalAction} from "../actions/clinicActions";
import {useDispatch, useSelector} from "react-redux";


import "../components_css/RecordTable.css"
import {Link} from "react-router-dom";


function RecordTable({data, customer}) {
    const [message, setMessage] = useState("");

    const staff = useSelector(state => state.staffLogin);
    const {staffInfo} = staff;


    const dispatch = useDispatch()

    const deleteCustomer = (pk) => {
        if (!staffInfo.isAdmin) {
            setMessage("Only admin can delete a record.")
            return
        }
        dispatch(deleteCustomerAction(pk));
        window.location.reload();
    }

    const deleteAnimal = (pk) => {
        if (!staffInfo.isAdmin) {
            setMessage("Only admin can delete a record.")
            return
        }
        dispatch(deleteAnimalAction(pk));
        window.location.reload();
    }
    try {
        return (
            <div className={"table-responsive text-center mt-3"}>
                {message && <h2 className={"text-danger"}>{message}</h2>}
                <table className={"table table-secondary"}>
                    <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact Information</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td><Link to={`/customer/${customer.id}/`}>{customer.first_name}</Link></td>
                        <td>{customer.last_name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.contactInformation}</td>
                        <td>{customer.phoneNumber}</td>
                        <td>{<button className={"btn btn-danger"} onClick={() => {
                            deleteCustomer(customer.id)
                        }}><i className="fas fa-times"></i></button>}</td>
                    </tr>

                    <tr>
                        <td colSpan="6">
                            <div className={"table-responsive mx-5"}>
                                <table className={"table table-hover"}>
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Animal Name</th>
                                        <th scope="col">Animal Species</th>
                                        <th scope="col">Animal Genus</th>
                                        <th scope="col">Animal Age</th>
                                        <th scope="col">Animal Comment</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((element, index) => (

                                        <tr key={element.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td><Link to={`/animal/${element.id}/`}>{element.name}</Link></td>
                                            <td>{element.species}</td>
                                            <td>{element.genus}</td>
                                            <td>{element.age}</td>
                                            <td>{element.comment}</td>
                                            <td>{<button className={"btn btn-danger"} onClick={() => {
                                                deleteAnimal(element.id)
                                            }}><i className="fas fa-times"></i></button>}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    } catch (e) {
        return(window.location.reload());
    }

}


export default RecordTable;