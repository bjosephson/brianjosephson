//import { useAuth } from "@clerk/clerk-react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

const useGraphQuery = ( query, vars ) => {
  const formatedQuery = gql`${query}`;
  //const { getToken } = useAuth();
  const { loading, error, data, refetch } = useQuery(formatedQuery, {variables: vars});
  return { loading, error, data, refetch };
}

const useLazyGraphQuery = ( query, vars ) => {
  const formattedQuery = gql`${query}`;
  //const { getToken } = useAuth();
  const [runQuery, {loading, error, data, }] = useLazyQuery(formattedQuery, { variables: vars });
  return { runQuery, loading, error, data };
}



const GET_ALL_PROJECTS = `
query GET_ALL_PROJECTS {
  projects(order_by: {created_on: desc}) {
    id
    name
    customer
    location_address
    location_city
    location_state
    location_zip
    created_on
  }
}`;

const GET_ALL_PERSONS = `
query GET_ALL_PERSONS {
  person {
    firstName
    lastName
  }
}`;



export default useGraphQuery
export {
  GET_ALL_PROJECTS,
  GET_ALL_PERSONS,
  useGraphQuery,
  useLazyGraphQuery,
}