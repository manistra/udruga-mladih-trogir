import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from '../types';

export enum ActionTypes
{
  HideSidebar = 'HIDE_SIDEBAR',
  ShowSidebar = 'SHOW_SIDEBAR',
  MakeNavbarTransparent = 'MAKE_NAVBAR_TRANSPARENT',
  MakeNavbarSolid = 'MAKE_NAVBAR_SOLID',
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
  [ActionTypes.MakeNavbarTransparent](context: ActionAugments): void;
  [ActionTypes.MakeNavbarSolid](context: ActionAugments): void;
};

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.HideSidebar]({ commit })
  {
    commit(MutationType.SetShowSidebar, false);
  },
  [ActionTypes.ShowSidebar]({ commit })
  {
    commit(MutationType.SetShowSidebar, true);
  },
  [ActionTypes.MakeNavbarTransparent]({ commit })
  {
    commit(MutationType.SetNavbarTransparent, true);
  },
  [ActionTypes.MakeNavbarSolid]({ commit })
  {
    commit(MutationType.SetNavbarTransparent, false);
  },

};
