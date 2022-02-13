import {sort} from '../main';

describe('sort', () => {

  test('sorts the sorted array of 4', () => {
    const arr = [0, 1, 2, 3];
    const swapMock = jest.fn();

    sort(arr, swapMock);

    expect(arr).toEqual([0, 1, 2, 3]);
    expect(swapMock.mock.calls).toEqual([]);
  });

  test('sorts an array of 2', () => {
    const arr = [1, 0];
    const swapMock = jest.fn();

    sort(arr, swapMock);

    expect(arr).toEqual([0, 1]);
    expect(swapMock.mock.calls).toEqual([
      [0, 1],
    ]);
  });

  test('sorts an array of 3', () => {
    const arr = [2, 0, 1];
    const swapMock = jest.fn();

    sort(arr, swapMock);

    expect(arr).toEqual([0, 1, 2]);
    expect(swapMock.mock.calls).toEqual([
      [0, 2],
      [0, 1],
    ]);
  });

  test('sorts an array of 4', () => {
    const arr = [3, 4, 2, 1];
    const swapMock = jest.fn();

    sort(arr, swapMock);

    expect(arr).toEqual([1, 2, 3, 4]);
    expect(swapMock.mock.calls).toEqual([
      [0, 3], // → [1, 4, 2, 3]
      [1, 2], // → [1, 2, 4, 3]
      [3, 2], // → [1, 2, 3, 4]
    ]);
  });
});
