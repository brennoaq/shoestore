// A grande vantagem de fazer middlewares com o sagas e lidar com requicisoes.
// Podemos chamar actions que contem requicisoes asincronamente, assim o componente
// nao precisa esperar uma requicisao para atualizar.

// import { all, call, put, takeLatest } from "redux-saga/effects";

// import api from "../../../services/api";

// // import { addToCartSuccess } from "./actions";

// function* addToCart({ id }) {
//   const response = yield call(api.get, `/products/${id}`);

//   // yield put(addToCartSuccess(response.data));
// }

// takeLatest() lida com o caso de mais de uma action ser disparada antes da
// resposta da primeira. Somente a ultima action sera disparada.
// Se o usuario ficar clicando igual doido vai adicionar so um item.
// export default all([takeLatest("@cart/ADD_REQUEST", addToCart)]);
