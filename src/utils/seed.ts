import { db } from '../server/db'

const thumbnailArray = [
  'https://picsum.photos/id/0/300/250',
  'https://picsum.photos/id/0/300/250',
  'https://picsum.photos/id/21/300/250',
  'https://picsum.photos/id/26/300/250',
  'https://picsum.photos/id/30/300/250',
  'https://picsum.photos/id/48/300/250',
  'https://picsum.photos/id/96/300/250',
  'https://picsum.photos/id/133/300/250',
]

const generateRandomPrice = () => {
  return parseFloat((Math.random() * 100).toFixed(2));
}

// Function to generate random products and send them to the server
const insertRandomProducts = async () => {
  const numberOfProducts = 100;

  for (let i = 1; i <= numberOfProducts; i++) {
      const description = `Product ${i} Description`
      const sizes = ['small', 'medium', 'large', 'x-large']
      const size = sizes[Math.floor(Math.random() * sizes.length)]
      const price = generateRandomPrice()
      const quantity = 50
      const name = `Product ${i}`
      const media = { thumbnail: thumbnailArray[Math.floor(Math.random() * thumbnailArray.length)] }

      const productData = {
          description,
          size,
          price,
          quantity,
          name,
          media
      };

      // await createProduct(mapProductEntityFromProduct(productData));
      try {
        await db.product.create({
            data: {
                description,
                size,
                price: price.toString(), // Convert to string to ensure correct Decimal formatting
                quantity,
                name,
                media
            }
        });
        console.log(`Product ${i} inserted`);
    } catch (error: any) {
        console.log(`Error inserting product ${i}: ${error.message}`);
    }
  }
}

// Call the function to insert random products
insertRandomProducts();