
export function calculateTotalFee(configuration: string): number {
  const FORM_FEE = configuration === 'Shop' ? 30500 : 22800;
  const COMPULSORY = 300000;
  return FORM_FEE + COMPULSORY;
}
