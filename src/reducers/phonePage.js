import R from 'ramda'
import {
	FETCH_PHONE_BY_ID_SUCCESS
} from '../actionsTypes'


const initState = {
	id: null
}

export default (state = initState, {type, payload}) => {
	switch (type) {
		case FETCH_PHONE_BY_ID_SUCCESS:
			return R.merge(state, {
				id: R.prop('id', payload)
			})

		default:
			return state
	}
}