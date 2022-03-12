import React, { createContext } from 'react';
import loading from '../assets/img/loading.gif';

export const Loading = () => <img src={loading} alt='loading...' height="50px" />
export const AppContext = createContext()
export default function AppProvider({ children }) {
  const notificationAlert = React.useRef();

  const notify = (message, color) => {
    var type;
    switch (color) {
      case "primary":
        type = "primary";
        break;
      case "success":
        type = "success";
        break;
      case "danger":
        type = "danger";
        break;
      case "warning":
        type = "warning";
        break;
      case "info":
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: "br",
      message: (
        <div>{message}</div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 5,
    };
    notificationAlert.current.notificationAlert(options);
  };

  return (
    <AppContext.Provider
      value={{
        notify,
        notificationAlert,
      }}>
      {
        children
      }
    </AppContext.Provider>
  )
}
