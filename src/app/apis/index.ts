import returnFetch from "return-fetch";

export const fetchExtended = returnFetch({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/v1/api`,
  headers: { Accept: "application/json" },
  interceptors: {
    request: async (args) => {
      console.log("요청 전 interceptor");
      // 요청 전 accessToken 추가해줄 부분
      return args;
    },

    response: async (response, requestArgs) => {
      console.log("응답 후 interceptor");
      // 요청 받은 후 작업할 부분
      // 일단 임시로 return을 json 형식으로 바꾸게 해놨는데 응답폼에 따라 바뀔 수 있으므로 수정 예정
      return response.json();
    },
  },
});
