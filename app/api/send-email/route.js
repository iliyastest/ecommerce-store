import { Resend } from "resend";
import { EmailTemplate } from "../../_components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    if (!body.email) {
      return new Response(JSON.stringify({ error: "No email provided" }), {
        status: 400,
      });
    }

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // I dont have a domain name so i can only send to the email that i sign up
      // with in resend if you whant to see the message please sign up with this email in the ecommerce store
      to: [body.email], // testiliass756@gmail.com  Test0000
      subject: "Orders From Ecommerce Tech",
      react: <EmailTemplate body={body} />,
    });

    return new Response(JSON.stringify(response));
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
