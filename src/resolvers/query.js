const { prisma } = require("../database");

const Query = {
  books: async (parent, args, context, info) => {
    return await prisma.book.findMany();
  },
  book: async (parent, args, context, info) => {
    return await prisma.book.findOne({
      where: {
        id: args.id,
      },
    });
  },
  users: async (parent, args, context, info) => {
    return await prisma.user.findMany();
  },
  user: async (parent, args, context, info) => {
    return await prisma.user.findOne({
      where: {
        id: args.id,
      },
    });
  },
  shoppingCarts: async (parent, args, context, info) => {
    return await prisma.shoppingCart.findMany();
  },
  shoppingCart: async (parent, args, context, info) => {
    return await prisma.shoppingCart.findOne({
      where: {
        id: args.id,
      },
    });
  },
};
module.exports = {
  Query,
};
