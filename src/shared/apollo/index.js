import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client/core'
import {setContext} from "@apollo/client/link/context/index.js";

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
})

// Cache implementation
const cache = new InMemoryCache()

const authLink = setContext((_, {headers})=>{
    const userObj = JSON.parse(localStorage.getItem("aListAuth"))
    return {
        headers: {
            ...headers,
            authorization: userObj?.token ? `Bearer ${userObj?.token}`: ""
        }
    }
})

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
})