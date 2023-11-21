import { Button, Input, Rating, Textarea } from '@/components';
import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import styles from './ReviewForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { API } from '@/helpers/api';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  productId: string;
}

interface FormValues {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export const ReviewForm = ({ productId, className }: Props) => {
  const [messageRequest, setMessageRequest] = useState<string | null>(
    null
  );
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = async (formData: FormValues) => {
    try {
      const { data } = await axios.post<{ message: string }>(
        API.review.createDemo,
        {
          ...formData,
          productId,
        }
      );
      if (data.message) {
        setMessageRequest(data.message);
      }
      return true;
    } catch (err: unknown) {
      setMessageRequest(
        err instanceof Error ? err.message : 'Something went wrong'
      );
      return false;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(styles.form, className)}>
      <Input
        {...register('name', {
          required: { value: true, message: 'Required name' },
        })}
        error={errors.name}
        placeholder="Имя"
      />
      <Input
        {...register('title', {
          required: { value: true, message: 'Required title' },
        })}
        error={errors.title}
        placeholder="Заголовок отзыва"
      />
      <div className={styles.rating}>
        <span>Оценка</span>
        <Controller
          control={control}
          name="rating"
          rules={{
            required: { value: true, message: 'Required rating' },
          }}
          render={({
            field: { value, onChange, ref },
            formState: { errors },
          }) => (
            <Rating
              ref={ref}
              isEditable
              rating={value}
              setRating={onChange}
              error={errors.rating}
            />
          )}
        />
      </div>
      <Textarea
        {...register('description', {
          required: { value: true, message: 'Required description' },
          minLength: {
            value: 20,
            message: 'Min length - 20 letters',
          },
        })}
        error={errors.description}
        placeholder="Текст отзыва"
        className={styles.textarea}
      />
      <div>
        <Button appearance="primary" type="submit">
          Отправить
        </Button>
        <span>
          * Перед публикацией отзыв пройдет предварительную модерацию
          и проверку
        </span>
      </div>
      <div
        className={clsx(styles.sended, {
          [styles.open]: messageRequest,
          [styles.success]: true,
        })}>
        <p>{messageRequest}</p>
        <Button
          type="button"
          appearance="ghost"
          onClick={() => {
            setMessageRequest(null);
          }}>
          X
        </Button>
      </div>
    </form>
  );
};
