import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Yahya UNLU',
    email: 'yhunlu@gmail.com',
    imageUrl:
      'https://lh3.googleusercontent.com/ogw/AOh-ky1n90iEadqapvW4khtAkqdDTjUIC_hXzJCjhWGt=s64-c-mo',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: true,
    isSeller: true,
    seller: {
      name: 'UNLU Electronics',
      logo: '/images/yhunlu87-seller-logo.png',
      rating: 4.5,
      numReviews: 120,
    },
  },
  {
    name: 'John Moonshine',
    email: 'user@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: false,
  },
];

export default users;
