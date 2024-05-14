import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const initState = { parent: { child: { grandChild: '' } } };
type StoreType = typeof initState;

export const MainStore = signalStore(
  { providedIn: 'root' },
  withState(initState),
  withMethods((store) => ({
    setParent: (parent: { child: { grandChild: string } }) =>
      patchState(store, { parent }),
    setChild: (child: { grandChild: string }) =>
      patchState(store, { parent: { child } }),
    setGrandChild: (grandChild: string) =>
      patchState(store, { parent: { child: { grandChild } } }),
  }))
);
