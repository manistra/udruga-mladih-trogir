import { MutationTree } from 'vuex';
import { State } from '../types';

export enum MutationType
{
  SetShowSidebar = 'SET_SHOW_SIDEBAR',
  SetNavbarTransparent = 'SET_NAVBAR_TRANSPARENT',
}

export type Mutations = {
  [MutationType.SetShowSidebar](state: State, showSidebarValue: boolean): void;
  [MutationType.SetNavbarTransparent](state: State, navbarTransparent: boolean): void;

};

export const mutations: MutationTree<State> & Mutations = {

  [MutationType.SetShowSidebar](state, showSidebarValue)
  {
    state.showSidebar = showSidebarValue;
  },

  [MutationType.SetNavbarTransparent](state, navbarTransparent)
  {
    state.navbarTransparent = navbarTransparent;
  },

};
