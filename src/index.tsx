import { createSelector } from "reselect";

type A = { a: string };
type B = { a: string; b: string };

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

const selectorOK = () =>
  createSelector(
    [(state: { it: Record<string, A | B> }) => state.it],
    (it) => it["y"]
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
