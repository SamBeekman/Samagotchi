const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const { useParams} = require();  may need for searchUsers

const resolvers = {
    Query: {
        me: async (parent, args, context) => {

            if (context.user) {
                const user = await User.findOne({ _id: context.user._id });
                console.log(user);
                return user;
            }
            throw new AuthenticationError('No User Found');
        },
        searchUsers: async (parent, { username }) => {
            if (username) {
                const user = await User.findOne({ username: username });
                if (user) {
                    return user;
                } else {
                    throw new AuthenticationError('No User Found');
                }
            }
            throw new AuthenticationError('Invalid input');
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No User Found');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Password is incorrect');
            }

            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });

            const token = signToken(user);
            return { token, user };
        },
        addFriend: async (parent, { username }, context) => {
            if (context.user) {
                const friendToAdd = await User.findOne({ username: username });

                if (friendToAdd) {
                    return User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $addToSet: { myFriends: friendToAdd } },
                        {
                            new: true,
                            runValidators: true,
                        }
                    );
                } else {
                    throw new UserInputError('User not found');
                }
            }
            throw new AuthenticationError('Authentication error');
        },
        removeFriend: async (parent, { username }, context) => {
            if (context.user) {
                const friendToRemove = await User.findOne({ username: username });

                if (friendToRemove) {
                    return User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $pull: { myFriends: friendToRemove } },
                        {
                            new: true,
                            runValidators: true,
                        }
                    );
                } else {
                    throw new UserInputError('User not found');
                }
            }
            throw new AuthenticationError('Authentication error');
        },
        addPet: async (parent, { petInput }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { myPets: petInput } },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('No pet found');
        },
        removePet: async (parent, { _id }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { myPets: { _id: _id } } },
                    { new: true },
                );
            }
            throw new AuthenticationError('No pet found');
        },
    },
};

module.exports = resolvers;