'use client'

import React, { useState } from 'react';

export const NotificationButton = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNotification = async () => {
    try {
      setIsSuccess(false);
      const response = await fetch('/api/trigger', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to trigger notification');
      }
      
      const data = await response.json();
      console.log('Notification sent:', data);
      setIsSuccess(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error triggering notification:', error);
    }
  };

  return (
    <button
      className={`rounded-md border border-solid border-transparent transition-colors flex items-center justify-center gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
        isSuccess 
          ? 'bg-green-600 hover:bg-green-700 text-white' 
          : 'bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]'
      }`}
      onClick={handleNotification}
    >
      {isSuccess ? 'Notification Sent!' : 'Trigger a notification'}
    </button>
  );
};

export default NotificationButton;
