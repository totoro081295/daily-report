// shims-vuex.d.ts
// Vuexが提供している型を継承し、新たにEXStoreを作成
// 既存のAPI型を破壊せず、独自定義した型を追加していく
import 'vuex'
// import firebase, { firestore, auth } from 'firebase/app'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

// storeでthis.$axiosを使えるように
declare module 'vuex' {
	interface Store<S> {
		readonly $axios: NuxtAxiosInstance
	}
	type Getters<S, G> = {
		[K in keyof G]: (
			state: S,
			getters: G,
			rootState: RootState,
			rootGetters: RootGetters
		) => G[K]
	}

	type Mutations<S, M> = { [K in keyof M]: (state: S, payload: M[K]) => void }

	type ExCommit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void
	type ExDispatch<A> = <T extends keyof A>(type: T, payload?: A[T]) => any
	type ExActionContext<S, A, G, M> = {
		commit: ExCommit<M>
		dispatch: ExDispatch<A>
		state: S
		getters: G
		rootState: RootState
		rootGetters: RootGetters
		// $firestore(app?: firebase.app.App): firestore.Firestore
		// $auth(app?: firebase.app.App): auth.Auth
		$axios: NuxtAxiosInstance
	}

	type Actions<S, A, G = {}, M = {}> = {
		[K in keyof A]: (ctx: ExActionContext<S, A, G, M>, payload: A[K]) => any
	}

	interface ExStore extends Store<RootState> {
		getters: RootGetters
		commit: ExCommit<RootMutations>
		dispath: ExDispatch<RootActions>
		// $firestore(app?: firebase.app.App): firestore.Firestore
		// $auth(app?: firebase.app.App): auth.Auth
		$axios: NuxtAxiosInstance
	}
	type StoreContext = ExActionContext<
		RootState,
		RootActions,
		RootGetters,
		RootMutations
	>
}
