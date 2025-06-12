import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext/AuthContext';

const ContexData = () => {
    const context = use(AuthContext)
    return context
};

export default ContexData;