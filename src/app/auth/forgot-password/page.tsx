import { Metadata } from 'next';

import ForgotPasswordForm from '@/app/auth/_components/ForgotPassword';

export const metadata: Metadata = {
    title: 'Forgot Password',
    description: 'Forgot your password? No worries! Reset your password in a few easy steps.',
};

const Page = () => {
    return <ForgotPasswordForm />;
};

export default Page;
