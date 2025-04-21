// Test setup file for Jest
import '@testing-library/jest-dom';

// Add Jest types for global usage
import { jest, beforeAll, afterAll } from '@jest/globals';

// Mock implementations for testing
// For example, mocking fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
    ok: true,
    status: 200,
    statusText: 'OK',
  } as Response)
);

// Mock ResizeObserver which isn't available in test environment
class MockResizeObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

// @ts-expect-error - ResizeObserver is not available in test environment
global.ResizeObserver = MockResizeObserver;

// Suppress console errors during tests
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});
