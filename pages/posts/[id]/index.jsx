import Head from 'next/head';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../../src/components/Navbar';
import PostCard from '../../../src/components/PostCard';


const PostPage = () => {

    const router = useRouter();

    const [id , setId] = useState();

    useEffect( () => {
        setId(() => router.query.id); //****//        
    }, [router])
  

    return ( 
        <div>
            <Navbar></Navbar>
            <PostCard urlId={id}></PostCard>
        </div>
     );
}
 
export default PostPage;