import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import { Header } from "home/Header";
import { Footer } from "home/Footer";
import SafeComponent from "./SafeComponent";
const App = () => (
  <div className="">
            <SafeComponent>
            <Suspense fallback={<div>Loading…</div>}>
            <Header />
            </Suspense>
        </SafeComponent>
    <div className="">
      <p>PDP content</p>
    </div>
    <SafeComponent>
            <Suspense fallback={<div>Loading…</div>}>
                <Footer />
            </Suspense>
        </SafeComponent>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)