'use client';

import { resetPasswordAction } from '@/actions/auth.actions';
import ICON_SET from '@/constants/icons';
import { resetPasswordSchema } from '@/lib/schema/auth.validations';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

export default function ResetPasswordForm() {
    return (
        <Suspense fallback={<Icon icon={ICON_SET.LOADING} className="size-20" />}>
            <ResetPasswordFormContent />
        </Suspense>
    );
}

function ResetPasswordFormContent() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [showPassword, setShowPassword] = useState(false);

    // Define the action function
    async function handleReset(data: z.infer<typeof resetPasswordSchema>) {
        try {
            const response = await resetPasswordAction(data);
            if (!response.success) {
                if (response.errors) {
                    response.errors.forEach((err) => {
                        setError(err.path[0] as 'token' | 'password' | 'confirmPassword' | `root.${string}` | 'root', {
                            message: err.message,
                        });
                    });
                }
                if (response.message) {
                    setError('root.serverError', { message: response.message });
                }
            } else {
                toast.success(response.message || 'Password reset successfully.', { duration: 5000 });
            }
        } catch {
            return { success: false, message: 'Password reset failed. Please try again.' };
        }
    }

    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<z.infer<typeof resetPasswordSchema>>({ resolver: zodResolver(resetPasswordSchema) });

    if (token) {
        setValue('token', token);
    }

    return (
        <main className="bg-primary h-calc-full-height flex items-center justify-center">
            <article className="shadow-floating-sm from-secondary to-tertiary w-full max-w-md overflow-hidden rounded-2xl bg-linear-150 from-15% to-85%">
                <header className="shadow-raised-xs flex items-center justify-center gap-2 border-b p-4">
                    <div className="shadow-floating-xs flex size-12 items-center justify-center rounded-full border">
                        <Icon icon={ICON_SET.AppLogo} className="size-6" />
                    </div>
                    <h2 className="text-highlight text-lg font-semibold">Reset Password</h2>
                </header>

                <div className="p-6">
                    <form onSubmit={handleSubmit(handleReset)}>
                        <div className="form-group">
                            <label htmlFor="password" className="form-text">
                                Enter your new password
                            </label>
                            <div className="form-field-wrapper">
                                <input
                                    {...register('password')}
                                    data-invalid={!!errors.password}
                                    aria-invalid={!!errors.password}
                                    disabled={isSubmitting}
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="form-field"
                                    placeholder="password"
                                />
                                <button
                                    type="button"
                                    className="form-icon cursor-pointer"
                                    title={showPassword ? 'Hide password' : 'Show password'}
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}>
                                    <Icon icon={showPassword ? ICON_SET.EYE : ICON_SET.EYE_CLOSE} className="size-full" />
                                </button>
                            </div>
                            <ErrorMessage as="p" className="text-xs text-red-500" errors={errors} name="password" aria-live="polite" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="form-text">
                                Enter your
                            </label>
                            <div className="form-field-wrapper">
                                <input
                                    {...register('confirmPassword')}
                                    data-invalid={!!errors.confirmPassword}
                                    aria-invalid={!!errors.confirmPassword}
                                    disabled={isSubmitting}
                                    type="password"
                                    id="confirmPassword"
                                    className="form-field"
                                    placeholder="confirmPassword"
                                />

                                <Icon icon={ICON_SET.LOCK} className="form-icon" />
                            </div>
                            <ErrorMessage as="p" className="text-xs text-red-500" errors={errors} name="confirmPassword" aria-live="polite" />
                        </div>

                        {(errors.root?.serverError || errors.token) && (
                            <p className="mt-3 flex items-center rounded-lg bg-red-400/10 px-3 py-1 text-xs text-red-500">
                                <Icon icon={ICON_SET.ERROR} className="size-7" />
                                {errors.root?.serverError.message || 'Invalid or Missing Token'}
                            </p>
                        )}

                        <button type="submit" disabled={isSubmitting} className="button button-highlight mt-4 w-full">
                            {isSubmitting ? 'Please wait...' : 'Reset Password'}
                        </button>
                    </form>
                </div>
            </article>
        </main>
    );
}
