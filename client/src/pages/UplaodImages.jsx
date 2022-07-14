import React, { useState } from 'react'
import { FileUpload } from 'react-ipfs-uploader'

const UploadImage = () => {
    const [fileUrl, setFileUrl] = useState('')

    return (
        <div>
            <FileUpload setUrl={setFileUrl} />
            FileUrl : <a
                href={fileUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {fileUrl}
            </a>
            <img src={fileUrl} alt="image"/>
        </div>
    )
}

export default UploadImage