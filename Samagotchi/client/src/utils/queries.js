import { gql } from '@apollo/client';

// me: User
export const GET_ME = gql`
    query me {
        me {
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
                species
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

// searchUsers(username: String!): User
export const GET_ALL_USERS = gql`
    query searchUsers($username: String!){
        searchUsers(username: $username){
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
                species
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

