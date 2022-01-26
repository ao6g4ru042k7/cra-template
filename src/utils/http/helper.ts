export function composeParams(params: Record<any, any>) {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
}
