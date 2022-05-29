const {prisma} = require('../database');

const Mutation = {

  addBook: async (parent, args, context, info) => {
    return await prisma.book.create({
      data: {
        title: args.title,
        ISBN: args.ISBN,
        price: args.price,
        author: args.author,
        publisher: args.publisher,
        quantity: args.quantity
      }
    });
  },
  
  addUser:  (parent, args, context, info) => {
    return  prisma.user.create({
      data: {
        name: args.name,
        email: args.email,
        password: args.password
      }
    });
  },

  addShoppingCart: async (parent, args, context, info) => {
    if(args.user)
    return await prisma.shoppingCart.create({
      data: {
        user: {
          connect: {
            id: args.userId
          }
        },
        book: {
          connect: {
            id: args.bookId
          }
        },
        quantity: args.quantity
      }
    });
  },

  updateBook: async (parent, args, context, info) => {
    console.log(args);
    return await prisma.book.update({
      where: {
        id: args.id
      },
      data: {
        title: args.title,
        ISBN: args.ISBN,
        price: args.price,
      }});
  },

  updateUser: async (parent, args, context, info) => {
    return await prisma.user.update({
      where: {
        id: args.id
      },
      data: {
        name: args.name,
        email: args.email,
        password: args.password
      }
    });
  },
  addInfoUser: async(parent,args,context,info)=>{
    const user = await prisma.user.findFirst({
      where:{
        id:args.id
      }
    });
    console.log(user);
    return await prisma.user.update({
      where:{
        id:args.id
      },
      data:{
        profilePic:args.profilePic,
        address:args.address
      }
    });
  },
  login: async (parent, args, context, info) => {
    const user = await prisma.user.findFirst({
      where: {
        email: args.email,
        password: args.password
      }
    });
    if(user){
      return 'Login Successful';
    }
    return "Incorrect email or password";
  },
  updateBookQuantity: async (parent, args, context, info) => {
    const book = await prisma.book.findFirst({
      where: {
        id: args.id,
        
      }
    })
    if(book){
      return await prisma.book.update({
        where: {
          id: args.id
        },
        data: {
          quantity: args.quantity
        }
      });
    }else{
      return "Book not found";
    }
    
  }
};

module.exports= {
  Mutation,
}