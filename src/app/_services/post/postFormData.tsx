import { client } from '@services/common/createAxios';
import { ResponseDefaultSetup, ResponseLogin, ResponseType } from '@/app/_types/ResponseType';
import { AdminConfig, InsertUploadProps, LoginFormProps } from '@/app/_types/reqestType';

export async function postLogin(data: LoginFormProps) {
  const res = await client.post<ResponseType<ResponseLogin>>(`/admin/sign-in`, data);
  return res.data;
}

export async function postAdminConfig(data: AdminConfig) {
  const res = await client.post<ResponseType<ResponseDefaultSetup>>(`/admin/sign-in`, data);
  return res.data;
}

export async function postFileUploadIP(data: InsertUploadProps[]) {
  const res = await client.post(`/address/bulk`, data);
  console.log('res-postFileUploadIP', res);
  return res;
}

export async function postInsertIP(data: InsertUploadProps) {
  const res = await client.post(`/address`, data);
  console.log('res-postInsertIP', res);
  return res;
}
