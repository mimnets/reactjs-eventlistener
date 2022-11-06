import React, { useEffect, useState } from 'react';

const Power = () => {
    return (
        <div>
            <Displaypower name="NoaKhali" district="Bivag"></Displaypower>
            <Displaypower name="Komilla" district="ETOR"></Displaypower>
            <Displaypower name="B.Baria" district="Maramari"></Displaypower>
            <LoadPosts></LoadPosts>
        </div>
    );
};

function Displaypower (props){
    const [power, setPower] = useState(1);
    const dPower = ()=>{
        const newPower = power * 2;
        setPower(newPower);
    }
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Speciality: {props.district}</p>
            <p>Power: {power}</p>

            <button onClick={dPower}>Increase Power</button>
        </div>
    );
};


function LoadPosts(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return(
        <div>
            <p>Posts:{posts.length}</p>
            {
                posts.map(post => <Post title={post.title} body={post.body}></Post>)
            }
        </div>
    )
}

function Post(props){
    return(
        <div>
            <h4>Title: {props.title}</h4>
            <p>Body: {props.body}</p>
        </div>
    )
}
export default Power;