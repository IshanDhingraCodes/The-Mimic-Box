import { APP_ROUTES } from '@/constants/routes.constants';
import { Body, Button, Container, Head, Heading, Hr, Html, Preview, Tailwind, Text } from '@react-email/components';
import * as React from 'react';

const VerifyEmail_Mail = ({ token }: { token: string }) => {
    const publicUrl = process.env.NEXT_PUBLIC_URL || 'https://the-mimic-box.com';
    const verificationUrl = new URL(`${APP_ROUTES.AUTH.VERIFY_EMAIL}?token=${token}`, publicUrl).toString();

    return (
        <Html lang="en">
            <Head>
                <title>Verify Your Email</title>
            </Head>
            <Preview>Confirm your email to activate your account</Preview>
            <Tailwind>
                <Body className="bg-gray-100 font-sans">
                    <Container className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md">
                        {/* Header Section */}
                        <div className="pt-6 text-center">
                            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-black p-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-full" version="1.1">
                                    <path
                                        d="M 26.97 4.191 L 27.277 4.75 L 27.534 4.233 C 28.073 3.148 29.347 2.262 30.659 2.064 L 31 2.013 L 30.545 2.31 C 29.447 3.03 28.705 4.047 28.121 5.639 L 27.942 6.129 L 28.24 7.184 C 28.714 8.863 28.994 10.75 28.995 12.292 L 28.996 12.878 L 26.487 12.869 C 24.365 12.864 23.965 12.879 23.871 12.974 C 23.702 13.141 23.73 13.483 23.928 13.641 C 24.083 13.766 24.294 13.777 26.554 13.777 C 28.494 13.777 29.004 13.797 28.974 13.872 C 28.955 13.923 28.71 14.729 28.432 15.662 C 28.152 16.594 27.554 18.543 27.105 19.994 C 26.076 23.307 24.444 28.637 24.43 28.729 C 24.415 28.826 24.886 28.995 26.593 29.5 C 27.414 29.743 28.086 29.958 28.086 29.978 C 28.086 29.998 26.557 30.007 24.686 29.995 L 21.286 29.975 L 21.09 29.72 C 20.983 29.578 20.718 29.342 20.502 29.195 C 19.793 28.711 19.691 28.703 15.76 28.742 C 13.535 28.766 12.145 28.81 11.978 28.861 C 11.581 28.985 10.98 29.41 10.777 29.712 L 10.597 29.978 L 7.147 29.975 L 3.696 29.971 L 5.533 29.421 C 6.542 29.117 7.387 28.851 7.409 28.827 C 7.444 28.794 5.078 20.925 3.847 16.98 C 3.44 15.673 2.903 13.877 2.903 13.82 C 2.903 13.796 4.005 13.777 5.352 13.777 C 7.604 13.777 7.816 13.766 7.972 13.641 C 8.158 13.491 8.195 13.165 8.045 12.985 C 7.965 12.89 7.58 12.872 5.416 12.872 L 2.88 12.872 L 2.924 11.61 C 2.981 9.947 3.27 8.283 3.799 6.573 L 3.94 6.114 L 3.729 5.538 C 3.215 4.133 2.407 3.029 1.418 2.38 C 1.15 2.204 0.964 2.049 1.006 2.037 C 1.046 2.022 1.292 2.066 1.552 2.133 C 2.879 2.47 4.078 3.476 4.454 4.562 L 4.546 4.828 L 4.878 4.197 C 5.339 3.32 6.235 2.412 6.873 2.175 C 7.47 1.954 8.413 1.985 9.01 2.244 C 9.229 2.34 9.405 2.437 9.403 2.463 C 9.4 2.491 9.171 2.62 8.892 2.752 C 7.757 3.293 6.688 4.6 6.035 6.254 C 5.778 6.905 5.425 8.322 5.315 9.143 C 5.229 9.789 5.215 9.826 4.991 9.935 C 4.453 10.195 4.604 10.924 5.207 10.976 C 5.712 11.017 6.026 10.523 5.75 10.119 C 5.671 10.006 5.663 9.84 5.709 9.406 C 5.909 7.573 6.576 5.751 7.471 4.591 C 8.297 3.524 9.746 2.558 9.974 2.926 C 10.044 3.038 21.611 3.029 21.925 2.915 C 22.139 2.838 22.215 2.855 22.647 3.085 C 23.566 3.569 24.517 4.63 25.139 5.866 C 25.837 7.246 26.284 9.392 26.086 10.397 C 26.015 10.754 26.224 10.988 26.613 10.988 C 27.149 10.988 27.4 10.343 26.988 10.02 C 26.881 9.936 26.76 9.857 26.722 9.845 C 26.682 9.831 26.58 9.414 26.497 8.917 C 26.087 6.475 25.295 4.73 24.068 3.561 C 23.634 3.149 22.743 2.55 22.562 2.55 C 22.523 2.55 22.492 2.522 22.492 2.487 C 22.492 2.374 23.211 2.085 23.632 2.028 C 24.978 1.847 26.067 2.553 26.97 4.191 Z M 9.179 8.319 C 9.179 8.402 9.763 9.173 10.074 9.498 L 10.342 9.779 L 10.145 10.14 C 9.807 10.761 9.685 11.317 9.729 12.039 C 9.789 13.054 10.224 13.91 10.961 14.464 C 11.928 15.192 13.344 15.267 14.254 14.638 C 14.574 14.419 15.003 13.832 15.003 13.618 C 15.003 13.509 12.533 11.214 10.954 9.858 C 10.737 9.672 10.25 9.236 9.869 8.89 C 9.491 8.543 9.179 8.287 9.179 8.319 Z M 22.226 8.673 C 21.977 8.89 21.245 9.541 20.601 10.123 C 19.955 10.706 18.918 11.642 18.293 12.207 C 17.669 12.771 17.084 13.313 16.991 13.413 L 16.823 13.594 L 16.98 13.913 C 17.186 14.33 17.649 14.717 18.174 14.914 C 18.521 15.045 18.716 15.067 19.277 15.042 C 19.853 15.016 20.028 14.974 20.411 14.777 C 21.993 13.967 22.599 12.028 21.805 10.311 L 21.564 9.79 L 21.902 9.392 C 22.217 9.019 22.754 8.273 22.703 8.279 C 22.69 8.281 22.476 8.458 22.226 8.673 Z M 5.474 15.661 C 5.274 15.86 5.275 16.271 5.475 16.452 C 5.817 16.762 6.382 16.528 6.382 16.076 C 6.382 15.602 5.801 15.336 5.474 15.661 Z M 25.595 15.675 C 25.284 16.006 25.477 16.52 25.945 16.61 C 26.141 16.648 26.224 16.62 26.381 16.464 C 26.616 16.23 26.629 15.973 26.419 15.707 C 26.214 15.452 25.819 15.435 25.595 15.675 Z M 9.331 16.738 C 9.331 16.869 9.901 17.916 10.204 18.341 C 11.789 20.57 15.032 21.58 18.027 20.78 C 19.346 20.427 20.722 19.558 21.52 18.571 C 21.846 18.165 22.609 16.808 22.544 16.744 C 22.528 16.728 22.144 17.087 21.69 17.543 L 20.865 18.37 L 20.222 17.886 C 19.869 17.619 19.557 17.426 19.532 17.455 C 19.506 17.484 19.443 17.981 19.392 18.562 C 19.343 19.142 19.289 19.627 19.278 19.642 C 19.264 19.654 19.122 19.584 18.962 19.484 C 18.325 19.084 18.377 19.074 18.142 19.657 C 18.024 19.947 17.906 20.183 17.88 20.183 C 17.853 20.183 17.652 19.947 17.432 19.658 C 17.212 19.371 16.989 19.099 16.936 19.055 C 16.864 18.995 16.734 19.133 16.4 19.618 C 16.158 19.97 15.952 20.257 15.942 20.257 C 15.931 20.257 15.735 19.989 15.504 19.66 C 15.273 19.332 15.052 19.044 15.011 19.019 C 14.97 18.993 14.743 19.245 14.504 19.578 C 14.265 19.911 14.046 20.183 14.018 20.183 C 13.99 20.183 13.862 19.945 13.734 19.654 L 13.499 19.127 L 13.066 19.386 C 12.828 19.529 12.609 19.633 12.58 19.616 C 12.553 19.597 12.505 19.135 12.475 18.585 C 12.445 18.035 12.397 17.545 12.369 17.496 C 12.334 17.434 12.117 17.548 11.694 17.852 C 11.35 18.096 11.044 18.299 11.014 18.299 C 10.984 18.299 10.593 17.934 10.145 17.49 C 9.698 17.046 9.331 16.707 9.331 16.738 Z M 9.129 26.851 C 8.53 27.101 8.807 28.034 9.444 27.911 C 10.028 27.8 10.121 27.021 9.573 26.829 C 9.419 26.777 9.294 26.783 9.129 26.851 Z M 22.213 26.815 C 21.853 26.958 21.778 27.466 22.073 27.758 C 22.174 27.861 22.345 27.943 22.454 27.943 C 22.706 27.943 23.021 27.63 23.021 27.376 C 23.021 27.164 22.65 26.734 22.478 26.742 C 22.423 26.745 22.304 26.778 22.213 26.815 Z"
                                        stroke="none"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <Heading className="mt-4 text-2xl font-bold text-gray-800">Welcome to The Mimic Box!</Heading>
                        </div>

                        {/* Body Content */}
                        <Text className="mt-2 text-center text-gray-600">
                            Thank you for signing up! Please verify your email address to activate your account. This link is only valid for 15
                            minutes.
                        </Text>

                        {/* Verification Button */}
                        <div className="mt-6 text-center">
                            <Button
                                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-md transition hover:bg-blue-700"
                                href={verificationUrl}>
                                Verify Email
                            </Button>
                        </div>

                        {/* Footer */}
                        <Hr className="my-6 border-gray-200" />
                        <Text className="text-center text-sm text-gray-500">If you didn’t request this, you can safely ignore this email.</Text>
                        <Text className="mt-4 text-center text-xs text-gray-400">
                            &copy; {new Date().getFullYear()} The Mimic Box. All rights reserved.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default VerifyEmail_Mail;
