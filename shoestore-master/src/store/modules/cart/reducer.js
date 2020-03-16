import produce from "immer";
// Immer permite manipular o state como se fosse mutavel

export default function cart(state = [], action) {
  // Quando chamamos dispatch(), todos os reducers sao chamados. Por isso usamos switch case
  switch (action.type) {
    case "@cart/ADD_SUCCESS":
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        // Se o produto existe no array
        if (productIndex >= 0) {
          draft[productIndex].amount++;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });

    case "@cart/REMOVE":
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) draft.splice(productIndex, 1);
      });

    case "@cart/UPDATE_AMOUNT": {
      if (action.amount <= 0) return state;

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
