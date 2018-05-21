// @flow
import type {
  AdaWallet,
  AdaAddress
} from '../types';
import type { AdaWalletParams } from '../ada-methods';

/* @note: Ada wallet is the abstraction for Daedalus */
export function toAdaWallet({ walletPassword, walletInitData }: AdaWalletParams): AdaWallet {
  const { cwAssurance, cwName, cwUnit } = walletInitData.cwInitMeta;
  return {
    cwAccountsNumber: 1,
    cwAmount: {
      getCCoin: 0
    },
    cwHasPassphrase: !!walletPassword,
    cwId: '1111111111111111',
    cwMeta: {
      cwAssurance,
      cwName,
      cwUnit
    },
    cwPassphraseLU: new Date()
  };
}

export function toAdaAddress(
  accountIndex: number,
  addressType: string,
  addressIndex: number,
  addresHash: string
): AdaAddress {
  return {
    cadAmount: {
      getCCoin: 0
    },
    cadId: addresHash,
    cadIsUsed: false,
    account: accountIndex,
    change: getAddressTypeIndex(addressType),
    index: addressIndex
  };
}

function getAddressTypeIndex(addressType) {
  if (addressType === 'External') return 0;
  return 1; // addressType === 'Internal;
}