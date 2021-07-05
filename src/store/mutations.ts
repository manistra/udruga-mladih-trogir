import { MutationTree } from 'vuex';
import { State } from '../types';

export enum MutationType
{
  SetShowModal = 'SET_SHOW_MODAL',
  SetShowSidebar = 'SET_SHOW_SIDEBAR',
}

export type Mutations = {
  [MutationType.SetShowModal](state: State, showModalValue: boolean): void;
  [MutationType.SetShowSidebar](state: State, showSidebarValue: boolean): void;

};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetShowModal](state, showModalValue)
  {
    state.showModal = showModalValue;
  },
  [MutationType.SetShowSidebar](state, showSidebarValue)
  {
    state.showSidebar = showSidebarValue;
  },

};
