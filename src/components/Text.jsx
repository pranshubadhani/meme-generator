import React, { useState } from 'react'
import Draggable from 'react-draggable'

const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState("Double Cick to Edit")
    return (
        <Draggable>
            <div>
                {
                    editMode ? (
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onDoubleClick={() => setEditMode(false)}
                            style={{
                                display: 'inline',
                                fontStyle: 'italic',
                                width: '250px',
                                border: 'none',
                                fontWeight: 'bold',
                                fontSize: '1.25rem',
                                outline: 'none',
                                overflowWrap: 'break-word',
                                backgroundColor: 'transparent'
                            }}
                        />
                    ) : (
                        <p
                            className='fw-bold fs-4'
                            onDoubleClick={() => setEditMode(true)}
                            style={{
                                display: 'inline',
                                width: '250px',
                                border: 'none',
                                overflowWrap: 'break-word',
                                margin: 0,
                                backgroundColor: 'transparent'
                            }}
                        >
                            {value}
                        </p>
                    )
                }
            </div>
        </Draggable>
    )

}

export default Text