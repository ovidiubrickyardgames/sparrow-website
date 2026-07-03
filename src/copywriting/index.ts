import { en } from './en';
import type { CopywritingSchema } from './schema';

export function useTranslations(locale?: string): CopywritingSchema {
  return en;
}

export type { CopywritingSchema };
export { en };
export default useTranslations;
