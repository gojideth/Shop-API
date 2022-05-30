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
    productId: Product
    quantity: Int!
  }

  type Query {
    """
    Get all books
    """
    books: [Book]

    """
    Get a book by id
    """
    book(id: ID!): Book

    """
    Get all users
    """
    users: [User]

    """
    Get a user by id
    """
    user(id: ID!): User

    """
    Get all shopping carts
    """
    shoppingCarts: [ShoppingCart]

    """
    Get a shopping cart by id
    """
    shoppingCart(id: ID!): ShoppingCart

    """
    Get all products
    """
    products: [Product]
  }
  type Product {
    id: ID!
    name: String!
    price: Float!
    quantity: Int!
    category: String!
    codeProduct: String!
    distributor: String!
  }

  type Mutation {
    """
    Add a book
    """
    addBook(
      title: String!
      ISBN: String!
      price: Float!
      author: String!
      publisher: String!
      quantity: Int!
    ): Book
    """
    Add a product
    """
    addProduct(
      id: ID!
      name: String!
      price: Float!
      quantity: Int!
      category: String!
      codeProduct: String!
      distributor: String!
    ): Product

    """
    Add a user
    """
    addUser(name: String!, email: String!, password: String!): User

    """
    Add a shopping cart
    """
    addShoppingCart(userId: ID!, bookId: ID!, quantity: Int!): ShoppingCart

    """
    Add products to cart
    """
    addProductsCart(productId: ID!, quantity: Int!): ShoppingCart

    """
    Update a book
    """
    updateBook(
      id: ID!
      title: String
      ISBN: String
      price: Float
      author: String
      publisher: String
      quantity: Int
    ): Book

    """
    Update a user
    """
    updateUser(
      id: ID!
      name: String
      email: String
      password: String
      profilePic: String
      address: String
    ): User

    """
    Update a shopping cart
    """
    updateShoppingCart(
      id: ID!
      userId: ID!
      bookId: ID!
      quantity: Int
    ): ShoppingCart

    """
    Delete a book
    """
    deleteBook(id: ID!): Book

    """
    Delete a user
    """
    deleteUser(id: ID!): User

    """
    Delete a shopping cart
    """    
    deleteShoppingCart(id: ID!): ShoppingCart

    """
    Add a user extra info such as profile pic and address
    """
    addInfoUser(id: ID!, profilePic: String!, address: String!): User

    """
    Login an user, email and password is required
    """
    login(email: String!, password: String!): String!

    """
    Update book cuantity
    """
    updateBookQuantity(id: ID!, quantity: Int!): String

    """
    Buy books
    """
    buyBooks(idCart: ID!, idUser:ID!): String
  }
`;

module.exports = { typeDefs };
