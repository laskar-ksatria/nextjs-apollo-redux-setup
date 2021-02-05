import * as QUERY from './index';
import { GRAPHQL_AUTHORIZATION } from '../index'

export const GET_HOME_PRODUCT = async (client, token) => {
    try {
        let { data } = await client.query({
            query: QUERY.Q_HOME_PRODUCT,
            context: GRAPHQL_AUTHORIZATION(token)
        })
        console.log(data);
        return data
    } catch (error) {
        console.log(error)
    }
};

export const GET_HOME_STORES = async (client, token) => {
    
}