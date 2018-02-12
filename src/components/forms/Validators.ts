/* tslint:disable: max-line-length */
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const required = (value?: string, pristine?: boolean): string => {
  return !pristine && (value === undefined || value === '') ? 'required' : '';
};

export const email = (value?: string, pristine?: boolean): string => {
  return (pristine || emailRegex.test(value || '')) ? '' : 'invalid-email';
};
