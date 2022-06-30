import Head from 'next/head';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import PostCard from "../src/PostCard";


const Posts = () => {

    const router = useRouter();

    const [id , setId] = useState();

    useEffect( () => {
        setId(() => router.query.id);
        catTest = router.query.id;
        
    }, [router , catTest , stest])
  

    
    return ( 

        <PostCard></PostCard>

     );
}
 
export default Posts;