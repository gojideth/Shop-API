const { prisma } = require("../database");
const {hasher, compare} = require("../utils/hasher");
const Mutation = {
  addBook: async (parent, args, context, info) => {
    return await prisma.book.create({
      data: {
        title: args.title,
        ISBN: args.ISBN,
        price: args.price,
        author: args.author,
        publisher: args.publisher,
        quantity: args.quantity,
      },
    });
  },

  addUser: (parent, args, context, info) => {
    return prisma.user.create({
      data: {
        name: args.name,
        email: args.email,
        password: args.password,
      },
    });
  },

  addShoppingCart: async (parent, args, context, info) => {
    const bookId = Number(args.bookId);
    const userId = Number(args.userId);
    return await prisma.shoppingCart.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        book: {
          connect: {
            id: bookId,
          },
        },
        quantity: args.quantity,
      },
    });
  },

  updateBook: async (parent, args, context, info) => {
    console.log(args);
    return await prisma.book.update({
      where: {
        id: args.id,
      },
      data: {
        title: args.title,
        ISBN: args.ISBN,
        price: args.price,
      },
    });
  },

  updateUser: async (parent, args, context, info) => {
    return await prisma.user.update({
      where: {
        id: args.id,
      },
      data: {
        name: args.name,
        email: args.email,
        password: args.password,
      },
    });
  },
  addInfoUser: async (parent, args, context, info) => {
    const user = await prisma.user.findFirst({
      where: {
        id: args.id,
      },
    });
    console.log(user);
    return await prisma.user.update({
      where: {
        id: args.id,
      },
      data: {
        profilePic: args.profilePic,
        address: args.address,
      },
    });
  },
  login: async (parent, args, context, info) => {
    const user = await prisma.user.findFirst({
      where: {
        email: args.email,
        password: args.password,
      },
    });
    if (user) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          loggedIn: true,
        },
      });
      return "Login Successful";
    }
    return "Incorrect email or password";
  },
  updateBookQuantity: async (parent, args, context, info) => {
    const id = Number(args.id);
    const book = await prisma.book.findFirst({
      where: {
        id: id,
      },
    });
    console.log(book);
    if (book) {
      await prisma.book.update({
        where: {
          id: id,
        },
        data: {
          quantity: args.quantity,
        },
      });
      return "Book with id " + id + " updated";
    } else {
      return "Book not found";
    }
  },
  buyBooks: async (parent, args, context, info) => {
    const idCart = Number(args.idCart);
    const idUser = Number(args.idUser);
    const shoppingCart = await prisma.shoppingCart.findFirst({
      where: {
        id: idCart,
      },
    });
    if (shoppingCart) {
      const user = await prisma.user.findFirst({
        where: {
          id: idUser,
          loggedIn: true,
        },
      });
      if (user) {
        await prisma.shoppingCart.deleteMany({
          where: {
            id: idCart,
          },
        });
        const book = await prisma.book.findFirst({
          where: {
            id: shoppingCart.bookId,
          },
        });
        const updated = await prisma.book.update({
          where: {
            id: shoppingCart.bookId,
          },
          data: {
            quantity: book.quantity - shoppingCart.quantity,
          },
        });
        if (book.quantity <= 0) {
          return "Book with id " + shoppingCart.bookId + " is out of stock";
        } else {
          return (
            "You have bought succesfully the books, order number: " + idCart
          );
        }
      } else {
        return "User not found or not logged in";
      }
    } else {
      return "Shopping Cart not found, please add your products to a shopping cart";
    }
  },
  addProductsCart: async (parent, args, context, info) => {
    const idUser = Number(args.idUser);
    const idProduct = Number(args.productId);
    const quantity = Number(args.quantity);
    const user = await prisma.user.findFirst({
      where: {
        loggedIn: true,
      },
    });

    const product = await prisma.product.findFirst({
      where: {
        id: idProduct,
      },
    });
    if (user && product) {
      return await prisma.shoppingCart.create({
        data: {
          user: {
            connect: {
              id: idUser,
            },
          },
          product: {
            connect: {
              id: idProduct,
            },
          },
          quantity: quantity,
        },
      });
    } else {
      return "User or product not found";
    }
  },
};

module.exports = {
  Mutation,
};
