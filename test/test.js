const request = require("supertest");
const app = require("../app");

describe("API Test", () => {
    // ถ้ายังมีปัญหาค้าง ให้ใช้ท่านี้เพื่อบังคับปิด connection หลังเทสต์เสร็จ
    afterAll(async () => {
        // ในกรณีที่มี database connection ให้ close ตรงนี้ด้วยครับ
    });

    it("GET / should return message", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("DevSecOps Mini Project Running");
    });
});