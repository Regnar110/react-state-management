import { StoreApi, UseBoundStore, useStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
	let store = _store as WithSelectors<typeof _store>;
	store.use = {};
	for (let k of Object.keys(store.getState())) {
		(store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
	}

	return store;
};


export type WithCreateStoreSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createStoreSelectors = <S extends StoreApi<object>>(_store: S) => {
  const store = _store as WithCreateStoreSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () =>
      useStore(_store, (s) => s[k as keyof typeof s]);
  }

  return store;
};