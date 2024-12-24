import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } from "graphql"
import UserType from "../models/user.js"
import PostType from "../models/post.js";

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return UserType.find();
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return PostType.find();
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                username: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parent, args) {
                const user = new UserType({
                    username: args.username,
                    email: args.email,
                    password: args.password
                });
                return user.save();
            }
        },
        addPost: {
            type: PostType,
            args: {
                user: { type: GraphQLString },
                content: { type: GraphQLString },
                imageUrl: { type: GraphQLString }
            },
            resolve(parent, args) {
                const post = new PostType({
                    user: args.user,
                    content: args.content,
                    imageUrl: args.imageUrl
                });
                return post.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
