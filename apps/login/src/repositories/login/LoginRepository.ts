export interface LoginRepository {
  login: (email: string, password: string) => Promise<string>;
}
