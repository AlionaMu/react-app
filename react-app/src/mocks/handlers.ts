import { rest } from 'msw';
const _apiKey = 'AIzaSyDeah8nAbCTXE8AFB1PcEYtawQDbLTSX1Q';

export const handlers = [
    rest.get(`https://www.googleapis.com/youtube/v3/search?key=${_apiKey}&type=video&part=snippet&maxResults=15&q=`, (req, res, ctx) => {
      const productId = req.url.searchParams.get('moloko');
      return res(
            ctx.status(200),
            ctx.json(
                productId
            )
        )
    })
]
/* import CONSTANTS from "../constants";

function getPosts() {
  return rest.get(`${CONSTANTS.API_URL}/posts`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "Post 1 title",
          body: "Post 1 body",
        },
        {
          userId: 1,
          id: 2,
          title: "Post 2 title",
          body: "Post 2 body",
        },
      ])
    );
  });
}

export const handlers = [getPosts()];*/