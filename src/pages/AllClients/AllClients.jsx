import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllClients } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { userData } from "../userSlice";
import { PrintClients } from "../../common/AllClientsTable/AllClientsTable";
import "./AllClients.css";


export const AllClients = () => {
  const navigate = useNavigate();
  const datosRdxUser = useSelector(userData);
  const [appointments, setAppointments] = useState([]);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (!datosRdxUser.credentials) {
      navigate("/");
    } else {
      console.log("mydates");
      const fetchData = async () => {
        try {
          console.log(datosRdxUser.credentials);
          const response = await getAllClients(datosRdxUser.credentials.token);
          console.log(response);
          if (isMounted) {
            setAppointments(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching appointments:", error);
        }
      };

      if (appointments.length === 0) {
        fetchData();
      }
    }

    return () => {
      setIsMounted(false);
    };
  }, [datosRdxUser, navigate, isMounted, appointments]);

  return (
    <div className="allClientsDesign">
      <h2>ALL CLIENTS</h2>
      <PrintClients appo={appointments} />
    </div>
  );
};