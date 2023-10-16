interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Cleaning Staff'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Cleaning Staff', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'Book House Cleaning Online v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Book an appointment.',
    'View available services.',
    'View appointment status.',
    'Update personal information.',
  ],
  ownerAbilities: ['Read task status', 'Update task status', 'Read appointment details', 'Update appointment status'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a67cd079-6791-4e3e-96c9-b8e378e1a19c',
};
