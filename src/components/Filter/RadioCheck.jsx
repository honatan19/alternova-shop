import React from 'react';

const RadioCheck = ({ position, type, arrFilter, filterType, onHandleFilter, data, setData, title }) => {
    return (
        <div className="dropdown filters__input">
            <label tabIndex={position} className="text-[#0f204199]">
                {title}
            </label>
            <div tabIndex={position} className="menu menu-compact dropdown-content mt-3 py-3 px-5 shadow bg-base-100 rounded-box w-max">
                {arrFilter.map((el, i) => {
                    return (
                        <div key={i}>
                            <label htmlFor={el.id} className='capitalize flex flex-row items-center  mb-2'>
                                <input
                                    type={type}
                                    value={(filterType == "filterType" ? el.id : i)}
                                    name={(el.nameRadio) ? el.nameRadio : el.id}
                                    id={el.id}
                                    onChange={({ target: { checked, value } }) => onHandleFilter(checked, filterType, i, value, data, setData)}
                                    defaultChecked={el.active}
                                    className={(type == 'radio') ? 'radio radio-sm mr-2' : 'checkbox checkbox-sm mr-2'}
                                />
                                {el.name}
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RadioCheck;