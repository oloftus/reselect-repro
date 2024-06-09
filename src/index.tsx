import { createSelector } from "reselect";

type A = { a: string };
type B = { a: string; b: string };
type C = { c: string };

// const selectorOK: () => ((state: {
//   it: Record<string, A | B>;
// }) => A | B) & {
//   clearCache: () => void;
//   resultsCount: () => number;
//   resetResultsCount: () => void;
// } & {
//   resultFunc: (resultFuncArgs_0: Record<string, A | B>) => A | B;
//   ... 6 more ...;
//   resetDependencyRecomputations: () => void;
// } & {
//   ...;
// }

const selectorOK1 = () =>
  createSelector(
    [(state: { it: Record<string, A | B> }) => state.it],
    (it) => it["y"]
  );

// const selectorOK2: (y: string | undefined) => ((state: {
//     it: Record<string, A | C>;
// }) => A | C | undefined) & {
//     clearCache: () => void;
//     resultsCount: () => number;
//     resetResultsCount: () => void;
// } & {
//     resultFunc: (resultFuncArgs_0: Record<string, A | C>) => A | ... 1 more ... | undefined;
//     ... 6 more ...;
//     resetDependencyRecomputations: () => void;
// } & {
//     ...;
// }

const selectorOK2 = (y: string | undefined) =>
  createSelector([(state: { it: Record<string, A | C> }) => state.it], (it) =>
    y !== undefined ? it[y] : undefined
  );

// const selectorNOK: (y: string | undefined) => ((state: {
//     it: Record<string, A | B>;
// }) => A) & {
//     clearCache: () => void;
//     resultsCount: () => number;
//     resetResultsCount: () => void;
// } & {
//     resultFunc: (resultFuncArgs_0: Record<string, A | B>) => A;
//     ... 6 more ...;
//     resetDependencyRecomputations: () => void;
// } & {
//     ...;
// }

const selectorNOK = (y: string | undefined) =>
  createSelector([(state: { it: Record<string, A | B> }) => state.it], (it) =>
    y !== undefined ? it[y] : undefined
  );
