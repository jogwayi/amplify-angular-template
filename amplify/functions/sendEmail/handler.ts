export const handler = async (event: any) => {

  try {
    const body = typeof event.body === "string"
      ? JSON.parse(event.body)
      : event.body;

    console.log("Incoming payload:", body);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Email sent successfully" }),
        };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
}