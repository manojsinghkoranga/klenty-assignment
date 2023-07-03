import { useEffect, useState } from "react";
import fetchedData from "../db.json";
import News from "../news";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Feeds = (props) => {
  const navigate = useNavigate();

    const [news, setNews] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [searchValue, setSearchValue] = useState(props.field);

    // fetch data
    useEffect(() => {
      const fetchData = async() => {
        const data = await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=054662e7ada64c1cbcc0c8544e7fc2f0`);
        const response = await data.json();
        // const response = fetchedData;
        setNews(response.articles);
        setVisibleData(response.articles.slice(0, 20));
      }

      fetchData();
    }, [])
    
    // handeling data on scroll till bottom
    useEffect(() => {
      const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight) {
          const newVisibleData = news.slice(0, visibleData.length + 20);
          setVisibleData(newVisibleData);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [news, visibleData]);

    useEffect(() => {
      const fetchData = () => {
        setVisibleData(news.slice(0, 20));
      };
      fetchData();
    }, [news]);

    const handleFieldNews = () => {
      navigate(`/${props.field}`);
    }

    return (
      <>
        <Header>{props.field +" News"}</Header>
        <Container onClick={handleFieldNews}>
          {visibleData.map((obj) => {
            return <News obj={obj}/>
          })}
        </Container>
      </>
      
    );
}

const Header = styled.h1`
  text-transform: uppercase;
  align-self: flex-start;
  margin-left: 80px;
  font-size: 2.5rem;
`;
const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 80vh;
  width: 90vw;
  overflow: hidden;

  &>div:first-child{
    display: block;
    height: 92%;
    width: 60vw;
    position: absolute;
    left: 0;
    top: 0;
    &>header{
      font-size: 2rem;
    }
  }

  &>div:nth-child(2){
    display: block;
    position: absolute;
    height: 30%;
    width: 30%;
    right: 20px;
    top: 0;
    &>header{
      font-size: 1rem;
    }
  }
  &>div:nth-child(3){
    display: block;
    position: absolute;
    height: 30%;
    width: 30%;
    right: 20px;
    top: 32%;
    &>header{
      font-size: 1rem;
    }
  }
  &>div:nth-child(4){
    display: block;
    position: absolute;
    height: 30%;
    width: 30%;
    right: 20px;
    top: 64%;
    &>header{
      font-size: 1rem;
    }
  }
  &>div{
    display: none;
  }
`;

export default Feeds;