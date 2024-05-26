import React, {useState, useEffect} from 'react'
import { Container, Postcard } from '../Components/Index'
import service from '../appwrite/mainConfig';

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    service.getPost([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts
