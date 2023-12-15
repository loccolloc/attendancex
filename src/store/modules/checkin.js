import { realtimeDb } from "../../db";
import { ref, get } from "firebase/database";
const realtimeDbRef = ref(realtimeDb, 'history');


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

            // const usersQuery = query(collectionGroup(db, "users"));
            // const snapshot = await getDocs(usersQuery);
            // const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            get(realtimeDbRef).then((snapshot) => {
                if (snapshot.exists()) {
                    let user = snapshot.val();

                    commit("setUsers", user);
                } else {
                    console.log("Không có dữ liệu.");
                }
            }).catch((error) => {
                console.error("Lỗi khi đọc dữ liệu: ", error);
            });

        },

    },
    mutations: {
        setUsers(state, users) {
            state.items = users;
        }
    }
}