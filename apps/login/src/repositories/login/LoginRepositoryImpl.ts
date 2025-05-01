import http from "../http";
import { LoginRepository } from "./LoginRepository";

export class LoginRepositoryImpl implements LoginRepository {
  async login(email: string, password: string): Promise<string> {
    const response = await http.post("/user/auth", { email, password });
    return response.data.result.token;
  }
}
