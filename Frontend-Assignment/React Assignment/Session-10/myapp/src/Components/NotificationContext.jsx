import React, { createContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notificationCount, setNotificationCount] = useState(3);

  const addNotification = () => {
    setNotificationCount((count) => count + 1);
  };

  const clearNotifications = () => {
    setNotificationCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationCount,
        addNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;