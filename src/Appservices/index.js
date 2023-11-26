export const getData = async() => {
    const result = await fetch('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return result.json();
  }
  