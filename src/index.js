import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "react-toastify/dist/ReactToastify.css"
import './index.css';
import {QueryClient,QueryClientProvider} from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"
const query = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<QueryClientProvider client={query}>
<App />
{/* <ReactQueryDevtools/> */}
</QueryClientProvider>


);

