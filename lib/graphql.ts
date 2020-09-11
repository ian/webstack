import { GraphQLClient, gql } from "graphql-request"

const client = new GraphQLClient(process.env.GRAPHQL_URL)

export async function query(query, variables, opts) {
  if (process.env.GRAPHQL_DEBUG) {
    console.log("QUERY")
    console.log(query)
    console.log(JSON.stringify(variables, null, 2))
  }

  return new Promise(async (resolve, reject) => {
    try {
      const res = await client.request({
        query: gql(query),
        variables,
        opts,
      })

      resolve(res)
    } catch (err) {
      console.log("ERR", err)
      reject({
        data: {},
        errors: [err],
      })
    }
  })
}

export async function mutation(mutation, variables, opts) {
  if (process.env.GRAPHQL_DEBUG) {
    console.log("MUTATION")
    console.log(mutation)
    console.log(JSON.stringify(variables, null, 2))
  }

  return new Promise(async (resolve, reject) => {
    try {
      const res = await client.request({
        mutation: gql(mutation),
        variables,
        opts,
      })

      resolve(res)
    } catch (err) {
      reject({
        data: {},
        errors: [err],
      })
    }
  })
}
