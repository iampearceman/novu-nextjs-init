import { useState, useEffect } from 'react';

function YourComponent() {
  const [isNovuConnected, setIsNovuConnected] = useState(false);

  useEffect(() => {
    // Function to check Novu endpoint
    const checkNovuConnection = async () => {
      try {
        const response = await fetch('http://localhost:2022/.well-known/novu');
        setIsNovuConnected(response.status === 200);
      } catch (error) {
        setIsNovuConnected(false);
      }
    };

    // Check immediately on component mount
    checkNovuConnection();

    // Set up interval to check every 5 seconds
    const interval = setInterval(checkNovuConnection, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* ... other components ... */}
      
      {isNovuConnected ? (
        <button onClick={handleTriggerNotification}>
          Trigger a notification
        </button>
      ) : (
        <div className="connection-message">
          Run <code>npx novu@latest dev --port 4000</code> to connect and trigger your workflow
        </div>
      )}
      
      {/* ... other components ... */}
    </div>
  );
} 