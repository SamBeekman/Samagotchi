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
                myFriends{
                    _id
                    username
                    email
                    avatar
                }
                myPets {                    
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
            myPets {
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
    }
`;

// searchUsers(username: String!): User
export const GET_USERS = gql`
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

