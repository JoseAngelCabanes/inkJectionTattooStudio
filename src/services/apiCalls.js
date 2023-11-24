import axios from 'axios';

export const logUser = async (body) => {

    return await axios.post(`http://localhost:5050/client/login`, body);
}

export const logArtist = async (body) => {

    return await axios.post(`http://localhost:5050/tattoo_artist/login`, body);
}

export const registerUser = async (body) => {

    return await axios.post(`http://localhost:5050/client/register`, body);
}

export const bringTattoo = async () => {

    return await axios.get(`http://localhost:5050/portfolio/all`);
}

export const bringProfile = async () => {

    return await axios.get(`https://localhost:5050/client/profile`);
}

export const bringArtistProfile = async () => {

    return await axios.get(`https://localhost:5050/tattoo_artist/profile`);
}

export const myDates = async (credentials) => {
    console.log("token", credentials);
    return await axios.get('http://localhost:5050/client/appointment/', {
      headers: { Authorization: `Bearer ${credentials}` }})
    }

export const deleteMyDates = async (credentials) => {
    return await axios.delete('http://localhost:5050/appoiments/delete', {
        headers: { Authorization: `Bearer ${credentials}` }})
    }

export const getAllCustomers = async (credentials) => {
    return await axios.get('http://localhost:5050/tattoo_artist/clients', {
        headers: { Authorization: `Bearer ${credentials}` }})
    }

export const getAllAppointments = async (credentials) => {
    return await axios.get('http://localhost:5050/tattoo_artist/appointment', {
         headers: { Authorization: `Bearer ${credentials}` }})
    }

export const appointments = async (token, appointmentData) => {
    return await axios.post("http://localhost:5050/appoiments/create", appointmentData,
        {
        headers: { Authorization: `Bearer ${token}` },
        }
    );
};