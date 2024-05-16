import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate,
} from "microcms-js-sdk";

//素材の型定義
export type Sozai = {
    id: string;
    name: string;
    material: MicroCMSImage;
    tags: Tag[];
    category: Category[];
} & MicroCMSDate;

//タグの型定義
export type Tag = {
    id: string;
    name: string;
    engname: string
} & MicroCMSDate;

//カテゴリーの型定義
export type Category = {
    id: string;
    image: MicroCMSImage;
    name: string;
    engname: string;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// 素材一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Sozai>({
        customRequestInit: {
            cache: "no-store"
        },
        endpoint: "materials",
        queries,
    });

    return listData;
};

//カテゴリ一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Category>({
        endpoint: "categories",
        customRequestInit: {
            next: {
                revalidate: 0,
            },
        },
        queries,
    });

    return listData;
};

//タグ一覧を取得
export const getTagList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Tag>({
        endpoint: "tags",
        customRequestInit: {
            next: {
                revalidate: 0,
            },
        },
        queries,
    });

    return listData;
};

// 素材の詳細を取得
export const getSozaiDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Sozai>({
        endpoint: "materials",
        contentId,
        queries,
    });

    return detailData;
};