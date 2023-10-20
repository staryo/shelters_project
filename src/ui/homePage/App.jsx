import React, {useEffect} from "react";
import "../styles.css";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import ShelterApi from "../../api/ShelterApi.js";


function App() {
    const [sheltersArray, updateSheltersArray] = React.useState([]);
    const fetcher = new ShelterApi();

    useEffect(() => {
        fetcher.getShelters(updateSheltersArray);
    }, []);


    return (
        <>
            <div className="row w-100 mb-sm-3 mb-2">
                <div className="col">
                    <div className="p-3 rounded-2 box border">
                        <MapContainer id="map" center={[31.8944, 34.8115]} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png"
                                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                // url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                            />
                            {
                                sheltersArray.map((shelter) => {
                                    return (
                                        <Marker key={shelter.id} position={[shelter.Lat, shelter.Lng]}>
                                            <Popup>
                                                <b>Address</b>: {shelter.address}
                                                <br />
                                                <b>Type</b>: {shelter.type}
                                                <br />
                                                <b>Status</b>: {shelter.status}
                                            </Popup>
                                        </Marker>
                                    );
                                })
                            }
                        </MapContainer>
                    </div>
                </div>
            </div>

        </>
    );
}

export default App;
