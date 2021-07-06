import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from '../types';

export enum ActionTypes
{
  HideSidebar = 'HIDE_SIDEBAR',
  ShowSidebar = 'SHOW_SIDEBAR',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.HideSidebar](context: ActionAugments): void;
  [ActionTypes.ShowSidebar](context: ActionAugments): void;
};

export const actions: ActionTree<State, State> & Actions = {
  //_____________________________________________________________________ HideSidebar
  [ActionTypes.HideSidebar]({ commit })
  {
    commit(MutationType.SetShowSidebar, false);
  },
  //_____________________________________________________________________ ShowSidebar
  [ActionTypes.ShowSidebar]({ commit })
  {
    commit(MutationType.SetShowSidebar, true);
  }
};
