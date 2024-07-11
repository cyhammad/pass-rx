"use server";

const { revalidatePath } = require("next/cache");

export const revalidateData = async (path) => {
  "use server";
  revalidatePath(path, "page");
};
