import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  
  // Counter effect
  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  // Counter functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Counter Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 text-center">Counter Widget</h3>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-5xl font-bold text-blue-600">{count}</span>
                <div className="flex items-center space-x-4 mt-5">
                  <button 
                    onClick={decrement}
                    className="bg-blue-100 text-blue-700 hover:bg-blue-200 text-lg font-bold px-4 py-2 rounded transition-colors"
                  >
                    -
                  </button>
                  <button 
                    onClick={reset}
                    className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-lg font-bold px-4 py-2 rounded transition-colors"
                  >
                    Reset
                  </button>
                  <button 
                    onClick={increment}
                    className="bg-blue-100 text-blue-700 hover:bg-blue-200 text-lg font-bold px-4 py-2 rounded transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Statistics</h3>
              <div className="mt-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600">Current Count</span>
                  <span className="font-medium">{count}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600">Next 10x Mark</span>
                  <span className="font-medium">{count === 0 ? 10 : Math.ceil(count/10)*10}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Count Type</span>
                  <span className="font-medium">
                    {count % 2 === 0 ? 'Even' : 'Odd'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
              <div className="mt-4 space-y-3">
                <button
                  onClick={() => setCount(count + 5)}
                  className="w-full px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
                >
                  Add 5
                </button>
                <button
                  onClick={() => setCount(count - 5)}
                  className="w-full px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
                >
                  Subtract 5
                </button>
                <button
                  onClick={() => setCount(count * 2)}
                  className="w-full px-4 py-2 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 transition-colors"
                >
                  Double Count
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Count History</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className={`p-4 rounded-md text-center ${
                    count === i ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;