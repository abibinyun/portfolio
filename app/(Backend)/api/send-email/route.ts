import nodemailer from "nodemailer";

const emailTemplate = (imei: string, user: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMEI Status Active</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            color: #333333;
        }
        .content p {
            line-height: 1.6;
        }
        .content .imei-box {
            background-color: #f0f8ff;
            padding: 15px;
            border: 1px solid #007bff;
            border-radius: 5px;
            font-weight: bold;
            text-align: center;
            margin: 20px 0;
        }
        .footer {
            background-color: #f1f1f1;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #666666;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Your IMEI Status</h1>
        </div>
        <div class="content">
            <p>Hello <strong>${user}</strong>,</p>
            <p>Based on your request to check the IMEI status of your device, here are the results:</p>
            <div class="imei-box">
                IMEI: <strong>${imei}</strong> <br>
                Status: <span style="color: ${imei === "358686324585680" ? "#28a745" : "#dc3545"};">
                    ${imei === "358686324585680" ? "Active" : "Not Registered"}
                </span>
            </div>

            ${imei === "358686324585680" ? `
                <p>With an <strong>Active</strong> status, your device is officially registered and can be used without any issues.</p>
            ` : `
                <p>Unfortunately, the IMEI number you provided is not registered. Please ensure the IMEI is correct or contact customer support for further assistance.</p>
            `}

            <br />
            <p>If you have further questions, please feel free to contact our customer support.</p>
            <p>Thank you for using our service.</p>
            <p>Warm regards,</p>
            <p><strong>GSM Pairing Tool</strong></p>
        </div>

        <div style="text-align: center; padding: 10px; font-size: 12px; color: #666666;">
            <p>&copy; 2024 GSM Pairing Tool. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { recipientEmail, imei, from, subject, message } = body;

    if(imei) {
      if (!recipientEmail || !imei ) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "All fields (recipientEmail, imei) are required.",
          }),
          { status: 400 }
        );
      }

      const gmail_1_app_key = process.env.SANDI_APLIKASI_GMAIL_GSMPAIRINGTOOL

      if (!gmail_1_app_key) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Gmail token is not set in the environment.",
          }),
          { status: 500 }
        );
      }

      const transport = nodemailer.createTransport(
        {
          host:'smtp.gmail.com',
          port:465,
          secure: true,
          auth: {
              user: 'gsmpairingtool@gmail.com',
              pass: gmail_1_app_key
          }
        }
      );

      const sender = {
        address: "gsmpairingtool@example.com", // Ganti sesuai kebutuhan
        name: "GSM Pairing Tool",
      };

      const userName = recipientEmail.split('@')[0];

      const emailContent = emailTemplate(imei, userName );
      
      await transport.sendMail({
        from: sender,
        to: recipientEmail,
        subject: "Check Status From Server",
        html: emailContent,
      });
    }

    if(from) {
      if (!from || !subject || !message ) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "All fields (to, subject, message) are required.",
          }),
          { status: 400 }
        );
      }

      const gmail_2_app_key = process.env.SANDI_APLIKASI_GMAIL_JOBS_MUHAMMADBILAL

      if (!gmail_2_app_key) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Gmail token is not set in the environment.",
          }),
          { status: 500 }
        );
      }

      const transport = nodemailer.createTransport(
        {
          host:'smtp.gmail.com',
          port:465,
          secure: true,
          auth: {
              user: 'jobs.muhammadbilal@gmail.com',
              pass: gmail_2_app_key
          }
        }
      );
      
      const sender = {
        address: from,
        name: `Message from ${from}`,
      };
      
      await transport.sendMail({
        from: sender,
        to: "jobs.muhammadbilal@gmail.com",
        subject: subject,
        text: message
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email.",
        error: error,
      }),
      { status: 500 }
    );
  }
}
