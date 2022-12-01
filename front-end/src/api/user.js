export const UserLogin = async (Userinfo) => {
    let apiData;
    await fetch(`http://localhost:3000/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Userinfo),
    })
      .then(async (response) => {
        return {
          ok: response.ok,
          status: response.status,
          data: await response.json(),
        };
      })
      .then((data) => {
        if (data.ok) {
          apiData = data;
        }
      })
      .catch((error) => {
        apiData = false;
        console.error("Error:", error);
      });
  
    return apiData;
  };
export const UserGet = async () => {
    let apiData;
    await fetch(`http://localhost:3000/Signup`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then(async (response) => {
        return {
          ok: response.ok,
          status: response.status,
          data: await response.json(),
        };
      })
      .then((data) => {
        if (data.ok) {
          apiData = data;
        }
      })
      .catch((error) => {
        apiData = false;
        console.error("Error:", error);
      });
  
    return apiData;
  };
export const SignupApi = async (Signupinfo) => {
    let apiData;
    await fetch(`http://localhost:3000/Signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Signupinfo),
    })
      .then(async (response) => {
        return {
          ok: response.ok,
          status: response.status,
          data: await response.json(),
        };
      })
      .then((data) => {
        if (data.ok) {
          apiData = data;
        }
      })
      .catch((error) => {
        apiData = false;
        console.error("Error:", error);
      });
  
    return apiData;
  };