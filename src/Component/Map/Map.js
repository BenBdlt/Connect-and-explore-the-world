import React, {useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer } from 'react-leaflet';
import { auth, onAuthStateChanged } from "../../firebase";
import "./Map.css"

function Map() {

    const user = useAuthState(auth);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!user) navigate("/");
    //     if (user) navigate("/map");
    // }, []);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            navigate("/map");
        } else {
            
            navigate("/");
        }
    });

    return(
        <div className="map">
            <MapContainer center={[47.218372, -1.553621]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    )
    
}

export default Map;

