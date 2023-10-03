import apiClient from "./api-client";
import create from "./http-service";

export interface User {
    id: number,
    name: string
}

export default create("/users");

// class userService {

//     getAllUsers() {
//         const controller = new AbortController();

//         const request = apiClient.get<User[]>("/users", { signal: controller.signal });

//         return { request, cancel: () => controller.abort() }
//     }

//     createUser(newUser: User) {
//         return apiClient.post("/users", newUser);
//     }

//     updateUser(updatedUser: User) {
//         return apiClient.patch("/users/" + updatedUser.id, updatedUser);
//     }

//     deleteUser(id: number) {
//         return apiClient.delete("/users/" + id);
//     }
// }

// export default new userService()