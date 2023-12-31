'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/schemas/newsletterForm';
import { FormData } from '@/interfaces';

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
    <form onSubmit={handleSubmit(onSubmit)} className="md:max-lg:col-span-2 lg:col-start-4 lg:row-start-1">
      <div className="flex flex-col xsm:flex-row gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            id="email"
            placeholder="Updates in your inbox…"
            className={`text-sm text-blue-900 placeholder:text-gray-400 px-6 py-3 rounded-full w-full focus-visible:ring-2 outline-none focus-visible:ring-red-500 relative lg:px-4 ${
              errors.email ? 'focus-visible:!ring-red-600' : ''
            }`}
            aria-label="Email"
            {...register('email')}
          />
          {isSubmitSuccessful && (
            <span className="bg-red-500 w-full h-full px-6 py-3 text-sm absolute inset-0 rounded-full text-center text-white font-bold motion-reduce:invisible motion-safe:clip-signed-up motion-safe:animate-signed-up motion-reduce:animate-signed-up-reduce">
              Signed Up
            </span>
          )}
          {errors.email && (
            <p className="text-red-600 text-xs italic max-xsm:ml-6 max-xsm:mt-2 xsm:left-6 xsm:top-[calc(100%+0.5rem)] xsm:absolute lg:left-4">
              {errors.email.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="text-sm text-white bg-red-500 py-3 px-7 font-bold rounded-full hover:brightness-125 hover:grayscale-20 focus-visible:brightness-125 focus-visible:grayscale-20 transition-filter outline-none focus-visible:ring-2 focus-visible:ring-neutral-50 xsm:self-start motion-reduce:transition-none"
        >
          Go
        </button>
      </div>
    </form>
  );
}
