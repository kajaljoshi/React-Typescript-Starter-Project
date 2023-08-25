import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/header';
import './App.css';
import ContextProviderWrapper from './context';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <ContextProviderWrapper>
                    <AppRoutes />
                </ContextProviderWrapper>
            </BrowserRouter>
        </div>
    );
}

export default App;
