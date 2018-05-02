export const INCREMENT_REQUESTED = 'increment-requested';
export const INCREMENT = 'increment';
export const increment = () => ({ type: INCREMENT });
export const requestIncrement = () => ({ type: INCREMENT_REQUESTED });
