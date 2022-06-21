import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o2olcf09jl01z24hzvcuf8/master',
  cache: new InMemoryCache()
})