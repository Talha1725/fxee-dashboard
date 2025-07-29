// import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
// import type { RootState, AppDispatch } from "./store";

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Custom hooks for common patterns
// export const useAuth = () => {
//   const auth = useAppSelector((state) => state.auth);
//   const dispatch = useAppDispatch();

//   return {
//     ...auth,
//     dispatch,
//   };
// };

// export const useMarketData = (pair?: string) => {
//   const marketData = useAppSelector((state) =>
//     pair ? state.market.data[pair] : state.market.data
//   );

//   return marketData;
// };
