import { Item } from './../components/CardItem';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key] | any;
      }
};

export enum Types {
  Create = 'CREATE',
  Search = 'SEARCH',
  Delete = 'DELETE_PRODUCT',
  Sort = 'SORT',
  Page = 'PAGE'
}

type ProductPayload = {
  [Types.Create]: {
    userName: string;
    date: string;
    gender?: string;
    img: any;
    checkbox: boolean;
    select: string;
  };
  [Types.Search]: Item;
  [Types.Delete]: {
    id: number;
  };
  [Types.Sort]: string;
  [Types.Page]: string
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>];

export const productReducer = (
  state: any[],
  action: ProductActions
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          userName: action.payload.userName,
          date: action.payload.date,
          gender: action.payload.gender,
          img: action.payload.img,
          checkbox: action.payload.checkbox,
          select: action.payload.select
        }
      ];
    default:
      return state;
  }
};

// CardsList

type CardsListPayload = {
  [Types.Search]: Item;
  [Types.Delete]: {
    id: number;
  };
};

export type CardsListActions = ActionMap<CardsListPayload>[keyof ActionMap<
  CardsListPayload
>];

export const cardsListReducer = (
  state: any[],
  action: any // CardsListActions
) => {
  switch (action.type) {
    case Types.Search:
       return action.payload;
    default:
      return state;
  }
};

// sort 

type SortPayload = {
  [Types.Sort]: string;
};

export type SortActions = ActionMap<SortPayload>[keyof ActionMap<
  SortPayload
>]; 

export const sortReducer = (
  state: any,
  action: SortActions
) => {
  switch (action.type) {
    case Types.Sort:
      return action.payload;
    default:
      return state;
  }
};

// search 

export const searchReducer = (
  state: any
) => {
      return state;
  }

// pagination

export const pageReducer = (
  state: any
) => {
      return state;
  }

  // detailedInfo

export const detailReducer = (
  state: any
) => {
      return state;
  }


