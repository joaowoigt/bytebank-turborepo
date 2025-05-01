export class StatementUseCaseImpl {
  constructor(private dashboardRepository: any) {}

  async execute(accountId: string): Promise<any> {
    if (!accountId) {
      throw new Error("Account ID is required");
    }

    try {
      const transactions =
        await this.dashboardRepository.fetchStatement(accountId);
      const balance = transactions.reduce(
        (acc: number, transaction: any) => acc + transaction.amount,
        0
      );
      return { transactions, balance };
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch statement data");
    }
  }
}
