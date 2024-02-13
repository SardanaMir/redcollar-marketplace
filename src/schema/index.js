import * as Yup from "yup";

export const schema = Yup.object().shape({
  value: Yup.string().min(4).required(),
});
