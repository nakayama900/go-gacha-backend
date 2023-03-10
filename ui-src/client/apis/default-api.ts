/* tslint:disable */
/* eslint-disable */
/**
 * SyskenGacha-backend
 * SyskenGachaのバックエンド。 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { GachaItem } from '../models';
import { GachaList } from '../models';
import { PasswordObject } from '../models';
/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * アイテムの追加
         * @param {string} name アイテム名
         * @param {number} rare レアリティ
         * @param {string} [image] 画像ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminItemPost: async (name: string, rare: number, image?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling adminItemPost.');
            }
            // verify required parameter 'rare' is not null or undefined
            if (rare === null || rare === undefined) {
                throw new RequiredError('rare','Required parameter rare was null or undefined when calling adminItemPost.');
            }
            const localVarPath = `/admin/item`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (rare !== undefined) {
                localVarQueryParameter['rare'] = rare;
            }

            if (image !== undefined) {
                localVarQueryParameter['image'] = image;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * アイテムの編集
         * @param {number} itemId ID
         * @param {string} name アイテム名
         * @param {number} rare レアリティ
         * @param {string} image 画像ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminItemPut: async (itemId: number, name: string, rare: number, image: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling adminItemPut.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling adminItemPut.');
            }
            // verify required parameter 'rare' is not null or undefined
            if (rare === null || rare === undefined) {
                throw new RequiredError('rare','Required parameter rare was null or undefined when calling adminItemPut.');
            }
            // verify required parameter 'image' is not null or undefined
            if (image === null || image === undefined) {
                throw new RequiredError('image','Required parameter image was null or undefined when calling adminItemPut.');
            }
            const localVarPath = `/admin/item`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required

            if (itemId !== undefined) {
                localVarQueryParameter['item_id'] = itemId;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (rare !== undefined) {
                localVarQueryParameter['rare'] = rare;
            }

            if (image !== undefined) {
                localVarQueryParameter['image'] = image;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 画像のアップロード
         * @param {Blob} file 
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminUploadPostForm: async (file: Blob, name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            if (file === null || file === undefined) {
                throw new RequiredError('file','Required parameter file was null or undefined when calling adminUploadPostForm.');
            }
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling adminUploadPostForm.');
            }
            const localVarPath = `/admin/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication jwt required


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }

            if (name !== undefined) { 
                localVarFormParams.append('name', name as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * ユーザー認証
         * @summary ユーザー認証
         * @param {PasswordObject} body 
         * @param {string} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authUserIdPost: async (body: PasswordObject, userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling authUserIdPost.');
            }
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling authUserIdPost.');
            }
            const localVarPath = `/admin/auth/{user_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'text/plain';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * パスワードをハッシュ化します
         * @summary パスワードをハッシュ化します
         * @param {string} source パスワード
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bcryptGet: async (source: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'source' is not null or undefined
            if (source === null || source === undefined) {
                throw new RequiredError('source','Required parameter source was null or undefined when calling bcryptGet.');
            }
            const localVarPath = `/admin/bcrypt`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (source !== undefined) {
                localVarQueryParameter['source'] = source;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * ガチャにて排出される全アイテムのリスト
         * @summary ガチャリスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gachaGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/backend/gacha`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * ガチャアイテム
         * @summary ガチャアイテム
         * @param {number} itemId ガチャID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gachaItemIdGet: async (itemId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling gachaItemIdGet.');
            }
            const localVarPath = `/backend/gacha/{ItemId}`
                .replace(`{${"ItemId"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * ランダムなガチャアイテム
         * @summary ランダムなガチャアイテム
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        randomGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/backend/gacha/random/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 指定されたIdの画像を返却します
         * @summary 画像
         * @param {number} pictId 取得したい画像の連番ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        staticPictIdGet: async (pictId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pictId' is not null or undefined
            if (pictId === null || pictId === undefined) {
                throw new RequiredError('pictId','Required parameter pictId was null or undefined when calling staticPictIdGet.');
            }
            const localVarPath = `/backend/static/{PictId}`
                .replace(`{${"PictId"}}`, encodeURIComponent(String(pictId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * アイテムの追加
         * @param {string} name アイテム名
         * @param {number} rare レアリティ
         * @param {string} [image] 画像ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adminItemPost(name: string, rare: number, image?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GachaItem>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).adminItemPost(name, rare, image, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * アイテムの編集
         * @param {number} itemId ID
         * @param {string} name アイテム名
         * @param {number} rare レアリティ
         * @param {string} image 画像ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adminItemPut(itemId: number, name: string, rare: number, image: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).adminItemPut(itemId, name, rare, image, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 画像のアップロード
         * @param {Blob} file 
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adminUploadPostForm(file: Blob, name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GachaItem>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).adminUploadPostForm(file, name, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * ユーザー認証
         * @summary ユーザー認証
         * @param {PasswordObject} body 
         * @param {string} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authUserIdPost(body: PasswordObject, userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).authUserIdPost(body, userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * パスワードをハッシュ化します
         * @summary パスワードをハッシュ化します
         * @param {string} source パスワード
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bcryptGet(source: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).bcryptGet(source, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * ガチャにて排出される全アイテムのリスト
         * @summary ガチャリスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gachaGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GachaItem>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).gachaGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * ガチャアイテム
         * @summary ガチャアイテム
         * @param {number} itemId ガチャID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gachaItemIdGet(itemId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GachaList>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).gachaItemIdGet(itemId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * ランダムなガチャアイテム
         * @summary ランダムなガチャアイテム
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async randomGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GachaItem>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).randomGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 指定されたIdの画像を返却します
         * @summary 画像
         * @param {number} pictId 取得したい画像の連番ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async staticPictIdGet(pictId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Blob>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).staticPictIdGet(pictId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * アイテムの追加
         * @param {string} name アイテム名
         * @param {number} rare レアリティ
         * @param {string} [image] 画像ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adminItemPost(name: string, rare: number, image?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<GachaItem>> {
            return DefaultApiFp(configuration).adminItemPost(name, rare, image, options).then((request) => request(axios, basePath));
        },
        /**
         * アイテムの編集
         * @param {number} itemId ID
         * @param {string} name アイテム名
         * @param {number} rare レアリティ
         * @param {string} image 画像ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adminItemPut(itemId: number, name: string, rare: number, image: string, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return DefaultApiFp(configuration).adminItemPut(itemId, name, rare, image, options).then((request) => request(axios, basePath));
        },
        /**
         * 画像のアップロード
         * @param {Blob} file 
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adminUploadPostForm(file: Blob, name: string, options?: AxiosRequestConfig): Promise<AxiosResponse<GachaItem>> {
            return DefaultApiFp(configuration).adminUploadPostForm(file, name, options).then((request) => request(axios, basePath));
        },
        /**
         * ユーザー認証
         * @summary ユーザー認証
         * @param {PasswordObject} body 
         * @param {string} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authUserIdPost(body: PasswordObject, userId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return DefaultApiFp(configuration).authUserIdPost(body, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * パスワードをハッシュ化します
         * @summary パスワードをハッシュ化します
         * @param {string} source パスワード
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bcryptGet(source: string, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return DefaultApiFp(configuration).bcryptGet(source, options).then((request) => request(axios, basePath));
        },
        /**
         * ガチャにて排出される全アイテムのリスト
         * @summary ガチャリスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gachaGet(options?: AxiosRequestConfig): Promise<AxiosResponse<GachaItem>> {
            return DefaultApiFp(configuration).gachaGet(options).then((request) => request(axios, basePath));
        },
        /**
         * ガチャアイテム
         * @summary ガチャアイテム
         * @param {number} itemId ガチャID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gachaItemIdGet(itemId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<GachaList>> {
            return DefaultApiFp(configuration).gachaItemIdGet(itemId, options).then((request) => request(axios, basePath));
        },
        /**
         * ランダムなガチャアイテム
         * @summary ランダムなガチャアイテム
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async randomGet(options?: AxiosRequestConfig): Promise<AxiosResponse<GachaItem>> {
            return DefaultApiFp(configuration).randomGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 指定されたIdの画像を返却します
         * @summary 画像
         * @param {number} pictId 取得したい画像の連番ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async staticPictIdGet(pictId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Blob>> {
            return DefaultApiFp(configuration).staticPictIdGet(pictId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * アイテムの追加
     * @param {string} name アイテム名
     * @param {number} rare レアリティ
     * @param {string} [image] 画像ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async adminItemPost(name: string, rare: number, image?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<GachaItem>> {
        return DefaultApiFp(this.configuration).adminItemPost(name, rare, image, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * アイテムの編集
     * @param {number} itemId ID
     * @param {string} name アイテム名
     * @param {number} rare レアリティ
     * @param {string} image 画像ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async adminItemPut(itemId: number, name: string, rare: number, image: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return DefaultApiFp(this.configuration).adminItemPut(itemId, name, rare, image, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 画像のアップロード
     * @param {Blob} file 
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async adminUploadPostForm(file: Blob, name: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<GachaItem>> {
        return DefaultApiFp(this.configuration).adminUploadPostForm(file, name, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * ユーザー認証
     * @summary ユーザー認証
     * @param {PasswordObject} body 
     * @param {string} userId ユーザーID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async authUserIdPost(body: PasswordObject, userId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return DefaultApiFp(this.configuration).authUserIdPost(body, userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * パスワードをハッシュ化します
     * @summary パスワードをハッシュ化します
     * @param {string} source パスワード
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async bcryptGet(source: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return DefaultApiFp(this.configuration).bcryptGet(source, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * ガチャにて排出される全アイテムのリスト
     * @summary ガチャリスト
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async gachaGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<GachaItem>> {
        return DefaultApiFp(this.configuration).gachaGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * ガチャアイテム
     * @summary ガチャアイテム
     * @param {number} itemId ガチャID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async gachaItemIdGet(itemId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<GachaList>> {
        return DefaultApiFp(this.configuration).gachaItemIdGet(itemId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * ランダムなガチャアイテム
     * @summary ランダムなガチャアイテム
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async randomGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<GachaItem>> {
        return DefaultApiFp(this.configuration).randomGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 指定されたIdの画像を返却します
     * @summary 画像
     * @param {number} pictId 取得したい画像の連番ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async staticPictIdGet(pictId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Blob>> {
        return DefaultApiFp(this.configuration).staticPictIdGet(pictId, options).then((request) => request(this.axios, this.basePath));
    }
}
