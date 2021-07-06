import { MutationTree } from 'vuex';
import { State } from '../types';

export enum MutationType
{
  SetShowSidebar = 'SET_SHOW_SIDEBAR',
}

export type Mutations = {
  [MutationType.SetShowSidebar](state: State, showSidebarValue: boolean): void;

};

export const mutations: MutationTree<State> & Mutations = {

  [MutationType.SetShowSidebar](state, showSidebarValue)
  {
    state.showSidebar = showSidebarValue;
  },

};
