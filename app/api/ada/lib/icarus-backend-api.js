import axios from 'axios';

const BackendApiRoute = '18.206.30.1';
const BackendApiPort = 443;

// TODO: Refactor service call in order to re-use common parameters
// TODO: Map errors in a more specific way

export const getUTXOsForAddresses = addresses =>
  axios(`https://${BackendApiRoute}:${BackendApiPort}/api/txs/utxoForAddresses`,
    {
      method: 'post',
      responseType: 'application/json',
      data: {
        addresses
      }
    }
  ).then(response => response.data);

export const getTransactionsHistoryForAddresses = addresses =>
  axios(`https://${BackendApiRoute}:${BackendApiPort}/api/txs/history`,
    {
      method: 'post',
      responseType: 'application/json',
      data: {
        addresses
      }
    }
  ).then(response => response.data);

export const sendTx = signedTx =>
  axios(`https://${BackendApiRoute}:${BackendApiPort}/api/txs/signed`,
    {
      method: 'post',
      responseType: 'application/json',
      data: {
        signedTx
      }
    }
  ).then(response => response.data);