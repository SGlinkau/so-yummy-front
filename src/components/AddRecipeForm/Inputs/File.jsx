export default function File({ register, setFile, errors, thumb }) {
  return (
    <label>
      <input
        type="file"
        accept="image/*,.png,.jpg,.web"
        {...register('thumb', {
          onChange: e => setFile(URL.createObjectURL(e.target.files[0])),
        })}
      />
      {errors.thumb && <p>{errors.thumb?.message}</p>}
      {thumb && !errors.thumb && (
        <div>
          <img src={thumb} alt="Recipe" />
        </div>
      )}
      <div>
        {/* <StyledCamera /> */}
      </div>
    </label>
  );
}
