import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';


const client = new ApolloClient({uri: 'https://api.devcdc.com/cricket' });

ReactDOM.render(
<ApolloProvider client={client}>
	<App />
</ApolloProvider>
	,document.getElementById('root'));


