import {
    STAFF_LOGIN_REQUEST,
    STAFF_LOGIN_SUCCESS,
    STAFF_LOGIN_FAIL,
    STAFF_DELETE_REQUEST,
    STAFF_DELETE_SUCCESS,
    STAFF_DELETE_FAIL,
    STAFF_LOGOUT,
    STAFF_SHOW_REQUEST,
    STAFF_SHOW_SUCCESS,
    STAFF_SHOW_FAIL,
    CREATE_STAFF_REQUEST,
    CREATE_STAFF_SUCCESS,
    CREATE_STAFF_FAIL,
} from "../constants/staffConstants";
import axios from "axios";

export const showStaffsAction = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: STAFF_SHOW_REQUEST,
        })

        const {
            staffLogin: {staffInfo}
        } = getState()

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${staffInfo.token}`
            }
        }
        console.log("actions")
        const {data} = await axios.get(
            "/api/staffs/",
            config
        )

        dispatch({
            type: STAFF_SHOW_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: STAFF_SHOW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: STAFF_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        const {data} = await axios.post(
            "/api/staffs/login/",
            {"username": email, "password": password},
            config
        )

        dispatch({
            type: STAFF_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem("staffInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: STAFF_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("staffInfo");
    dispatch({
        type: STAFF_LOGOUT,
    })
}

export const createStaffAction = (first_name, last_name, email, password) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_STAFF_REQUEST,
        })

        const {
            staffLogin: {staffInfo}
        } = getState()

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${staffInfo.token}`
            }
        }

        const {data} = await axios.post(
            "/api/staffs/create/",
            {"first_name": first_name, "last_name": last_name, "email": email, "password": password},
            config
        )
        dispatch({
            type: CREATE_STAFF_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_STAFF_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const deleteStaffAction = (pk) => async (dispatch, getState) => {
    try {
        dispatch({
            type: STAFF_DELETE_REQUEST,
        })

        const {
            staffLogin: {staffInfo}
        } = getState()

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${staffInfo.token}`
            }
        }

        const {data} = await axios.delete(
            `/api/staffs/delete/${pk}`,
            config
        )
        dispatch({
            type: STAFF_DELETE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: STAFF_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

