import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categories = [
  { name: "Appetizers", icon: "🥟" },
  { name: "Breakfast", icon: "🥞" },
  { name: "Desserts", icon: "🍰" },
  { name: "Drinks", icon: "🍹" },
  { name: "Fast Food", icon: "🍔" },
  { name: "Grilling", icon: "🍖" },
  { name: "Healthy", icon: "🥗" },
  { name: "Italian", icon: "🍝" },
  { name: "Japanese", icon: "🍣" },
  { name: "Mexican", icon: "🌮" },
  { name: "Pasta", icon: "🍜" },
  { name: "Pizza", icon: "🍕" },
  { name: "Seafood", icon: "🦞" },
  { name: "Snacks", icon: "🍿" },
  { name: "Soups", icon: "🍲" },
  { name: "Vegan", icon: "🌱" },
  { name: "Vegetarian", icon: "🥦" },
  { name: "Indian", icon: "🍛" },
  { name: "Chinese", icon: "🥡" },
  { name: "French", icon: "🥐" },
];

async function main() {
  console.log(`Start seeding categories...`);
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
