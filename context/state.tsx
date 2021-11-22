// import React, { useState, useEffect, createContext } from 'react';

// const defaultState = {
//   division: 'timbits',
// };

// const DivisionContext = createContext(defaultState);

// export default DivisionContext;


import { createContext, useContext } from 'react';

export type DivisionContextType = {
    division: string;
    setDivision: (division:string) => void;
}

export const DivisionContext = createContext<DivisionContextType>({ division: 'timbits', setDivision: division => console.warn('no division provider')});
export const useDivision = () => useContext(DivisionContext);