export async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Network response was not ok");
    return await res.json();
  } catch (err) {
    console.error("fetchProducts error:", err);
    return [];
  }
}
