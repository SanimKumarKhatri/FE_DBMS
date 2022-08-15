import Head from "next/head";
import Footer from "../components/footer";

export default ({statusCode}) => (
    <>
    <Head tittle='Error!!'/>
    {statusCode 
        ? `Couldnt load user data: Status Code ${statusCode}`
        :`Sorry, couldn't find that page!`}
    <Footer />
    </>
);