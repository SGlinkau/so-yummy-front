import React from 'react';
import { useForm } from 'react-hook-form';

function TextInputw() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" ref={register} />
      <input type="submit" />
    </form>
  );
}

export default TextInputw;
