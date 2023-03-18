import Layout from "../components/Layout/Layout";
import {Outlet} from "react-router-dom";

export default function Root() {
    return (
        <>
            <Layout>
                <Outlet/>
            </Layout>
        </>
    );
}