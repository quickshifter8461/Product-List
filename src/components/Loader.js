export const productsLoader = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  };

export const productLoader = async (productId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  }