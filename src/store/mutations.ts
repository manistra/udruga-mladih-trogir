import { MutationTree } from 'vuex';
import { State } from '../types';

export enum MutationType
{
  SetShowSidebar = 'SET_SHOW_SIDEBAR',
  SetNavbarTransparent = 'SET_NAVBAR_TRANSPARENT',
  SetScrollToLinkOne = 'SET_SCROLL_TO_LINK_ONE',
  SetScrollToLinkTwo = 'SET_SCROLL_TO_LINK_TWO',
  SetScrollToLinkThree = 'SET_SCROLL_TO_LINK_THREE',
  SetScrollToLinkFour = 'SET_SCROLL_TO_LINK_FOUR',
  SetScrollToTop = 'SET_SCROLL_TO_TOP',

}

export type Mutations = {
  [MutationType.SetShowSidebar](state: State, showSidebarValue: boolean): void;
  [MutationType.SetNavbarTransparent](state: State, navbarTransparent: boolean): void;
  [MutationType.SetScrollToLinkOne](state: State, navbarTransparent: boolean): void;
  [MutationType.SetScrollToLinkTwo](state: State, navbarTransparent: boolean): void;
  [MutationType.SetScrollToLinkThree](state: State, navbarTransparent: boolean): void;
  [MutationType.SetScrollToLinkFour](state: State, navbarTransparent: boolean): void;
  [MutationType.SetScrollToTop](state: State, navbarTransparent: boolean): void;

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
  [MutationType.SetScrollToLinkOne](state, scrollToLinkOne)
  {
    state.scrollToLinkOne = scrollToLinkOne;
  },
  [MutationType.SetScrollToLinkTwo](state, scrollToLinkTwo)
  {
    state.scrollToLinkTwo = scrollToLinkTwo;
  },
  [MutationType.SetScrollToLinkThree](state, scrollToLinkThree)
  {
    state.scrollToLinkThree = scrollToLinkThree;
  },
  [MutationType.SetScrollToLinkFour](state, scrollToLinkFour)
  {
    state.scrollToLinkFour = scrollToLinkFour;
  },
  [MutationType.SetScrollToTop](state, scrollToTop)
  {
    state.scrollToTop = scrollToTop;
  },

};
