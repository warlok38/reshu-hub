import { isNull } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { z, ZodType } from 'zod';

type Serializer<V> = (value: V) => string;
type Deserializer = (value: string) => unknown;

type StorageConfig<Z extends ZodType> = {
  type: 'sessionStorage' | 'localStorage';
  key: string;
  schema: Z;
  serializer?: Serializer<z.infer<Z>>;
  deserializer?: Deserializer;
};

const noop = (value: string) => value;

export function useStorage<Z extends ZodType>({
  type,
  key,
  schema,
  serializer = noop,
  deserializer = noop,
}: StorageConfig<Z>) {
  const getStorageValue = useCallback(() => {
    const value = window[type].getItem(key);

    if (isNull(value)) {
      return value;
    }

    const parsed = schema.safeParse(deserializer(value));
    if (parsed.success) {
      return parsed.data;
    }

    window[type].removeItem(key);
    return null;
  }, [deserializer, key, schema, type]);

  const [storageValue, _setStorageValue] = useState<z.infer<Z> | null>(
    getStorageValue
  );
  const storageEventName = `${type}_${key}`;

  const setStorageValue = useCallback(
    (value: unknown) => {
      const parsed = schema.safeParse(value);

      if (parsed.success) {
        window[type].setItem(key, serializer(parsed.data));
        window.dispatchEvent(new CustomEvent(storageEventName));
      }
    },
    [key, schema, serializer, storageEventName, type]
  );

  const removeStorageValue = useCallback(() => {
    window[type].removeItem(key);
    window.dispatchEvent(new CustomEvent(storageEventName));
  }, [key, storageEventName, type]);

  useEffect(() => {
    const handler = () => {
      _setStorageValue(getStorageValue());
    };
    window.addEventListener(storageEventName, handler);

    return () => {
      window.removeEventListener(storageEventName, handler);
    };
  }, [getStorageValue, storageEventName]);

  return {
    storageValue,
    setStorageValue,
    removeStorageValue,
  };
}
