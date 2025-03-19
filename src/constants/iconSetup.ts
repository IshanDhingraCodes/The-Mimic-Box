'use client';

import { addCollection } from '@iconify/react';

const myIconCollection = {
    prefix: 'custom',
    icons: {
        APP_LOGO: {
            body: '<g><ellipse fill="#dfdfdf" cx="250" cy="250" rx="250" ry="250"></ellipse> <path d="M 149.439 43.781 C 122.642 52.558 99.214 66.342 84.368 82.062 C 73.746 93.311 68.509 100.824 61.001 115.593 C 50.022 137.185 45.417 155.597 45.417 177.899 L 45.417 191.096 L 250.206 191.096 L 454.994 191.096 L 454.17 172.01 C 451.609 112.84 415.495 66.41 355.64 45.335 C 337.199 38.842 330.551 39.987 296.729 55.474 L 281.62 62.394 L 270.01 58.371 C 254.655 53.051 244.883 53.058 230.068 58.395 L 218.53 62.554 L 200.297 54.118 C 182.199 45.746 166.401 39.823 162.645 40.004 C 161.569 40.055 155.627 41.755 149.439 43.781" stroke="none" fill="#000000" fill-rule="evenodd"/> <path d="M 45 210.555 L 455 210.555 L 454.142 237.125 C 453.537 255.825 452.318 268.129 450.026 278.665 C 442.67 312.466 427.787 346.847 409.493 372.299 C 398.722 387.285 379.799 406.253 370.01 411.877 L 363.391 415.679 L 363.391 435.378 C 363.391 448.976 352.362 460 338.757 460 L 313.184 460 C 299.579 460 288.55 448.976 288.55 435.378 L 288.55 426.502 L 288.172 426.108 L 211.834 426.108 L 211.834 434.796 C 211.834 435.494 211.709 436.17 211.478 436.819 C 210.731 449.746 200.006 460 186.885 460 L 161.312 460 C 157.767 460 154.397 459.251 151.351 457.904 C 151.075 457.793 150.816 457.672 150.567 457.54 C 142.346 453.551 136.678 445.126 136.678 435.378 L 136.678 415.724 L 129.538 411.233 C 103.002 394.537 73.523 351.954 59.111 309.491 C 49.827 282.143 46.854 265.728 45.868 236.377 L 45 210.555 Z M 164.711 251.086 C 148.064 251.086 134.568 264.117 134.568 280.192 C 134.568 296.267 148.064 309.297 164.711 309.297 C 181.357 309.297 194.853 296.267 194.853 280.192 C 194.853 264.117 181.357 251.086 164.711 251.086 Z M 335.656 251.086 C 319.009 251.086 305.513 264.117 305.513 280.192 C 305.513 296.267 319.009 309.297 335.656 309.297 C 352.303 309.297 365.798 296.267 365.798 280.192 C 365.798 264.117 352.303 251.086 335.656 251.086 Z" stroke="none" fill="#000000" fill-rule="evenodd"/></g>',
            width: 500,
            height: 500,
        },
        anime: {
            body: '<path d="M38.892 14.296C26.973 19.323 15.061 32.693 15.01 41.102c-.009 1.359-2.437 8.367-13.59 39.218L.039 84.141l27.731-.321c31.091-.359 32.628-.667 41.006-8.237 18.829-17.01 3.415-50.678-20.822-45.48-20.01 4.292-21.144 34.431-1.379 36.658 12.603 1.421 18.192-11.422 8.707-20.006-1.841-1.666-2.037-1.62-4.623 1.079-2.699 2.817-2.699 2.82-.68 4.647 4.522 4.092 1.159 8.906-4.439 6.355-6.306-2.873-7.474-12.102-2.199-17.377 13.386-13.386 34.151 8.644 23.31 24.731-16.699 24.779-55.114-1.28-42.293-28.69 8.743-18.692 31.564-23.429 50.15-10.41l5.702 3.995 7.395-5.566c8.152-6.136 8.232-6.278 5.458-9.658-2.098-2.557-1.74-2.656-8.938 2.474l-3.978 2.835-8.663-4.293c-11.285-5.592-23.213-6.537-32.592-2.581M16 62.281c0 .371-1.105 3.609-2.455 7.196L11.09 76h15.259l-2.071-2.25c-1.138-1.237-3.467-4.476-5.174-7.196C17.397 63.834 16 61.911 16 62.281" fillRule="evenodd" fill="currentColor"/>',
            width: 96,
            height: 96,
        },
        manga: {
            body: '<path d="M15 25.875v-19.625c0 0-2.688-2.25-6.5-2.25s-6.5 2-6.5 2v19.875c0 0 2.688-1.938 6.5-1.938s6.5 1.938 6.5 1.938zM29 25.875v-19.625c0 0-2.688-2.25-6.5-2.25s-6.5 2-6.5 2v19.875c0 0 2.688-1.938 6.5-1.938s6.5 1.938 6.5 1.938zM31 8h-1v19h-12v1h-5v-1h-12v-19h-1v20h12v1h7.062l-0.062-1h12v-20z" fill="currentColor"/>',
            width: 32,
            height: 32,
        },
        musicConvert: {
            body: '<path d="M 23.818 0.926 C 23.832 -0.252 24.427 -0.265 25.596 0.891 L 30.451 5.677 C 31.624 6.833 31.616 7.422 30.428 7.446 L 25.513 7.538 C 24.324 7.561 23.737 6.984 23.754 5.806 L 23.818 0.926 Z M 17.088 23.722 C 17.088 24.786 18.218 25.453 19.616 25.214 C 21.009 24.977 22.14 23.923 22.14 22.863 C 22.14 22.863 22.14 22.863 22.14 22.863 C 22.14 22.763 22.13 22.666 22.108 22.571 L 22.108 9.483 L 10.807 12.034 L 10.735 12.034 L 10.735 23.648 C 10.249 23.482 9.664 23.434 9.038 23.542 C 7.368 23.826 6.012 25.085 6.012 26.354 C 6.012 27.627 7.368 28.426 9.038 28.144 C 10.705 27.859 12.06 26.598 12.06 25.326 L 12.06 25.325 C 12.06 25.277 12.057 25.22 12.051 25.168 L 12.051 15.732 L 20.786 13.264 L 20.786 21.389 C 20.437 21.309 20.036 21.298 19.612 21.37 C 18.217 21.607 17.087 22.66 17.088 23.722 Z M 3.936 0.056 L 20.473 0 C 22.485 0.038 21.86 0.922 21.905 2.453 L 21.866 5.455 C 21.828 8.128 23.157 9.441 25.852 9.394 L 28.879 9.337 C 30.876 9.412 31.388 8.758 31.337 10.793 L 31.356 27.498 L 23.721 27.498 C 22.386 27.498 21.308 28.571 21.308 29.894 L 21.308 37.118 L 3.936 37.118 C 1.764 37.118 0 35.38 0 33.238 L 0 3.938 C 0 1.796 1.764 0.056 3.936 0.056 Z M 31.992 32.681 L 31.967 33.243 L 31.913 34.36 L 31 34.36 L 30.948 33.243 L 30.921 32.681 L 30.905 32.426 C 30.898 32.355 30.888 32.283 30.871 32.211 C 30.745 31.624 30.313 31.115 29.745 30.852 C 29.457 30.724 29.144 30.654 28.832 30.646 L 27.633 30.668 L 25.352 30.717 L 25.352 31.712 L 22.799 30.058 L 25.352 28.404 L 25.352 29.401 L 27.633 29.449 L 28.248 29.463 L 28.555 29.468 L 28.708 29.474 L 28.897 29.479 C 29.401 29.509 29.898 29.647 30.332 29.879 C 31.211 30.329 31.825 31.151 31.964 32.042 C 31.985 32.155 31.992 32.267 31.999 32.376 L 32 32.542 L 31.992 32.681 Z M 28.996 38 L 28.996 37.005 L 26.716 36.954 L 26.097 36.944 L 25.791 36.935 L 25.636 36.934 L 25.451 36.925 C 24.945 36.893 24.444 36.757 24.014 36.529 C 23.136 36.076 22.519 35.253 22.383 34.362 C 22.364 34.252 22.353 34.137 22.349 34.028 L 22.346 33.86 L 22.353 33.724 L 22.381 33.161 L 22.436 32.042 L 23.345 32.042 L 23.401 33.163 L 23.428 33.724 L 23.441 33.977 C 23.447 34.047 23.46 34.123 23.474 34.195 C 23.601 34.777 24.033 35.287 24.604 35.548 C 24.889 35.682 25.201 35.753 25.515 35.759 L 26.716 35.733 L 28.996 35.688 L 28.996 34.692 L 31.548 36.343 L 28.996 38 Z" fill="currentColor"/>',
            width: 32,
            height: 38,
        },
    },
};

addCollection(myIconCollection);
