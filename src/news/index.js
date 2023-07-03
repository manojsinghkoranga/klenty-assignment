import { useState } from "react";
import styled from "styled-components";

const News = (props) => {
    const [image, setImage] = useState(false);

    function checkImage(url) {
        if(url === null){
          return new Promise((resolve) => {
            resolve(false);
          })
        }
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });
    }
      
    checkImage(props.obj.urlToImage)
        .then((isAvailable) => {
          if (isAvailable) {
            setImage(true);
          } else {
            
          }
    });

    return (
      <>
        {image && <Container >
              <header key={props.obj.title}>{props.obj.title}</header>
              <img src={props.obj.urlToImage} alt="Image"/>
              <p key={props.obj.description}>{props.obj.description}</p>
              <p key={props.obj.content}>{props.obj.content}</p>
          </Container>}
      </>
        
    )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  border-radius: 5px;
  background-color: rgb(243, 237, 229);
  box-shadow: 5px 10px 8px #c6c4c4;
  overflow: hidden;
  box-sizing: border-box;
  padding: 15px;

  &>header{
    font-size: 1.25rem;
    font-weight: 600;
  }
  &>img{
    height: 50%;
    width: 100%;
  }
`;

export default News;

