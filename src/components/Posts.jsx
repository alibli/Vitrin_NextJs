import React, { useEffect, useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import Head from "next/head";
import { Grid } from "@mui/material";
import pStyle from "./PostCard.module.scss";



const Posts = () => { 

    const [posts , setPosts] = useState([]);

    let response = {};
    let data = {};


    const getPosts = async() =>{
        try{
            response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            data = response.data;
            console.log(data);
            setPosts(data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() =>{
        getPosts();
    }, [])
    
    return ( 
      <React.Fragment>
        
        <Head>
          <title>All Posts</title>
        </Head>
        <Grid container spacing={3} rowGap={3} >

                {posts.map(post =>
            <Grid item xs={12} sm={6} md={4} lg={3} key={post.id} component={Card}>
                <Card className={pStyle.card}>
                    <Typography gutterBottom variant="h6" component="div" fontFamily={'cursive'}>
                    post number: {post.id}
                    </Typography>
                    <CardMedia
                    component="img"
                    height="170"
                    image="../web.jpg"
                    alt="a"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontFamily={'cursive'} fontSize={20}>
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontFamily={'roboto'} fontSize={20}>
                        {post.body}
                    </Typography>
                    </CardContent>
                </Card>
                
            </Grid>
                )}

        </Grid>

        

      </React.Fragment>
     );
    }
 
export default Posts;