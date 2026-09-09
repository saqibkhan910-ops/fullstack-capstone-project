require("dotenv").config();

const { connectToDatabase } = require("./backend/config/db");

async function seedDatabase() {
  try {
    const db = await connectToDatabase();

    const gifts = [
      {
        id: "1",
        name: "Wooden Chair",
        category: "Furniture",
        description: "A used wooden chair in good condition.",
        condition: "Good"
      },
      {
        id: "2",
        name: "Study Table",
        category: "Furniture",
        description: "Wooden study table suitable for students.",
        condition: "Good"
      },
      {
        id: "3",
        name: "LED Monitor",
        category: "Electronics",
        description: "Computer LED monitor in working condition.",
        condition: "Good"
      },
      {
        id: "4",
        name: "Keyboard",
        category: "Electronics",
        description: "USB computer keyboard.",
        condition: "Good"
      },
      {
        id: "5",
        name: "Electric Kettle",
        category: "Appliances",
        description: "Electric kettle for boiling water.",
        condition: "Used"
      },
      {
        id: "6",
        name: "Blender",
        category: "Appliances",
        description: "Kitchen blender in working condition.",
        condition: "Good"
      },
      {
        id: "7",
        name: "Cooking Pot",
        category: "Kitchen",
        description: "Stainless steel cooking pot.",
        condition: "Good"
      },
      {
        id: "8",
        name: "Dinner Set",
        category: "Kitchen",
        description: "A complete dinner set.",
        condition: "Good"
      },
      {
        id: "9",
        name: "Novel Collection",
        category: "Books",
        description: "Collection of used English novels.",
        condition: "Used"
      },
      {
        id: "10",
        name: "School Books",
        category: "Books",
        description: "School books in readable condition.",
        condition: "Good"
      },
      {
        id: "11",
        name: "Children Toys",
        category: "Toys",
        description: "A collection of toys for children.",
        condition: "Good"
      },
      {
        id: "12",
        name: "Football",
        category: "Sports",
        description: "Football suitable for outdoor games.",
        condition: "Used"
      },
      {
        id: "13",
        name: "Winter Jacket",
        category: "Clothing",
        description: "Warm winter jacket.",
        condition: "Good"
      },
      {
        id: "14",
        name: "Desk Lamp",
        category: "Home Decor",
        description: "Small desk lamp for study table.",
        condition: "Good"
      },
      {
        id: "15",
        name: "Wall Clock",
        category: "Home Decor",
        description: "Wall clock in working condition.",
        condition: "Good"
      },
      {
        id: "16",
        name: "Backpack",
        category: "Accessories",
        description: "Used backpack suitable for students.",
        condition: "Good"
      }
    ];

    // Remove old gifts so exactly 16 documents remain
    await db.collection("gifts").deleteMany({});

    const result = await db.collection("gifts").insertMany(gifts);

    console.log(`${result.insertedCount} documents inserted`);
  } catch (error) {
    console.error("Database seeding failed:", error);
  }
}

seedDatabase();