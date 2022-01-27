import defHttp from './defHttp';
import {
  CreateOptionParams,
  OptionsItemResponse,
  SelectParams,
} from './model/optionModel';

/**
 * @description: Get sample options value
 */
export const getOptions = (params?: SelectParams) =>
  defHttp.get<OptionsItemResponse>('test', { params });

export const createOption = (params: CreateOptionParams) =>
  defHttp.post<OptionsItemResponse>(
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
