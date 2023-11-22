import { useForm } from 'react-hook-form';
import { Button, Input, TextArea } from '@/home-work-components';
import styles from './FormReview.module.css';
import axios from 'axios';

interface IFieldValues {
  name: string;
  description: string;
}

const FormReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFieldValues>();

  const onSubmit = async (formData: IFieldValues) => {
    try {
      const { data } = await axios.post('/api/review', {
        ...formData,
      });
      alert(data.message);
    } catch (e) {
      console.error(e instanceof Error ? e.message : 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        type="text"
        placeholder="Имя"
        {...register('name', {
          required: { value: true, message: `Required name` },
        })}
        error={errors.name}
      />
      <TextArea
        placeholder="Комментарий"
        {...register('description', {
          required: { value: true, message: `Required comment` },
        })}
        error={errors.description}
      />
      <Button appearance="black" className={styles.btn} type="submit">
        Отправить
      </Button>
    </form>
  );
};

export default FormReview;
