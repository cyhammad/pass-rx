"use server";

import { AuthError } from "next-auth";
import { signIn } from "../../auth";

export async function authenticate(prevState, formData) {
  const getFormData = (data, name) => {
    const symbolKey = Object.getOwnPropertySymbols(data)[0];
    return data[symbolKey].find((field) => field.name === name)?.value || "";
  };
  const email = getFormData(formData, "email");
  const password = getFormData(formData, "password");
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
