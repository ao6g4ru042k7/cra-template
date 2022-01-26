import { GlobEnvConfig } from '../../types/global';

export function getAppEnvConfig() {
  const { REACT_APP_PORT, REACT_APP_API_URL } = process.env;

  return {
    REACT_APP_API_URL,
    REACT_APP_PORT: Number(REACT_APP_PORT),
  } as unknown as GlobEnvConfig;
}
