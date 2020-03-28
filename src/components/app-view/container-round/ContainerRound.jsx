import React from 'react'

export const ContainerRound = ({ className, children }) =>
    <>
        <div {...{ className }}>
            { children }
        </div>
        <div className="bg"></div>
    </>