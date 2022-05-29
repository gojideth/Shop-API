
const { prisma } = require("../database.js");
const { Query } = require("./query.js");
const { Mutation } = require("./mutation.js");

const Book = {
  id: (parent, args, context, info) => parent.id,
  title: (parent) => parent.title,
  ISBN: (parent) => parent.ISBN,
  price: (parent) => parent.price,
  author: (parent) => parent.author,
  publisher: (parent) => parent.publisher,
  quantity: (parent) => parent.quantity,
};

const User = {
  id: (parent, args, context, info) => parent.id,
  name: (parent) => parent.name,
  email: (parent) => parent.email,
  password: (parent) => parent.password,
  profilePic: (parent) => parent.profilePic,
  address: (parent) => parent.address,
};

const ShoppingCart = {
  id: (parent, args, context, info) => parent.id,
  userId:  (parent, args) => {
    return prisma.department.findUnique({
        where: { id: parent.id },
      }).user();
  },
  bookId: (parent) => parent.bookId,
  quantity: (parent) => parent.quantity,
};

const resolvers = {
  Book,
  User,
  ShoppingCart,
  Query,
  Mutation,
};
module.exports = {
  resolvers,
};