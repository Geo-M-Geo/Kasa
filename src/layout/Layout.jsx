import React from "react";
import Header from "../layout/Header/header";
import Footer from "../layout/Footer/footer";

// Component that take the header and the footer and include the children in the middle, so further the paths
function Layout({children}) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default Layout;