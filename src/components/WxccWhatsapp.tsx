import React, { useEffect, useState } from "react";
import { Desktop } from "@wxcc-desktop/sdk";

const WxccWhatsapp = () => {
  const [agentState, setAgentState] = useState("");

  useEffect(() => {
    console.log("[wxcc-whatsapp] Initializing SDK...");

    Desktop.config()
      .then((config) => {
        console.log("[wxcc-whatsapp] Config:", config);
      })
      .catch((err) => {
        console.error("[wxcc-whatsapp] Error getting config", err);
      });

    const unsubscribe = Desktop.agent().on("stateChange", (state) => {
      console.log("[wxcc-whatsapp] Agent state changed:", state);
      setAgentState(state?.state || "unknown");
    });

    return () => {
      unsubscribe?.();
    };
  }, []);

  return (
    <div>
      <h3>🟢 WhatsApp Widget (WxCC)</h3>
      <p>Estado del agente: <strong>{agentState}</strong></p>
    </div>
  );
};

export default WxccWhatsapp;