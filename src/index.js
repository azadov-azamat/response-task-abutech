import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from "react-dom/client";

const app = (
    <App/>
)
const container = document.getElementById("root")

const root = createRoot(container)
root.render(app)
