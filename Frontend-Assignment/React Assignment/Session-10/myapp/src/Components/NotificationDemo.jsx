import React, { useContext } from "react";
import NotificationContext from "./NotificationContext";

function NotificationDemo() {
  const {
    notificationCount,
    addNotification,
    clearNotifications,
  } = useContext(NotificationContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>WhatsApp Style Notifications</h1>

      <div style={{ fontSize: "50px" }}>
        💬
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "5px 12px",
            fontSize: "20px",
            marginLeft: "10px",
          }}
        >
          {notificationCount}
        </span>
      </div>

      <br />

      <button onClick={addNotification}>
        New Message
      </button>

      <button
        onClick={clearNotifications}
        style={{ marginLeft: "10px" }}
      >
        Mark All as Read
      </button>
    </div>
  );
}

export default NotificationDemo;