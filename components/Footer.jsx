// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-6 bg-opacity-70 backdrop-blur-md border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MamaKabob. All rights reserved.</p>
          <div className="mt-4">
            <a href="/privacy" className="text-gray-300 hover:text-red-500 mx-2">Privacy Policy</a>
            <a href="/terms" className="text-gray-300 hover:text-red-500 mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
  