const typeDefs = `

input PetInput {
    _id: ID!
    species: Int!
    sprite: Int!
    happiness: Int!
    hungry: Boolean!
    sleepy: Boolean!
    poopy: Boolean!
    fitness: Int!
  }

type User {
    _id: ID!
    username: String!
    email: String!
    avatar: String
    myFriends: [User]
    myPets: [Pet]
}

type Pet {
    _id: ID!
    species: Int!
    sprite: Int!
    happiness: Int!
    hungry: Boolean!
    sleepy: Boolean!
    poopy: Boolean!
    fitness: Int!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    searchUsers(id: String!): User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFriend(id: String!): Auth
    removeFriend(id:String!): Auth
    addPet(petInput: PetInput!): Auth
    removePet(id: String!): Auth
    
}
`;

module.exports = typeDefs;