import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsrm6rvb1e7w01w7voour3rp/master",
  cache: new InMemoryCache(),
});

// GraphQL query
const GET_PROJECTS = gql`
  query Projects {
    projects {
      id
      name
      description {
        html
      }
    }
  }
`;

// Function to fetch data
export async function getProjects() {
  const { data } = await client.query({
    query: GET_PROJECTS,
  });
  return data.projects;
}
