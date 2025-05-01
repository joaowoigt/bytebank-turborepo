export interface AccountUseCase {
  execute(): Promise<string>;
}
