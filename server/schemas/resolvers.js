const { User, Pet } = require('../models');
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
            throw AuthenticationError;
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
            throw AuthenticationError;
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
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
            throw AuthenticationError;
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
            throw AuthenticationError;
        },

        addPet: async (parent, args, context) => {
            if (context.user) {
                const newPet = await Pet.create();
                await newPet.save();


                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { myPets: newPet } },
                    {
                        new: true,
                        runValidators: true,
                    }
                );

                return updatedUser;
            }
            throw new AuthenticationError('User not authenticated');
        },

        removePet: async (parent, { _id }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { myPets: { _id: _id } } },
                    { new: true },
                );
            }
            throw AuthenticationError;
        },
    },
};

module.exports = resolvers;