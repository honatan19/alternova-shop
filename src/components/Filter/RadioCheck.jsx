import React, { useState } from 'react'

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
                            {
                                arrFilter[i]?.nameRadio
                                    ? <label htmlFor={el.id} className='capitalize'>
                                        <input
                                            type={type}
                                            value={(filterType == "filterType" ? el.id : i)}
                                            name={(el.nameRadio) ? el.nameRadio : el.id}
                                            id={el.id}
                                            onChange={({ target: { checked, value } }) => onHandleFilter(checked, filterType, i, value, data, setData)}
                                            defaultChecked={el.active} className='mr-2'
                                        />
                                        {el.name}
                                    </label>
                                    : <label htmlFor={el.id}>
                                        <div>
                                            <input
                                                type={type}
                                                value={i}
                                                name={(el.nameRadio) ? el.nameRadio : el.id}
                                                id={el.id}
                                                onChange={({ target: { checked } }) => onHandleFilter(checked, filterType, i, data, setData)}
                                                checked={el.active}
                                                className='mr-2' />
                                        </div>
                                        <div>{el.name}</div>
                                    </label>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RadioCheck;