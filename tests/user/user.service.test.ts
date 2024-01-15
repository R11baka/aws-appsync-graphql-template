import { UserService } from "../../src/user/user.service";

describe("UserService", () => {

  it("should return users", () => {
      const userService = new UserService();
      const users = userService.getUsers();
      expect(users.length).toBeGreaterThan(0);
    }
  );

});
