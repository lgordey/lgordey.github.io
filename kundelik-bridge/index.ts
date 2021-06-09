import promisifyMethod from './promisifyMethod';

type OK	= 'OK';
type PERMISSION_DENIED	= 'PERMISSION_DENIED';
type UNEXPECTED	= 'UNEXPECTED';

interface GenericError<ErrorCodes> {
  code: ErrorCodes;
  msg: string;
}

interface Response<Data, ErrorCodes> {
  data: Data;
  error: GenericError<ErrorCodes>;
}

type GetKundelikAuthTokenResponse = Response<{
  authToken: string;
}, OK | PERMISSION_DENIED | UNEXPECTED>;

type OpenSettingsResponse = Response<never, OK | UNEXPECTED>;

type GetContactsResponse = Response<{
  contacts: Array<{
    first_name: string;
    last_name: string;
    phone: string;
  }>;
}, OK | PERMISSION_DENIED | UNEXPECTED>;

interface AituBridge {
  getKundelikAuthToken: () => Promise<GetKundelikAuthTokenResponse>;
  openSettings: () => Promise<OpenSettingsResponse>;
  getContacts: () => Promise<GetContactsResponse>;
  isSupported: () => boolean;
  supports: (method: string) => boolean;
  sub: any;
}

const getKundelikAuthTokenMethod = 'getKundelikAuthToken';
const openSettingsMethod = 'openSettings';
const getContactsMethod = 'getContacts';

const android = typeof window !== 'undefined' && (window as any).aitu_embedded_bridge;
const ios = typeof window !== 'undefined' && (window as any).webkit && (window as any).webkit.messageHandlers;

const buildBridge = (): AituBridge => {
  const subs = [];

  if (typeof window !== 'undefined') {
    window.addEventListener('aituEvents', (e: any) => {
      [...subs].map((fn) => fn.call(null, e));
    })
  }

  const getKundelikAuthToken = (requestId) => {
    const isAndroid = android && android[getKundelikAuthTokenMethod];
    const isIos = ios && ios[getKundelikAuthTokenMethod];

    if (isAndroid) {
      android[getKundelikAuthTokenMethod](requestId);
    } else if (isIos) {
      ios[getKundelikAuthTokenMethod].postMessage({ requestId });
    } else if (typeof window !== 'undefined') {
      console.log('--getKundelikAuthToken-isWeb');
    }
  }

  const openSettings = (requestId) => {
    const isAndroid = android && android[openSettingsMethod];
    const isIos = ios && ios[openSettingsMethod];

    if (isAndroid) {
      android[openSettingsMethod](requestId);
    } else if (isIos) {
      ios[openSettingsMethod].postMessage({ requestId });
    } else if (typeof window !== 'undefined') {
      console.log('--openSettings-isWeb');
    }
  }

  const getContacts = (requestId) => {
    const isAndroid = android && android[getContactsMethod];
    const isIos = ios && ios[getContactsMethod];

    if (isAndroid) {
      android[getContactsMethod](requestId);
    } else if (isIos) {
      ios[getContactsMethod].postMessage({ requestId });
    } else if (typeof window !== 'undefined') {
      console.log('--getContacts-isWeb');
    }
  }

  const isSupported = () => {
    return Boolean(android || ios);
  }

  const supports = (method) =>
    (android && typeof android[method] === 'function') ||
    (ios && ios[method] && typeof ios[method].postMessage === 'function');

  const sub = (listener: any) => {
    subs.push(listener);
  }

  const getKundelikAuthTokenPromise = promisifyMethod(getKundelikAuthToken, sub);
  const openSettingsPromise = promisifyMethod(openSettings, sub);
  const getContactsPromise = promisifyMethod(getContacts, sub);

  return {
    getKundelikAuthToken: getKundelikAuthTokenPromise,
    openSettings: openSettingsPromise,
    getContacts: getContactsPromise,
    isSupported,
    supports,
    sub
  }
}

const bridge = buildBridge();

export default bridge;
