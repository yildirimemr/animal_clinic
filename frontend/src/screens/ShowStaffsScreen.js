import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showStaffsAction, deleteStaffAction} from "../actions/staffActions";
import Loader from "../components/Loader";


function ShowStaffsScreen() {
    const dispatch = useDispatch();

    const all_staffs = useSelector(state => state.showStaffs);
    const {error, loading, staffs} = all_staffs;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(showStaffsAction());
    }, [])

    const deleteStaff = (e) => {
        dispatch(deleteStaffAction(e));
        window.location.reload();
    }

    return (
        <div className={"container mt-5"}>
            <div className={"row text-center"}>
                {error && <h5 className={"text-danger"}>{error}</h5>}
                {loading && <Loader/>}
            </div>
            <div className={"row text-center"}>
                <div className={"table-responsive"}>
                    {staffs &&
                    <table className={"table table-striped table-hover"}>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Join Date</th>
                            <th scope="col">Last Login</th>
                            <th scope="col">Admin</th>
                            <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {staffs.map((staff, index) => (
                            <tr key={staff.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{staff.full_name}</td>
                                <td>{staff.email}</td>
                                <td>{new Date(staff.date_joined).toLocaleDateString()}</td>
                                <td>{new Date(staff.last_login).toLocaleDateString()}</td>
                                <td>{staff.isAdmin ? <i className="fas fa-check"></i> :
                                    <i className="fas fa-times"></i>}</td>
                                <td>
                                    {staff.isAdmin !== true && <button className={"btn btn-danger"} onClick={() => {
                                        deleteStaff(staff.id)}}><i className="fas fa-times"></i></button>}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        </div>
    );
}


export default ShowStaffsScreen;