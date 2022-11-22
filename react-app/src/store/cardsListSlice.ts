import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../components/CardItem';

const emptyArr: any = [];
const ObjItem: Item = {
  etag: '',
  id: {
    kind: '',
    videoId: '',
  },
  kind: '',
  snippet: {
    channelId: '',
    channelTitle: '',
    description: '',
    liveBroadcastContent: '',
    publishTime: '',
    publishedAt: '',
    thumbnails: {
      default: {
        height: 0,
        url: '',
        width: 0,
      },
      medium: {
        height: 0,
        url: '',
        width: 0,
      },
      high: {
        height: 0,
        url: '',
        width: 0,
      },
    },
    title: '',
  }
};

const ObjItem2: any = {}

const initialState = {
    cardsList: emptyArr,
    search: '',
    nextPageToken: '',
    detailedInfo: ObjItem2,
    sort: 'relevance' 
}

const cardsListSlice = createSlice({
  name: 'cardsList',
  initialState,
  reducers: {
    search: (state, action:PayloadAction<any>) => {
      state.cardsList = action.payload;
      state.nextPageToken = action.payload.nextPageToken;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setDetailedInfo: (state, action: PayloadAction<Item>) => {
      state.detailedInfo = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    }
  }
});

export const {search, setSearch, setDetailedInfo, setSort} = cardsListSlice.actions;

export default cardsListSlice.reducer;
