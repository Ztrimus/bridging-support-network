const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Ztrimus/gov-benefit-llama-hack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-mint-200"
                >
                  Code Repository
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/jLphWh1i8cQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-mint-200"
                >
                  Watch Demo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: support@govbridge.org</li>
              <li>Twitter: @govbridge</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2024 Bridging Underprivileged to Government Support. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;