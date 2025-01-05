import React, { useState } from 'react';

const App: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const languages = ['English', 'Hindi', 'Punjabi', 'Tamil', 'Telugu'];
  const crops = ['Wheat', 'Rice', 'Cotton', 'Sugarcane', 'Maize'];
  const locations = ['Local', 'National'];

  const marketPrices = [
    { crop: 'Wheat', localPrice: '₹2100/quintal', nationalPrice: '₹2200/quintal' },
    { crop: 'Rice', localPrice: '₹1800/quintal', nationalPrice: '₹1900/quintal' },
    { crop: 'Cotton', localPrice: '₹5500/quintal', nationalPrice: '₹5700/quintal' },
    { crop: 'Sugarcane', localPrice: '₹300/quintal', nationalPrice: '₹320/quintal' },
    { crop: 'Maize', localPrice: '₹1500/quintal', nationalPrice: '₹1600/quintal' },
  ];

  const governmentSchemes = [
    { title: 'PM-KISAN', description: 'Income support scheme for farmers.', icon: '💰' },
    { title: 'KCC', description: 'Credit card scheme for farmers.', icon: '💳' },
    { title: 'PMFBY', description: 'Crop insurance scheme.', icon: '🌾' },
  ];

  const shopCategories = ['Seeds', 'Tools', 'Fertilizers'];

  return (
    <div className="min- bg-green-50 text-gray-800">
      {/* Navigation Menu */}
      <nav className="bg-green-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Anndata</div>
          <div className="flex space-x-4">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-1 rounded ${selectedLanguage === lang ? 'bg-green-600' : 'bg-green-700'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Screen */}
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Good Morning, Farmer!</h2>
              <p className="text-gray-600">Real-time weather updates</p>
            </div>
            <div className="text-4xl">🌤️ 28°C</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <button className="bg-green-100 p-4 rounded-lg text-center">
              <div className="text-3xl">📊</div>
              <p className="mt-2">Market Prices</p>
            </button>
            <button className="bg-green-100 p-4 rounded-lg text-center">
              <div className="text-3xl">📅</div>
              <p className="mt-2">Crop Calendar</p>
            </button>
            <button className="bg-green-100 p-4 rounded-lg text-center">
              <div className="text-3xl">💬</div>
              <p className="mt-2">Community Forum</p>
            </button>
          </div>
        </div>

        {/* Market Prices Page */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Market Prices</h2>
          <div className="flex space-x-4 mb-4">
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">Select Crop</option>
              {crops.map((crop) => (
                <option key={crop} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">Select Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-green-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Crop
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-green-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Local Price
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-green-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    National Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {marketPrices.map((price) => (
                  <tr key={price.crop}>
                    <td className="px-6 py-4 border-b border-gray-200">{price.crop}</td>
                    <td className="px-6 py-4 border-b border-gray-200">{price.localPrice}</td>
                    <td className="px-6 py-4 border-b border-gray-200">{price.nationalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Government Schemes Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Government Schemes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {governmentSchemes.map((scheme) => (
              <div key={scheme.title} className="bg-green-100 p-4 rounded-lg">
                <div className="text-3xl mb-2">{scheme.icon}</div>
                <h3 className="text-xl font-semibold">{scheme.title}</h3>
                <p className="text-gray-600">{scheme.description}</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* E-commerce Integration */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Shop</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shopCategories.map((category) => (
              <div key={category} className="bg-green-100 p-4 rounded-lg text-center">
                <div className="text-3xl">🛒</div>
                <h3 className="text-xl font-semibold mt-2">{category}</h3>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
                  Browse
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
