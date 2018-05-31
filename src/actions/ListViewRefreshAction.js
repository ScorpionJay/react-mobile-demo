import { LISTVIEW_LIST, LISTVIEW_MORE } from "../constants/ActionTypes";

const data = [
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒哈哈哈"
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    title: "McDonald's invites you",
    des: "不是所有的兼职汪都需要风吹日晒"
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    title: "Eat the week",
    des: "不是所有的兼职汪都需要风吹日晒"
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    title: "what",
    des: "不是所有的兼职汪都需要风吹日晒"
  }
];

export const listAction = () => dispatch => {
  setTimeout(() => {
    dispatch({
      type: LISTVIEW_LIST,
      data: {
        data,
        hasMore: true,
        page: 1
      }
    });
  }, 1000);
};

export const listMoreAction = (page = 1) => dispatch => {
  setTimeout(() => {
    dispatch({
      type: LISTVIEW_MORE,
      data: { data, page: page + 1, hasMore: page < 3 }
    });
  }, 1000);
};
