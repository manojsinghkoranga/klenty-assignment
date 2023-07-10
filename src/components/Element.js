import styled from "styled-components";
import FieldNews from "./FieldNews";

const Element = (props) => {
    return (
        <>
            <Container >
                <FieldNews field={props.field}/>
            </Container>
        </>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    padding: 20px;
`;

export default Element;