"use server";

export const boundedAction = async (id: string, data: FormData) => {
  console.log("I'm an bounded action like shown in the docs: ", id, data);
};

export const regularActionWithUseFormState = async (
  prevState: any,
  data: FormData
) => {
  console.log("I'm trying to use useFormState: ", prevState, data);
};

export const boundedActionWithUseFormState = async (
  id: string,
  prevState: any,
  data: FormData
) => {
  console.log(
    "I'm trying to use useFormState with a binded id: ",
    id,
    prevState,
    data
  );
};
