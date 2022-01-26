import defHttp from './defHttp';

import {
  createOptionParams,
  optionsItemResponse,
  selectParams,
} from './model/optionModel';

/**
 * @description: Get sample options value
 */
export const getOptions = (params?: selectParams) =>
  defHttp.get<optionsItemResponse>('test', { params });

export const createOption = (params: createOptionParams) =>
  defHttp.post<optionsItemResponse>(
    `test/${params.id}`,
    {
      title: params.title,
    },
    {
      params: {
        message: params.message,
      },
    }
  );
