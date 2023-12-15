import { db } from "../../db";
import { getDocs, query, collectionGroup } from "firebase/firestore";


export default {
    namespaced: true,
    state() {
        return {
            items: []
        }
    },
    actions: {
        // context -> state, commit
        async getUsers({ commit }) {
            const usersQuery = query(collectionGroup(db, "users"));
            const snapshot = await getDocs(usersQuery);
            const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            commit("setUsers", users);
        },


        // async createExchange({ rootState }, { data, onSuccess }) {
        //     const userRef = doc(db, "users", rootState.user.data.id);
        //     data.user = userRef;
        //     onSuccess();
        // }
    },
    mutations: {
        setUsers(state, users) {
            state.items = users;
        }
    }
}