import React, { useEffect, useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import Head from "next/head";

import pStyle from "./PostCard.module.scss";

const PostCard = ({urlId}) => { 

    const [postInfo , setPostInfo] = useState({});

    let response = {};
    let data = {};


    const getPost = async() =>{
        try{
            response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + urlId);
            data = response.data;
            console.log(data);
            setPostInfo(data);
        }
        catch(err){
            console.log(err);
        }

    }

    useEffect(() =>{
        getPost();
    }, [urlId])
    
    return ( 
      <React.Fragment>
        
        <Head>
          <title>post-{urlId}</title>
        </Head>
        <Card sx={{ maxWidth: 450 }} className={pStyle.card}>
          <Typography gutterBottom variant="h6" component="div" fontFamily={'cursive'}>
            post number: {postInfo.id}
          </Typography>
          <CardMedia
            component="img"
            height="170"
            // image="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
            image="../web.jpg"
            alt="a"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" fontFamily={'cursive'} fontSize={25}>
              {postInfo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontFamily={'roboto'} fontSize={20}>
              {postInfo.body}
            </Typography>
          </CardContent>

        </Card>

      </React.Fragment>
     );
    }
 
export default PostCard;