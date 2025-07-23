import React from "react";
import ReactDOM from "react-dom/client";
import WxccWhatsapp from "./components/WxccWhatsapp";

console.log("[wxcc-whatsapp] script loaded");

class WxccWhatsappElement extends HTMLElement {
  connectedCallback() {
    console.log("[wxcc-whatsapp] Custom element connected");
    const root = this.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    root.appendChild(container);
    ReactDOM.createRoot(container).render(<WxccWhatsapp />);
  }
}

if (!customElements.get("wxcc-whatsapp")) {
  customElements.define("wxcc-whatsapp", WxccWhatsappElement);
}
