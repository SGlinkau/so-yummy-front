export default function TextInput(
  register,
  setValue,
  errors,
  field,
  placeholder
) {
  return (
    <label htmlFor="">
      <input
        type="text"
        placeholder={placeholder}
        {...register(field, {
          onChange: e => setValue(e.target.value),
        })}
      />
      {errors[field] && <p>{errors[field]?.message}</p>}
    </label>
  );
}
