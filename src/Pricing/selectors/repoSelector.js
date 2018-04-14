import { createSelector } from 'reselect';
export const repoSelector = createSelector(
   state=>state.get("repos"),
   repos=>repos
)
