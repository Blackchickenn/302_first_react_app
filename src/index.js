import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import "./style.css"

function CustomPage(){
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}



ReactDOM.render(<CustomPage />, document.getElementById("root"))