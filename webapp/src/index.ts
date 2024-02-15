/**15.22 DISPLAY HTML CONTENT */
import { DomDisplay } from "./domDisplay";
import "bootstrap/dist/css/bootstrap.css";

import { RemoteDataSource } from "./data/remoteDataSource";
import { HtmlDisplayFeatures } from "./htmlDisplayFeatures";
let ds = new RemoteDataSource();

function displayDataFeatures(): Promise<HTMLElement> {
    let display = new HtmlDisplayFeatures();
    display.props = {
        dataSource: ds
    }
    return display.getContent();
    
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        displayDataFeatures().then(elem => {
            let rootElement = document.getElementById("app");
            rootElement.innerHTML = "";
            rootElement.appendChild(elem)
        });
    }
};