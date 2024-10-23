//@ts-nocheck
/**
 * Handles errors from fetch requests and throws a descriptive error based on status code.
 * @param {Response} response - The fetch response object.
 * @throws {Error} Throws an error if the response is not OK.
 */
export const handleFetchError =  (status, message) => {
  console.log(message)
    let errMssg;
    switch (status) {
      case 400:
        errMssg =message;
      case 401:
        errMssg =message;
      case 403:
        errMssg =message;
      case 404:
        errMssg ="Not Found";
      case 405:
        errMssg =message;
      case 408:
        errMssg =message;
      case 500:
        errMssg =message;
      case 502:
        errMssg =message;
      case 503:
        errMssg =message;
      case 504:
        errMssg =message;
      default:
        errMssg =message;
    }
    return errMssg;
  };

  export function objectToFormData(obj, formData = new FormData(), parentKey = '') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const formKey = parentKey ? `${parentKey}[${key}]` : key;

        if (value instanceof File) {
          // Handle File objects
          formData.append(formKey, value);
        } else if (Array.isArray(value)) {
          // Handle arrays
          value.forEach((item) => {
            formData.append(`${formKey}`, item);
          });
        } else if (value && typeof value === "object") {
          // Handle nested objects
          objectToFormData(value, formData, formKey);
        } else {
          // Handle primitive types
          formData.append(formKey, value);
        }
      }
    }

    // Log the FormData entries
    // for (let pair of formData.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }
    //   console.log(Object.fromEntries(formData))
    
    return formData;
  }

  // This turns an array to string using a seperator inbtw ykwim??
export function arrString(arr, seperator) {
  const newString = arr.join(seperator);
  return newString;
}



// this fuction validates an object keys 
export function validateObject(obj) {
  const emptyKeys = [];
  for (const key in obj) {
      if (obj.hasOwnProperty(key) && !obj[key]) {
          emptyKeys.push(key);
      }
  }

  if (emptyKeys.length === 0) {
      return { isValid: true, message: 'Validation completed.' };
  } else {
      return { isValid: false, message: `Missing values for keys: ${emptyKeys.join(', ')}` };
  }
}


export function formatDate(dateString: string) {
  // Create a date object from the input string
  const date = new Date(dateString);
  
  // Define an array of month names
  const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
  ];
  
  // Get the month, day, and year
  const month = months[date.getUTCMonth()]; // Month is zero-indexed
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  
  // Format and return the string
  return `${month} ${day}, ${year}`;
}
