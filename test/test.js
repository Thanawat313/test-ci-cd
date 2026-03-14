const request = require("supertest");
const app = require("../app");

describe("API Test Suite", () => {
    it("ควรจะตอบกลับด้วยข้อความที่ถูกต้องที่ Path /", async () => {
        const res = await request(app).get("/");
        
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("DevSecOps Mini Project Running");
    });
});