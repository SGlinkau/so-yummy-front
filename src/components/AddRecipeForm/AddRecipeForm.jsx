import { addRecipeService } from 'services/recipe.service';
import TextInput from './Inputs/Text';
import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { useFieldArray } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { routes } from 'constants/routes';
import { storage } from 'constants/storageKeys';
import { toast } from 'react-toastify';
import { schema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import File from './Inputs/File';

export default function AddRecipeForm() {
  const navigate = useNavigate();

  // const [isLoading, setIsLoading] = useState(false);
  const [thumb, setFile] = useState('');
  const [title, setTitle] = useLocalStorage(storage.TITLE, '');
  const [description, setDescription] = useLocalStorage(
    storage.DESCRIPTION,
    ''
  );
  const [instructions, setInstructions] = useLocalStorage(
    storage.INSTRUCTIONS,
    ''
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      thumb,
      title,
      description,
      category: 'Breakfast',
      time: '5',
      ingredients: [{ id: '', measure: '' }],
      instructions,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const onSubmitHandler = async data => {
    try {
      //  setIsLoading(true);
      const formData = new FormData();
      formData.append('thumb', data.thumb[0]);
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('time', data.time);
      formData.append('ingredients', JSON.stringify(data.ingredients));
      formData.append('instructions', data.instructions);

      await addRecipeService(formData);

      toast.success('Recipe added to your collection');

      localStorage.removeItem(storage.TITLE);
      localStorage.removeItem(storage.DESCRIPTION);
      localStorage.removeItem(storage.INSTRUCTIONS);

      navigate(routes.MY_RECIPES_PAGE);
    } catch (error) {
      toast.error(error.message);
    } finally {
      //  setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {register && (
        <>
          <div>
            <File
              register={register}
              setFile={setFile}
              errors={errors}
              thumb={thumb}
            />
          </div>
          <TextInput
            errors={errors}
            register={register}
            setValue={setTitle}
            field="title"
            placeholder="Enter item title"
          />
          <TextInput
            errors={errors}
            register={register}
            setValue={setDescription}
            field="description"
            placeholder="Enter about recipe"
          />
        </>
      )}
    </form>
  );
}
