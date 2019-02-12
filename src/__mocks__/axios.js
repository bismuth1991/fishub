export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  defaults: {
    baseURL: '',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-CSRF-Token',
    withCredentials: false,
    headers: {
      post: {
        'Content-Type': '',
      },
    },
  },
};
