"use server";

import { AuthError } from "next-auth";
import { signIn } from "../../auth";
import { redirect } from "next/navigation";

const getFormData = (data, name) => {
  const symbolKey = Object.getOwnPropertySymbols(data)[0];
  return data[symbolKey].find((field) => field.name === name)?.value || "";
};

export async function authenticate(prevState, formData) {
  const email = getFormData(formData, "email");
  const password = getFormData(formData, "password");
  console.log("Email:", email, "Password:", password);
  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function signUp(prevState, formData) {
  try {
    const firstName = getFormData(formData, "firstname");
    const lastName = getFormData(formData, "lastname");
    const email = getFormData(formData, "email");
    const password = getFormData(formData, "password");
    console.log("FORM DATA", formData);
    console.log("FIRST NAME", firstName);
    console.log("LAST NAME", lastName);
    console.log("EMAIL", email);
    console.log("PASSWORD", password);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "connect.sid=s%3Asy-duVe_pSqxOPgfrdXzYhoQAnmYiFFe.%2FF35UeNJpeyXtyc5wIUYxtKRg4MyXWUllXjNSfrzzWo; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYyMDE0Y2Q2ZmViYmFjMjNmMmNmNyIsImlhdCI6MTcxNjYyODUwMSwiZXhwIjoxNzE5MjIwNTAxfQ.V2Ja8MQk2YsLkm56ZfIDLD083PWCJMzAPdKmeJr36AM",
    );
    const raw = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      gender: "male",
      email: email,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let userResponse;
    const user = await fetch(
      `${process.env.BASE_URL}/auth/register`,
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => (userResponse = result))
      .catch((error) => console.error(error));
    console.log("USER RESPONSE", userResponse);
    if (JSON.parse(userResponse).success) {
      return "Success";
    }
    return JSON.parse(userResponse).message;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    switch (error.type) {
      case "CredentialsSignin":
        return "Invalid credentials.";
      default:
        return "Something went wrong.";
    }
  }
}

export const verifyEmailOTP = async (email, OTP) => {
  console.log("Email,", email, "OTP,", OTP);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "connect.sid=s%3Asy-duVe_pSqxOPgfrdXzYhoQAnmYiFFe.%2FF35UeNJpeyXtyc5wIUYxtKRg4MyXWUllXjNSfrzzWo; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYyMDE0Y2Q2ZmViYmFjMjNmMmNmNyIsImlhdCI6MTcxNjYyODUwMSwiZXhwIjoxNzE5MjIwNTAxfQ.V2Ja8MQk2YsLkm56ZfIDLD083PWCJMzAPdKmeJr36AM",
  );

  const raw = JSON.stringify({
    email: email,
    otp: parseInt(OTP),
  });
  console.log("RAW", raw);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  let res;

  await fetch(`${process.env.BASE_URL}/auth/verify-otp`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      res = result;
    })
    .catch((error) => console.error(error));
  return res;
};
