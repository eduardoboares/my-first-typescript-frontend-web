import api from './api';
import IUser from './models/user.model';

const getUsers = async () => {
    try {
        const response = await api.get<Array<IUser>>('users')

        return response.data;
    } catch (error) {
        console.log('Deu ruim!')
    }
};

export default
{
    getUsers
};