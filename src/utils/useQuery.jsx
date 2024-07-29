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

const CLEANSTATES =`
query GET_FACILITIES_BY_STATE {
  facility {
    state
    facility_ID
  }
}`;

const GET_ALL_FACILITIES = `
query GET_ALL_FACILITIES {
  facility {
    name
    subname
    latitude
    longitude
    customer_number
    type
    address
    address2
    po_box
    zip
    city
    state
    email
    phone
    fax
    url
    facility_ID
    parent_ID
    parent_customer_number

  }
}`;

const GET_ALL_FACILITIES_MIN = `
query GET_ALL_FACILITIES {
  facility {
    facility_ID
    address
    name
    latitude
    longitude
    subname
    city
    state
  }
}`;

const GET_FACILITIES_BY_SUBNAME = `
query GET_FACILITIES_BY_SUBNAME($subname: String!) {
  facility(where: {subname: {_eq: $subname}}) {
    name
    subname
    latitude
    longitude
    customer_number
    type
    address
    address2
    po_box
    zip
    city
    state
    email
    phone
    fax
    url
    facility_ID
    parent_ID
    parent_customer_number

  }
}`;


const GET_FACILITIES_BY_ADDRESS = `
query GET_FACILITIES_BY_ADDRESS($address: String!) {
  facility(where: {address: {_eq: $address}}) {
    customer_number
    name
    subname
    city
    state
    address
    address2
    latitude
    longitude
  }
}
`

const GET_FACILITIES_BY_CITY = `
query GET_FACILITIES_BY_CITY($name: String!) {
  facilities(where: {locatedInCities_SINGLE: {name: $name}}) {
    name
    address
    phone
    type
    zip
  }
}`;

const GET_FACILITIES_BY_ID = `
query GET_FACILITIES_BY_ID($facilityID: uuid!) {
  facility(where: {facility_ID: {_eq: $facilityID}}) {
    name
    customer_number
    type
    address
    address2
    po_box
    zip
    city
    state
    email
    phone
    fax
    url
    facility_ID
    size
    parent_ID
    parent_customer_number
    notes
  }
}`;

const GET_FACILITIES_BY_STATE = `
query GET_FACILITIES_BY_STATE($states: [String!]) {
  facility(where: {state: {_in: $states}}) {
    name
    address
    phone
    type
    zip
    accuracy_score
    accuracy_type
    address2
    city
    country
    county
    customer_number
    email
    facility_ID
    fax
    latitude
    longitude
    notes
    number
    observes_dst
    parent_ID
    parent_customer_number
    place_name
    po_box
    size
    state
    street
    subname
    timezone
    timezone_abbreviation
  }
}`;

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

const GET_PROJECTS_BY_USER_ID = `
query GET_PROJECTS_BY_USER_ID($userId: String!) {
  projects(where: {created_by: {_eq: $userId}}, order_by: {created_on: desc}) {
    active
    created_by
    created_on
    customer
    hidden
    id
    last_updated
    location_address
    location_city
    location_state
    location_zip
    name
    notes
    parent_project
  }
}`;

export default useGraphQuery
export {
  CLEANSTATES,
  GET_ALL_FACILITIES,
  GET_ALL_FACILITIES_MIN,
  GET_FACILITIES_BY_ADDRESS,
  GET_FACILITIES_BY_CITY,
  GET_FACILITIES_BY_ID,
  GET_FACILITIES_BY_STATE,
  GET_FACILITIES_BY_SUBNAME,
  GET_ALL_PROJECTS,
  GET_PROJECTS_BY_USER_ID,
  useGraphQuery,
  useLazyGraphQuery,
}