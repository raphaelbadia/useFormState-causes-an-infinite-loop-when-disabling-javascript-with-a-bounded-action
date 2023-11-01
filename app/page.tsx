"use client";
import { useFormState } from "react-dom";
import {
  boundedAction,
  boundedActionWithUseFormState,
  regularActionWithUseFormState,
} from "./action";

export default function Home() {
  return (
    <>
      <Works />
      <WorksToo />
      <DoesntWork />
    </>
  );
}

function Works() {
  const action = boundedAction.bind(null, "this-id-works");

  return (
    <form action={action}>
      <input name="hello" />
      <button type="submit">submit action.bind(null, id)</button>
    </form>
  );
}

function WorksToo() {
  const [state, formAction] = useFormState(regularActionWithUseFormState, {});
  return (
    <form action={formAction}>
      <input name="hello" />
      <button type="submit">submit formAction (from useFormState)</button>
    </form>
  );
}

function DoesntWork() {
  const action = boundedActionWithUseFormState.bind(null, "this-crashes");
  const [state, formAction] = useFormState(action, {});
  return (
    <form action={formAction}>
      <input name="hello" />
      <button type="submit">
        trigger infinite loop (action.bind(null, id) with useFormState)
      </button>
    </form>
  );
}
