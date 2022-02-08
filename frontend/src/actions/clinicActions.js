import {
    GET_CUSTOMERS_REQUEST,
    GET_CUSTOMERS_SUCCESS,
    GET_CUSTOMERS_FAIL,
    CREATE_RECORD_REQUEST,
    CREATE_RECORD_SUCCESS,
    CREATE_RECORD_FAIL,
    SEARCH_RECORD_REQUEST,
    SEARCH_RECORD_SUCCESS,
    SEARCH_RECORD_FAIL,
    GET_RECORD_REQUEST,
    GET_RECORD_SUCCESS,
    GET_RECORD_FAIL,
    GET_CUSTOMER_REQUEST,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAIL,
    GET_ANIMAL_REQUEST,
    GET_ANIMAL_SUCCESS,
    GET_ANIMAL_FAIL,
    EDIT_CUSTOMER_REQUEST,
    EDIT_CUSTOMER_SUCCESS,
    EDIT_CUSTOMER_FAIL,
    EDIT_ANIMAL_REQUEST,
    EDIT_ANIMAL_SUCCESS,
    EDIT_ANIMAL_FAIL,
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_FAIL,
    DELETE_ANIMAL_REQUEST,
    DELETE_ANIMAL_SUCCESS,
    DELETE_ANIMAL_FAIL,
} from "../constants/clinicConstants";
import axios from "axios";

export const getCustomersAction = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: GET_CUSTOMERS_REQUEST,
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

        const {data} = await axios.get(
            "/api/customers/",
            config
        )

        dispatch({
            type: GET_CUSTOMERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_CUSTOMERS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getCustomerAction = (pk) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_CUSTOMER_REQUEST,
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

        const {data} = await axios.get(
            `/api/customers/${pk}/`,
            config
        )
        dispatch({
            type: GET_CUSTOMER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_CUSTOMER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getAnimalAction = (pk) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_ANIMAL_REQUEST,
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

        const {data} = await axios.get(
            `/api/animals/${pk}/`,
            config
        )
        dispatch({
            type: GET_ANIMAL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_ANIMAL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const editCustomerAction = (pk, first_name, last_name, email,
                                   contactInformation, phoneNumber) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EDIT_CUSTOMER_REQUEST,
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

        const {data} = await axios.put(
            `/api/customers/change-attributes/${pk}/`,
            {
                "first_name": first_name,
                "last_name": last_name, "email": email, "contactInformation": contactInformation,
                "phoneNumber": phoneNumber
            },
            config
        )
        dispatch({
            type: EDIT_CUSTOMER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EDIT_CUSTOMER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const editAnimalAction = (pk, animal_name, animal_species, animal_genus, animal_age,
                                 animal_comment) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EDIT_ANIMAL_REQUEST,
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

        const {data} = await axios.put(
            `/api/animals/change-attributes/${pk}/`,
            {
                "name": animal_name, "species": animal_species, "genus": animal_genus, "age": animal_age,
                "comment": animal_comment
            },
            config
        )
        dispatch({
            type: EDIT_ANIMAL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EDIT_ANIMAL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const createRecordAction = (animal_name, animal_species, animal_genus, animal_age,
                                   animal_comment, first_name, last_name, email,
                                   contactInformation, phoneNumber) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_RECORD_REQUEST,
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
            "/api/animals/create/",
            {
                "animal_name": animal_name, "animal_species": animal_species, "animal_genus": animal_genus,
                "animal_age": animal_age, "animal_comment": animal_comment, "first_name": first_name,
                "last_name": last_name, "email": email, "contactInformation": contactInformation,
                "phoneNumber": phoneNumber
            },
            config
        )
        dispatch({
            type: CREATE_RECORD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_RECORD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getRecordsAction = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: SEARCH_RECORD_REQUEST,
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

        const {data} = await axios.get(
            "/api/animals/",
            config
        )

        dispatch({
            type: SEARCH_RECORD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SEARCH_RECORD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getRecordAction = (name) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_RECORD_REQUEST,
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

        const {data} = await axios.get(
            `/api/animals/search/${name}`,
            config
        )
        dispatch({
            type: GET_RECORD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_RECORD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const deleteCustomerAction = (pk) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_CUSTOMER_REQUEST,
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
            `/api/customers/delete/${pk}/`,
            config
        )
        dispatch({
            type: DELETE_CUSTOMER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELETE_CUSTOMER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const deleteAnimalAction = (pk) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_ANIMAL_REQUEST,
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
            `/api/animals/delete/${pk}/`,
            config
        )
        dispatch({
            type: DELETE_ANIMAL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELETE_ANIMAL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}