const { Animals } = require('../models');

const animalData = [
  // Dogs
  {
    name: 'Charlie',
    age: 2,
    description: 'A playful young pup with a lot of energy.',
    photo: 'charlie.jpg',
    species: 'Dog',
    breed: 'Labrador Retriever',
  },
  {
    name: 'Max',
    age: 3,
    description: 'A friendly young pup.',
    photo: 'max.jpg',
    species: 'Dog',
    breed: 'Golden Retriever',
  },
  {
    name: 'Buddy',
    age: 2,
    description: 'Loyal and loving, great with families.',
    photo: 'buddy.jpg',
    species: 'Dog',
    breed: 'Beagle',
  },
  {
    name: 'Rocky',
    age: 3,
    description: 'Enjoys long walks and is very obedient.',
    photo: 'rocky.jpg',
    species: 'Dog',
    breed: 'Boxer',
  },
  {
    name: 'Jack',
    age: 3,
    description: 'Playful and loves to fetch.',
    photo: 'jack.jpg',
    species: 'Dog',
    breed: 'Bulldog',
  },
  {
    name: 'Oliver',
    age: 1,
    description: 'Energetic and loves toys.',
    photo: 'oliver.jpg',
    species: 'Dog',
    breed: 'Poodle',
  },
  {
    name: 'Toby',
    age: 2,
    description: 'Gentle and great with kids.',
    photo: 'toby.jpg',
    species: 'Dog',
    breed: 'Shih Tzu',
  },
  {
    name: 'Shadow',
    age: 3,
    description: 'Calm and loves to cuddle.',
    photo: 'shadow.jpg',
    species: 'Dog',
    breed: 'German Shepherd',
  },
  {
    name: 'Cooper',
    age: 2,
    description: 'Smart and easy to train.',
    photo: 'cooper.jpg',
    species: 'Dog',
    breed: 'Dachshund',
  },

  // Cats
  {
    name: 'Whiskers',
    age: 2,
    description: 'A curious cat that loves to explore.',
    photo: 'whiskers.jpg',
    species: 'Cat',
    breed: 'Siamese',
  },
  {
    name: 'Tom',
    age: 1,
    description: 'A cute cat that likes to play.',
    photo: 'tom.jpg',
    species: 'Cat',
    breed: 'Persian',
  },
  {
    name: 'Luna',
    age: 2,
    description: 'Shy at first, but very affectionate once comfortable.',
    photo: 'luna.jpg',
    species: 'Cat',
    breed: 'Maine Coon',
  },
  {
    name: 'Bella',
    age: 3,
    description: 'Playful and loves attention.',
    photo: 'bella.jpg',
    species: 'Cat',
    breed: 'Ragdoll',
  },
  {
    name: 'Molly',
    age: 2,
    description: 'Sweet and loves a good nap.',
    photo: 'molly.jpg',
    species: 'Cat',
    breed: 'Bengal',
  },
  {
    name: 'Daisy',
    age: 2,
    description: 'Energetic and loves chasing toys.',
    photo: 'daisy.jpg',
    species: 'Cat',
    breed: 'Sphynx',
  },
  {
    name: 'Simba',
    age: 3,
    description: 'Majestic and loves high places.',
    photo: 'simba.jpg',
    species: 'Cat',
    breed: 'British Shorthair',
  },
  {
    name: 'Oscar',
    age: 2,
    description: 'Independent but loves treats.',
    photo: 'oscar.jpg',
    species: 'Cat',
    breed: 'Scottish Fold',
  },
  {
    name: 'Gracie',
    age: 1,
    description: 'Loves to be the center of attention.',
    photo: 'gracie.jpg',
    species: 'Cat',
    breed: 'Abyssinian',
  },
];

const seedAnimals = () => Animals.bulkCreate(animalData);

module.exports = seedAnimals;
