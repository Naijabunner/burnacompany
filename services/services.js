export const fetchApi = async (url, options) => {
  let parsedRes = null;
  const response = await fetch(url, options);
  console.log(parsedRes)
  let res = await response.json();
    parsedRes =
      {
        response: response,
        parsedres: res,
      } || "Unknown error occurred";
 
  return parsedRes;
};
