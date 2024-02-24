// import React from 'react';
// import { useForm } from 'react-hook-form';

// function TextInputw() {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="example" ref={register} />
//       <input type="submit" />
//     </form>
//   );
// }

// export default TextInputw;

import React, { useState } from 'react';

function TextInputw() {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="example"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default TextInputw;
