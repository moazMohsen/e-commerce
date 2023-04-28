import React, { createContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notificationCart, setNotificationCart] = useState({});
    const [notificationLogin, setNotificationLogin] = useState(false);

    return (
        <NotificationContext.Provider value={{ notificationCart, setNotificationCart, notificationLogin, setNotificationLogin }}>
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;