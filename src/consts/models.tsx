export enum Route {
  Dashboard = 'Dashboard',
  WalletDetails = 'WalletDetails',
  AddressBook = 'AddressBook',
  Settings = 'Settings',
  Message = 'Message',
  CreateWallet = 'CreateWallet',
  ImportWallet = 'ImportWallet',
  ExportWallet = 'ExportWallet',
  ImportWalletQRCode = 'ImportWalletQRCode',
  DeleteWallet = 'DeleteWallet',
}

export interface Wallet {
  balance: number;
  preferredBalanceUnit: string;
  label: string;
  transactions: any[];
  getBalance: () => void;
  getLatestTransactionTime: () => void;
  getLabel: () => string;
  getAddress: () => string;
  getSecret: () => string;
  address: string;
  secret: string;
  typeReadable: string;
}