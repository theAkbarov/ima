import Head from 'next/head'
import Banner from "../containers/Banner/Banner.js";
import Layout from "../containers/layout/Layout.js";
import Services from "../containers/services/services";
import Calculator from "../containers/Calculator/index.js";
import Payment from "../containers/Payment/index.js";
export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:wght@300;500;600;700;800&family=Poppins:wght@100;200;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Services />
      <Calculator />
      <Payment />
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};