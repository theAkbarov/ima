import React from 'react';
import Layout from '../containers/layout/Layout';
import Contacts from '../components/Contacts/Contacts.js'

const contacts = () => {
	return <Contacts />;
};

export default contacts;

contacts.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
