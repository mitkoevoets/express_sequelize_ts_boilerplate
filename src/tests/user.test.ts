import userService from '../services/user.service';

test('TEST: user authenticate method authenticates', () => {
  const data = {};

  expect(userService.authenticate(data)).toBe(true);
});
