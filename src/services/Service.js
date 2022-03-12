
const serverEnv = "https://localhost:5001/";
// const serverEnv = "https://coraldetectionmodel.azurewebsites.net/";

export const fetchData = async (url, method, payload = {}) => {

  try {
    if (method.toLowerCase() === 'get') {
      const response = await fetch(`${serverEnv}${url}`, {
        mode: "cors",
        method: method,
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })

      return await response.json();
    }
    
    if (method.toLowerCase() === 'post') {
      const response = await fetch(`${serverEnv}${url}`, {
        mode: "cors",
        method: method,
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      return await response.json();
    }
  } catch (error) {
    return new Error("Internal Server Error");
  }
}