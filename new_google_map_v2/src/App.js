import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import "./styles.css";

export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBC5EcGadNT383cmuUgw0Xq27a40U_3CQI" // Add your API key
  });

  return isLoaded ? <Map /> : null;
}
