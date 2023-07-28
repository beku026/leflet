import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useEffect, useRef } from "react"; // Import useRef hook
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";

const LeafletRoutingMachine = () => {
  const [selectedRoute1, selectedRoute2, selectedRoute3] = useSelector((state) => state.selectedRoute);
  const map = useMap();
  const routingControlRef = useRef(null); 

  useEffect(() => {
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
    }

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(selectedRoute1),
        L.latLng(selectedRoute2),
        L.latLng(selectedRoute3),
      ],
      router: L.Routing.osrmv1({
        serviceUrl: 'http://router.project-osrm.org/route/v1/'
      }),
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim(),
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map);

    routingControlRef.current = routingControl; // Save the routing control instance in the ref

    return () => {
      // Cleanup function to remove the routing control when the component unmounts
      map.removeControl(routingControlRef.current);
    };
  }, [selectedRoute1, selectedRoute2, selectedRoute3, map]);

  return null;
};

export default LeafletRoutingMachine;
