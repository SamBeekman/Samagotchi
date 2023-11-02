import { gql } from '@apollo/client';

// login(email: String!, password: String!): Auth
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// addUser(username: String!, email: String!, password: String!): Auth
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// addFriend(username: String!): Auth
export const ADD_FRIEND = gql`
    mutation addFriend($username: String!) {
        addFriend(username: $username) {
            _id
            username
            email
            avatar
            myFriends {
                _id
                username
                email
                avatar
                myFriends{
                    _id
                    username
                    email
                    avatar
                }
                myPets {                    
                    sprite
                    happiness
                }
            }
            myPets {
                _id
                sprite
                happiness
                hungry
                sleepy
                poopy
                fitness
            }
        }
    }
`;

// removeFriend(username: String!): Auth
export const REMOVE_FRIEND = gql`
    mutation removeFriend($username: String!) {
        removeFriend(username: $username) {
            _id
            username
            email
            avatar
            myFriends {
                _id
                username
                email
                avatar
                myFriends
                myPets
            }
            myPets {
                _id
                sprite
                happiness
                hungry
                sleepy
                poopy
                fitness
            }
        }
    }
`;

// addPet(petInput: PetInput!): Auth
export const ADD_PET = gql`
    mutation addPet{
        addPet{
            _id
            name
            sprite
            level
            exp
            reqExp
            hungryLevel
            hungryThreshold
            isHungry            
            sleepyLevel
            sleepyThreshold
            isSleepy
            dirtyLevel
            dirtyThreshold
            isDirty
            lazyLevel
            lazyThreshold
            isLazy
        }
    }
`;

// removePet(id: String!): Auth
export const REMOVE_PET = gql`
    mutation removePet($_id: ID!) {
        removePet(_id: $_id) {
            _id
            name
            sprite
            level
            exp
            reqExp
            hungryLevel
            hungryThreshold
            isHungry            
            sleepyLevel
            sleepyThreshold
            isSleepy
            dirtyLevel
            dirtyThreshold
            isDirty
            lazyLevel
            lazyThreshold
            isLazy
        }
    }
`;




