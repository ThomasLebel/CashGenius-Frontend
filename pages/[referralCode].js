import Home from "../components/Homepage/Home"
import Head from "next/head";
import { useRouter } from 'next/router';
import {useEffect } from "react";

function Index() {

  const router = useRouter();
  const { referralCode } = router.query;

  useEffect(() => {
    if(referralCode){
        fetch(`${process.env.NEXT_PUBLIC_SERVER_IP}/users/addClick`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({referralCode}),
        }).then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
  },[referralCode])

  return (
    <>
      <Head>
        <title>Accueil - Cash Genius</title>
        <meta name="description" content="Participe gratuitement au Genius Programme qui permet d'optimiser les offres de bienvenue des bookmakers français."/>
        <meta name="keywords" content="cash genius, genius programme, programme genius, programme paris sportifs, bonus bookmakers"/>
      </Head>
      <Home referralCode={referralCode}/>
    </>
  );
}

export default Index;
