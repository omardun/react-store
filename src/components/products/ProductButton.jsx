import { useDispatch, useSelector } from "react-redux"
import { actions as cartActions } from "../../global/slices/cartSlice"
import Condition from "../extra/Condition"

export default function ProductButton({ product }) {

    const dispatch = useDispatch()
    const { items } = useSelector(state => state.cart)
    const isInCart = Boolean(items.find(i => i.id === product.id))

    return (
        <Condition test={isInCart} success={
            <button
                id="remove"
                onClick={() => dispatch(cartActions.removeFromCart(product))}
                className="btn btn-outline-danger d-block w-100">
                X
            </button>

        } fail={
            <button id="add" onClick={() => dispatch(cartActions.addToCart(product))}
                className="btn btn-outline-success d-block w-100">
                +
            </button>
        } />
    )

}