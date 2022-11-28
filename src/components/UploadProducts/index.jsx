import React, { useRef } from 'react';
import { useMainContext } from '../../contexts/MainProvider';
import { parseJsonFile } from '../../utils';
const UploadProducts = () => {
    const MainCtx = useMainContext();
    const handleChange = async (e) => {
        const file = e.target.files[0];
        const jsonUploaded = await parseJsonFile(file);
        MainCtx.setData(jsonUploaded);
    }
    return (
        <div className='flex flex-col'>
            <input id='uploadFile' accept='.json' type="file" onChange={handleChange} className="file-input w-full max-w-xs mb-2" />
        </div>
    )
}

export default UploadProducts