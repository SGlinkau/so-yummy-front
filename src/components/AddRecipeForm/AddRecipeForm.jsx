export default function AddRecipeForm() {
  return (
    <form>
      <div>
        <input
          type="file"
          accept="image/*,.png,.jpg,.web,.jpeg,.gif"
          {...register('thumb', {
            onChange: e => setFile(URL.createObjectURL(e.target.files[0])),
          })}
        />
      </div>
      <input
        type="text"
        placeholder="Enter item title"
        {...register(field, {
          onChange: e => setValue(e.target.value),
        })}
      />
    </form>
  );
}
