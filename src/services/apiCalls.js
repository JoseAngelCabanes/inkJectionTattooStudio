import axios from 'axios';

export const logUser = async (body) => {

    return await axios.post(`http://localhost:3000/client/login`, body);
}

export const logArtist = async (body) => {

    return await axios.post(`http://localhost:3000/artist/login`, body);
}

export const registerUser = async (body) => {

    return await axios.post(`http://localhost:3000/client/register`, body);
}

export const bringTattoo = async () => {

    return await axios.get(`http://localhost:3000/portfolio/all`);
}

export const bringProfile = async () => {

    return await axios.get(`https://localhost:3000/client/profile`);
}

export const bringArtistProfile = async () => {

    return await axios.get(`https://localhost:3000/artist/profile`);
}

export const myDates = async (credentials) => {
    console.log("token", credentials);
    return await axios.get('http://localhost:3000/client/appointment/', {
      headers: { Authorization: `Bearer ${credentials}` }})
    }

export const deleteMyDates = async (credentials) => {
    return await axios.delete('http://localhost:3000/appoiments/delete', {
        headers: { Authorization: `Bearer ${credentials}` }})
    }

export const getAllClients = async (credentials) => {
    return await axios.get('http://localhost:3000/artist/clients', {
        headers: { Authorization: `Bearer ${credentials}` }})
    }

export const getAllAppointments = async (credentials) => {
    return await axios.get('http://localhost:3000/artist/appointment', {
         headers: { Authorization: `Bearer ${credentials}` }})
    }

export const appointments = async (token, appointmentData) => {
    return await axios.post("http://localhost:3000/appoiments/create", appointmentData,
        {
        headers: { Authorization: `Bearer ${token}` },
        }
    );
};