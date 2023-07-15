'use client';
import { InferType, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const schema = object({
  email: string().email('Please insert a valid email').required('Please insert an email'),
});
type FormData = InferType<typeof schema>;

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  function onSubmit() {
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col xsm:flex-row gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            id="email"
            placeholder="Updates in your inbox…"
            className={`text-sm text-blue-900 placeholder:text-gray-400 px-6 py-3 rounded-full w-full focus-visible:ring-2 outline-none focus-visible:ring-red-500 relative ${
              errors.email ? 'focus-visible:!ring-red-600' : ''
            }`}
            aria-label="Email"
            {...register('email')}
          />
          {isSubmitSuccessful && (
            <span className="bg-red-500 w-full h-full px-6 py-3 text-sm absolute inset-0 rounded-full text-center text-white font-bold clip-signed-up animate-signed-up">
              Signed Up
            </span>
          )}
          {errors.email && (
            <p className="text-red-600 text-xs italic max-xsm:ml-6 max-xsm:mt-2 xsm:left-6 xsm:top-[calc(100%+0.5rem)] xsm:absolute">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="text-sm text-white bg-red-500 py-3 px-7 font-bold rounded-full hover:brightness-125 hover:grayscale-20 focus-visible:brightness-125 focus-visible:grayscale-20 transition-filter outline-none focus-visible:ring-2 focus-visible:ring-neutral-50 xsm:self-start"
        >
          Go
        </button>
      </div>
    </form>
  );
}
