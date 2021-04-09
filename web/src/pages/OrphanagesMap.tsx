import mapMarketing from '../images/map-marker.svg';
import {Link} from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanage-map.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={ mapMarketing } alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>
                <footer>
                    <strong>Manaus</strong>
                    <span>Amazonas</span>
                </footer>
            </aside>
            <MapContainer center={[-39.3660785,-9.3784199]} zoom={15} style={{width: '100%', height:'100%'}} >
             <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
            <Link to="" className="create-orphanage">
                <FiPlus size="32" color="#fff"/>
            </Link>

        </div>
    );

}

export default OrphanagesMap;