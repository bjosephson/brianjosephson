import React, { useMemo } from "react"
import { useAuth } from "@clerk/clerk-react"
import { setContext } from "@apollo/client/link/context"
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client"

const HasuraConnector = ({ children }) => {
  const { getToken } = useAuth();
  const apolloClient = useMemo(() => {
    const authMiddleware = setContext(async (req, { headers }) => {
      const token = await getToken({ template: "hasura" });
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });
    const httpLink = new HttpLink({
      uri: "https://brian-josephson.hasura.app/v1/graphql",
    });
    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  }, [getToken]);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default HasuraConnector;