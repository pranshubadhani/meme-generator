import React, { useState, createRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = createRef();

    const addText = () => {
        setCount(count + 1);
    }
    const deleteText = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className="w-40 d-flex align-items-center justify-content-center flex-column" style={{ width: '550px', height: '800px' }}>
                <div ref={memeRef} className='d-flex mb-3 border' style={{ width: '100%', height: '100%' }}>
                    <img src={params.get("url")} alt="Some meme" style={{ width: '500px', height: '700px' }} />
                    <div>
                        {
                            Array(count).fill(0).map((e, index) => <Text key={index} />)
                        }
                    </div>
                </div>
                <div className='d-flex'>
                    <Button className='mx-2' onClick={e => { addText() }}>Add Text</Button>
                    <Button className='mx-2' onClick={e => { deleteText() }}>Delete Text</Button>
                    <Button variant='success' className='mx-2' onClick={e => { exportComponentAsJPEG(memeRef) }}>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default EditPage