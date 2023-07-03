import styled from "styled-components";
import FieldNews from "./FieldNews";
import NavBar from "../container";
import { useParams } from "react-router-dom";

const Search = () => {
    const {field} = useParams();
   
    return (
        <>
            <Container >
                <FieldNews field={field}/>
            </Container>
        </>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    padding: 20px;
`;

export default Search;