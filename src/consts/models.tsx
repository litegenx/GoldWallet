export enum Route {
  Dashboard = 'Dashboard',
  WalletDetails = 'WalletDetails',
  ContactList = 'ContactList',
  ContactDetails = 'ContactDetails',
  CreateContact = 'CreateContact',
  DeleteContact = 'DeleteContact',
  ContactQRCode = 'ContactQRCode',
  Settings = 'Settings',
  Message = 'Message',
  CreateWallet = 'CreateWallet',
  ImportWallet = 'ImportWallet',
  ExportWallet = 'ExportWallet',
  ImportWalletQRCode = 'ImportWalletQRCode',
  DeleteWallet = 'DeleteWallet',
  ExportWalletXpub = 'ExportWalletXub',
  TransactionDetails = 'TransactionDetails',
  ReceiveCoins = 'ReceiveCoins',
  SendCoins = 'SendCoins',
  SendCoinsConfirm = 'SendCoinsConfirm',
  EditText = 'EditText',
  ElectrumServer = 'ElectrumServer',
  AboutUs = 'AboutUs',
  SelectLanguage = 'SelectLanguage',
  ReleaseNotes = 'ReleaseNotes',
  ActionSheet = 'ActionSheet',
  TransactionSuccess = 'TransactionSuccessScreen',
  SendTransactionDetails = 'SendTransactionDetailsScreen',
  ScanQrCode = 'ScanQrCode',
  ChooseContactList = 'ChooseContactList',
}

export interface Wallet {
  balance: number;
  preferredBalanceUnit: string;
  label: string;
  transactions: any[];
  getBalance: () => void;
  getLatestTransactionTime: () => void;
  getLabel: () => string;
  setLabel: (label: string) => void;
  getAddress: () => string;
  getSecret: () => string;
  getXpub: () => string;
  address: string;
  secret: string;
  type: string;
  typeReadable: string;
}

export interface Contact {
  id: string;
  name: string;
  address: string;
}

export interface Transaction {
  hash: string;
  txid: string;
  value: number;
  time: number;
  walletLabel: string;
  confirmations: number;
  inputs: any[];
  outputs: any[];
  note?: string;
}
