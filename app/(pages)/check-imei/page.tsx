"use client";
import { useState } from "react";

const SendEmailPage = () => {
  const [recipientEmail, setRecipientEmail] = useState<string>("");
  const [imei, setImei] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const requestData = {
      recipientEmail,
      imei,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      if (data.success) {
        setResponseMessage("Email sent successfully!");
      } else {
        setResponseMessage("Failed to send email: " + data.message);
      }
    } catch (error: any) {
      setResponseMessage("Error sending email: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1 className="font-bold text-xl">Send Email</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="recipientEmail">Recipient Email</label>
          <input
            type="email"
            id="recipientEmail"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            className="border-2 border-slate-400 rounded-3xl"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="subject">IMEI</label>
          <input type="text" id="subject" value={imei} onChange={(e) => setImei(e.target.value)} required style={{ width: "100%", padding: "8px", marginTop: "5px" }} className="border-2 border-slate-400 rounded-3xl" />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isLoading ? "Sending..." : "Send Email"}
        </button>
      </form>

      {responseMessage && (
        <div style={{ marginTop: "20px" }}>
          <strong>{responseMessage}</strong>
        </div>
      )}
    </div>
  );
};

export default SendEmailPage;
