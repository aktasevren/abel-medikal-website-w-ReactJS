import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Provider : Store’umuzu component’ler de kullanmak için bu nesne ile uygulamamızı sarmalıyoruz. Parametre olarak store’u veriyoruz.
import { Provider } from "react-redux";

// Store: Redux'ın merkezi bileşeni olan "store," uygulamanın tüm durumunu içeren bir nesnedir. Bu durum, uygulamadaki tüm bileşenler tarafından paylaşılır ve merkezi bir yerde tutulur.
// Store işlemi, action ve reducer’ı bir araya getirip yapıyı bağlar. Uygulamanın state’in tutulması, state’e erişim (getState()), ...
// state’in güncellenmesi (dispatch(action)), state’e listener bağlanması (subscribe(listener)) gibi işlemler store üzerinden yönetilir.

import configureStore from "../src/redux/store"; // store path
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
