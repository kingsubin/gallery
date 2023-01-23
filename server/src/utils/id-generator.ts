import { customAlphabet } from 'nanoid';

const CUSTOM_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
const DEFAULT_SIZE = 8;

const nanoid = customAlphabet(CUSTOM_ALPHABET, DEFAULT_SIZE);

export const generateId = (): string => nanoid();
