import Layout from "../components/Layout/Layout";
import {Outlet} from "react-router-dom";
import Products from "../pages/Products/Products";

export default function Root() {

    return (
        <>
            <Layout>
                <Outlet />
            </Layout>
        </>
    );
}