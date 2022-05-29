const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    ISBN: String!
    price: Float!
    author: String!
    publisher: String!
    quantity: Int!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    profilePic: String
    address: String
  }

  type ShoppingCart {
    id: ID!
    userId: User!
    bookId: Book!
    quantity: Int!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    users: [User]
    user(id: ID!): User
    shoppingCarts: [ShoppingCart]
    shoppingCart(id: ID!): ShoppingCart
  }

  type Mutation {
    addBook(
      title: String!
      ISBN: String!
      price: Float!
      author: String!
      publisher: String!
      quantity: Int!
    ): Book
    addUser(name: String!, email: String!, password: String!): User
    addShoppingCart(userId: ID!, bookId: ID!, quantity: Int!): ShoppingCart
    updateBook(
      id: ID!
      title: String
      ISBN: String
      price: Float
      author: String
      publisher: String
      quantity: Int
    ): Book
    updateUser(
      id: ID!
      name: String
      email: String
      password: String
      profilePic: String
      address: String
    ): User
    updateShoppingCart(
      id: ID!
      userId: ID!
      bookId: ID!
      quantity: Int
    ): ShoppingCart
    deleteBook(id: ID!): Book
    deleteUser(id: ID!): User
    deleteShoppingCart(id: ID!): ShoppingCart
    addInfoUser(id: ID!, profilePic: String!, address: String!): User
    login(email: String!, password: String!): String!
    updateBookQuantity(id: ID!, quantity: Int!): Book
  }
`;

module.exports = { typeDefs };
