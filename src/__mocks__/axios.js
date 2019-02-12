export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  defaults: {
    baseURL: '',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-Token',
    withCredentials: false,
    headers: {
      post: {
        'Content-Type': '',
      },
    },
  },
};
