export class AccountUseCaseImpl {
  constructor(private dashboardRepository: any) {}

  async execute(): Promise<string> {
    try {
      const accountId = await this.dashboardRepository.fetchAccount();
      return accountId;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch account data");
    }
  }
}
