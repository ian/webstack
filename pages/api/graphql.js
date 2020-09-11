import { createHandler } from "next-graphql"

let ITEMS = [{ name: "First" }]

const typeDefs = `
  type Email {
    name: String! 
  }

  type Query {
    getEmails: [Email]!
  }

  type Mutation {
    addEmail(email:String!): Email!
  }
`

const resolvers = {
  Query: {
    getEmails: async () => {
      return db
    },
  },
  Mutation: {
    addEmail: async (obj, { name }) => {
      const item = { name }
      ITEMS.push(item)
      return item
    },
  },
}

export default createHandler({
  typeDefs,
  resolvers,
})
