import React, { useEffect, useState } from 'react'
import MemeCard from '../components/Card.jsx'
import { getMemes } from "../api/memes.js"

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getMemes().then((memes) => {
            setData(memes.data.memes);
        }, [])
    });
    return (
        <div className='row' style={{ margin: 'auto' }}>
            {
                data.map(id => <MemeCard img={id.url} title={id.name} />)
            }
        </div>
    )
}

export default Home