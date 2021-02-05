export * from './home';
export * from './home/functions';
export * from './blog';
export * from './blog/function';

export const GRAPHQL_AUTHORIZATION = (token) => {
    return {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
};