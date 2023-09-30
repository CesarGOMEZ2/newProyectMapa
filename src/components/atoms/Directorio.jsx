

import styled from 'styled-components';
import { Link } from "react-router-dom";
const StileDirectorio  = styled.a`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #330B62;
`;
function Directorio({type,msg,direc}) {
    return(
        <>
        <Link to={direc}><StileDirectorio className={type}>{msg}</StileDirectorio></Link>
        </>
    );
} 
export default Directorio;