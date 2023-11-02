const typeDefs = `

input PetInput {
    _id: ID!
    name: String!
    sprite: String!
    level: Int!
    exp: Int!
    reqExp: Int!
    hungryLevel: Int!
    hungryThreshold: Int!
    isHungry: Boolean!
    sleepyLevel: Int!
    sleepyThreshold: Int!
    isSleepy: Boolean!
    dirtyLevel: Int!
    dirtyThreshold: Int!
    isDirty: Boolean!
    lazyLevel: Int!
    lazyThreshold: Int!
    isLazy: Boolean!
  }

type User {
    _id: ID!
    username: String!
    email: String!
    avatar: String!
    myFriends: [User]
    myPets: [Pet]
}

type Pet {
    _id: ID!
    name: String
    sprite: String
    level: Int
    exp: Int
    reqExp: Int
    hungryLevel: Int
    hungryThreshold: Int
    isHungry: Boolean
    sleepyLevel: Int
    sleepyThreshold: Int
    isSleepy: Boolean
    dirtyLevel: Int
    dirtyThreshold: Int
    isDirty: Boolean
    lazyLevel: Int
    lazyThreshold: Int
    isLazy: Boolean
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    searchUsers(username: String!): User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFriend(username: String!): User
    removeFriend(username: String!): User
    addPet(
        name: String
        sprite: String
        level: Int
        exp: Int
        reqExp: Int
        hungryLevel: Int
        hungryThreshold: Int
        isHungry: Boolean
        sleepyLevel: Int
        sleepyThreshold: Int
        isSleepy: Boolean
        dirtyLevel: Int
        dirtyThreshold: Int
        isDirty: Boolean
        lazyLevel: Int
        lazyThreshold: Int
        isLazy: Boolean): Pet
    removePet(_id: ID!): Pet
    
}
`;

module.exports = typeDefs;