import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationType } from './mutations';
import { State } from '../types';
import { store } from '.';

export enum ActionTypes
{
  HideSidebar = 'HIDE_SIDEBAR',
  ShowSidebar = 'SHOW_SIDEBAR',
  MakeNavbarTransparent = 'MAKE_NAVBAR_TRANSPARENT',
  MakeNavbarSolid = 'MAKE_NAVBAR_SOLID',
  ScrollToLinkOne = 'SCROLL_TO_LINK_ONE',
  ScrollToLinkTwo = 'SCROLL_TO_LINK_TWO',
  ScrollToLinkThree = 'SCROLL_TO_LINK_THREE',
  ScrollToLinkFour = 'SCROLL_TO_LINK_FOUR',
  ScrollToTop = 'SCROLL_TO_LINK_TOP',
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
  [ActionTypes.ScrollToLinkOne](context: ActionAugments): void;
  [ActionTypes.ScrollToLinkTwo](context: ActionAugments): void;
  [ActionTypes.ScrollToLinkThree](context: ActionAugments): void;
  [ActionTypes.ScrollToLinkFour](context: ActionAugments): void;
  [ActionTypes.ScrollToTop](context: ActionAugments): void;
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
  [ActionTypes.ScrollToLinkOne]({ commit })
  {
    commit(MutationType.SetScrollToLinkOne, !store.state.scrollToLinkOne);
  },
  [ActionTypes.ScrollToLinkTwo]({ commit })
  {
    commit(MutationType.SetScrollToLinkTwo, !store.state.scrollToLinkTwo);
  },
  [ActionTypes.ScrollToLinkThree]({ commit })
  {
    commit(MutationType.SetScrollToLinkThree, !store.state.scrollToLinkThree);
  },
  [ActionTypes.ScrollToLinkFour]({ commit })
  {
    commit(MutationType.SetScrollToLinkFour, !store.state.scrollToLinkFour);
  },
  [ActionTypes.ScrollToTop]({ commit })
  {
    commit(MutationType.SetScrollToTop, !store.state.scrollToTop);
  },

};
