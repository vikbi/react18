import apiClient from "./api-client";

export interface Entity {
    id: number
}

class httpService {

    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();

        const request = apiClient.get<T[]>(this.endpoint + "/", { signal: controller.signal });

        return { request, cancel: () => controller.abort() }
    }

    create<T>(entity: T) {
        return apiClient.post(this.endpoint + "/", entity);
    }

    update<T extends Entity>(entity: T) {
        return apiClient.patch(this.endpoint + "/" + entity.id, entity);
    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + "/" + id);
    }
}

const create = (endpoint: string) => new httpService(endpoint);

export default create;