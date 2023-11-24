
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { Portfolio } from '../Portfolio/Portfolio';
import { About } from '../About/about';
import { LoginArtist } from '../ArtistLogin/ArtistLogin';
import { MyDates } from '../MyDates/MyDates';
import { AllClients } from '../AllClients/AllClients';
import { AllAppointments } from '../AllAppointments/AllAppointments';
import { Appointments } from '../Appointments/appointments';
export const Body = () => {
     return (
         <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/loginworker" element={<LoginArtist />}/>
                <Route path="/mydates" element={<MyDates />}/>
                <Route path="/allcclients" element={<AllClients />}/>
                <Route path="/allappointments" element={<AllAppointments />}/>
                <Route path="/appointments" element={<Appointments />}/>


            </Routes>
         </>
     )
}