import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const ApolloQuery = gql`
{
  message
  user{
    name
    age
  }
}
`;

const Index = () => {
  const { loading, error, data } = useQuery(ApolloQuery);

  return (
    <div>
      <h2>Data Received from Apollo Client at runtime from Serverless Function:</h2>
      {loading && <p>Loading Client Side Querry...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.message && (
        <div>{data.message}</div>
      )}
      {data && data.user && (
        <div>
          <div>{data.user.name}</div>
          <div>{data.user.age}</div>
        </div>
      )}
    </div>
  )
}

export default Index
