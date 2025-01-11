import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>
              TechBazaar is your one-stop shop for all things tech. We offer a
              wide range of high-quality electronics and gadgets.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: bismaydey001@gmail.com</p>
            <p>Phone: +91 8100314152</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 TechBazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
