import { request, gql } from "graphql-request";

const API_ENDPOINT =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsrm6rvb1e7w01w7voour3rp/master";
const GET_PROJECTS = gql`
  query Projects {
    projects {
      id
      name
      slug
      description {
        raw
      }
      image {
        url
      }
    }
  }
`;

// Function to fetch data
export async function getProjects() {
  const data = await request(API_ENDPOINT, GET_PROJECTS);
  return data;
}

const GET_FILES = gql`
  query Documents {
    documents {
      file {
        fileName
        url
      }
      label
    }
  }
`;

export async function getFiles() {
  const data = await request(API_ENDPOINT, GET_FILES);
  return data;
}

const GET_BOARD_MEMBERS = gql`
  query BoardMembers {
    boardMembers {
      id
      image {
        url
      }
      name
      title
      description
    }
  }
`;

export async function getBoardMembers() {
  const data = await request(API_ENDPOINT, GET_BOARD_MEMBERS);
  return data;
}

const GET_NEWSLETTERS = gql`
  query Newsletters {
    newsletters(orderBy: date_DESC) {
      month
      pdf {
        url
      }
      id
      date
    }
  }
`;

export async function getNewsletters() {
  const data = await request(API_ENDPOINT, GET_NEWSLETTERS);
  return data;
}
