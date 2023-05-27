import { createMocks } from "node-mocks-http";
import email from "@/pages/api/email";

describe("/api/email", () => {
  test("returns a message with the specified animal", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        email: "premjha3010@gmail.com",
        eventId: "london",
      },
    });

    await email(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message:
          "You have been registered successfully with the email: premjha3010@gmail.com for the event: london",
      })
    );
  });
});
