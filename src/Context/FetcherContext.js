import React, { createContext, useContext, useMemo} from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';

const FetcherContext = createContext();

export const FetcherProvider = ({ children }) => {
    const { auth } = useContext(AuthContext);

    const axios_ = useMemo(
        () => axios.create({
            baseURL:  'http://localhost:3000',
            headers: {
                'Custom-Auth': auth.token,
                'Content-Type': 'application/json'
            }
        }),
        [auth]
    );

    return (
        <FetcherContext.Provider value={{ axios: axios_ }}>
            { children }
        </FetcherContext.Provider>
    );
};

export default FetcherContext;