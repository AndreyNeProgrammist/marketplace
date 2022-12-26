import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./Market/UserStore";
import DeviceStore from "./Market/DeviceStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

