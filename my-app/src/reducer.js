export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished developing...
  // token:
  //   "BQBOPDtbBtGcN7h1q1XEtegpe24DpjXOknNZxu17-SCdC-10D27fx0iJRGbL5uGj_46xHKhoBlf_8p-DkU_4xJJzXp9TXevumKwqaBEsqu-0JSq00ByT_2eOPX5-qO7HkLFf0tUIPZpfI1jOIJqGp0F7LIahSRdDloaqY_SErs302L-U10S5",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,

        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
