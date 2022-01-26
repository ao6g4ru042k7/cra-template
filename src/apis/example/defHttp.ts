import { getAppEnvConfig } from 'utils/env';
import { createAxios } from 'utils/http/createAxios';

const { REACT_APP_API_URL } = getAppEnvConfig();
const defHttp = createAxios(REACT_APP_API_URL);

export default defHttp;
