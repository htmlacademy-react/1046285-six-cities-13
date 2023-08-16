import { createAction } from '@reduxjs/toolkit';

export const redirectToRoute = createAction<string>('app/redirectToRoute');
export const setError = createAction<string | null>('data/setError');

